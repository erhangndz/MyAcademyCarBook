using CarBook.EntityLayer.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.BusinessLayer.Abstract
{
	public interface ICarFeatureService:IGenericService<CarFeature>
	{
		List<CarFeature> GetFeaturesByCarId(int id);

	}
}
