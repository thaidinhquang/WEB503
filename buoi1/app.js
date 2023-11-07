const http = require("node:http");

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    // JSON.stringify({
    //   data: "Hello World!",
    // })
    `
            <h1>xin chao tat ca moi nguoi</h1>
    `
  );
});

server.listen(8000, () => {
  console.log("sever running on post 8000")
});
