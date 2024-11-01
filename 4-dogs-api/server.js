const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Hello World and Dogs!");
})

app.post("/", (req, res) => {
    res.send("Hello World and Dogs!");
})

app.put("/user", (req, res) => {
    res.send("Hello World and Dogs!");
})

app.delete("/user", (req, res) => {
    res.send("Hello World and Dogs!");
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
})