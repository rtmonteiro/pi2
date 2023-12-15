namespace dotnet.Application.DTOs.Request.Info.InfoType;

public class InfoEntryCreateRequest
{
    public string? PhoneNumber { get; set; }
    
    public string? ContactNumber { get; set; }
    
    public string? EducationLevel { get; set; }
    
    public string? Occupation { get; set; }
    
    public string? SearchReason { get; set; }
    
    public string? ResponsibleName  { get; set; }
    
    public string? FinencialAssistence  { get; set; }
    
    public byte[]? FaceFrontPhoto { get; set; }
    
    public byte[]? FaceLeftPhoto { get; set; }
    
    public byte[]? FaceRightPhoto { get; set; }
    
    public byte[]? FullBodyPhoto { get; set; }
}