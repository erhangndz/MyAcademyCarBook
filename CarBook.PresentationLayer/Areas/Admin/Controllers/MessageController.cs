using AutoMapper;
using CarBook.BusinessLayer.Abstract;
using CarBook.DtoLayer.DTOs.MessageDtos;
using CarBook.EntityLayer.Concrete;
using Microsoft.AspNetCore.Mvc;

namespace CarBook.PresentationLayer.Areas.Admin.Controllers
{
    [Area("Admin")]
    [Route("[area]/[controller]/[action]")]
    public class MessageController : Controller
    {
        private readonly IGenericService<Message> _messageService;
        private readonly IMapper _mapper;

        public MessageController(IGenericService<Message> messageService, IMapper mapper)
        {
            _messageService = messageService;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            var messages = _messageService.TGetList();
            var values = _mapper.Map<List<MessageDto>>(messages);
            return View(values);
        }

        public IActionResult DeleteMessage(int id)
        {
            _messageService.TDelete(id);
            return RedirectToAction("Index");   
        }

        
    }
}
