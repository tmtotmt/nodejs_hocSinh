const searchRouter = require('./search.route')
const siteRouter = require('./site.route')
const studentRouter = require('./Student.route')
function routes(app) {

    app.use('/search',searchRouter)
    app.use('/student',studentRouter)
    app.use('/',siteRouter)
}

module.exports = routes