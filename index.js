const server = require('@fwd/server')

server.get('/', (req, res) => {
	res.render('index', {
		message: "Hello, World!"
	})
})

server.start(process.argv[2] || 80, __dirname)