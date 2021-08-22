//HTTP Module http

const http = require("http");

const server = http.createServer((req, res) => {
    // console.log(res);
    if (req.url === '/') {
        res.write('Welcome to our Home page')
    } else if (req.url === '/about') {
        res.write('Here is our short History')
    } else {
        res.end(`
            <h1>Opls!<h1>
            <p>We can't seem to find the page you equested for</p>
            <a href="/">Back to home</a>
        `)
    }

    res.end();
});

server.listen(5000);
