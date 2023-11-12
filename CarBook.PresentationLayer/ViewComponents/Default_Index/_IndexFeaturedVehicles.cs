using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.Default_Index
{
    public class _IndexFeaturedVehicles:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
