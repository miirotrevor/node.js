//creating an object called shelby
//const person = {
//name:  "shelby developers",
//age:  30





//}
//module.exports = person;

// creating a class
class person {
constructor(name, age) {
    // passing in 
this.name = name;
this.age = age;
// creating a method
greeting();{
console.log('my name is ${this.name} and i am ${this.age}') 

}
}


}

/////////////////////////////////////////////////////////////
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
///////////////////////////////////////////