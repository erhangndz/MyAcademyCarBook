using CarBook.DtoLayer.DTOs.CarDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.DtoLayer.DTOs.CarDetailDtos
{
    public class CarDetailDto
    {
        public int CarDetailId { get; set; }
        public string Description { get; set; }
        public int CarId { get; set; }
        public CarDto Car { get; set; }
    }
}
