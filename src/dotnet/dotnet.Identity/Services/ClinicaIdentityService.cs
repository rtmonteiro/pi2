using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using dotnet.Application.DTOs.Request.ApplicationUser;
using dotnet.Application.DTOs.Response.ApplicationUser;
using dotnet.Application.Interfaces;
using dotnet.Application.Models;
using dotnet.Identity.Configurations;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;

namespace dotnet.Identity.Services;

public class ClinicaIdentityService(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager,
    IOptions<JwtOptions> jwtOptions) : IIdentityService
{
    private readonly JwtOptions _jwtOptions = jwtOptions.Value;

    public async Task<List<ApplicationUser>> GetAsync()
    {
        return await userManager.Users.ToListAsync();
    }

    public async Task<ApplicationUser> GetAsync(ClaimsPrincipal userId)
    {
        return (await userManager.GetUserAsync(userId))!;
    }

    public async Task RemoveAsync(ClaimsPrincipal userId)
    {
        var user = await GetAsync(userId);
        await userManager.DeleteAsync(user);
    }

    public async Task<UserRegisterResponse> RegisterUser(UserRegisterRequest userRegister)
    {
        var identityUser = new ApplicationUser
        {
            UserName = userRegister.Email,
            Email = userRegister.Email,
            EmailConfirmed = true
        };

        var result = await userManager.CreateAsync(identityUser, userRegister.Password!);

        if (result.Succeeded)
            await userManager.SetLockoutEnabledAsync(identityUser, false);

        var userRegisterResponse = new UserRegisterResponse(result.Succeeded);

        if (!result.Succeeded && result.Errors.Any())
            userRegisterResponse.AddErrors(result.Errors.Select(r => r.Description));

        return userRegisterResponse;
    }

    public async Task<UserLoginResponse> LoginUser(UserLoginRequest userLogin)
    {
        var result = await signInManager.PasswordSignInAsync(userLogin.Email, userLogin.Password, false, true);
        if (result.Succeeded)
            return await GenerateCredentials(userLogin.Email);

        var userLoginResponse = new UserLoginResponse(result.Succeeded);
        if (!result.Succeeded)
        {
            if (result.IsLockedOut)
                userLoginResponse.AddError("Essa conta está bloqueada");
            else if (result.IsNotAllowed)
                userLoginResponse.AddError("Essa conta não tem permissão para fazer login");
            else if (result.RequiresTwoFactor)
                userLoginResponse.AddError("É necessario confirmar o login no seu e-mail");
            else
                userLoginResponse.AddError("Usuário ou senha estão incorretos");
        }
        return userLoginResponse;
    }
    
    public async Task LogoutUser( )
    {
         await signInManager.SignOutAsync();
         
    }

    private async Task<UserLoginResponse> GenerateCredentials(string email)
    {
        var user = await userManager.FindByEmailAsync(email);
        var accessTokenClaims = await GetClaims(user!, true);
        var refreshTokenClaims = await GetClaims(user!, false);

        var dateExpirationAccessToken = DateTime.Now.AddSeconds(_jwtOptions.AccessTokenExpiration);
        var dateExpirationRefreshToken = DateTime.Now.AddSeconds(_jwtOptions.RefreshTokenExpiration);

        var accessToken = TokenGenerate(accessTokenClaims, dateExpirationAccessToken);
        var refreshToken = TokenGenerate(refreshTokenClaims, dateExpirationRefreshToken);

        return new UserLoginResponse
        (
            true,
            accessToken,
            refreshToken
        );
    }

    private string TokenGenerate(IEnumerable<Claim> claims, DateTime dataExpiracao)
    {
        var jwt = new JwtSecurityToken(
            _jwtOptions.Issuer,
            _jwtOptions.Audience,
            claims,
            DateTime.Now,
            dataExpiracao,
            _jwtOptions.SigningCredentials);

        return new JwtSecurityTokenHandler().WriteToken(jwt);
    }

    private async Task<IList<Claim>> GetClaims(ApplicationUser user, bool adicionarClaimsUsuario)
    {
        var claims = await userManager.GetClaimsAsync(user);
        
        claims.Add(new Claim(JwtRegisteredClaimNames.Sub, user.Id));
        claims.Add(new Claim(JwtRegisteredClaimNames.Email, user.Email!));
        claims.Add(new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()));
        claims.Add(new Claim(JwtRegisteredClaimNames.Nbf, DateTime.Now.ToString()));
        claims.Add(new Claim(JwtRegisteredClaimNames.Iat, DateTime.Now.ToString()));

        if (!adicionarClaimsUsuario) return claims;
        var userClaims = await userManager.GetClaimsAsync(user);
        foreach (var claim in userClaims) claims.Add(claim);
        var roles = await userManager.GetRolesAsync(user);
        foreach (var role in roles) claims.Add(new Claim("role", role));

        return claims;
    }
}