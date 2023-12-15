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
    public async Task<IActionResult> GetUser()
    {
        return Ok(await clinicaIdentityService.GetAsync(User));
    }

    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> DeleteUser([FromRoute]string id)
    {
        var user = await clinicaIdentityService.GetAsync(id);
        if (user is null) return BadRequest();
        await clinicaIdentityService.RemoveAsync(user);
        return NoContent();
    }
    
    [HttpPut]
    public async Task<IActionResult> UpdateUser(UserRegisterRequest u)
    {
        var user = await clinicaIdentityService.GetAsyncEmail(u.Email);
        await clinicaIdentityService.UpdateUser(user, u);
        return NoContent();
    }
    
}