using CarBook.BusinessLayer.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Controllers
{
    public class CarsController : Controller
    {
        private readonly ICarService _carService;
        private readonly ICarDetailService _carDetailService;

		public CarsController(ICarService carService, ICarDetailService carDetailService)
		{
			_carService = carService;
			_carDetailService = carDetailService;
		}

		public IActionResult Index()
        {
            var values = _carService.TGetAll();
            return View(values);
        }

        public IActionResult CarDetails(int id)
        {
            ViewBag.id=id;
            return View();

            //kategoriye göre kaç araç var ef sorgusu 
        }
    }
}
