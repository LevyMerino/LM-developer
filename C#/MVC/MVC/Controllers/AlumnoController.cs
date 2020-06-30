using MVC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MVC.Controllers
{
    public class AlumnoController : Controller
    {
        // GET: Alumno
        public ActionResult Index()
        {

            studentsContext db = new studentsContext();
          //  List<Students> lista =  db.Students.Where(a => a.age > 18).ToList();
            return View(db.Students.ToList());
        }
        public ActionResult Agregar()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Agregar(Students a)
        {
            return View();
        }
    }
}