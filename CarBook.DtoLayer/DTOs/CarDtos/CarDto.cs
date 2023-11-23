using CarBook.DtoLayer.DTOs.BrandDtos;
using CarBook.DtoLayer.DTOs.CarStatusDtos;
using CarBook.DtoLayer.DTOs.CategoryDtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace CarBook.DtoLayer.DTOs.CarDtos
{
    public class CarDto
    {
        public int CarID { get; set; }
        public int BrandID { get; set; }
        public BrandDto Brand { get; set; }
        public string CarName { get; set; }
        public int Year { get; set; }
        public int CategoryID { get; set; }
        public CategoryDto Category { get; set; }
        public string Image { get; set; }
        public string Gear { get; set; }
        public int km { get; set; }
        public byte PersonCount { get; set; }
        public string GasType { get; set; }
        public bool Status { get; set; }
        public decimal RentPrice { get; set; }
        public int CarStatusID { get; set; }
        public CarStatusDto CarStatus { get; set; }
       
    }
}
