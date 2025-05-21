using cake_shop.model;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;


namespace cake_shop.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<order_detail> order_Details { get; set; }

        public DbSet<Admin_Registration> admin_Registrations { get; set; }
        public DbSet<UserRegistration> userRegistrations { get; set; }
        public DbSet<Product_detail> product_Details { get; set; }
    }
}
