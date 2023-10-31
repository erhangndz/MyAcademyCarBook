using CarBook.EntityLayer.Concrete;
using CarBook.PresentationLayer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Controllers
{
    public class LoginController : Controller
    {
        private readonly SignInManager<AppUser> _signInManager;

        public LoginController(SignInManager<AppUser> signInManager)
        {
            _signInManager = signInManager;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Index(LoginViewModel model)
        {
            var result = await _signInManager.PasswordSignInAsync(new AppUser
            {
                UserName = model.UserName,

            }, model.Password, false,false);

            if (result.Succeeded)
            {
                return RedirectToAction("Index", "Car");
            }
            else
            {
                ModelState.AddModelError("", "Kullanıcı adı veya şifre yanlış.");
            }

            return View();
        }
    }
}
