const Student = require('../models/Student.model.js')

class StutentController {
    show(req, res, next) {
        Student.findOne({slug: req.params.slug })
            .then((dataStundent)=>{
                if(dataStundent){
                    return  res.render('detailStudent',{student: dataStundent})
                } else {
                    return res.render('site/err404')
                }               
            })
            .catch(err => next (err))
    }
    createPage(req, res, next) {
        res.render('create')
    };
    edit(req, res, next) {
        Student.findOne({slug: req.params.slug})
            .then((data) => {
                return res.render('edit',{student: data})
            })
            .catch(next)
    };

    //[PUT] /student/:slug/edit
    update(req, res, next) {
        Student.updateOne({slug: req.params.slug}, req.body)
            .then(()=>res.redirect('/student/showStore'))
            .catch(next)
    }
    delete(req, res, next) {
        Student.deleteOne({ slug: req.params.slug })
            .then(()=>res.redirect('back'))
            .catch(next)
    }
    store(req, res, next) {
        req.body.video = req.body.video.trim()
        req.body.img = req.body.video 
        const student = new Student(req.body);
        Student.create(student)
            .then(()=> res.redirect('back'))
            .catch(next)
    }
    showStore(req, res, next ) {
        Student.find({})
            .then((dataStundent)=>res.render('showStore.ejs',{stundents: dataStundent}))
    }
}

module.exports = new StutentController;
