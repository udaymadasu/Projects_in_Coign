using Reservation.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Reservation.respo
{
    public interface IRes
    {
        List<RModel> Details();
        string Insert(RModel num);

       
        string Del(int sno);
    }
    public class Entity : IRes
    {
        UdayEntities obj = new UdayEntities();
        List<RModel> IRes.Details()
        {
            List<RModel> details = obj.Reservations.Select(s => new RModel()
            {
                Snum = s.Snum,
                Hotel = s.Hotel,
                Arrival = s.Arrival,
                Depature = s.Depature,
                Types = s.Types,
                Guest = s.Guest,
                Price = s.Price
            }).ToList<RModel>();
            return details;
        }

        string IRes.Insert(RModel Sno)
        {
            UdayEntities obj = new UdayEntities();
            var ts = obj.Reservations.Where(e => e.Snum == Sno.Snum).FirstOrDefault();
            if (ts == null)
            {
                obj.Reservations.Add(new Reservation
                {
                    Snum = Sno.Snum,
                    Hotel = Sno.Hotel,
                    Arrival = Sno.Arrival,
                    Depature = Sno.Depature,
                    Types = Sno.Types,              
                    Guest = Sno.Guest,
                    Price = Sno.Price
                });

                obj.SaveChanges();
                obj.Dispose();
                return "inserted";
       
             }

        ////edit
        //string IRes.Update(RModel upd)
        //{
        //    var es = obj.Reservations.Where(r => r.Snum == upd.Snum).FirstOrDefault();
        //    if (es != null)
        else    {
                ts.Snum = Sno.Snum;
                ts.Hotel = Sno.Hotel;
                ts.Arrival = Sno.Arrival;
                ts.Depature = Sno.Depature;
                ts.Types = Sno.Types;
                ts.Guest = Sno.Guest;
                ts.Price = Sno.Price;
                obj.SaveChanges();
                obj.Dispose();
                return "Updated";
            }
           
                 return "updated";
        }

        ////edit
       
 //string IRes.Update(RModel upd)
 //       {
 //           var es = obj.Reservations.Where(r => r.Snum == upd.Snum).FirstOrDefault();
 //           if (es != null)
 //          {
 //               es.Snum = upd.Snum;
 //               es.Hotel = upd.Hotel;
 //               es.Arrival = upd.Arrival;
 //               es.Depature = upd.Depature;
 //               es.Types = upd.Types;
 //               es.Guest = upd.Guest;
 //               es.Price = upd.Price;
 //           }
 //           obj.SaveChanges();
 //           obj.Dispose();
 //                return "updated";
 //       }


string IRes.Del(int sno)
        {
            var ew = obj.Reservations.Where(c => c.Snum == sno).FirstOrDefault();
            if (ew != null)
            {
                obj.Reservations.Remove(ew);

                obj.SaveChanges();
                obj.Dispose();
                return "Deleted";
            }
            return "Deleted";
        }
    }
}


