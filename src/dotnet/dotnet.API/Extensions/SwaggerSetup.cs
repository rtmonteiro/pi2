using Microsoft.OpenApi.Any;
using Microsoft.OpenApi.Models;

namespace dotnet.API.Extensions;

public static class SwaggerSetup
{
    public static void AddSwagger(this IServiceCollection services)
    {
        services.AddEndpointsApiExplorer();

        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1",
                new OpenApiInfo
                {
                    Title = "APIIndustriall",
                    Description = "API de para a Clinica da Alma",
                    Version = "v1",
                    
                    Contact = new OpenApiContact
                    {
                        Name = "Clinica da Alma",
                        Url = new Uri("https://github.com/rtmonteiro/pi2/tree/main")
                    },
                    License = new OpenApiLicense
                    {
                        Name = "MIT",
                        Url = new Uri("http://opensource.org/licenses/MIT")
                    }
                });
            c.MapType<DateTime>(() => new OpenApiSchema
            {
                Type = "string", Format = "date-time", Example = new OpenApiString(DateTime.Now.ToString("dd/MM/yyyy"))
            });

            c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
            {
                Description = @"JWT Authorization header using the Bearer scheme. 
                                Enter 'Bearer' [space] and then your token in the text input below. 
                                Example: 'Bearer 12345abcdef'",
                Name = "Authorization",
                In = ParameterLocation.Header,
                Type = SecuritySchemeType.ApiKey,
                Scheme = "Bearer"
            });

            c.AddSecurityRequirement(new OpenApiSecurityRequirement
            {
                {
                    new OpenApiSecurityScheme
                    {
                        Reference = new OpenApiReference
                        {
                            Type = ReferenceType.SecurityScheme,
                            Id = "Bearer"
                        },
                        Scheme = "oauth2",
                        Name = "Bearer",
                        In = ParameterLocation.Header
                    },
                    new List<string>()
                }
            });
        });
    }

    public static void UseSwaggerUi(this WebApplication app)
    {
        app.UseSwaggerUI(options =>
        {
            options.SwaggerEndpoint("/swagger/v1/swagger.json", "APIIndustriall v1");
            options.RoutePrefix = string.Empty;
        });
    }
}