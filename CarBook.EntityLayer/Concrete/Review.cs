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
        public int Score { get; set; }
        public DateTime CommentDate { get => DateTime.Now; }
		public int CarId { get; set; }
		public Car Car { get; set; }
		public int AppUserId { get; set; }
		public AppUser AppUser { get; set; }
	}
}
