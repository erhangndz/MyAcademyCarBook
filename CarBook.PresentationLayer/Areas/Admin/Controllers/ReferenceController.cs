using AutoMapper;
using CarBook.BusinessLayer.Abstract;
using CarBook.DtoLayer.DTOs.TestimonialDtos;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("[area]/[controller]/[action]")]
    public class ReferenceController : Controller
    {
        private readonly IGenericService<Testimonial> _testimonialService;
        private readonly IMapper _mapper;

        public ReferenceController(IGenericService<Testimonial> testimonialService, IMapper mapper)
        {
            _testimonialService = testimonialService;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            var testimonials = _testimonialService.TGetList();
            var values = _mapper.Map<List<TestimonialDto>>(testimonials);
            return View(values);
        }

        public IActionResult DeleteTestimonial(int id)
        {
            _testimonialService.TDelete(id);
            return RedirectToAction("Index");
        }

        public IActionResult AddTestimonial()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddTestimonial(TestimonialDto testimonialDto)
        {
            var newTestimonial= _mapper.Map<Testimonial>(testimonialDto);
            _testimonialService.TInsert(newTestimonial);
            return RedirectToAction("Index");
        }

        public IActionResult UpdateTestimonial(int id)
        {
            var value = _testimonialService.TGetByID(id);
            var updateTestimonial = _mapper.Map<TestimonialDto>(value);
            return View(updateTestimonial);
        }

        [HttpPost]
        public IActionResult UpdateTestimonial(TestimonialDto testimonialDto)
        {
            var updateTestimonial = _mapper.Map<Testimonial>(testimonialDto);
            _testimonialService.TUpdate(updateTestimonial);
            return RedirectToAction("Index");
        }

    }
}

