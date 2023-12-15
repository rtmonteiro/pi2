using AutoMapper;
using dotnet.API.Services;
using dotnet.Application.DTOs.Request.Assisted;
using dotnet.Application.DTOs.Request.DocumentRequest;
using dotnet.Application.Models;
using Microsoft.AspNetCore.Mvc;

namespace dotnet.API.Controllers;


[ApiController]
[Route("[controller]")]
public class AssistedController(AssistedService assistedService,
    AddressService addressService,IMapper mapper) : ControllerBase
{
    [HttpPost("Create")]
    public async Task<IActionResult> Create(AssistedCreateRequest userRegister)
    {
        var assisted = mapper.Map<Assisted>(userRegister);
        if (userRegister.ParentId != null)
        {
            var parent = await assistedService.GetAsyncTracked((long)userRegister.ParentId);
            if (parent is null) return NotFound();
            assisted.Parent = parent;
        }
        await assistedService.CreateAsync(assisted);
        return Ok(assisted);
    }

    [HttpPost("AddInfo/$id")]
    public async Task<IActionResult> AddInfo(long id)
    {
        var assisted = await assistedService.GetAsyncTracked(id);
        if (assisted is null) return NotFound();
        return Ok();
    }
}