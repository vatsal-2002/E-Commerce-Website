const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const errorMiddleware = require("./middleware/errorMiddleware");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const popularRoute = require("./routes/popularRoute");
const fruitRoute = require("./routes/fruitRoute");
const breakfastRoutes = require("./routes/breakfastRoutes");
const snacksRoute = require("./routes/snacksRoute");
const blogRoutes = require("./routes/blogRoutes");
const adminRoute = require("./routes/adminRoute");
const fruitRoutes = require("./routes/adminfruitRoutes");
const dairyBreadEggsRoutes = require("./routes/admindairyBreadEggsRoutes");
const chickenMeatFishRoutes = require("./routes/adminchickenMeatFishRoutes");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", popularRoute);
app.use("/api", fruitRoute);
app.use("/api", breakfastRoutes);
app.use("/api", snacksRoute);
app.use("/api", blogRoutes);
app.use("/api", adminRoute);
app.use("/api", fruitRoutes);
app.use("/api", dairyBreadEggsRoutes);
app.use("/api", chickenMeatFishRoutes);

app.use(errorMiddleware);
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
