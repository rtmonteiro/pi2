using dotnet.Application.DTOs.Request.ApplicationUser;
using dotnet.Application.DTOs.Response.ApplicationUser;
using dotnet.Identity.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace dotnet.API.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController(IdentityService identityService) : ControllerBase
{
    [HttpPost("cadastro")]
    public async Task<ActionResult<UserRegisterResponse>> Register(UserRegisterRequest userRegister)
    {
        if (!ModelState.IsValid)
            return BadRequest();
        var result = await identityService.RegisterUser(userRegister);
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
        var result = await identityService.LoginUser(userLogin);
        if (result.Success)
            return Ok(result);
        return Unauthorized(result);
    }


    [HttpGet]
    public async Task<IActionResult> GetUsers()
    {
        return Ok(await identityService.GetAsync());
    }

    [HttpGet("current")]
    [Authorize]
    public async Task<IActionResult> GetUser()
    {
        var user = HttpContext.User;
        return Ok(await identityService.GetAsync(HttpContext.User));
    }

    [HttpDelete("delete")]
    [Authorize]
    public async Task<IActionResult> DeleteUser()
    {
        var user = HttpContext.User;
        if (!user.Claims.Any()) return BadRequest();
        await identityService.RemoveAsync(HttpContext.User);
        return NoContent();
    }
}