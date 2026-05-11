const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(`
        <h1>Render Server Running ✅</h1>
        <pre>
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}
        </pre>
    `);
});

server.listen(5000, () => {
    console.log("Server running");
});
