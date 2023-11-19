using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json;

namespace CarBook.PresentationLayer.Controllers
{
    [Serializable]
    public class RentCarController : Controller
    {
        
        public IActionResult Index()
        {
            var cars = TempData["filteredCars"];
            var values = JsonConvert.DeserializeObject<List<Car>>(cars.ToString());
            return View(values);
        }
    }
}
