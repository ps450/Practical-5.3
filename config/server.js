const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use("/", productRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
