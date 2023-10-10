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
    public class PriceService : IPriceService
    {
        private readonly IGenericDal<Price> _priceDal;

        public PriceService(IGenericDal<Price> priceDal)
        {
            _priceDal = priceDal;
        }

        public List<Price> GetAll()
        {
            using var context = new Context();
            
           return context.Prices.Include(x=>x.CarID).ToList();
                
            
        }

        public void TDelete(int id)
        {
            _priceDal.Delete(id);
        }

        public Price TGetByID(int id)
        {
           return _priceDal.GetByID(id);
        }

        public List<Price> TGetList()
        {
            return _priceDal.GetList();
        }

        public void TInsert(Price entity)
        {
            _priceDal.Insert(entity);
        }

        public void TUpdate(Price entity)
        {
            _priceDal.Update(entity);
        }
    }
}
