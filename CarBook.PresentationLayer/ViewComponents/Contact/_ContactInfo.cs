using CarBook.BusinessLayer.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.ViewComponents.Contact
{
    public class _ContactInfo:ViewComponent
    {
        private readonly IGenericService<EntityLayer.Concrete.Contact> _contactService;

        public _ContactInfo(IGenericService<EntityLayer.Concrete.Contact> contactService)
        {
            _contactService = contactService;
        }

        public IViewComponentResult Invoke()
        {
            var values = _contactService.TGetList();
            return View(values);
        }
    }
}
