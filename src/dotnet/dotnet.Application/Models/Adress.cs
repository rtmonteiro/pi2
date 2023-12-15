using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet.Application.Models;

public class Address
{
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string CEP { get; set; }
    public string? Country { get; set; }
}