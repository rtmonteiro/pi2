using System.Globalization;
using dotnet.Application.DTOs.Request.DocumentRequest;
using dotnet.Application.Enums;
using dotnet.Application.Models;

namespace dotnet.Application.DTOs.Response.Assisted;

public class AssistedGetResponse
{
    
    public required string Name { get; set; }
    
    public string? Mother { get; set; }
    
    public string? Father { get; set; }
    
    private DateTime _date;
    
    public string? BirthDate
    {
        get => _date.ToString("dd/MM/yyyy");
        set
        {
            if (DateTime.TryParseExact(value, "dd/MM/yyyy", null, DateTimeStyles.None, out var parsedDate))
                _date = parsedDate;
            else
                throw new ArgumentException("Formato de data inválido. Use o formato 'dd/MM/yyyy'.");
        }
    }
    
    public Gender? Gender { get; set; }
    
    public string? Nationality { get; set; }
    
    public AddressGetResponse Address { get; set; } = null!;

    public List<DocumentGetResponse>? Documents { get; set; }

    public long? ParentId { get; set; }
    
    public List<Historic>? Historics { get; set; }

}