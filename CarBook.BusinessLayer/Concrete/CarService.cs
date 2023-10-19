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
    public class CarService : ICarService
    {
        private readonly IGenericDal<Car> _carDal;
        private readonly Context _context;

        public CarService(IGenericDal<Car> carDal, Context context)
        {
            _carDal = carDal;
            _context = context;
        }

        public void TDelete(int id)
        {
            _carDal.Delete(id);
        }

        public List<Car> TGetAll()
        {         
          return  _context.Cars.Include(x=>x.Category).Include(x => x.Brand).Include(x => x.CarStatus).ToList();
        }

        public Car TGetByID(int id)
        {
           return _carDal.GetByID(id);
        }

        public List<Car> TGetList()
        {
           return _carDal.GetList();
        }

        public void TInsert(Car entity)
        {
            _carDal.Insert(entity);
        }

        public void TUpdate(Car entity)
        {
            _carDal.Update(entity);
        }
    }
}
