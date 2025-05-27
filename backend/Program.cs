using backend.Data;
using backend.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// إضافة DbContext
builder.Services.AddDbContext<AppDbContext>();

// (اختياري مؤقتًا للتجريب)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseHttpsRedirection();
app.UseCors(); // استخدم CORS

// نقطة GET لكل المنتجات
app.MapGet("/api/products", async (AppDbContext db) =>
    await db.Products.ToListAsync());

// نقطة POST لإضافة منتج
app.MapPost("/api/products", async (AppDbContext db, Product product) =>
{
    db.Products.Add(product);
    await db.SaveChangesAsync();
    return Results.Created($"/api/products/{product.Id}", product);
});

app.Run();
