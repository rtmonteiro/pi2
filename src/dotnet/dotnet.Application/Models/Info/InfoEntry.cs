using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet.Application.Models.Info;

public class InfoEntry
{
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public long Id { get; set; }
    
    public string PhoneNumber { get; set; }
    
    public string ContactNumber { get; set; }
    
    public string EducationLevel { get; set; }
    
    public string Occupation { get; set; }
    
    public string SearchReason { get; set; }
    
    public string ResponsibleName  { get; set; }
    
    public string FinencialAssistence  { get; set; }
    
    [Column(TypeName = "BYTEA")]
    public byte[] FaceFrontPhoto { get; set; }
    
    [Column(TypeName = "BYTEA")]
    public byte[] FaceLeftPhoto { get; set; }
    
    [Column(TypeName = "BYTEA")]
    public byte[] FaceRightPhoto { get; set; }
    
    [Column(TypeName = "BYTEA")]
    public byte[] FullBodyPhoto { get; set; }
    
}