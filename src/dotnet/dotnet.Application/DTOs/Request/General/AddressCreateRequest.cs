namespace dotnet.Application.DTOs.Request.DocumentRequest;

public class AddressCreateRequest
{
    public string Street { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string CEP { get; set; }
    public string? Country { get; set; }
}