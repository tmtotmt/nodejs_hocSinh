class SiteController {
    admin(req, res) {
        res.render('site/admin');
    }
}

module.exports = new SiteController;
