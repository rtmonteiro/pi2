using dotnet.API.Data;
using dotnet.Application.Models;
using Industriall.API.Services;
using Microsoft.EntityFrameworkCore;

namespace dotnet.API.Services;

public class HistoricService(CAContext context) : Service<Historic>(context)
{
    public override Task<List<Historic>> GetAsync()
    {
        throw new NotImplementedException();
    }
    
    

    public override Task<Historic?> GetAsync(long id)
    {
        throw new NotImplementedException();
    }
    

    public override Task<Historic?> GetAsyncTracked(long id)
    {
        throw new NotImplementedException();
    }

    public override Task RemoveAsync(Historic item)
    {
        throw new NotImplementedException();
    }
}