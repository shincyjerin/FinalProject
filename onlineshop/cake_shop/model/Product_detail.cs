using System.ComponentModel.DataAnnotations;

namespace cake_shop.model
{
    public class Product_detail
    {
        [Key]
        public int cake_id { get; set; }
        public string? cake_name { get; set; } 
        public string? cake_image { get; set; } 
        public double? price  { get; set; }
        public string? description { get; set; } 
      
    }
}
