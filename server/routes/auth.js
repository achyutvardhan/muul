const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/getToken', (req, res) => {
   try{
       const user = {
        email : "achyutvardhan234@gmail.com",
        name : "Achyut Vardhan"
       }
       const token =  jwt.sign(user, process.env.CUBEJS_API_SECRET, { expiresIn: '1d' });
       res.json({ token });
   }catch(error){
    res.status(401).json({ error });
   }
    // Generate JWT token
   
});

module.exports = router;