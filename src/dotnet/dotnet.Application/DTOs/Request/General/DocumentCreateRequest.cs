using System.ComponentModel;
using dotnet.Application.Enums;

namespace dotnet.Application.DTOs.Request.DocumentRequest;

public class DocumentCreateRequest
{
    public TypeDoc Type { get; set; }
    
    public string Value { get; set; }

    public string Name{ get; set; }
    
    [DefaultValue(false)]
    public bool IsDeleted { get; set; }
}