using AutoMapper;
using dotnet.Application.DTOs.Request.Assisted;
using dotnet.Application.DTOs.Request.DocumentRequest;
using dotnet.Application.DTOs.Request.General;
using dotnet.Application.DTOs.Request.Info;
using dotnet.Application.DTOs.Request.Info.HistoricType;
using dotnet.Application.DTOs.Request.Info.InfoType;
using dotnet.Application.DTOs.Response.Assisted;
using dotnet.Application.DTOs.Response.GetAssisted;
using dotnet.Application.Models;
using dotnet.Application.Models.Info;

namespace dotnet.API.Extensions;

public static class MapperSetup
{
    public static void AddMapper(this IServiceCollection services)
    {
        var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<AssistedCreateRequest, Assisted>();
                cfg.CreateMap<AddressCreateRequest, Address>();
                cfg.CreateMap<Address, AddressGetResponse>();
                cfg.CreateMap<DocumentCreateRequest, Document>();
                cfg.CreateMap<Document,DocumentGetResponse >();
                cfg.CreateMap<InfoEntryCreateRequest, InfoEntry>().ReverseMap();
                cfg.CreateMap<InfoExitCreateRequest, InfoExit>().ReverseMap();
                cfg.CreateMap<HistoricCreateRequest, Historic>();
                cfg.CreateMap<Assisted, AssistedListResponse>();
                cfg.CreateMap<Assisted, AssistedGetResponse>()
                    .BeforeMap((assisted,assistedGetResponse) => assistedGetResponse.Historics = null);
                    
            }
            );
        IMapper mapper = config.CreateMapper();
        services.AddSingleton(mapper);
    }
}