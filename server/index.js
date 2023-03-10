const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require("./routes/auth");

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB connection successful');
}).catch((err) => {
    console.log(err.message);
});

app.use("/api/auth", authRoutes);

const server = app.listen(process.env.PORT,() => {
    console.log(`Server started on PORT ${process.env.PORT}`);
})