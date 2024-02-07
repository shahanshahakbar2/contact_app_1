require("dotenv").config();

const express = require("express");
const cors = require("cors");

const PORT = Number(process.env.PORT);

const connectDB = require("./db/connectDb");

const app = express(); // express instance

// view engine
app.set('view engine','pug')
app.set('views','./view')

// static declaration
app.use(express.static('./view'))

// body parser middleware
app.use(express.urlencoded({ extended: true })); // query format of incoming data
app.use(express.json()); // json format of incoming data

// cors middleware
app.use(cors());

// import router module
app.use(`/`, require("./route/contact_view"));
app.use(`/api/contact`, require("./route/contact_route"));

// default route
app.all(`*`, (req, res) => {
  res.status(404).json({ msg: `Requested path not found,try /api/users` });
});

// server listen
app.listen(PORT, async () => {
  await connectDB();
  console.log(`server is running @ http://localhost:${PORT}`);
});
