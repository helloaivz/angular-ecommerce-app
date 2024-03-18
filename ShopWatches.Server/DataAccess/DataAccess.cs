using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopWatches.Server.Models;

namespace ShopWatches.Server.DataAccess
{
    public class DataAccess
    {

        private readonly WatchesDBContext _context;
        public Product GetProduct(int id)
        {
            var product = new Product();
            var productDetails = _context.Products.FirstOrDefault(p => p.Id == id);
            return product;
        }
    }
}