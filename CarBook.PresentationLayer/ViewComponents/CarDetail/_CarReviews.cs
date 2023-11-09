using CarBook.BusinessLayer.Abstract;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.CarDetail
{
	public class _CarReviews:ViewComponent
	{
		IReviewService _reviewService;

		public _CarReviews(IReviewService reviewService)
		{
			_reviewService = reviewService;
		}

		public IViewComponentResult Invoke(int id)
		{
			var values = _reviewService.GetReviewsByCar(id);
			ViewBag.count = _reviewService.GetReviewsByCar(id).Count();
			return View(values);
		}
	}
}
