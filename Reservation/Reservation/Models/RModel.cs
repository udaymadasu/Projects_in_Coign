using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Reservation.Models
{
    public class RModel
    {
        public int Snum { get; set; }
        public string Hotel { get; set; }
        public Nullable<System.DateTime> Arrival { get; set; }
        public Nullable<System.DateTime> Depature { get; set; }
        public string Types { get; set; }
        public Nullable<int> Guest { get; set; }
        public Nullable<decimal> Price { get; set; }
    }
}