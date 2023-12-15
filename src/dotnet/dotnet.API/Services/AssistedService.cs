using dotnet.API.Data;
using dotnet.Application.DTOs.Request.General;
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
    
    public async Task<List<Assisted>> GetAsync(FilterListAssistRequest filterListAssistRequest)
    {
        var query = context.Assisteds.AsNoTracking();
        if (filterListAssistRequest.Name != null)
            query = query.Where(a => EF.Functions.Like(a.Name, $"%{filterListAssistRequest.Name}%"));
        
        if (filterListAssistRequest.Gender != null)
            query = query.Where(a => a.Gender == filterListAssistRequest.Gender);
        
        if (filterListAssistRequest.Status != null)
            query = query.Where(a => a.IsDeleted == filterListAssistRequest.Status);
        
        return await query.ToListAsync();
    }

    public async Task<Assisted> Create(Assisted a)
    {
        var assisted = await context.Assisteds.AddAsync(a);
        await context.SaveChangesAsync();

        return assisted.Entity;
    }

    public override async Task<Assisted?> GetAsync(long id)
    {
        return await context.Assisteds.Include(a =>a.Address).Include(a=>a.Documents)
            .Include(a=>a.Historics).ThenInclude(h => h.InfoEntry)
            .Include(a=>a.Historics).ThenInclude(h => h.InfoExit)
            .AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
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