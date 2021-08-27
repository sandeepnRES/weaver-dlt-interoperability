---
id: setup-packages
title: Setup with Imported Weaver Components
---

<!--
 Copyright IBM Corp. All Rights Reserved.

 SPDX-License-Identifier: CC-BY-4.0
 -->

In this document, we detail the steps using which you can bring up networks using the default configuration settings and by fetching pre-built Weaver interoperation modules, SDK libraries, and relay drivers from Github Package repositories. To customize these settings (e.g., hostnames, ports), refer to the [Advanced Configuration page](./advanced-configuration.md).

_Note_: The default configuration is for a development setup, therefore all components are run on `localhost`, many within Docker containers.

Follow the instructions below to build and run components followed by interoperation flows. These instructions have been tested on Ubuntu Linux (bash shell) and Mac OS. In general, they should work on any system and shell as long as the various dependencies have been installed and configured.

## Prerequisites

### Software
Before starting, make sure you have the following software installed on your host machine:
- Curl: _install using package manager, like `apt` on Debian/Ubuntu Linux_
- Git: [sample instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Docker: [sample instructions](https://docs.docker.com/engine/install/) (Latest version)
- Docker-Compose: [sample instructions](https://docs.docker.com/compose/install/) (Latest version)
- Golang: [sample instructions](https://golang.org/dl/) (Version 1.15 or above)
- Java (JDK and JRE): [sample instructions](https://openjdk.java.net/install/) (Version 8)
- Node.js and NPM: [sample instructions](https://nodejs.org/en/download/package-manager/) (Version 11 to Version 14 supported)
- Yarn: [sample instructions](https://classic.yarnpkg.com/en/docs/install/)
- Rust: [sample instructions](https://www.rust-lang.org/tools/install)
  * To avoid errors during Weaver Relay compilation, update certain packages (on which the Weaver Relay is dependent) to their latest versions as follows:
    ```
    cargo update -p nom
    cargo update -p lexical-core
    ```

### Credentials
Make sure you have an SSH or GPG key registered in https://github.com to allow seamless cloning of repositories (at present, various setup scripts clone repositories using the `https://` prefix but this may change to `git@` in the future).

Create a personal access token with `read:packages` access in github in order to use modules published in github packages. Refer [Creating a Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) for help.

## Getting the Code and Documentation

Clone the [weaver-dlt-interoperability](https://github.com/hyperledger-labs/weaver-dlt-interoperability) repository. The code to get a basic test network up and running and test data-sharing interoperation flows lies in the subfolder `tests/network-setups`, which should be your starting point, though the setups will rely on other parts of the repository, as you will find out in the instructions given on this page.

## Hyperledger Fabric Components

Using the sequence of instructions below, you can start two separate Fabric networks, each with a single channel and application contract (chaincode). You can also start an interoperation contract, a relay, and a _driver_ acting on behalf of each network. You can build a Fabric CLI tool with which you can initialize both networks' ledgers with access control policies, foreign networks' security groups (i.e., membership providers' certificate chains), and some sample key-value pairs that can be shared during subsequent interoperation flows.

### Fabric Network

The code for this lies in the `tests/network-setups` folder.

This folder contains code to create and launch networks `network1` and `network2` of identical specifications:
- Network: 1 peer, 1 peer CA, 1 ordering service node, 1 ordering service CA
- Single channel named `mychannel`
- Single contract named `simplestate` (deployed on `mychannel`) that supports simple transactions (`Create`, `Read`, `Update`, `Delete`) involving storage and lookup of <key, value> pairs.

Follow the instructions below to build and launch the networks:
- Navigate to the `tests/network-setups/fabric/dev` folder.
- To spin up both network1 and network2 with interoperation chaincode installed, run:
  ```
  make start-interop
  ```
- (_Note_: If you do not wish to test Fabric-Fabric interoperation, you can choose to install only one of the two networks along with its interoperation chaincode. For `network1`, run `make start-interop-network1`, and for `network2`, run `make start-interop-network2`.)

For more information, refer to the associated [README](https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/tests/network-setups/fabric/dev).

**Troubleshooting Tips**:
- If you see any errors during the launches, re-check the prerequisites (software installations and credentials). Ensure your network connection is working. As a safe bet, you can retry after cleanup: kill and remove all Docker containers and associated volumes.

### Fabric Client (fabric-cli)

The CLI is used to interact with a Fabric network, configure it and run chaincode transactions to record data on the channel ledger or query data. It is also used to interact with remote networks through the relay to trigger an interoperation flow for data request and acceptance.

The `fabric-cli` source code is located in the `samples/fabric/fabric-cli` folder.

#### Prerequisites

If you are using a Linux system, make sure that lib64 is installed.

_Note_: The setup and running instructions below were tested with all Node.js versions from v11.14.0 to v14.17.3.

#### Installation

You can install `fabric-cli` as follows:
- Navigate to the `samples/fabric/fabric-cli` folder.
- Create `.npmrc` from template `.npmrc.template`, by replacing `<personal-access-token>` with yours created [above](#package-access-token)..
- Run the following to install dependencies:
  ```bash
  make build
  ```
- Use the `fabric-cli` executable in the `bin` folder for [subsequent actions](./ledger-initialization.md).

### Fabric Relay

The relay is a module acting on behalf of a network, enabling interoperation flows with other networks by communicating with their relays.
The code for this lies in the `core/relay` folder.

#### Building

_Prerequisite_: make sure Rust is already installed and that the `cargo` executable is in your system path (after installation of Rust, this should be available in `$HOME/.cargo/bin`); you can also ensure this by running `source "$HOME/.cargo/env"`.

Build the generic (i.e., common to all DLTs) relay module as follows:
- Navigate to the `core/relay` folder.
- Run the following:
  ```bash
  make
  ```
  
#### Deployment

An instance or a relay can be run using a suitable configuration file. Samples are available in the `core/relay/config` folder.

Run a relay for `network1` as follows:
- Navigate to the `core/relay` folder.
- Run the following:
  ```bash
  RELAY_CONFIG=config/Fabric_Relay.toml cargo run --bin server
  ```

Run a relay for `network2` as follows (_do this only if you wish to test interoperation between the two Fabric networks `network1` and `network2`_)
- Navigate to the `core/relay` folder.
- Run the following:
  ```bash
  RELAY_CONFIG=config/Fabric_Relay2.toml cargo run --bin server
  ```

For more information, see the [relay README](https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/core/relay).


### Fabric Driver

A driver is a DLT-specific plugin invoked by the relay while conveying external data queries to the local peer network and collecting a response with proofs. The Fabric driver is built as a Fabric client application on the `fabric-network` NPM package.
The code for this lies in the `core/drivers/fabric-driver` folder.

#### Configuring

In the `core/drivers/fabric-driver` folder, copy `.env.template` to `.env` and update `CONNECTION_PROFILE` to point to the connection profile of the fabric network (e.g. `<PATH-TO-WEAVER>/tests/network-setups/fabric/shared/network1/peerOrganizations/org1.network1.com/connection-org1.json`)

Configure `fabric-driver` for `network1` as follows:
- Navigate to the `core/drivers/fabric-driver` folder.
- Create a `.env` file by copying `.env.template` and setting suitable parameter values:
  * The `CONNECTION_PROFILE` should point to the absolute path of the connection profile for `network1`.
    - For this exercise, specify the path `<PATH-TO-WEAVER>/tests/network-setups/fabric/shared/network1/peerOrganizations/org1.network1.com/connection-org1.json` (_you must specify the full absolute path here_).
    - `<PATH-TO-WEAVER>` here is the absolute path of the `weaver-dlt-interoperability` clone folder.
  * Leave the default values unchanged for the other parameters. The relay and driver endpoints as well as the network name are already specified.

#### Building

Build the Fabric driver module as follows:
- Navigate to the `core/drivers/fabric-driver` folder.
- Create `.npmrc` from template `.npmrc.template`, by replacing `<personal-access-token>` with yours created above.
- Run the following:
  ```bash
  make build
  ```

#### Running

Run a Fabric driver for `network1` as follows:
- Navigate to the `core/drivers/fabric-driver` folder.
- Run the following:
  ```bash
  npm run dev
  ```

Run a Fabric driver for `network2` as follows (_do this only if you wish to test interoperation between the two Fabric networks `network1` and `network2`_)
- Navigate to the `core/drivers/fabric-driver` folder.
- Run the following:
  ```bash
  CONNECTION_PROFILE=<PATH-TO-WEAVER>/tests/network-setups/fabric/shared/network2/peerOrganizations/org1.network2.com/connection-org1.json NETWORK_NAME=network2 RELAY_ENDPOINT=localhost:9083 DRIVER_ENDPOINT=localhost:9095 npm run dev
  ```
_Note_: the variables we specified earlier in the `.env` are now passed in the command line. Alternatively, you can make a copy of the `fabric-driver` folder with a different  name and create a separate `.env` file within it that contains links to the connection profile, relay, and driver for `network2`.

## Corda Components

Using the sequence of instructions below, you can start a Corda network and run an application Cordapp on it. You can also run an interoperation Cordapp, a relay and a _driver_ acting on behalf of the network. You can initialize the network's vault with access control policies, foreign networks' security groups (i.e., membership providers' certificate chains), and some sample state values that can be shared during subsequent interoperation flows.


### Corda Network

The Corda network code lies in the `tests/network-setups/corda` folder. You can launch a network consisting of one node (`PartyA`) and one notary. This network uses `samples/corda/corda-simple-application` which maintains a state of type `SimpleState`, which is a set of key-value pairs (of strings).
Following steps will build above cordapp and a corda-client as well in `samples/corda/client`.

#### Running with Interoperation Cordapp from Github Packages

Follow the instructions below to build and launch the network:
- Navigate to the `tests/network-setups/corda` folder.
- Create a copy of `github.properties.template` as `github.properties`.
- Replace `<GITHUB email>` with your github email, and `<GITHUB Personal Access Token>` with the access token created [above](#package-access-token).
- To spin up the Corda network with the interoperation Cordapp, run:
    ```bash
    make start
    ```

If the Corda node and notary start up successfully, you should something like the following:

![Corda network startup screenshot](/setup-assets/Corda_network.jpg)

It's safe to press `Ctrl-C` here, as what you are seeing are the container logs.

### Corda Relay

The relay was built earlier, so you just need to use a different configuration file to start a relay for the Corda network.

Run a relay in host as follows:
- Navigate to the `core/relay` folder.
- (Make sure you've already built the relay by running `make`.)
- Run the following:
  ```bash
  RELAY_CONFIG=config/Corda_Relay.toml cargo run --bin server
  ```

If the relay starts up successfully, the following will be logged on your terminal:

```
Relay Name: "Corda_Relay"
RelayServer listening on [::1]:9081
```

### Corda Driver

The code for this lies in the `core/drivers/corda-driver` folder.

#### Building Corda Driver

Build the Corda driver module as follows:
- Navigate to the `core/drivers/corda-driver` folder.
- Create a copy of `github.properties.template` as `github.properties`.
- Replace `<GITHUB email>` with your github email, and `<GITHUB Personal Access Token>` with the access token created [above](#package-access-token).
- Run the following:
```bash
make build
```

#### Running

Run a Corda driver as follows:
- Navigate to the `core/drivers/corda-driver` folder.
- Run the following:
  ```bash
  ./build/install/corda-driver/bin/corda-driver
  ```

If the driver starts successfully, it should log the following message on your terminal:
```
Corda driver gRPC server started. Listening on port 9099
```

## Tear Down the Setup

Bring down the test network's components as follows:
- Simply terminate the various relays and drivers, which are running in the foreground in different terminals
- To bring down the running Corda network:
  * Navigate to the `tests/network-setups/corda` folder.
  * Run the following:
  ```bash
  make clean
  ```
- To bring down all the running Fabric networks:
  * Navigate to the `tests/network-setups/fabric/dev` folder.
  * Run the following:
  ```bash
  make clean
  ```

