using AutoMapper;
using dotnet.Application.DTOs.Request.Assisted;
using dotnet.Application.DTOs.Request.DocumentRequest;
using dotnet.Application.Models;

namespace dotnet.API.Extensions;

public static class MapperSetup
{
    public static void AddMapper(this IServiceCollection services)
    {
        var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<AssistedCreateRequest, Assisted>();
                cfg.CreateMap<AddressCreateRequest, Address>();
                cfg.CreateMap<DocumentCreateRequest, Document>();
                    
            }
            );
        IMapper mapper = config.CreateMapper();
        services.AddSingleton(mapper);
    }
}