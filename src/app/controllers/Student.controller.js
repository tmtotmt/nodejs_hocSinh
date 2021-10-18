const Student = require('../models/Student.model.js')

class StutentController {
    show(req, res, next) {
        Student.find({})
            .then((dataStundent)=>{
                const data = dataStundent.filter(e=>e.name === req.params.slug)[0]
                if(data){
                    return  res.render('detailStudent',{student: data})
                } else {
                    return res.render('site/err404')
                }

               
            })
            .catch(err => next (err))
    }
    createPage(req, res, next) {
        res.render('create')
    };
    store(req, res, next) {
        
        req.body.img =  `http://img.youtube.com/vi/${req.body.video}/hqdefault.jpg`
        req.body.video = `https://www.youtube.com/embed/${req.body.video}`
        const student = new Student(req.body);
        student.save()
            .then(() => res.redirect('back'))
            .catch(next);
  
    }
}

module.exports = new StutentController;
