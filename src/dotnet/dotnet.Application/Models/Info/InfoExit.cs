using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet.Application.Models.Info;

public class InfoExit
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public string Reason { get; set; }
    
    public string PersonContacted { get; set; }
    
    public bool isDropout { get; set; }
}