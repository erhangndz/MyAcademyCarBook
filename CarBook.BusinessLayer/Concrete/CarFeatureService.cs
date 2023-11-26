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
	public class CarFeatureService : ICarFeatureService
	{
		private readonly IGenericDal<CarFeature> _carFeatureDal;
		private readonly Context _context;

        public CarFeatureService(IGenericDal<CarFeature> carFeatureDal, Context context)
        {
            _carFeatureDal = carFeatureDal;
            _context = context;
        }

        public List<CarFeature> GetFeaturesByCarId(int id)
		{
			
			return _context.CarFeatures.Include(x => x.Car).Where(x => x.CarId == id).ToList();
		}

		public void TDelete(int id)
		{
			_carFeatureDal.Delete(id);
		}

		public CarFeature TGetByID(int id)
		{
			return _carFeatureDal.GetByID(id);
		}

		public List<CarFeature> TGetList()
		{
			return _context.CarFeatures.Include(x=>x.Car).ThenInclude(x=>x.Brand).ToList();
		}

		public void TInsert(CarFeature entity)
		{
			_carFeatureDal.Insert(entity);
		}

		public void TUpdate(CarFeature entity)
		{
			_carFeatureDal.Update(entity);
		}
	}
}
