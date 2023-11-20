using CarBook.BusinessLayer.Dtos;
using CarBook.EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.BusinessLayer.Abstract
{
    public interface ICarService:IGenericService<Car>
    {
        List<Car> TGetAll();

        List<Car> GetLast5Cars();
        List<Car> GetLast3Cars();

		public List<CategoryDto> GetCategoryCount();

	}
}
