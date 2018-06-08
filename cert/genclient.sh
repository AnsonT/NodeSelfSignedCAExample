cfssl gencert \
  -ca=ca/ca.pem \
  -ca-key=ca/ca-key.pem \
  -config=config/ca-config.json \
  -profile=client \
  config/client-csr.json | cfssljson -bare clients/client