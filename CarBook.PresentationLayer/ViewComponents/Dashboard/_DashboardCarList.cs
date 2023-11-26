using AutoMapper;
using CarBook.BusinessLayer.Abstract;
using CarBook.DtoLayer.DTOs.CarDtos;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.Dashboard
{
    public class _DashboardCarList:ViewComponent
    {
        private readonly ICarService _carService;
        private readonly IMapper _mapper;

        public _DashboardCarList(ICarService carService, IMapper mapper)
        {
            _carService = carService;
            _mapper = mapper;
        }

        public IViewComponentResult Invoke()
        {
            var cars = _carService.TGetAll();
            var values = _mapper.Map<List<CarDto>>(cars);
            return View(values);
        }
    }
}
