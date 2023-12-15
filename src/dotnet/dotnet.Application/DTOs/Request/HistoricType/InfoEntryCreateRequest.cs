namespace dotnet.Application.DTOs.Request.HistoricType;

public class InfoEntryCreateRequest
{
    public long HistoricId { get; set; }
    
    public string PhoneNumber { get; set; }
    
    public string ContactNumber { get; set; }
    
    public string EducationLevel { get; set; }
    
    public string Occupation { get; set; }
    
    public string SearchReason { get; set; }
    
    public string ResponsibleName  { get; set; }
    
    public byte[] FaceFrontPhoto { get; set; }
    
    public byte[] FaceLeftPhoto { get; set; }
    
    public byte[] FaceRightPhoto { get; set; }
    
    public byte[] FullBodyPhoto { get; set; }
}