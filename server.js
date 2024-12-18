const http = require('http'); // Import the HTTP module

// Create an HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status for success
    res.setHeader('Content-Type', 'text/plain'); // Content type
    res.end('Jai Shree Krishna!\n'); // Response body
});

const PORT = 3000; // Define a port number
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
