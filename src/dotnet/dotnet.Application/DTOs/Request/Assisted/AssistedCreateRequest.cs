using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using dotnet.Application.DTOs.Request.General;
using dotnet.Application.Enums;
using dotnet.Application.Models;


namespace dotnet.Application.DTOs.Request.Assisted;

public class AssistedCreateRequest
{
    
    [Required(ErrorMessage = "O nome do acolhido é obrigatório")]
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
    
    [Required(ErrorMessage = "O sexo do acolhido é obrigatório.")]
    public Gender? Gender { get; set; }
    
    public string? Nationality { get; set; }
    
    [Required(ErrorMessage = "O endereço do acolhido é obrigatório.")]
    public AddressCreateRequest Address { get; set; } = null!;

    public List<DocumentCreateRequest>? Documents { get; set; }

    public long? ParentId { get; set; }

}