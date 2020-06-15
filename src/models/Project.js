const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    fenestration: {
        type: Number,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    light: {
        type: Number,
        required: true,
    },
    color: {
        type: Number,
        required: true,
    },
    material: {
        type: Number,
        required: true,
    },
    furniture: {
        type: Number,
        required: true,
    },
    people: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

module.exports = mongoose.model('Project', projectSchema)