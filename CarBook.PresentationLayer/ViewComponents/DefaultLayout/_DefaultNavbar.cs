using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.DefaultLayout
{
    public class _DefaultNavbar:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
