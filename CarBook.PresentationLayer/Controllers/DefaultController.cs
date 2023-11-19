using CarBook.BusinessLayer.Abstract;
using Microsoft.AspNetCore.Mvc;
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
        public IActionResult FilterCars(string model,int year)
        {
            ViewData["model"] = model;
            ViewData["year"] = year;

            var values = _carService.TGetAll();

            if (!string.IsNullOrEmpty(model) || year!=null)
            {
                var lowerCaseModel = model.ToLower();
                

                values = values.Where(x => x.Model.ToLower().Contains(lowerCaseModel) || x.Year==year).ToList();

                TempData["filteredCars"] = JsonSerializer.Serialize(values);
                return RedirectToAction("Index", "RentCar");
            }

            return RedirectToAction("Index");
        }
    }
}
