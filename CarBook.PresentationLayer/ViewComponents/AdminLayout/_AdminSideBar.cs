using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.AdminLayout
{
    public class _AdminSideBar:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
