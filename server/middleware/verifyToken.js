import { JWT_Secret } from "../config/config.js";
import jwt from "jsonwebtoken"

export const verifyToken = (req,res,next)=>{
    const acc_token = req.headers.authorization;
    if(acc_token){
        const token = acc_token.split(" ")[1];
        jwt.verify(token, JWT_Secret, function(err,user) {
            if (err) {
                return res.json({msg:"Token is invalid"});
            }
            req.user = user;
            next();
        });
    }else{
        return res.json({msg:"User unauthorized"});
    }

}
//   const verifyToken=(req,res,next)=>{
//     const token=req.cookies.access_token;
//     if(!token){return res.status(409).send(`You are not Authorized`)}
//     jwt.verify(token,JWT_Secret,(err,user)=>{
//       if(err) {
//           return res.json({ msg: "You are not Authenticated" });
//       }
//       req.user = user;
//       next();
//     })
//   }
  
  export const verifyUser=(req,res,next)=>{
      verifyToken(req,res,() => {
          if(req.user.id === req.params.id || req.user.isAdmin){
              next()
          }else{
              return res.json({ msg: "You are unauthorized" });
          }
      })
  }
  export const verifyAdmin=(req,res,next)=>{
      verifyToken(req,res,() => {
          if(req.user.isAdmin){
              next()
          }else{
              return res.json({ msg: "You are unauthorized" });
          }
      })
  }