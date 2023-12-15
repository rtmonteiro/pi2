using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using dotnet.Application.Enums;

namespace dotnet.Application.Models;

public class Document
{

    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public TypeDoc Type { get; set; }
    
    public string Value { get; set; }

    public string Name{ get; set; }
    
    [DefaultValue(false)]
    public bool IsDeleted { get; set; }

}