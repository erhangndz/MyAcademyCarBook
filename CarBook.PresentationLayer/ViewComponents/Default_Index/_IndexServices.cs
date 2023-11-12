using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.Default_Index
{
    public class _IndexServices:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
