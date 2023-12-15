using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using dotnet.Application.Enums;
using dotnet.Application.Models.Info;

namespace dotnet.Application.Models;

public class Historic
{
    
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }

    public DateTime RegisterDate { get; set; }
    
    public TypeInfo TypeInfo { get; set; }
    
    public virtual InfoEntry? InfoEntry { get; set; }
    
    public virtual InfoExit? InfoExit { get; set; }
    
}