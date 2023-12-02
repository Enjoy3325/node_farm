const fs = require("fs");
const http = require("http");
const { dirname } = require("path");
const url = require("url");

// / / / / / / / /
// FILES
// const textIn = fs.readFileSync('./text/inputText.txt', 'utf-8');
//     console.log(textIn);

// const textOut = `This is my expiriance about the car: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./text/outputText.txt', 'utf-8', textOut);

// fs.readFile('./text/start.txt', 'utf-8', (eror, data1)=> {
//     fs.readFile(`./text/${data1}.txt`, 'utf-8', (error, data2)=>{
// console.log("**",data2)
//     fs.readFile('./text/append.txt', 'utf-8', (eror, data3)=>{
//         console.log("***",data3)
//         fs.writeFile('./text/final.txt', `${data2}\n${data3}`, 'utf-8', (error, data4)=>{
//             console.log(data4);
//         })
//     }
//     );
// })
// })
// console.log("Will read file!");

// / / / / / / / /
// SERVER

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template-overview.html`,
  "utf-8");
//   const tempCard = fs.readFileSync(
//     `${__dirname}/templates/template-card.html`,
//     "utf-8");
//     const tempProduct = fs.readFileSync(
//       `${__dirname}/templates/template-product.html`,
//       "utf-8");
const data = fs.readFileSync(
    `${__dirname}/dev-data/data.json`,
    "utf-8")
 
      const  dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
// Overviev page
  if (pathName === "/" || pathName === "/overview") {
    res.writeHead(200, { "Content-type": "text/html"})
    res.end(tempOverview);
    // Product page
  } else if (pathName === "/product") {
    res.end(tempProduct);
    // API
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json"})
   res.end(data)
  } else {
    // Not found
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found!</h1>");
  }
  // res.end("Hello from the server!");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to requests on port 3000");
});
