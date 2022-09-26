const xml2js = require('xml2js')
const builder = new xml2js.Builder()
const axios = require('axios')
const fs = require("fs")
   
const iniciarApi = (req, res) => {
    res.end('API NODE_JS INICIADA')
}

const enviarOrdenes = (req, res) => {

    const xml = builder.buildObject(req.body)
    
    const config = {
        method: 'post',
        url: process.env.POINT_AT.toString(),
        headers: { 
            'Content-Type': 'application/xml'
        },
        data : xml,
        key: fs.readFileSync("src/ssc/ca.key"),
        cert: fs.readFileSync("src/ssc/ca.pem")
    };     
    
    axios(config)
        .then(function (response) {
        res.writeHead(200, {'Content-Type': 'application/xml; charset=utf16', 'Access-Control-Allow-Origin': '*'}) 
        res.end(response.data)              
        })
        .catch(function (error) {
        console.log(error);
        });          
}    

module.exports = {   
    iniciarApi, 
    enviarOrdenes
}
