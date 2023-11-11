using CarBook.BusinessLayer.Abstract;
using CarBook.DataAccessLayer.Concrete;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

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

        public IActionResult GetBrandsSearchByName(string name)
        {
            ViewData["CurrentFilter"] = name;

            var values = _brandService.TGetList();

            if (!string.IsNullOrEmpty(name))
            {
                var lowerCaseName = name.ToLower(); 

                values = values.Where(x => x.BrandName.ToLower().Contains(lowerCaseName)).ToList();
                
            }

            return View(values);
        }


    }
}

