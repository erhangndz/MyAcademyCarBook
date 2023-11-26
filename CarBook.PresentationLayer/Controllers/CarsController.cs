using AutoMapper;
using CarBook.BusinessLayer.Abstract;
using CarBook.DtoLayer.DTOs.ReviewDtos;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;
using X.PagedList;

namespace CarBook.PresentationLayer.Controllers
{
    public class CarsController : Controller
    {
        private readonly ICarService _carService;
        private readonly ICarDetailService _carDetailService;
        private readonly IReviewService _reviewService;
        private readonly IMapper _mapper;

        public CarsController(ICarService carService, ICarDetailService carDetailService, IMapper mapper, IReviewService reviewService)
        {
            _carService = carService;
            _carDetailService = carDetailService;
            _mapper = mapper;
            _reviewService = reviewService;
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

        public PartialViewResult MakeComment(int id)
        {
            ViewBag.id=id;
            return PartialView();
        }

        [HttpPost]
        public IActionResult MakeComment(ReviewDto reviewDto)
        {
            var newReview = _mapper.Map<Review>(reviewDto);
            newReview.CommentDate = DateTime.Now;
            _reviewService.TInsert(newReview);
            return RedirectToAction("Index");
        }
    }
}
