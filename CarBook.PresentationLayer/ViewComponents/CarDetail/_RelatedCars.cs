using CarBook.BusinessLayer.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.CarDetail
{
    public class _RelatedCars:ViewComponent
    {
        private readonly ICarService _carService;

        public _RelatedCars(ICarService carService)
        {
            _carService = carService;
        }

        public IViewComponentResult Invoke()
        {
            var values = _carService.TGetAll();
            return View(values);
        }
    }
}
