import selfsigned from 'selfsigned'
import fs from 'fs'
const serverAttr = [
  { name: 'commonName', value: 'localhost' }
]

const certOptions = {
  keySize: 2048,
  days: 9999,
  algorithm: 'sha256',
  extensions: [],
  clientCertificate: true,
  clientCertificateCN: 'client'
}

const app = () => {
  const pem = selfsigned.generate(serverAttr, certOptions)

  fs.writeFileSync('cert/server.crt', pem.cert)
  fs.writeFileSync('cert/client.crt', pem.clientcert)
  fs.writeFileSync('cert/server.key', pem.private)
  fs.writeFileSync('cert/client.key', pem.clientprivate)

  return (
    '<div style="padding: 20px"><h1>Welcome to ca</h1></div>'
  )
}

export default app
