cfssl gencert \
  -ca=ca/ca.pem \
  -ca-key=ca/ca-key.pem \
  -config=config/ca-config.json \
  -profile=server \
  config/server-csr.json | cfssljson -bare server/server
  