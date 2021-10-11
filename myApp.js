var express = require('express');
var bodyParser = require('body-parser');

// ! Creating an Express app object:
var app = express();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use(bodyParser.urlencoded({extended: false}));

// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.use(bodyParser.json()); // ! De no estar, req.body = 'undefined'
  
// app.get('/', MyHandler);

// const MyHandler = (req, res) => {
//   res.send("Hello Express");
// }

// app.get('/', (req, res) => {
//     res.send("Hello Express");
//   });

app.get('/', (req, res) => {
// res.sendFile(__dirname + /views/index.html);
res.sendFile(__dirname + 'views\index.html');
// res.sendFile('./views/index.html');
});

app.use('/public', express.static(__dirname + '/public'));

// app.get('/json', (req, res) => {
//     res.json({"message": "Hello json"});
//   });

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.json({"message": "HELLO JSON"});
    } else {
        res.json({"message": "Hello json"});
    };
});
  
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    // console.log(req.time);
    next();
}, (req, res) => {
    res.send({time: req.time});
});
  
// Routing (params :)
app.get('/:word/echo', (req, res, next) => {
    res.send({echo: req.params.word})
})
  
// Query parameter
app.get('/name', (req, res, next) => {
    let actual_req_URL = '/name?first=firstname&last=lastname'
    // res.json({"name": req.query.first, req.query.last})
    res.send({name: `${req.query.first} ${req.query.last}`})
})
  
// Receiving data from a POST req
// ? app.route('/name').get(handler).post(handler)
  
app.post('/name', (req, res) => {
    res.send({name: `${req.body.first} ${req.body.last}`})
})
  
// app.post('/name', (req, res, next) => {
//   res.send({name: `${req.body.first} ${req.body.last}`})
//   next()
// })
  
// app.post('/name', urlencodedParser, (req, res) => {
//   res.send({name: `${req.body.first} ${req.body.last}`})
// })
  

  








module.exports = app;