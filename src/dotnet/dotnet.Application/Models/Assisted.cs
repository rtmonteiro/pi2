using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;

namespace dotnet.Application.Models;

public class Assisted
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
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
    
    public string? Gender { get; set; }
    
    public string? Nationality { get; set; }
    
    public Assisted? Parent { get; set; }
    
    public Address Address { get; set; } = null!;

    public List<Document>? Documents { get; set; }
    
    [DefaultValue(false)]
    public bool IsDeleted { get; set; }
    
}