require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const rateLimit = require("express-rate-limit");
const compression = require("compression");
const rfs = require("rotating-file-stream");
const cors = require("cors");

const app = express();

const limiter = rateLimit({
  windowMs: 60 * 1000 * process.env.limit_minutes || 120000, // 2 minutes
  max: process.env.limit_max_requests || 100, // limit each IP to 100 requests per windowMs
  //   keyGenerator(req) { // enable if using it behind cloudflare
  //     return req.headers['cf-connecting-ip'];
  //   },
});

// create a rotating write stream
const accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "logs"),
});
const shouldCompress = (req, res) => {
  if (req.headers["x-no-compression"]) {
    return false; // don't compress responses with this request header
  }
  return compression.filter(req, res); // fallback to standard filter function
};

app.use(logger("combined", { stream: accessLogStream }));
app.use(limiter);
app.use(cors());

app.disable("x-powered-by");
app.use(compression({ filter: shouldCompress }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Middleware to add some data to res.locals
app.use((req, res, next) => {
  const { cachedPosts } = require("./controllers/posts");
  res.locals.cachedPosts = cachedPosts;
  next(); // Don't forget to call next() to move on to the next middleware
});
const indexRouter = require("./routes/index");

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res) => {
  // next(createError(404));
  res.status(404).json({ status: 404, message: "Not Found" });
});

module.exports = app;
