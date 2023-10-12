using CarBook.BusinessLayer.Abstract;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Controllers
{
    public class BrandController : Controller
    {
        private readonly IBrandService _brandService;

        public BrandController(IBrandService brandService)
        {
            _brandService = brandService;
        }

        public IActionResult Index()
        {
            var values = _brandService.TGetList();
            return View(values);
        }

        public IActionResult AddBrand()
        {
            return View();
        }
        [HttpPost]
        public IActionResult AddBrand(Brand brand)
        {
            brand.Status = true;
            _brandService.TInsert(brand);
            return RedirectToAction("Index");
        }

        public IActionResult DeleteBrand(int id)
        {
            _brandService.TDelete(id);
            return RedirectToAction("Index");
        }

        [HttpGet]
        public IActionResult UpdateBrand(int id)
        {
            var value = _brandService.TGetByID(id);
            return View(value);
        }
        [HttpPost]
        public IActionResult UpdateBrand(Brand brand)
        {
            brand.Status = true;
            _brandService.TUpdate(brand);
            return RedirectToAction("Index");
        }
    }
}
