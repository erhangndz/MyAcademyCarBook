using CarBook.BusinessLayer.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.CarDetail
{
	public class _CarDescription:ViewComponent
	{
		private readonly ICarDetailService _carDetailService;

		public _CarDescription(ICarDetailService carDetailService)
		{
			_carDetailService = carDetailService;
		}

		public IViewComponentResult Invoke(int id)
		{
			var values = _carDetailService.GetDetailByCarId(id);
			return View(values);
		}
	}
}
