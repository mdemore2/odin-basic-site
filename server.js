const http = require("http");
const port = 8080;

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.write("hello world");
  res.end();
});

server.listen(port, "localhost", () => {
  console.log(`listening on port ${port}`);
});
