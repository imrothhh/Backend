// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    console.log(`Received ${method} request for ${url}`);
//200 here mean the status is ok if 400 mean error or not found 
    if (url === '/' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to the Home Page');
    }

    if (url === '/contact' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
          <form method="POST" action="/contact">
            <input type="text" name="name" placeholder="Your name" />
            <button type="submit">Submit</button>
          </form>
        `);
        return;
    }

    if (url === '/contact' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
    
        req.on('end', () =>{
            const name = new URLSearchParams(body).get('name');
            fs.appendFile('submissions.txt', name + '\n', () =>{
                // res.end("Yesssssssss");
                //write as HTML instead 
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`
            <html>
                <head><title>Confirmation</title></head>
                <body>
                    <h1>Submission Successful</h1>
                    <p>Thank you, ${name}!</p>
                </body>
            </html>
            `);         
            })
            
        })
        return 
    }                                                                                                                                                                                                                                                                              

    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
