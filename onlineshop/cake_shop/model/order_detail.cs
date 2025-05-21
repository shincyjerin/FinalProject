using System.ComponentModel.DataAnnotations;

namespace cake_shop.model
{
    public class order_detail
    {
        [Key]
        public int order_id { get; set; }
        public int product_id  { get; set; } 
        public decimal quantity { get; set; }
        public string message { get; set; }
        public string address { get; set; }
        public int userId { get; set; }
        public DateTime? delivery_date { get; set; } 
        public string? paymentmethod { get; set; }
        public double? total_amount { get; set; } 

    }
}
