const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const cors = require("cors");
dotenv.config();


const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);

app.get("*" , (req,res)=>{
    res.send("Error 404");
})
app.listen(5000, () => {
  console.log(' backend server running on http://localhost:5000');
});