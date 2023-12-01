using dotnet.Data.Models;
using dotnet.Application.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace dotnet.Identity.Data;

public class IdentityContext(DbContextOptions<IdentityContext> options,
    IOptions<DataBaseSettings> industrialDebaseSettings) : IdentityDbContext<ApplicationUser>(options)
{
    private readonly string _connect = industrialDebaseSettings.Value.ConnectionString;


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_connect);
    }
}