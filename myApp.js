// ! Creating an Express app object:
var express = require('express');
var app = express();

// 
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


  



































 module.exports = app;
