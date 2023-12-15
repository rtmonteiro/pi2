namespace dotnet.Application.DTOs.Request.Info.HistoricType;

public class InfoExitCreateRequest
{
        
    public string Reason { get; set; }
    
    public string PersonContacted { get; set; }
    
    public bool isDropout { get; set; }
}