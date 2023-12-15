using System.Security.Claims;
using dotnet.Application.DTOs.Request.ApplicationUser;
using dotnet.Application.DTOs.Response.ApplicationUser;
using dotnet.Application.Interfaces;
using dotnet.Identity.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace dotnet.API.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController(IIdentityService clinicaIdentityService) : ControllerBase
{
    [HttpPost("cadastro")]
    public async Task<ActionResult<UserRegisterResponse>> Register(UserRegisterRequest userRegister)
    {
        if (!ModelState.IsValid)
            return BadRequest();
        var result = await clinicaIdentityService.RegisterUser(userRegister);
        if (result.Sucess)
            return Ok(result);
        if (result.Errors.Any()) return BadRequest(result);

        return StatusCode(StatusCodes.Status500InternalServerError);
    }

    [HttpPost("login")]
    public async Task<ActionResult<UserLoginResponse>> Login(UserLoginRequest userLogin)
    {
        if (!ModelState.IsValid)
            return BadRequest();
        var result = await clinicaIdentityService.LoginUser(userLogin);
        
        if (result.Success)
        {
            var cookieOptions = new CookieOptions
            {
                HttpOnly = true,
                Expires = DateTime.Now.AddMinutes(30)
            };
            Response.Cookies.Append("ClinicaLogin", result.AccessToken, cookieOptions);
            return Ok(result);

        }
        return Unauthorized(result);
    }


    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        return Ok(await clinicaIdentityService.GetAsync());
    }

    [HttpGet("current")]
    [Authorize]
    public async Task<IActionResult> GetUser()
    {
        return Ok(await clinicaIdentityService.GetAsync(User));
    }

    [HttpDelete("delete")]
    [Authorize]
    public async Task<IActionResult> DeleteUser()
    {
        var user = HttpContext.User;
        if (!user.Claims.Any()) return BadRequest();
        await clinicaIdentityService.RemoveAsync(HttpContext.User);
        return NoContent();
    }
    
    [HttpPost("Logout")]
    [Authorize]
    public async Task<IActionResult> LogoutUser()
    {
        await clinicaIdentityService.LogoutUser();
        return NoContent();
    }
    
}