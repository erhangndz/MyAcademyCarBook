using CarBook.BusinessLayer.Abstract;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Controllers
{
    [AllowAnonymous]
    public class ServicesController : Controller
    {
       

        public IActionResult Index()
        {
           
            return View();
        }
    }
}
