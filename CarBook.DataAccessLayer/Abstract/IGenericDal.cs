using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.DataAccessLayer.Abstract
{
    public interface IGenericDal<T> where T : class
    {
        void Delete(int id);
        void Update(T entity);
        void Insert(T entity);
        List<T> GetList();
        T GetByID(int id);
    }
}
