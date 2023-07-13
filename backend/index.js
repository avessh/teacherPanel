const express = require('express')
const connect_database = require('./DB')
const bodyParser = require('body-parser')
const cors = require('cors')
const create_class = require('./Routes/Class');


const app = express()
app.use(express.json())

app.use(cors())
app.options('*', cors());

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"]
}))

const PORT = 8000


app.listen(PORT, () => {
    console.log(`listing on port ${PORT}`);
})



//connection to database
connect_database()
// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

//apis
//api to create class

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use("/createclass", jsonParser, create_class)

