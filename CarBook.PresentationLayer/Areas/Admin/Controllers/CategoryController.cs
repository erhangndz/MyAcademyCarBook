using AutoMapper;
using CarBook.BusinessLayer.Abstract;
using CarBook.DtoLayer.DTOs.CategoryDtos;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("[area]/[controller]/[action]")]
    public class CategoryController : Controller
    {
        private readonly ICategoryService _categoryService;
        private readonly IMapper _mapper;

        public CategoryController(ICategoryService categoryService, IMapper mapper)
        {
            _categoryService = categoryService;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            var categories = _categoryService.TGetList();
            var values = _mapper.Map<List<CategoryDto>>(categories);
            return View(values);
        }

        public IActionResult DeleteCategory(int id)
        {
            _categoryService.TDelete(id);
            return RedirectToAction("Index");
        }

        public IActionResult AddCategory()
        {
            
            return View();
        }

        [HttpPost]
        public IActionResult AddCategory(CategoryDto categoryDto)
        {
            var newCategory = _mapper.Map<Category>(categoryDto);
            newCategory.Status = true;
            _categoryService.TInsert(newCategory);
            return RedirectToAction("Index");

        }

        public IActionResult UpdateCategory(int id)
        {
            var category = _categoryService.TGetByID(id);
            var value = _mapper.Map<CategoryDto>(category);
            return View(value);
        }

        [HttpPost]
        public IActionResult UpdateCategory(CategoryDto categoryDto)
        {
            var updateCategory = _mapper.Map<Category>(categoryDto);
            _categoryService.TUpdate(updateCategory);
            return RedirectToAction("Index");
        }
    }
}
