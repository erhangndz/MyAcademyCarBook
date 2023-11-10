using CarBook.BusinessLayer.Abstract;
using CarBook.DataAccessLayer.Abstract;
using CarBook.DataAccessLayer.Concrete;
using CarBook.EntityLayer.Concrete;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.BusinessLayer.Concrete
{
	public class ReviewService : IReviewService
	{
		private readonly IGenericDal<Review> _reviewDal;

		public ReviewService(IGenericDal<Review> reviewDal)
		{
			_reviewDal = reviewDal;
		}

		public List<Review> GetReviewsByCar(int id)
		{
			using var context = new Context();

			return context.Reviews.Include(x=>x.AppUser).Where(x=>x.CarId == id).ToList();
		}

		public void TDelete(int id)
		{
			_reviewDal.Delete(id);
		}

		public Review TGetByID(int id)
		{
			return _reviewDal.GetByID(id);
		}

		public List<Review> TGetList()
		{
			return _reviewDal.GetList();
		}

		public void TInsert(Review entity)
		{
			_reviewDal.Insert(entity);
		}

		public void TUpdate(Review entity)
		{
			_reviewDal.Update(entity);
		}
	}
}
