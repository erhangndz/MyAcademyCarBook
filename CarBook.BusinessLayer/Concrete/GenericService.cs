using CarBook.BusinessLayer.Abstract;
using CarBook.DataAccessLayer.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.BusinessLayer.Concrete
{
    public class GenericService<T> : IGenericService<T> where T : class
    {
        private readonly IGenericDal<T> _genericDal;

        public GenericService(IGenericDal<T> genericDal)
        {
            _genericDal = genericDal;
        }

        public void TDelete(int id)
        {
            _genericDal.Delete(id);
        }

        public T TGetByID(int id)
        {
            return _genericDal.GetByID(id);
        }

        public List<T> TGetList()
        {
           return _genericDal.GetList();
        }

        public void TInsert(T entity)
        {
           _genericDal.Insert(entity);
        }

        public void TUpdate(T entity)
        {
           _genericDal.Update(entity);
        }
    }
    
    
}
