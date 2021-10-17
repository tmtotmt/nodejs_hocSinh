const searchRouter = require('./search.route')
const siteRouter = require('./site.route')
function routes(app) {

    app.use('/search',searchRouter)
    app.use('/admin',siteRouter)
}

module.exports = routes