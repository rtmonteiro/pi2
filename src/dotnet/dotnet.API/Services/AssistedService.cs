using dotnet.API.Data;
using dotnet.Application.Models;
using Industriall.API.Services;
using Microsoft.EntityFrameworkCore;

namespace dotnet.API.Services;

public class AssistedService(CAContext context) : Service<Assisted>(context)
{
    public override async Task<List<Assisted>> GetAsync()
    {
        return await context.Assisteds.AsNoTracking().ToListAsync();
    }

    public override async Task<Assisted?> GetAsync(long id)
    {
        return await context.Assisteds.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
    }
    
    public override async Task<Assisted?> GetAsyncTracked(long id)
    {
        return await context.Assisteds.FirstOrDefaultAsync(x => x.Id == id);
    }

    public override async Task RemoveAsync(Assisted assisted)
    {
        assisted.IsDeleted = true;
        context.Assisteds.Update(assisted);
        await context.SaveChangesAsync();
    }
}