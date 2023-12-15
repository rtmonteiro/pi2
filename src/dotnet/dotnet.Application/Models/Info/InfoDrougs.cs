using System.ComponentModel.DataAnnotations.Schema;
using System.Globalization;

namespace dotnet.Application.Models.Info;

public class InfoDrougs
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public string name { get; set; }

    private DateTime _date;
    public string? Time
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