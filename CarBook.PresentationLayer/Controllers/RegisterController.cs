﻿using CarBook.EntityLayer.Concrete;
using CarBook.PresentationLayer.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Controllers
{
    public class RegisterController : Controller
    {
        private readonly UserManager<AppUser> _userManager;

        public RegisterController(UserManager<AppUser> userManager)
        {
            _userManager = userManager;
        }

        public IActionResult Signup()
        {
            return View();
        }


        [HttpPost]
        public async Task<IActionResult> Signup(RegisterViewModel model)
        {
            var result = await _userManager.CreateAsync(new AppUser
            {
                NameSurname = model.NameSurname,
                Email = model.Email,
                UserName = model.UserName,

            },model.Password);

            if (result.Succeeded)
            {
                return RedirectToAction("Index", "Login");
            }


            return View();
        }
    }
}
