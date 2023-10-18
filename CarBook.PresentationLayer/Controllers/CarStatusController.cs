using CarBook.BusinessLayer.Abstract;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Controllers
{
    public class CarStatusController : Controller
    {
        private readonly ICarStatusService _carStatusService;
        private readonly ICarService _carService;

        public CarStatusController(ICarStatusService carStatusService, ICarService carService)
        {
            _carStatusService = carStatusService;
            _carService = carService;
        }

        public IActionResult Index()
        {
            var values = _carStatusService.TGetList();
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
        public IActionResult AddCarStatus(CarStatus carStatus)
        {
            _carStatusService.TInsert(carStatus);
            return RedirectToAction("Index");
        }

        public ActionResult UpdateCarStatus(int id)
        {
           var values= _carStatusService.TGetByID(id);
            return View(values);
        }

        [HttpPost]
        public IActionResult UpdateCarStatus(CarStatus carStatus)
        {
            _carStatusService.TUpdate(carStatus);
            return RedirectToAction("Index");
        }

        public IActionResult CarStatusDetails(int id)
        {
          var values=  _carService.TGetAll().Where(x => x.CarStatusID == id).ToList();
            return View(values);
        }

    }
}
