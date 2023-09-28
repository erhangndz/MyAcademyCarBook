using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.BusinessLayer.Abstract
{
    public interface IGenericService<T> where T : class
    {
        void TDelete(int id);
        void TUpdate(T entity);
        void TInsert(T entity);
        List<T> TGetList();
        T TGetByID(int id);
    }
}
