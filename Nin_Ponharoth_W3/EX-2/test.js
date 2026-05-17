// server.js
import express from "express";
import courses from "./course.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/products/:id', (req,res) => {
    console.log(req.params);
    console.log(req.query);
    res.send("Check the console");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
