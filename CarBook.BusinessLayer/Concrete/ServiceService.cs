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
    public class ServiceService : IServiceService
    {
        private readonly IGenericDal<Service> _serviceDal;

        public ServiceService(IGenericDal<Service> serviceDal)
        {
            _serviceDal = serviceDal;
        }

        public void TDelete(int id)
        {
            _serviceDal.Delete(id);
        }

        public Service TGetByID(int id)
        {
          return  _serviceDal.GetByID(id);
        }

        public List<Service> TGetList()
        {
           return _serviceDal.GetList();
        }

        public void TInsert(Service entity)
        {
            _serviceDal.Insert(entity);
        }

        public void TUpdate(Service entity)
        {
            _serviceDal.Update(entity);
        }
    }
}
