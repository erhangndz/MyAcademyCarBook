using CarBook.DataAccessLayer.Concrete;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("[area]/[controller]/[action]")]
    public class DashboardController : Controller
    {
        private readonly Context _context;
        private readonly UserManager<AppUser> _userManager;

        public DashboardController(Context context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<IActionResult> Index()
        {

            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            ViewBag.name = user.NameSurname;

            ViewBag.cars = _context.Cars.Count();
            ViewBag.categories = _context.Categories.Count();
            ViewBag.brands = _context.Brands.Count();
            ViewBag.comments = _context.Reviews.Count();
            return View();
        }
    }
}
