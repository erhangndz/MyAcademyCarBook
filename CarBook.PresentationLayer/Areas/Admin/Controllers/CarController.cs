using AutoMapper;
using CarBook.BusinessLayer.Abstract;
using CarBook.DtoLayer.DTOs.CarDtos;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;

namespace CarBook.PresentationLayer.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("[area]/[controller]/[action]")]
    public class CarController : Controller
    {
        private readonly ICarService _carService;
        private readonly IBrandService _brandService;
        private readonly ICategoryService _categoryService;
        private readonly ICarStatusService _carStatusService;
        private readonly IMapper _mapper;

        public CarController(ICarService carService, IMapper mapper, IBrandService brandService, ICategoryService categoryService, ICarStatusService carStatusService)
        {
            _carService = carService;
            _mapper = mapper;
            _brandService = brandService;
            _categoryService = categoryService;
            _carStatusService = carStatusService;
        }

        public IActionResult Index()
        {
            var values = _carService.TGetAll();
            return View(values);
        }

        public IActionResult AddCar()
        {
            ViewBag.brands =new List<SelectListItem>(from x in _brandService.TGetList()
                                           select new SelectListItem
                                           {
                                               Text = x.BrandName,
                                               Value = x.BrandID.ToString()
                                           }).ToList();

            ViewBag.category = new List<SelectListItem>(from x in _categoryService.TGetList()
                                                        select new SelectListItem
                                                        {
                                                            Text = x.CategoryName,
                                                            Value = x.CategoryID.ToString()
                                                        }).ToList();

            ViewBag.carStatus = new List<SelectListItem>(from x in _carStatusService.TGetList()
                                                        select new SelectListItem
                                                        {
                                                            Text = x.StatusName,
                                                            Value = x.CarStatusID.ToString()
                                                        }).ToList();
            return View();
        }
        [HttpPost]
        public IActionResult AddCar(CarDto carDto)
        {
            var newCar = _mapper.Map<Car>(carDto);

            _carService.TInsert(newCar);
            return RedirectToAction("Index");
        }
    }
}
