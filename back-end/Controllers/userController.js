const User = require('./../models/userModel.js')
const responseMsg = require('./../utilities/responseMsg.js')


let signUp = async (req,res) => {

    try{

        const {username, useremail, userPass} = req.body

        if (!username || !useremail || userPass) {
            throw("there's something wrong with your inputs")
        }

        let remainUser = User.findOne({useremail: email})
        if (remainUser) {
            throw("this user email is already exist")
        }

        let newUser = new User({
            name: username,
            email: useremail,
            password: userPass
        })

        let done = await newUser.save()
        if (done) {
            res.status(200).json({
                message : responseMsg.SUCCESS,
                data : data
            })
        } else {
            res.status(400).json({
                message : responseMsg.FAIL,
                data : null
            })
        }

    } catch(er) {
        console.log(er.message ? er.message : er)
    }
}

module.exports = {
    signUp
}