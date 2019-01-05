let  http = require('http');
let server = http.creatServer((req,res)) => {
	res.end('hello world!');
};
server.listen(3000);

