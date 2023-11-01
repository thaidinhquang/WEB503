// const http = require("node:http");
const express = require('express')
const app = express()
const port = 8000

app.use(express.json())

app.get('/products', (req, res) => {
  res.send('Product page!')
})

app.post('/products/:slug/:id', (req, res) => {
  const {params, query, body} = req
  console.log("params:", params)
  console.log(query)
  console.log(body)
  res.send('Add new product page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Create a local server to receive data from
// const app = http.createServer((req, res) => {
//   const { url, method} = req
//   switch (url) {
//     case "/products":
//       res.writeHead(200);
//       res.end(
//         `<h1>Products Page!</h1>`
//       );
//       break;
//     case "/detail":
//       res.end(
//         `<h1>Product detail page</h1>`
//       )

//   }
  
// });

// app.listen(8000, () => {
//   console.log("Server đang chạy trên PORT 8000");
// });