using System.ComponentModel.DataAnnotations;

namespace cake_shop.model
{
    public class UserRegistration
    {
        [Key]
        public int userid { get; set; } 
        public string username { get; set; } 
        public string useremail { get; set; } 
        public string userpassword { get; set; } 
        public string usermobile { get; set; } 
        public string useraddress { get; set; } 



    }
}
