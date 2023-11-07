using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarBook.EntityLayer.Concrete
{
	public class CarFeature
	{
        public int CarFeatureId { get; set; }
        public string FeatureName { get; set; }
        public bool HasFeature { get; set; }
        public int CarId { get; set; }
        public Car Car { get; set; }
    }
}
