using CarBook.BusinessLayer.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.Default_Index
{
    public class _IndexServices:ViewComponent
    {
        private readonly IServiceService _serviceService;

        public _IndexServices(IServiceService serviceService)
        {
            _serviceService = serviceService;
        }

        public IViewComponentResult Invoke()
        {
            var values = _serviceService.TGetList();
            return View(values);
        }
    }
}
