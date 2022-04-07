const express = require("express");
const app = express();


//Middleware
app.use(express.json());

// Endpoints
app.get("/products", (req, res) => {
    console.log(req.headers);
    res.send("This is a response!");
})

// Starting a server
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    console.log(`Server running! On PORT: ${PORT}`);
});


