using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using dotnet.API.Data;
using dotnet.API.Extensions;
using dotnet.API.Services;
using dotnet.Application.DTOs.Request.Assisted;
using dotnet.Application.Interfaces;
using dotnet.Application.Models;
using dotnet.Data.Models;
using dotnet.Identity.Configurations;
using dotnet.Identity.Data;
using dotnet.Identity.Services;
using Microsoft.AspNetCore.Identity;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.Configure<DataBaseSettings>(
    builder.Configuration.GetSection("ClinicaDatabaseSettings"));

builder.Services.AddAuthentication(builder.Configuration);
builder.Services.AddAuthorizationPolicies();

builder.Services.Configure<JwtOptions>(
    builder.Configuration.GetSection("JwtOptions"));
builder.Services.AddHttpContextAccessor();
builder.Services.AddDbContext<CAContext>();
builder.Services.AddDbContext<IdentityContext>();
builder.Services.AddDefaultIdentity<ApplicationUser>()
    .AddRoles<IdentityRole>()
    .AddEntityFrameworkStores<IdentityContext>()
    .AddDefaultTokenProviders();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name:"CA", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowAnyOrigin();
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.AddSwagger();
builder.Services.AddScoped<IIdentityService, ClinicaIdentityService>();
builder.Services.AddScoped<AssistedService>();
builder.Services.AddScoped<AddressService>();
builder.Services.AddScoped<HistoricService>();

builder.Services.AddMapper();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);


app.UseAuthentication();
app.UseRouting();
app.UseCors("CA");
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllers();
});
app.MapControllers();

app.UseHttpsRedirection();
app.UseStaticFiles();

app.Run();
