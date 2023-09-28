using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.EntityLayer.Concrete
{
    public class Brand
    {
        public int BrandID { get; set; }
        public string BrandName { get; set; }
        public bool Status { get; set; }
        public List<Car> Cars { get; set; }
    }
}
}
