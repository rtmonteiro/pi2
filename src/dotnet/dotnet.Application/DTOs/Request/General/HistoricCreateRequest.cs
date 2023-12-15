using System.ComponentModel.DataAnnotations;
using dotnet.Application.Enums;

namespace dotnet.Application.DTOs.Request.General;

public class HistoricCreateRequest
{
    [Required]
    public Models.Assisted? Assisted { get; set; }

    public DateTime RegisterDate { get; set; }
    
    public TypeInfo TypeInfo { get; set; }
}