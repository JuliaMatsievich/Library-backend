const express = require("express");
const dotenv = require("dotenv");
const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const loggerOne = require("./middlewares/loggerOne");
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require("mongoose");


dotenv.config();
const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/library_backend"
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log(`Connected to MongoDb: ${MONGO_URL}`))
  .catch((error) => console.log(error));

const app = express();
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);
app.use(loggerOne);
app.use(cors());


app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу: ${API_URL}:${PORT}`);
});
