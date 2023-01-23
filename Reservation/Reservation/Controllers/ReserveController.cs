using Reservation.Models;
using Reservation.respo;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Reservation.Controllers
{
    [EnableCors(origins: "*" ,headers : "*" , methods:"*")]
    public class ReserveController : ApiController
    {
        public readonly IRes respo;
        public ReserveController(IRes res)
        {
            this.respo = res;
        }

        [Route("api/Reserve/get")]
        [HttpGet]
        public IHttpActionResult Details()
        {
            var ts = respo.Details();
            if (ts.Count == 0)
            {
                return NotFound();
            }
            return Ok(ts);
        }


        //insert 
        [Route("api/Reserve/po")]
        [HttpPost]
        public IHttpActionResult Post(RModel num)
        {
            var status = respo.Insert(num);
            if(status == "inserted")
            {
                return Ok(status);
            }
         else if(status == "Updated")
            {
                return Ok(status);
            }
            return NotFound();
        }
        //update

        //[Route("api/control/post")]
        //[HttpPost]
        //public IHttpActionResult Po(RModel upd)
        //{
        //    var status = respo.Update(upd);
        //    if (status == "Updated")
        //    {
        //        return NotFound();
        //    }
        //    return Ok(status);

        //}

            [Route("api/Reserve/del/{sno}")]
        [HttpDelete]
        public IHttpActionResult del(int sno)
        {
            var status = respo.Del(sno);
            if (status == "Deleted")
            {
                return Ok(status);

            }
            return NotFound();
        }
    }
}


