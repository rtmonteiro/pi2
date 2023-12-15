using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet.Application.Models.Info;

public class InfoHealth
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public byte[] prescription { get; set; }
    
    public string Medication { get; set; }
}