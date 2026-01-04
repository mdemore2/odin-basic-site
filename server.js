const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let path = "./views";
  path += req.url;
  path += ".html";

  if (req.url == "/") {
    res.setHeader("Location", "/index");
    res.end();
  } else {
    res.setHeader("Content-Type", "text/html");

    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        fs.readFile("./views/404.html", (err, data) => {
          if (err) {
            console.log(err);
            res.end();
          } else {
            res.end(data);
          }
        });
      } else {
        res.end(data);
      }
    });
  }
});

server.listen(port, "localhost", () => {
  console.log(`listening on port ${port}`);
});
