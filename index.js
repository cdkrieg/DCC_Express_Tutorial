const express = require("express");
const repoContext = require("./repository/repository-wrapper");
const app = express();


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Endpoints
app.get("/api/products", (req, res) => {
    console.log(req.headers);
    const products = repoContext.products.findAllProducts();
    return res.send(products);
})

app.get("/api/products/:id", (req, res) => {
    const id = req.params.id;
    const product = repoContext.products.findProductById(id);
    return res.send(product);
})

app.post("/api/products", (req,res) => {
    const newProduct = req.body;
    const addedProduct = repoContext.products.createProduct(newProduct);
    return res.status(201).send(addedProduct);
})

// Starting a server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server running! On PORT: ${PORT}`);
});


