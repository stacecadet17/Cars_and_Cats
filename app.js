// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if (request.url === '/cats') {
         fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/cars/new") {
         fs.readFile('./views/newcar.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }

    //images 
    else if (request.url === "/images/audi.jpg") {
         fs.readFile('./images/audi.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/lexus.jpg") {
         fs.readFile('./images/lexus.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/STI.jpg") {
         fs.readFile('./images/STI.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/lights.jpg") {
         fs.readFile('./images/lights.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/kitten1.jpg") {
         fs.readFile('./images/kitten1.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/kitten2.jpg") {
         fs.readFile('./images/kitten2.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/kittens3.jpg") {
         fs.readFile('./images/kittens3.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }
    else if (request.url === "/images/kitten4.jpg") {
         fs.readFile('./images/kitten4.jpg', function (errors, contents){
             response.writeHead(200, {'Content-type': 'image/jpg'});
             response.write(contents);
             response.end();
         });
    }

    // request didn't match anything:
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");
