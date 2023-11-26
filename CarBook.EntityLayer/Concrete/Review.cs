using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.EntityLayer.Concrete
{
	public class Review
	{
        public int ReviewId { get; set; }
        public string Comment { get; set; }
        public DateTime CommentDate { get; set; }
		public int CarId { get; set; }
		public Car Car { get; set; }
		public string NameSurname { get; set; }

	}
}
