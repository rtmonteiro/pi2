using dotnet.Data.Models;
using dotnet.Identity.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace dotnet.API.Data;

public class ClinicaContext(DbContextOptions<IdentityContext> options,
    IOptions<DataBaseSettings> industrialDebaseSettings):DbContext(options)
{
    private readonly string _connect = industrialDebaseSettings.Value.ConnectionString;
    

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_connect);
    }
}