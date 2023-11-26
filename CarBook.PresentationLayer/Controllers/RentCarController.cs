using CarBook.BusinessLayer.Abstract;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;




namespace CarBook.PresentationLayer.Controllers
{
    [AllowAnonymous]
    public class RentCarController : Controller
    {
        private readonly ICarService _carService;

        public RentCarController(ICarService carService)
        {
            _carService = carService;
        }

        public IActionResult Index()
        {
            if (TempData["filteredCars"]!=null)
            {
                var cars = TempData["filteredCars"];
                var data = JsonSerializer.Deserialize<List<Car>>(cars.ToString());
                return View(data);
            }
         
            
            var values = _carService.TGetAll();
           
            return View(values);
        }
    }
}
