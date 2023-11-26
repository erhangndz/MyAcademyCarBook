using AutoMapper;
using CarBook.DtoLayer.DTOs.BrandDtos;
using CarBook.DtoLayer.DTOs.CarDetailDtos;
using CarBook.DtoLayer.DTOs.CarDtos;
using CarBook.DtoLayer.DTOs.CarFeatureDtos;
using CarBook.DtoLayer.DTOs.CarStatusDtos;
using CarBook.DtoLayer.DTOs.CategoryDtos;
using CarBook.DtoLayer.DTOs.ContactDtos;
using CarBook.DtoLayer.DTOs.LocationDtos;
using CarBook.DtoLayer.DTOs.MessageDtos;
using CarBook.DtoLayer.DTOs.ReviewDtos;
using CarBook.DtoLayer.DTOs.ServiceDtos;
using CarBook.DtoLayer.DTOs.TestimonialDtos;
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
            CreateMap<CarDetailDto,CarDetail>().ReverseMap();
            CreateMap<ContactDto,Contact>().ReverseMap();
            CreateMap<ServiceDto,Service>().ReverseMap();
            CreateMap<TestimonialDto,Testimonial>().ReverseMap();
            CreateMap<ReviewDto, Review>().ReverseMap();
            CreateMap<CarFeatureDto, CarFeature>().ReverseMap();
        }
    }
}
