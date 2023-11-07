using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.DefaultLayout
{
    public class _DefaultFooter:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
