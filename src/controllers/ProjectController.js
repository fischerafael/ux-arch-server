const Project = require('../models/Project')

module.exports = {
    async create(req,res){
        const { category, name, score, url, fenestration, size, light, color, material, furniture, people } = req.body
        const { user_id } = req.headers
        try {
            const project = await Project.create({ 
                category,
                name, 
                score, 
                url, 
                fenestration, 
                size, 
                light, 
                color, 
                material, 
                furniture, 
                people, 
                user: user_id, 
                category 
            })
            await project.populate('user').execPopulate()
            return res.status(200).json(project)           
        } catch(err) {
            return res.status(400).send(err)
        }
    },
    async delete(req,res){
        const { _id } = req.params
        const { user_id } = req.headers
        console.log(_id, user_id)
        if (!user_id) return res.status(400).send('Usuário não logado')
        try {
            let project = await Project.findOne({ _id })
            if (project.user != user_id) return res.status(400).send('Operação não permitida')
            project = await Project.deleteOne({ _id })
            return res.status(200).json('Projeto deletado com sucesso')
        } catch(err) {
            return res.status(400).send(err)
        }        
    },
    async index(req,res){
        const { user_id } = req.params
        try {
            const projects = await Project.find({ user: user_id })
            return res.status(200).json(projects)
        } catch(err) {
            return res.status(400).send(err)
        }
    }
}
