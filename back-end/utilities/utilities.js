const jwt = require('jsonwebtoken')

function authenticateToken (req,res)  {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split("")[1]

    if (!token) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user)=> {
        if(err) return res.sendStatus(401);
        req.user = user
        next()

    })
}


module.exports = {
    authenticateToken,
    
}