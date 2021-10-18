const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://minhtu:minhtu123@cluster0.mpifo.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-di8ctq-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true');
        console.log('connect thanh cong vao mongoDB')
    } catch (error) {
        console.log('connect loi')
    }
}

module.exports = { connect };
