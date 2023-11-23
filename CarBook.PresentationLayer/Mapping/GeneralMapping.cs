using AutoMapper;
using CarBook.DtoLayer.DTOs.BrandDtos;
using CarBook.DtoLayer.DTOs.CarDtos;
using CarBook.DtoLayer.DTOs.CarStatusDtos;
using CarBook.DtoLayer.DTOs.CategoryDtos;
using CarBook.DtoLayer.DTOs.LocationDtos;
using CarBook.DtoLayer.DTOs.MessageDtos;
using CarBook.EntityLayer.Concrete;

namespace CarBook.PresentationLayer.Mapping
{
    public class GeneralMapping :Profile
    {
        public GeneralMapping()
        {
            CreateMap<CarDto,Car>().ReverseMap();
            CreateMap<MessageDto,Message>().ReverseMap();
            CreateMap<BrandDto,Brand>().ReverseMap();
            CreateMap<CarStatusDto,CarStatus>().ReverseMap();
            CreateMap<CategoryDto,Category>().ReverseMap();
            CreateMap<LocationDto,Location>().ReverseMap();
        }
    }
}
