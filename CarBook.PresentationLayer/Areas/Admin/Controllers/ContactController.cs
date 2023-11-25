using AutoMapper;
using CarBook.BusinessLayer.Abstract;
using CarBook.DtoLayer.DTOs.ContactDtos;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("[area]/[controller]/[action]")]
    public class ContactController : Controller
    {
        private readonly IGenericService<Contact> _contactService;
        private readonly IMapper _mapper;

        public ContactController(IGenericService<Contact> contactService, IMapper mapper)
        {
            _contactService = contactService;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            var contacts = _contactService.TGetList();
            var values = _mapper.Map<List<ContactDto>>(contacts);
            return View(values);
        }

        public IActionResult DeleteContact(int id)
        {
            _contactService.TDelete(id);
            return RedirectToAction("Index");
        }

        public IActionResult AddContact()
        {
            return View();
        }

        [HttpPost]
        public IActionResult AddContact(ContactDto contactDto)
        {
            var newContact= _mapper.Map<Contact>(contactDto);
            _contactService.TInsert(newContact);
            return RedirectToAction("Index");
        }

        public IActionResult UpdateContact(int id)
        {
            var contact = _contactService.TGetByID(id);
            var value = _mapper.Map<ContactDto>(contact);
            return View(value);
        }

        [HttpPost]
        public IActionResult UpdateContact(ContactDto contactDto)
        {
          var updateContact=  _mapper.Map<Contact>(contactDto);
            _contactService.TUpdate(updateContact);
            return RedirectToAction("Index");
        }
    }
}
