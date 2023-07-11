const mongoose = require("mongoose")

const URI = "mongodb://localhost:27017/teachersPanel"

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