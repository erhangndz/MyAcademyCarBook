using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.Default_Index
{
    public class _IndexRentCarWays:ViewComponent
    {
        public IViewComponentResult Invoke()
        {
            return View();
        }
    }
}
