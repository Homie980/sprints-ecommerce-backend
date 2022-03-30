const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const port = process.env.port || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
