const express = require('express')
const app = express()
const path = require('path');
const morgan = require('morgan')
const port = 3000


// hàm routes từ folder routes
const routes = require('./routes/index.route.js')
const db = require('./config/db/index.db')

//Connect to DB
db.connect()
// set mục static
app.use(express.static(path.join(__dirname, 'public')))
//HTTP các thông tin được hiện ở teminal, dễ dàng fix lỗi
app.use(morgan('combined'))
//set template engine ejs
app.set('view engine', 'ejs')
//set views mặt định, các file view(ejs) được tìm bắt đầu từ thư mục ./views
app.set('views', path.join(__dirname, 'views'));
//để đọc req.body không bị lỗi, ra dung urlencoded 
app.use(express.urlencoded({
  extended: true
}))
// dùng để gửi dữ liệu Từ client lên serve, ... ( có dạng JSON sẽ không bị lỗi ??)
app.use(express.json())

// call hàm với đối số app, để HTTP qua bên routes 
routes(app)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})