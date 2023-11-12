using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.Default_Index
{
    public class _IndexCounter:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
