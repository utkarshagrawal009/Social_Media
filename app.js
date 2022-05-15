const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const port = process.env.PORT || 8800;


const app = express();

dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
);

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/authenticate", authRoute);
app.use("/api", userRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
    res.send("Welome")
});

app.listen(port, () => console.log(`Listening to ${port}`));