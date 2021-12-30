const express = require('express')
const app = express()

const port = 3001

app.get('/', (req, res) => {
	res.send('Hello my image!')
})

app.listen(port, () => {
	console.log("Running Aplication in port "+port)
})