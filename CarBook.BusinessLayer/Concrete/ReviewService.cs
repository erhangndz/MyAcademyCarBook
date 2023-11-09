using CarBook.BusinessLayer.Abstract;
using CarBook.DataAccessLayer.Abstract;
using CarBook.EntityLayer.Concrete;
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
			return _reviewDal.GetList().Where(x=>x.CarId==id).ToList();
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
