const Student = require('../models/Student.model')

class SiteController {
    admin(req, res, next) {
        res.render('site/admin');
    }
    home(req, res, next) {
       
        // lấy danh sách từ student ra, truyền vào page Home
        Student.find({})
            .then(dataStundent => res.render('site/home',{
                dataStundent: dataStundent
            }))
            .catch(err => next(err))
    }
    err(req, res, next) {
        res.render('site/err404')
    }
}

module.exports = new SiteController;
