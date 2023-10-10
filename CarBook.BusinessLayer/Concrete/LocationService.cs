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
    public class LocationService : ILocationService
    {
        private readonly IGenericDal<Location> _locationDal;

        public LocationService(IGenericDal<Location> locationDal)
        {
            _locationDal = locationDal;
        }

        public void TDelete(int id)
        {
           _locationDal.Delete(id);
        }

        public Location TGetByID(int id)
        {
          return _locationDal.GetByID(id);
        }

        public List<Location> TGetList()
        {
           return _locationDal.GetList();
        }

        public void TInsert(Location entity)
        {
           _locationDal.Insert(entity);
        }

        public void TUpdate(Location entity)
        {
            _locationDal.Update(entity);
        }
    }
}
