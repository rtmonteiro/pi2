using System.Security.Claims;
using dotnet.Application.DTOs.Request.ApplicationUser;
using dotnet.Application.DTOs.Response.ApplicationUser;
using dotnet.Application.Models;

namespace dotnet.Application.Interfaces;

public interface IIdentityService
{
    Task<UserRegisterResponse> RegisterUser(UserRegisterRequest userRegister);

    Task<UserLoginResponse> LoginUser(UserLoginRequest userRegister);
    
    Task LogoutUser();

    public Task<List<ApplicationUser>> GetAsync();

    public Task<ApplicationUser> GetAsync(ClaimsPrincipal userId);

    public Task RemoveAsync(ClaimsPrincipal userId);
}