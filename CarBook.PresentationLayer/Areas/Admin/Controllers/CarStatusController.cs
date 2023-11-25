using AutoMapper;
using CarBook.BusinessLayer.Abstract;
using CarBook.DtoLayer.DTOs.CarDtos;
using CarBook.DtoLayer.DTOs.CarStatusDtos;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("[area]/[controller]/[action]")]
    public class CarStatusController : Controller
    {
        private readonly ICarStatusService _carStatusService;
        private readonly ICarService _carService;
        private readonly IMapper _mapper;

        public CarStatusController(ICarStatusService carStatusService, ICarService carService, IMapper mapper)
        {
            _carStatusService = carStatusService;
            _carService = carService;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            var carStatuses = _carStatusService.TGetList();
            var values = _mapper.Map<List<CarStatusDto>>(carStatuses);
            return View(values);
        }

        public IActionResult DeleteCarStatus(int id)
        {
            _carStatusService.TDelete(id);
            return RedirectToAction("Index");
        }

        public IActionResult AddCarStatus()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddCarStatus(CarStatusDto carStatusDto)
        {
            _carStatusService.TInsert(_mapper.Map<CarStatus>(carStatusDto));
            return RedirectToAction("Index");
        }

        public ActionResult UpdateCarStatus(int id)
        {
            var carStatus = _carStatusService.TGetByID(id);
            var values = _mapper.Map<CarStatusDto>(carStatus);
            return View(values);
        }

        [HttpPost]
        public IActionResult UpdateCarStatus(CarStatusDto carStatusDto)
        {
            var updateCarStatus = _mapper.Map<CarStatus>(carStatusDto);
            _carStatusService.TUpdate(updateCarStatus);
            return RedirectToAction("Index");
        }

        public IActionResult CarStatusDetails(int id,string status)
        {
            ViewBag.status = status.Substring(5);
            var cars = _carService.TGetAll().Where(x => x.CarStatusID == id).ToList();
            var values = _mapper.Map<List<CarDto>>(cars);
            return View(values);
        }

    }
}
