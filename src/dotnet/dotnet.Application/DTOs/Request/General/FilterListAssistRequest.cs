using dotnet.Application.Enums;

namespace dotnet.Application.DTOs.Request.General;

public class FilterListAssistRequest
{
    public bool? Status { get; set; }
    
    public string? Name { get; set; }
    
    public Gender? Gender { get; set; }
}