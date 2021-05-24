const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')   // Require Express to run server and routes
const app = express()   // Start up an instance of app
const mockAPIResponse = require('./mockAPI.js')
const axios = require ('axios')
const fetch = require('node-fetch')

//configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors')
app.use(cors());
const cookieParser = require('cookie-parser')
app.use(cookieParser());

// Initialize the main project folder
app.use(express.static('dist'))

//console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// sends post request with the typed url from the user to the server and get the article data then post it to the client lib.
app.post('/test', async function (req, res) {
    const url = req.body.url;
    const API_KEY = "577f830a03cec73f9d7563a3d3cf886a";
    let response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${url}&lang=en`, { method: "POST" })

    let articleData = await response.json()
    {console.log(" article data")}
    {console.log(articleData)}
    if (articleData && articleData.status.code == 0)
        res.send(articleData)
    else res.status(500).send({ message: 'error' , error: error })
})

/*app.get('/test', function(req,res){
    const API_KEY = "577f830a03cec73f9d7563a3d3cf886a";
    axios.post(`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&lang=auto&text=${req.query.text}`)
    .then((response)=>{
        res.status(200).send({ message: '', data : response.data});
    },(error)=>{
        res.status(500).send({ message: 'error' , error: error});
    });
})*/

/*app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})*/
