using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.EntityLayer.Concrete
{
    public class Car
    {
        public int CarID { get; set; }
        public int BrandID { get; set; }
        public Brand Brand { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public int CategoryID { get; set; }
        public Category Category { get; set; }
        public string Image { get; set; }
        public string Gear { get; set; }
        public int km { get; set; }
        public byte PersonCount { get; set; }
        public bool Status { get; set; }
    }
}
