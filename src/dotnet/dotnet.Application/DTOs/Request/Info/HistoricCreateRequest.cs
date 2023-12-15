using System.ComponentModel.DataAnnotations;
using dotnet.Application.DTOs.Request.Info.HistoricType;
using dotnet.Application.DTOs.Request.Info.InfoType;
using dotnet.Application.Enums;

namespace dotnet.Application.DTOs.Request.Info;

public class HistoricCreateRequest
{

    public DateTime RegisterDate { get; set; }
    
    public TypeInfo TypeInfo { get; set; }
    
    public InfoEntryCreateRequest? InfoEntry { get; set; }
    
    public InfoExitCreateRequest? InfoExit { get; set; }
}