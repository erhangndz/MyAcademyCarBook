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
    public class CarStatusService : ICarStatusService
    {
        private readonly IGenericDal<CarStatus> _carStatusDal;

        public CarStatusService(IGenericDal<CarStatus> carStatusDal)
        {
            _carStatusDal = carStatusDal;
        }

        public void TDelete(int id)
        {
            _carStatusDal.Delete(id);
        }

        public CarStatus TGetByID(int id)
        {
            return _carStatusDal.GetByID(id);
        }

        public List<CarStatus> TGetList()
        {
            return _carStatusDal.GetList();
        }

        public void TInsert(CarStatus entity)
        {
            _carStatusDal.Insert(entity);
        }

        public void TUpdate(CarStatus entity)
        {
            _carStatusDal.Update(entity);
        }
    }
}
