const express=require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const uuid = require('uuid');

mongoose.connect("mongodb://localhost:")
const PORT=9600
const HOST="127.0.0.1"
const app = express();
let router =express.Router();
app.use(bodyParser.json());




let sendHello =(request,response)=>{
    console.log(request.body)
    response.send("OK")
}
router.route('/').get(sendHello);
router.route('/').post(sendHello);
app.use(router);

app.listen(PORT,HOST,()=>{
    console.log(`listening on ${HOST}:${PORT}`)
})