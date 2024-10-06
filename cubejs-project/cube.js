const jwt = require("jsonwebtoken")
module.exports = {
    basePath: '/cubejs-api',
    checkAuth: (req, auth) => {
      const token = req.headers.authorization ;
      console.log("auth",auth);
        if (!token) {
          throw new Error('Authorization token is missing');
        }
    
        try {
          const decoded = jwt.verify(token, process.env.CUBEJS_API_SECRET);
          
          return decoded;
        } catch (error) {
          throw new Error('Invalid or expired token');
        }
      }
}

