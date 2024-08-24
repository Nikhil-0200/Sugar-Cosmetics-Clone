import jsonwebtoken from "jsonwebtoken";
import userModel from "../models/user.model.js";
const jwt = jsonwebtoken;

const auth = (req, res, next) =>{
     const authHeaders = req.headers["authorization"];

     const token = authHeaders && authHeaders.split(" ")[1];

     if(!token){
        return res.status(500).json({msg: `Token Required`})
     }

     if(token){
        try {
            jwt.verify(token ,process.env.SECRET_KEY, async (err, decoded)=>{
                if(err){
                    return res.status(500).json({msg: `Invalid Token`})
                }

                if(decoded){
                    const userId = decoded.id;
                    const user = await userModel.findById(userId);

                    if(!user){
                        return res.status(500).json({msg: `User not found in auth`})
                    }

                    if(user){
                        req.user = user;
                        next()
                    }
                }
            })
        } catch (error) {
           return res.status(500).json({msg: `Invalid Token`})
        }
     }
}

export default auth;