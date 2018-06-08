import https from 'https'
import express from 'express'
import bodyParser from 'body-parser'
import fs from 'fs'

const app = express()

const port = process.env.PORT || 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log(new Date() + ' ' +
    req.connection.remoteAddress + ' ' +
    'CN:' + req.socket.getPeerCertificate().subject.CN + ' ' +
    req.method + ' ' + req.url)
  res.end('<div style="padding: 20px"><h1>Welcome to ca</h1></div>')
})

const options = {
  key: fs.readFileSync('cert/server/server-key.pem'),
  cert: fs.readFileSync('cert/server/server.pem'),
  ca: fs.readFileSync('cert/ca/ca.pem'),
  requestCert: true,
  rejectUnauthorized: true
}

const server = https.createServer(options, app)

server.listen(port, () => console.log(`Listening on port: ${port}`))

if (module.hot) {
  module.hot.accept('./app')
}
