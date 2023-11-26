using CarBook.DtoLayer.DTOs.CarDtos;
using CarBook.EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.DtoLayer.DTOs.ReviewDtos
{
    public class ReviewDto
    {
        public int ReviewId { get; set; }
        public string Comment { get; set; }
        public DateTime CommentDate { get; set; }
        public int CarId { get; set; }
        public CarDto Car { get; set; }
        public string NameSurname { get; set; }
    }
}
