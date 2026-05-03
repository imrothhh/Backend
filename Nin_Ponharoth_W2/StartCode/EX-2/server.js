// server.js
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  console.log(`Received ${method} request for ${url}`);

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
        `);
  }
  if (url === "/about" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(`
          <html>
            <body>
              <p>About us: at CADT, we love node.js!</p>
            </body>
          </html>
        `);
  }

  if (url === "/contact-us" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(`
        <html>
          <body>
            <p> You can reach us vai email… </p>
          </body>
        </html>
      `);
  }

  if (url === "/products" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(`
        <html>
          <body>
            <p>Buy one get one…</p>
          </body>
        </html>
      `);
  }

  if (url === "/projects" && method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(`
          <html>
            <body>
              <p>Here are our awesome projects</p>
            </body>
          </html>
        `);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    return res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
