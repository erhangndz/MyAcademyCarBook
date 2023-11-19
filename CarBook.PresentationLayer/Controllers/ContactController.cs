using CarBook.BusinessLayer.Abstract;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Controllers
{
    public class ContactController : Controller
    {
        private readonly IGenericService<Message> _messageService;

        public ContactController(IGenericService<Message> messageService)
        {
            _messageService = messageService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public PartialViewResult SendMessage()
        {
            return PartialView();
        }

        [HttpPost]
        public IActionResult SendMessage(Message message)
        {
            
            if(message.Name!=null && message.Subject!=null && message.Email!=null && message.MessageBody!=null)
            {
                
                ViewBag.message = "Model is valid";
                _messageService.TInsert(message);
                return NoContent();
            }

            return NoContent();
        }



    }
}
