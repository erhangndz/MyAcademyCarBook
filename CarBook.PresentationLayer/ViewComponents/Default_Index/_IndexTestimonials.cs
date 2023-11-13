using CarBook.BusinessLayer.Abstract;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.Default_Index
{
    public class _IndexTestimonials:ViewComponent
    {
        private readonly IGenericService<Testimonial> _testimonialService;

        public _IndexTestimonials(IGenericService<Testimonial> testimonialService)
        {
            _testimonialService = testimonialService;
        }

        public IViewComponentResult Invoke()
        {
            var testimonials = _testimonialService.TGetList();
            return View(testimonials);
        }
    }
}
