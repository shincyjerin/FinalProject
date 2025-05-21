using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace cake_shop.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "admin_Registrations",
                columns: table => new
                {
                    adminid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    adminname = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_admin_Registrations", x => x.adminid);
                });

            migrationBuilder.CreateTable(
                name: "order_Details",
                columns: table => new
                {
                    order_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    product_id = table.Column<int>(type: "int", nullable: false),
                    quantity = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    message = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    userId = table.Column<int>(type: "int", nullable: false),
                    delivery_date = table.Column<DateTime>(type: "datetime2", nullable: true),
                    paymentmethod = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    total_amount = table.Column<double>(type: "float", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_order_Details", x => x.order_id);
                });

            migrationBuilder.CreateTable(
                name: "product_Details",
                columns: table => new
                {
                    cake_id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cake_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    cake_image = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    price = table.Column<double>(type: "float", nullable: true),
                    description = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_product_Details", x => x.cake_id);
                });

            migrationBuilder.CreateTable(
                name: "userRegistrations",
                columns: table => new
                {
                    userid = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    username = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    useremail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    userpassword = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    usermobile = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    useraddress = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_userRegistrations", x => x.userid);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "admin_Registrations");

            migrationBuilder.DropTable(
                name: "order_Details");

            migrationBuilder.DropTable(
                name: "product_Details");

            migrationBuilder.DropTable(
                name: "userRegistrations");
        }
    }
}
