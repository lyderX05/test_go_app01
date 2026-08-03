var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello from Example1 .NET API");
app.MapGet("/healthz", () => Results.Ok(new { status = "ok" }));
app.MapGet("/api/items/{id:int}", (int id) => Results.Ok(new { id, name = $"item-{id}" }));

app.Run();
