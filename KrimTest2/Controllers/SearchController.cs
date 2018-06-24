using Microsoft.AspNetCore.Mvc;

namespace KrimTest2.Controllers
{
    public class SearchController : Controller
    {
        public IActionResult Index(string q)
        {
            ViewBag.SearchString = q;
            return View();
        }

        public IActionResult BingSearch(string q)
        {
            ViewBag.SearchString = q;
            return View();
        }
    }
}