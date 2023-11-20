using CarBook.BusinessLayer.Abstract;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Security.Policy;

namespace CarBook.PresentationLayer.Controllers
{
    public class PriceController : Controller
    {
        private readonly IPriceService _priceService;
        private readonly ICarService _carService;

        public PriceController(IPriceService priceService, ICarService carService)
        {
            _priceService = priceService;
            _carService = carService;
        }

        public IActionResult Index()
        {
            var values = _priceService.GetAll();
            return View(values);
        }

        public IActionResult CreatePrice()
        {
            var carList= _carService.TGetAll();
            List<SelectListItem> cars = (from x in carList
                                         select new SelectListItem
                                         {
                                             Text = x.Brand.BrandName + " " + x.CarName,
                                             Value = x.CarID.ToString()
                                         }).ToList();
            ViewBag.cars=cars;
            return View();
        }
        [HttpPost]
        public IActionResult CreatePrice(Price price)
        {
            _priceService.TInsert(price);
            return RedirectToAction("Index");
        }

        public IActionResult DeletePrice(int id)
        {
            _priceService.TDelete(id);
            return RedirectToAction("Index");
        }

        public IActionResult UpdatePrice(int id)
        {
           var values= _priceService.TGetByID(id);
            return View(values);
        }

        [HttpPost]
        public IActionResult UpdatePrice(Price price)
        {
            _priceService.TUpdate(price);
            return RedirectToAction("Index");
        }
    }
}
