const jwt = require('jsonwebtoken');

module.exports.authMiddleware = async(req,res,next) => {
     const {authToken} = req.cookies;
     console.log(req.cookies)
     if(authToken){
          const deCodeToken = await jwt.verify(authToken,process.env.SECRET);
          req.myId = deCodeToken.id;
          next();
     }else{
          res.status(401).json({
               error:{
                    errorMessage: ['Please Login First']
               }
          })
     } 
}