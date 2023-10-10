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
    public class BrandService : IBrandService
    {
        private readonly IGenericDal<Brand> _brandDal;

        public BrandService(IGenericDal<Brand> brandDal)
        {
            _brandDal = brandDal;
        }

        public void TDelete(int id)
        {
           _brandDal.Delete(id);
        }

        public Brand TGetByID(int id)
        {
            return _brandDal.GetByID(id);   
        }

        public List<Brand> TGetList()
        {
           return _brandDal.GetList();
        }

        public void TInsert(Brand entity)
        {
          _brandDal.Insert(entity);
        }

        public void TUpdate(Brand entity)
        {
            _brandDal.Update(entity);
        }
    }
}
