using CarBook.BusinessLayer.Abstract;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Policy;
using System.Text.Json;

namespace CarBook.PresentationLayer.Controllers
{
    public class DefaultController : Controller
    {
        private readonly ICarService _carService;

        public DefaultController(ICarService carService)
        {
            _carService= carService;
        }
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public PartialViewResult FilterCars()
        {
            return PartialView();
        }

        [HttpPost]
        public IActionResult FilterCars(string model, string brand)
        {
            ViewData["modelFilter"] = model;
            ViewData["brandFilter"] = brand;

            var values = _carService.TGetAll();

            if (!string.IsNullOrEmpty(model) || !string.IsNullOrEmpty(brand))
            {
                var lowerCaseModel = model.ToLower();
                var lowerCaseBrand = brand.ToLower();

                values = values.Where(x => x.Model.ToLower().Contains(lowerCaseModel)).ToList();

                TempData["filteredCars"] = JsonConvert.SerializeObject(values);
                return RedirectToAction("Index", "RentCar");
            }

            return RedirectToAction("Index");
        }
    }
}
