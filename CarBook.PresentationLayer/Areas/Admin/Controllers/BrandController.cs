using AutoMapper;
using CarBook.BusinessLayer.Abstract;
using CarBook.DataAccessLayer.Concrete;
using CarBook.DtoLayer.DTOs.BrandDtos;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace CarBook.PresentationLayer.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("[area]/[controller]/[action]")]
    public class BrandController : Controller
    {
        private readonly IBrandService _brandService;
        private readonly IMapper _mapper;

        public BrandController(IBrandService brandService, IMapper mapper)
        {
            _brandService = brandService;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            var brands = _brandService.TGetList();
            var values = _mapper.Map<List<BrandDto>>(brands);
            return View(values);
        }

        public IActionResult AddBrand()
        {
            return View();
        }
        [HttpPost]
        public IActionResult AddBrand(BrandDto brandDto)
        {
            brandDto.Status = true;
            _brandService.TInsert(_mapper.Map<Brand>(brandDto));
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
            var brand = _brandService.TGetByID(id);
            var value = _mapper.Map<BrandDto>(brand);
            return View(value);
        }
        [HttpPost]
        public IActionResult UpdateBrand(BrandDto brandDto)
        {
            brandDto.Status = true;
            _brandService.TUpdate(_mapper.Map<Brand>(brandDto));
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

