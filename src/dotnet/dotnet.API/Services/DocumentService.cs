using dotnet.API.Data;
using dotnet.Application.Models;
using Industriall.API.Services;
using Microsoft.EntityFrameworkCore;

namespace dotnet.API.Services;

public class DocumentService(CAContext context): Service<Document>(context)
{
    public override Task<List<Document>> GetAsync()
    {
        return context.Documents.AsNoTracking().ToListAsync();
    }

    public override Task<Document?> GetAsync(long id)
    {
        return context.Documents.AsNoTracking().FirstOrDefaultAsync(x => x.Id == id);
    }

    public override Task<Document?> GetAsyncTracked(long id)
    {
        return context.Documents.FirstOrDefaultAsync(x => x.Id == id);
    }

    public override async Task RemoveAsync(Document item)
    {
        item.IsDeleted = true;
        context.Documents.Update(item);
        await context.SaveChangesAsync();
    }
}