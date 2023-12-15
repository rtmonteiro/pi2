using System.Security.Claims;
using dotnet.Application.DTOs.Request.ApplicationUser;
using dotnet.Application.DTOs.Response.ApplicationUser;
using dotnet.Application.Models;
using Microsoft.AspNetCore.Identity;

namespace dotnet.Application.Interfaces;

public interface IIdentityService
{
    Task<UserRegisterResponse> RegisterUser(UserRegisterRequest userRegister);

    Task<UserLoginResponse> LoginUser(UserLoginRequest userRegister);
    
    Task<IdentityResult> UpdateUser(ApplicationUser user,UserRegisterRequest userLogin);

    public Task<List<ApplicationUser>> GetAsync();

    public Task<ApplicationUser> GetAsync(ClaimsPrincipal userId);
    public Task<ApplicationUser> GetAsyncEmail(String email);
    
    public Task<ApplicationUser?> GetAsync(string userId);

    public Task RemoveAsync(ClaimsPrincipal userId);
    
    public Task RemoveAsync(ApplicationUser userId);
}