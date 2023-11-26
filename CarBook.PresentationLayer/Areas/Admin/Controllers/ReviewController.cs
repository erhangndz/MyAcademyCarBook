using AutoMapper;
using CarBook.BusinessLayer.Abstract;
using CarBook.DtoLayer.DTOs.ReviewDtos;
using CarBook.DtoLayer.DTOs.TestimonialDtos;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("[area]/[controller]/[action]")]
    public class ReviewController : Controller
    {
        private readonly IReviewService _reviewService;
        private readonly IMapper _mapper;

        public ReviewController(IReviewService reviewService, IMapper mapper)
        {
            _reviewService = reviewService;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            var reviews = _reviewService.TGetList();
            var values = _mapper.Map<List<ReviewDto>>(reviews);
            return View(values);
        }

        public IActionResult DeleteReview(int id)
        {
            _reviewService.TDelete(id);
            return RedirectToAction("Index");
        }

        

        public IActionResult UpdateReview(int id)
        {
            var value = _reviewService.TGetByID(id);
            var updateReview = _mapper.Map<ReviewDto>(value);
            return View(updateReview);
        }

        [HttpPost]
        public IActionResult UpdateReview(ReviewDto reviewDto)
        {
            var updateReview = _mapper.Map<Review>(reviewDto);
            _reviewService.TUpdate(updateReview);
            return RedirectToAction("Index");
        }
    }
}
