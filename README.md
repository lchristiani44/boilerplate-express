# [Introduction to the Basic Node and Express Challenges](https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/)  
## 1/12: myApp.js modified to print "Hello World" on the console.  
## 2/12 app methods  
- app.listen(port)  
- app.METHOD(PATH, HANDLER): HANDLER is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where *req is the request object, and res is the response object*.  
    
    app.get('/', MyHandler);  
    
    const MyHandler = (req, res) => {  
    res.send("Hello Express");  
    }  
  
## 3/12  
- app.sendFile(PATH)  
> relative path: views\index.html  
    res.sendFile(__dirname + 'views\index.html');  
  
## 4/12  