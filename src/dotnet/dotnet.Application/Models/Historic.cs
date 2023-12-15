using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using dotnet.Application.Enums;

namespace dotnet.Application.Models;

public class Historic
{
    [Required] public Assisted Assisted { get; set; } = null!;
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public DateTime RegisterDate { get; set; }
    
    public TypeInfo TypeInfo { get; set; }
    
}