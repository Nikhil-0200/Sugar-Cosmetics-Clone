const authorization = (req, res, next)=>{
    if(req.user.role === "admin"){
        next()
    }
    else{
        res.send(`You are not authorized to access this route`)
    }
}

export default authorization;