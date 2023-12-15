using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet.Application.Models.Info;

public class InfoEntry : Historic
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public string PhoneNumber { get; set; }
    
    public string ContactNumber { get; set; }
    
    public string EducationLevel { get; set; }
    
    public string Occupation { get; set; }
    
    public string SearchReason { get; set; }
    
    public string ResponsibleName  { get; set; }
    
    [Column(TypeName = "image")]
    public byte[] FaceFrontPhoto { get; set; }
    
    [Column(TypeName = "image")]
    public byte[] FaceLeftPhoto { get; set; }
    
    [Column(TypeName = "image")]
    public byte[] FaceRightPhoto { get; set; }
    
    [Column(TypeName = "image")]
    public byte[] FullBodyPhoto { get; set; }
    
    public Historic? Historic { get; set; }
}