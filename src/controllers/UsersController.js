const User = require('../models/User')

module.exports = {
    async read(req, res){
        try {
            users = await User.find()
            return res.json(users)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}