using dotnet.API.Data;
using dotnet.Application.Models;
using Industriall.API.Services;

namespace dotnet.API.Services;

public class AddressService(CAContext context) : Service<Address>(context)
{
    public override Task<List<Address>> GetAsync()
    {
        throw new NotImplementedException();
    }

    public override Task<Address?> GetAsync(long id)
    {
        throw new NotImplementedException();
    }

    public override Task<Address?> GetAsyncTracked(long id)
    {
        throw new NotImplementedException();
    }

    public override Task RemoveAsync(Address item)
    {
        throw new NotImplementedException();
    }
}