const mongose= require('mongoose');

const toDoSchema = mongose.Schema({
    description:{
        type:String,
        required: true,
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
    }
})

const TODO = mongose.model('TODO',toDoSchema);

module.exports = TODO;