using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;
using dotnet.Application.Enums;

namespace dotnet.Application.Models.Info;

public class InfoGeneral
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public TypeGeneralInfo TypeInfo { get; set; }

    public string Value { get; set; }
    
    private DateTime _date;
    public string? Date
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
}