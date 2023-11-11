using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.AdminLayout
{
	public class _UserInfo:ViewComponent
	{
		private readonly UserManager<AppUser> _userManager;

		public _UserInfo(UserManager<AppUser> userManager)
		{
			_userManager = userManager;
		}

		public async Task<IViewComponentResult> InvokeAsync()
		{
			//var user = await _userManager.FindByNameAsync(User.Identity.Name);
			//ViewBag.name = user.NameSurname;

			return View();
		}
	}
}
