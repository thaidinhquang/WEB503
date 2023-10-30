const http = require("node:http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    // JSON.stringify({
    //   data: "Hello World!",
    // })
    `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>xin chao tat ca moi nguoi</h1>
        </body>
        </html>
    `
  );
});

server.listen(8000,()=>{
    console.log("sever running on post 8000")
});
