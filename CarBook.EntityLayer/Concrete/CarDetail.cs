using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.EntityLayer.Concrete
{
	public class CarDetail
	{
        public int CarDetailId { get; set; }
        public string Description { get; set; }
       
        public int CarId { get; set; }
		public Car Car { get; set; }
	}
}
