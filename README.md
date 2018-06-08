# Setting up node.js to validate certificates from self signed certificate authority

## Uses cfssl to generate certificates:
Install GoLang
> go get -u github.com/cloudflare/cfssl/cmd/...

## Generate certificates:
Modify cert/config files.
> cd cert
> mkdir ca server clients

1) Generate certificate authority
> ./genca.sh

2) Generate server certificate 
> ./genserver.sh

3) Generate client certificate
> ./genclient.sh

## Description
- Server uses server certificate to support https calls
- Server expects clients to call with client cert
- Client uses self signed certificate authority to validate server

## For testing
host file
  localhost.test 127.0.0.1
> yarn test