using dotnet.Application.Models;
using dotnet.Application.Models.Info;
using dotnet.Data.Models;
using dotnet.Identity.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace dotnet.API.Data;

public class CAContext(DbContextOptions<CAContext> options,
    IOptions<DataBaseSettings> clinicaDebaseSettings):DbContext(options)
{
    private readonly string _connect = clinicaDebaseSettings.Value.ConnectionString;
    
    public DbSet<Assisted> Assisteds { get; set; }
    
    public DbSet<Document> Documents { get; set; }
    
    public DbSet<Historic> Historics { get; set; }
    
    public DbSet<InfoEntry> InfosEntry { get; set; }
    
    public DbSet<InfoExit> InfosExit { get; set; }
    

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_connect);
    }
}