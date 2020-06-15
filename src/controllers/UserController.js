const User = require('../models/User')

module.exports = {
    async create(req, res){
        const { email, password } = req.body
        let user = await User.findOne({ email })
        if (user) return res.status(400).send('Usuário existente')
        try {
            user = await User.create({
                email,
                password,
            })
            return res.status(200).json({ email })
        } catch(err) {
            return res.status(400).send(err)
        }
    },
    async read(req, res){
        const { email } = req.params
        try {
            const user = await User.findOne({ email })
            if (!user) return res.status(400).send('Usuário não encontrado')
            return res.status(200).json(user._id)
        } catch(err) {
            return res.status(400).send(err)        
        }
    }, 
    async delete(req, res){
        const { email } = req.params
        const { auth } = req.headers        
        if (!auth) return res.status(400).send('Operação não autorizada. Usuário não autenticado')
        try {
            let user = await User.findOne({ email })            
            if (auth != user._id) return res.status(400).send('Operação não autorizada. Autenticação incorreta')
            await User.deleteOne({ email })
            return res.status(200).json(`Usuário ${email} deletado com sucesso`)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}

