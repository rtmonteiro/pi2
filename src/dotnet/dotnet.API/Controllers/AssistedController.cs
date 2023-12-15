using AutoMapper;
using dotnet.API.Services;
using dotnet.Application.DTOs.Request.Assisted;
using dotnet.Application.DTOs.Request.DocumentRequest;
using dotnet.Application.DTOs.Request.General;
using dotnet.Application.DTOs.Request.Info;
using dotnet.Application.DTOs.Response.Assisted;
using dotnet.Application.DTOs.Response.GetAssisted;
using dotnet.Application.Models;
using dotnet.Application.Models.Info;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace dotnet.API.Controllers;


[ApiController]
[Route("[controller]")]
[EnableCors]
public class AssistedController(AssistedService assistedService,
    HistoricService historicService,IMapper mapper) : ControllerBase
{
    [HttpPost]
    public async Task<IActionResult> Create(AssistedCreateRequest userRegister)
    {
        var assisted = mapper.Map<Assisted>(userRegister);
        if (userRegister.ParentId != null)
        {
            var parent = await assistedService.GetAsyncTracked((long)userRegister.ParentId);
            if (parent is null) return NotFound();
            assisted.Parent = parent;
        }
        assisted = await assistedService.Create(assisted);
        return Ok(assisted);
    }

    [HttpPost("AddInfo/{id}")]
    public async Task<IActionResult> AddInfo(long id,[FromBody]HistoricCreateRequest historicCreateRequest)
    {
        
        var assisted = await assistedService.GetAsyncTracked(id);
        if (assisted is null) return NotFound();
        var historic = mapper.Map<Historic>(historicCreateRequest);
        historic.RegisterDate = DateTime.Now;
        assisted.Historics.Add(historic);
        await assistedService.UpdateAsync(assisted);
        return Ok(assisted);
    }

    [HttpGet("{id}")]
    public async Task<AssistedGetResponse> GetAssisted(long id)
    {
        var assisted = await assistedService.GetAsync(id);
        var assistedResponse = mapper.Map<AssistedGetResponse>(assisted);
        return assistedResponse;
    }

    [HttpGet]
    public async Task<List<AssistedListResponse>> GetAssisted([FromQuery]FilterListAssistRequest filter)
    {
        return mapper.Map<List<Assisted>,List<AssistedListResponse>>(await assistedService.GetAsync(filter));
    }
}