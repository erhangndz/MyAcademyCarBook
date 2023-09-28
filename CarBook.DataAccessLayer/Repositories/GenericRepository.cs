using CarBook.DataAccessLayer.Abstract;
using CarBook.DataAccessLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.DataAccessLayer.Repositories
{
    public class GenericRepository<T> : IGenericDal<T> where T : class
    {
        Context context = new Context();
        public void Delete(int id)
        {
            var values = context.Set<T>().Find(id);
            context.Remove(values);
            context.SaveChanges();
        }

        public T GetByID(int id)
        {
            return context.Set<T>().Find(id);
        }

        public List<T> GetList()
        {
           return context.Set<T>().ToList();
        }

        public void Insert(T entity)
        {
            context.Set<T>().Add(entity); 
            context.SaveChanges();
        }

        public void Update(T entity)
        {
           context.Set<T>().Update(entity); 
            context.SaveChanges();
        }
    }
}
