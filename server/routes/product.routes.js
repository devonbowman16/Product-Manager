const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.newProduct);
    app.get("/api/products/:id", ProductController.oneProduct);
    app.get("/api/products/:id/edit", ProductController.oneProduct)
    app.put("/api/products/:id", ProductController.updateProduct);
    app.delete("/api/products/:id", ProductController.deleteProduct);
}