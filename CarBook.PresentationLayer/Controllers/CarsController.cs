using CarBook.BusinessLayer.Abstract;
using Microsoft.AspNetCore.Mvc;
using X.PagedList;

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

		public IActionResult Index(int page=1)
        {
            var result = _carService.TGetAll();

            var values = result.ToPagedList(page, 3);
            return View(values);
        }

        public IActionResult CarDetails(int id)
        {
            ViewBag.id=id;
            return View();

        }
    }
}
