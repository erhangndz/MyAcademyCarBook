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
	public class CarDetailService : ICarDetailService
	{
		private readonly IGenericDal<CarDetail> _carDetailDal;

		public CarDetailService(IGenericDal<CarDetail> carDetailDal)
		{
			_carDetailDal = carDetailDal;
		}

		public CarDetail GetDetailByCarId(int id)
		{
			Context context = new();
			return context.CarDetails.Include(x => x.Car).ThenInclude(x=>x.Brand).FirstOrDefault(x => x.CarId == id);
		}

		public void TDelete(int id)
		{
			_carDetailDal.Delete(id);
		}

		public CarDetail TGetByID(int id)
		{
			return _carDetailDal.GetByID(id);
		}

		public List<CarDetail> TGetList()
		{
			return _carDetailDal.GetList();
		}

		public void TInsert(CarDetail entity)
		{
			_carDetailDal.Insert(entity);
		}

		public void TUpdate(CarDetail entity)
		{
			_carDetailDal.Update(entity);
		}
	}
}
