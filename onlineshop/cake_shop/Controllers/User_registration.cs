using cake_shop.Data;
using cake_shop.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace cake_shop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class User_registration : ControllerBase
    {


        private readonly ApplicationDbContext _context;

        public User_registration(ApplicationDbContext context)
        {
            _context = context;



        }

        


        [HttpPost("User_login")]
       
        public async Task<ActionResult<UserRegistration>> Login([FromBody] login_user request)
        {
            // Find user by username and password
            var userlogin = _context.userRegistrations
                .Where(u => u.username == request.username && u.userpassword == request.userpassword)
                .SingleOrDefault();

            if (userlogin == null)
            {
                return Unauthorized(new { message = "Invalid username or password." });
            }

            return Ok(new { message = "Login successful" });
        }





        [HttpPost("User_register")]
        public async Task<ActionResult<UserRegistration>> Register(UserRegistration reg)
        {
            if (_context.userRegistrations.Any(x => x.username == reg.username && x.useremail == reg.useremail))
            {
                return BadRequest("Username and Email already exists.");
            }
           // var maxid = _context.userRegistrations.Max(x => x.userid);

            var registr = new UserRegistration()
            {
                
               // userid = maxid + 1,
                username =reg.username,
                userpassword = reg.userpassword,
                useremail = reg.useremail,
                useraddress = reg.useraddress,
                usermobile = reg.usermobile

            };
            _context.userRegistrations.Add(registr);
            _context.SaveChanges();
            return Ok("success");
        }


        //****************************************   admin



        [HttpPost("Admin_login")]
        public async Task<ActionResult<Admin_Registration>> AdmLogin([FromBody] Ad_Registration reg)
        {
            
            var userlogin = _context.admin_Registrations
                .SingleOrDefault(u => u.adminname == reg.username && u.password == reg.userpassword);

            if (userlogin == null)
            {
                return Unauthorized(new { message = "Invalid username or password." });
            }

            return Ok(new
            {
                message = "Login successful",
                
            });
        }



        [HttpPost("Admin_register")]
        public async Task<ActionResult<Admin_Registration>> Adm_Register(Admin_Registration reg)
        {
            if (_context.admin_Registrations.Any(x => x.adminname == reg.adminname  && x.email == reg.email))
            {
                return BadRequest("Username and Email already exists.");
            }
            var maxid = _context.admin_Registrations.Max(x => x.adminid);
            var registr = new Admin_Registration()
            {
                adminid = maxid+1,
                adminname = reg.adminname,
                email = reg.email,
                password = reg.password,
                

            };
            _context.admin_Registrations.Add(registr);
            _context.SaveChanges();
            return Ok("success");
        }


        //************************************************************************



        [HttpGet("view_product")]
        public async Task<ActionResult<IEnumerable<Product_detail>>> GetProducts()
        {
            return _context.product_Details.ToList();
        }




        [HttpGet("view_orders")]
        public async Task<ActionResult<IEnumerable<dynamic>>> viewOrdes()
        {

            var details = (from or in _context.order_Details
                          join pro in _context.product_Details
                          on or.product_id equals pro.cake_id
                          select new { pro.cake_name, or.quantity,or.total_amount,or.delivery_date }).ToList();
                        
            return details;
        }


        [HttpGet("ViewMyorder")]
        public async Task<ActionResult<IEnumerable<dynamic>>> viewmyorder()
        {

            var deta = (from or in _context.order_Details
                           join pro in _context.product_Details
                           on or.product_id equals pro.cake_id
                          
                            select new { pro.cake_name, or.quantity, or.total_amount, or.delivery_date,or.order_id }).OrderByDescending(x=>x.order_id).ToList();

           

           var order_det = deta.OrderByDescending(x=>x.order_id).FirstOrDefault();
            List<dynamic> lists = new List<dynamic>();
            lists.Add(order_det);

            if (order_det == null)
            {
                return Unauthorized("No order.");
            }
            return lists;
        }




        [HttpPost("ADD_Product")]
        public async Task<ActionResult<Product_detail>> Add_product([FromBody] addProduct cake)
        {
            if (cake == null)
            {
                return BadRequest("Invalid request data.");
            }

            // Check if the product already exists
            if (_context.product_Details.Any(x => x.cake_name == cake.cake_name))
            {
                return BadRequest("Cake already added.");
            }

            var cakes = new Product_detail
            {
                cake_name = cake.cake_name,
                price = cake.price,
                description = cake.description,
                cake_image = cake.cake_image
            };

            _context.product_Details.Add(cakes);
            await _context.SaveChangesAsync(); // Use async method

            return Ok(new { message = "Product added successfully!" });
        }




        [HttpPost("ADD_order")]
        public async Task<ActionResult<order_detail>> Add_order([FromBody] OrderDetail cake)
        {
            if (cake == null)
            {
                return BadRequest("Invalid order data.");
            }

            var order = new order_detail
            {
                product_id = cake.ProductId,
                quantity = cake.Quantity,
                message = cake.Message,
                address = cake.Address,
               // userId = cake.userid,
                delivery_date = cake.DeliveryDate,
              //  paymentmethod = cake.paymentmethod,
                total_amount = cake.TotalAmount
            };

            _context.order_Details.Add(order);
            await _context.SaveChangesAsync(); // Use async method

            return Ok(new { message = "Order placed successfully!" });
        }

        [HttpPost("Edit_Product")]
        public async Task<ActionResult<Product_detail>> Edit_product([FromBody] Product_detail cake)
        {
            if (cake == null)
            {
                return BadRequest("Invalid request data.");
            }
            var data1 = _context.product_Details.Where(x => x.cake_name == cake.cake_name).SingleOrDefault();
            // Check if the product already exists
            if (data1==null)
            {
                return BadRequest("Not found");
            }



            data1.cake_name = cake.cake_name=="null" ? data1.cake_name: cake.cake_name;
            data1.price = cake.price== Convert.ToDouble(0) ? data1.price : cake.price;
            data1.description = cake.description == "null" ? data1.description : cake.description;
            data1.cake_image = cake.cake_image == "null" ? data1.cake_image : cake.cake_image;
           


            await _context.SaveChangesAsync(); // Use async method

            return Ok(new { message = "Product added successfully!" });
        }





    }

}

