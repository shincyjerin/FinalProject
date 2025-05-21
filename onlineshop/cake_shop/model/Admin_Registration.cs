using System.ComponentModel.DataAnnotations;

namespace cake_shop.model
{
    public class Admin_Registration
    {
        [Key]
        public int adminid { get; set; } 
        public string adminname { get; set; } 

        public string email { get; set; } 
        public string password { get; set; } 

    }
}
