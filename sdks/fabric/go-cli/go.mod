module github.com/hyperledger-labs/weaver-dlt-interoperability/sdks/fabric/go-cli

go 1.16

replace github.com/hyperledger-labs/weaver-dlt-interoperability/sdks/fabric/go-sdk => ./../go-sdk

require (
	github.com/cloudflare/cfssl v1.4.1
	github.com/hyperledger-labs/weaver-dlt-interoperability/sdks/fabric/go-sdk v0.0.0-00010101000000-000000000000
	github.com/hyperledger/fabric-sdk-go v1.0.0
	github.com/sirupsen/logrus v1.8.1
	github.com/stretchr/testify v1.7.0
)
