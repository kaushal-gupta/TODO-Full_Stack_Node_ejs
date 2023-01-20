
const TODO = require('../models/models');

module.exports.home = function(req,res){
    
    const TODO = require('../models/models');
    TODO.find({},function(err,TODOs){
        // console.log(TODOs[0]);
        return res.render('home',{
            title:'Home',
            descriptionText:'Description',
            descriptionPlaceholder:'What you need to do?',
            categoryText: 'Category',
            choseCategoryText: 'Choose Category Text',
            categoryList:['Personal', 'Work', 'School', 'Cleaning', 'Others' ],
            dueDateText: 'Due Date',
            button1:'Add Tasks',
            button2:'Delete Tasks',
            TODOs:TODOs
        })
    })

    
}

module.exports.addTask=function(req,res){

    TODO.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date,

    },function(err, newTODO){
        if(err){
            console.log(err);
            return;
        }
        res.redirect('back');
    })

}


module.exports.deleteTask =  function(req, res){
    // console.log('delete', req.query.id);

    TODO.findByIdAndDelete(req.query.id,function(err ){
        if(err){console.log('error in deleting the todo'); return; }

        res.redirect('back');
    })
}