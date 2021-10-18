class SiteController {
    admin(req, res) {
        res.render('site/admin');
    }
    home(req, res) {
        res.render('site/home');
    }
}

module.exports = new SiteController;
