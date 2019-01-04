const http = require('http');
const server = http.creatServer((req,res)) => {
	res.end('hello world!');
};
server.listen(3000);

