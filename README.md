# [Introduction to the Basic Node and Express Challenges](https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/)  
## 1/12: myApp.js modified to print "Hello World" on the console.  
## 2/12 Start a working Express server  
### app methods  
- app.listen(port)  
- app.METHOD(PATH, HANDLER): HANDLER is a function that Express calls when the route is matched. Handlers take the form function(req, res) {...}, where *req is the request object, and res is the response object*.  

        app.get('/', MyHandler);  
    
        const MyHandler = (req, res) => {  
        res.send("Hello Express");  
        }  

## 3/12 Serve an HTML file  
- app.sendFile(PATH)  
> relative path: views\index.html  
    
    res.sendFile(__dirname + 'views\index.html');  
  
## 4/12 Serve static assets  
> stylesheets, scripts, images...  
- Middleware function: express.static(path) using absolute path  
> Middleware are functions that intercept route handlers, adding some kind of information. A middleware needs to be mounted using the method app.use(path, middlewareFunction). In app.use, the path argument is optional.  
  
## 5/12 Serve JSON on a Specific Route  

## 6/12 Using .env File

## 7/12 Add a root level middleware to handle all requests with a response  

## 8/12 Middleware chains (create a time (using new Date()) server)  

## 9/12 Express routing  

## 10/12 Query parameter  

## 11-12/12 Receiving data from a POST req (body-parser)

