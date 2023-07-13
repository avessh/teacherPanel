const mongoose = require("mongoose")

const URI = "mongodb+srv://user:EyptLWlbHDU81Zwm@cluster0.odypyfz.mongodb.net/CampusWatch"

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connect = () => mongoose.connect(URI, connectionParams).then(() => {
    console.log("connected to database")
}).catch((e) => {
    console.log("error while connecting to database", e);
})

module.exports = connect