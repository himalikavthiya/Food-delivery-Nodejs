const http = require("http");
const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const { connectDB } = require("./config/dbconnection");
const routes = require("./routes/v1");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

  /* ------- allow form-data from body form-data is use for image upload ------ */
app.use(bodyparser.urlencoded({ extended: false }));

/* ------------------------ allow json data from body ----------------------- */
app.use(bodyparser.json());

/* ------------------------------- enable cors ------------------------------ */
app.use(cors());
app.options("*", cors());

app.use(express.static(path.join(__dirname, `../src/public`)));

/* ------------------------------ use namespace ----------------------------- */
app.use("/v1", routes);

 /* ---- route not created and you try to use that route then throw error. --- */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
})

/* --------------------------- Database connection -------------------------- */
connectDB();

const server = http.createServer(app);
server.listen(process.env.PORT, () => {
  console.log(" Server listning port number " + process.env.PORT);
});
