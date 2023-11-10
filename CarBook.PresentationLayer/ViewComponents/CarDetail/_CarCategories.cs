using CarBook.BusinessLayer.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.CarDetail
{
	public class _CarCategories:ViewComponent
	{
		private readonly ICarService _carService;

		public _CarCategories(ICarService carService)
		{
			_carService = carService;
		}

		public IViewComponentResult Invoke()
		{
			var values = _carService.GetCategoryCount();
			return View(values);
		}
	}
}
