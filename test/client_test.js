import axios from 'axios'
import https from 'https'
import fs from 'fs'

const httpsAgent = new https.Agent({
  ca: fs.readFileSync('cert/ca/ca.pem'),
  cert: fs.readFileSync('cert/clients/client.pem'),
  key: fs.readFileSync('cert/clients/client-key.pem')
})

async function start (option) {
  return axios.get('https://localhost.test:3000', option)
}

test('calling server with certificate', async () => {
  const resp = await start({ httpsAgent })
  expect(typeof resp.data).toBe('string')
})

test('calling server without cert', async () => {
  try {
    await start({ httpsAgent })
  } catch (e) {
    expect(typeof e).toBe('string')
  }
})
