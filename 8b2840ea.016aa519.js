(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{133:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||i;return n?r.a.createElement(m,l(l({ref:t},b),{},{components:n})):r.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},141:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Corda_network-b0e1d4960223c4783250302edcaca3d4.jpg"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(133)),o={id:"setup-packages",title:"Setup with Imported Weaver Components"},l={unversionedId:"external/getting-started/test-network/setup-packages",id:"external/getting-started/test-network/setup-packages",isDocsHomePage:!1,title:"Setup with Imported Weaver Components",description:"\x3c!--",source:"@site/docs/external/getting-started/test-network/setup-packages.md",slug:"/external/getting-started/test-network/setup-packages",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/setup-packages",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/test-network/setup-packages.md",version:"current",sidebar:"Documentation",previous:{title:"Setup with Locally Built Dockerized Weaver Components",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/setup-local-docker"},next:{title:"Setup with Imported Dockerized Weaver Components",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/setup-packages-docker"}},c=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Software",id:"software",children:[]},{value:"Credentials",id:"credentials",children:[]}]},{value:"Getting the Code and Documentation",id:"getting-the-code-and-documentation",children:[]},{value:"Hyperledger Fabric Components",id:"hyperledger-fabric-components",children:[{value:"Fabric Network",id:"fabric-network",children:[]},{value:"Fabric Client (fabric-cli)",id:"fabric-client-fabric-cli",children:[]},{value:"Fabric Relay",id:"fabric-relay",children:[]},{value:"Fabric Driver",id:"fabric-driver",children:[]}]},{value:"Corda Components",id:"corda-components",children:[{value:"Corda Network",id:"corda-network",children:[]},{value:"Corda Relay",id:"corda-relay",children:[]},{value:"Corda Driver",id:"corda-driver",children:[]}]},{value:"Tear Down the Setup",id:"tear-down-the-setup",children:[]}],b={toc:c};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In this document, we detail the steps using which you can bring up networks using the default configuration settings and by fetching pre-built Weaver interoperation modules, SDK libraries, and relay drivers from Github Package repositories. To customize these settings (e.g., hostnames, ports), refer to the ",Object(i.b)("a",{parentName:"p",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/advanced-configuration"},"Advanced Configuration page"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note"),": The default configuration is for a development setup, therefore all components are run on ",Object(i.b)("inlineCode",{parentName:"p"},"localhost"),", many within Docker containers."),Object(i.b)("p",null,"Follow the instructions below to build and run components followed by interoperation flows. These instructions have been tested on Ubuntu Linux (bash shell) and Mac OS. In general, they should work on any system and shell as long as the various dependencies have been installed and configured."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("h3",{id:"software"},"Software"),Object(i.b)("p",null,"Before starting, make sure you have the following software installed on your host machine:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Curl: ",Object(i.b)("em",{parentName:"li"},"install using package manager, like ",Object(i.b)("inlineCode",{parentName:"em"},"apt")," on Debian/Ubuntu Linux")),Object(i.b)("li",{parentName:"ul"},"Git: ",Object(i.b)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"sample instructions")),Object(i.b)("li",{parentName:"ul"},"Docker: ",Object(i.b)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"sample instructions")," (Latest version)"),Object(i.b)("li",{parentName:"ul"},"Docker-Compose: ",Object(i.b)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"sample instructions")," (Latest version)"),Object(i.b)("li",{parentName:"ul"},"Golang: ",Object(i.b)("a",{parentName:"li",href:"https://golang.org/dl/"},"sample instructions")," (Version 1.15 or above)"),Object(i.b)("li",{parentName:"ul"},"Java (JDK and JRE): ",Object(i.b)("a",{parentName:"li",href:"https://openjdk.java.net/install/"},"sample instructions")," (Version 8)"),Object(i.b)("li",{parentName:"ul"},"Node.js and NPM: ",Object(i.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"sample instructions")," (Version 11 to Version 14 supported)"),Object(i.b)("li",{parentName:"ul"},"Yarn: ",Object(i.b)("a",{parentName:"li",href:"https://classic.yarnpkg.com/en/docs/install/"},"sample instructions")),Object(i.b)("li",{parentName:"ul"},"Rust: ",Object(i.b)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"sample instructions"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"To avoid errors during Weaver Relay compilation, update certain packages (on which the Weaver Relay is dependent) to their latest versions as follows:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"cargo update -p nom\ncargo update -p lexical-core\n")))))),Object(i.b)("h3",{id:"credentials"},"Credentials"),Object(i.b)("p",null,"Make sure you have an SSH or GPG key registered in ",Object(i.b)("a",{parentName:"p",href:"https://github.com"},"https://github.com")," to allow seamless cloning of repositories (at present, various setup scripts clone repositories using the ",Object(i.b)("inlineCode",{parentName:"p"},"https://")," prefix but this may change to ",Object(i.b)("inlineCode",{parentName:"p"},"git@")," in the future)."),Object(i.b)("p",null,"Create a personal access token with ",Object(i.b)("inlineCode",{parentName:"p"},"read:packages")," access in github in order to use modules published in github packages. Refer ",Object(i.b)("a",{parentName:"p",href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"Creating a Personal Access Token")," for help."),Object(i.b)("h2",{id:"getting-the-code-and-documentation"},"Getting the Code and Documentation"),Object(i.b)("p",null,"Clone the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability"},"weaver-dlt-interoperability")," repository. The code to get a basic test network up and running and test data-sharing interoperation flows lies in the subfolder ",Object(i.b)("inlineCode",{parentName:"p"},"tests/network-setups"),", which should be your starting point, though the setups will rely on other parts of the repository, as you will find out in the instructions given on this page."),Object(i.b)("h2",{id:"hyperledger-fabric-components"},"Hyperledger Fabric Components"),Object(i.b)("p",null,"Using the sequence of instructions below, you can start two separate Fabric networks, each with a single channel and application contract (chaincode). You can also start an interoperation contract, a relay, and a ",Object(i.b)("em",{parentName:"p"},"driver")," acting on behalf of each network. You can build a Fabric CLI tool with which you can initialize both networks' ledgers with access control policies, foreign networks' security groups (i.e., membership providers' certificate chains), and some sample key-value pairs that can be shared during subsequent interoperation flows."),Object(i.b)("h3",{id:"fabric-network"},"Fabric Network"),Object(i.b)("p",null,"The code for this lies in the ",Object(i.b)("inlineCode",{parentName:"p"},"tests/network-setups")," folder."),Object(i.b)("p",null,"This folder contains code to create and launch networks ",Object(i.b)("inlineCode",{parentName:"p"},"network1")," and ",Object(i.b)("inlineCode",{parentName:"p"},"network2")," of identical specifications:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Network: 1 peer, 1 peer CA, 1 ordering service node, 1 ordering service CA"),Object(i.b)("li",{parentName:"ul"},"Single channel named ",Object(i.b)("inlineCode",{parentName:"li"},"mychannel")),Object(i.b)("li",{parentName:"ul"},"Single contract named ",Object(i.b)("inlineCode",{parentName:"li"},"simplestate")," (deployed on ",Object(i.b)("inlineCode",{parentName:"li"},"mychannel"),") that supports simple transactions (",Object(i.b)("inlineCode",{parentName:"li"},"Create"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Read"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Update"),", ",Object(i.b)("inlineCode",{parentName:"li"},"Delete"),") involving storage and lookup of <key, value> pairs.")),Object(i.b)("p",null,"Follow the instructions below to build and launch the networks:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"tests/network-setups/fabric/dev")," folder."),Object(i.b)("li",{parentName:"ul"},"To spin up both network1 and network2 with interoperation chaincode installed, run:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre"},"make start-interop\n"))),Object(i.b)("li",{parentName:"ul"},"(",Object(i.b)("em",{parentName:"li"},"Note"),": If you do not wish to test Fabric-Fabric interoperation, you can choose to install only one of the two networks along with its interoperation chaincode. For ",Object(i.b)("inlineCode",{parentName:"li"},"network1"),", run ",Object(i.b)("inlineCode",{parentName:"li"},"make start-interop-network1"),", and for ",Object(i.b)("inlineCode",{parentName:"li"},"network2"),", run ",Object(i.b)("inlineCode",{parentName:"li"},"make start-interop-network2"),".)")),Object(i.b)("p",null,"For more information, refer to the associated ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/tests/network-setups/fabric/dev"},"README"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Troubleshooting Tips"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If you see any errors during the launches, re-check the prerequisites (software installations and credentials). Ensure your network connection is working. As a safe bet, you can retry after cleanup: kill and remove all Docker containers and associated volumes.")),Object(i.b)("h3",{id:"fabric-client-fabric-cli"},"Fabric Client (fabric-cli)"),Object(i.b)("p",null,"The CLI is used to interact with a Fabric network, configure it and run chaincode transactions to record data on the channel ledger or query data. It is also used to interact with remote networks through the relay to trigger an interoperation flow for data request and acceptance."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"fabric-cli")," source code is located in the ",Object(i.b)("inlineCode",{parentName:"p"},"samples/fabric/fabric-cli")," folder."),Object(i.b)("h4",{id:"prerequisites-1"},"Prerequisites"),Object(i.b)("p",null,"If you are using a Linux system, make sure that lib64 is installed."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Note"),": The setup and running instructions below were tested with all Node.js versions from v11.14.0 to v14.17.3."),Object(i.b)("h4",{id:"installation"},"Installation"),Object(i.b)("p",null,"You can install ",Object(i.b)("inlineCode",{parentName:"p"},"fabric-cli")," as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"samples/fabric/fabric-cli")," folder."),Object(i.b)("li",{parentName:"ul"},"Create ",Object(i.b)("inlineCode",{parentName:"li"},".npmrc")," from template ",Object(i.b)("inlineCode",{parentName:"li"},".npmrc.template"),", by replacing ",Object(i.b)("inlineCode",{parentName:"li"},"<personal-access-token>")," with yours created ",Object(i.b)("a",{parentName:"li",href:"#package-access-token"},"above"),".."),Object(i.b)("li",{parentName:"ul"},"Run the following to install dependencies:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make build\n"))),Object(i.b)("li",{parentName:"ul"},"Use the ",Object(i.b)("inlineCode",{parentName:"li"},"fabric-cli")," executable in the ",Object(i.b)("inlineCode",{parentName:"li"},"bin")," folder for ",Object(i.b)("a",{parentName:"li",href:"/weaver-dlt-interoperability/docs/external/getting-started/test-network/ledger-initialization"},"subsequent actions"),".")),Object(i.b)("h3",{id:"fabric-relay"},"Fabric Relay"),Object(i.b)("p",null,"The relay is a module acting on behalf of a network, enabling interoperation flows with other networks by communicating with their relays.\nThe code for this lies in the ",Object(i.b)("inlineCode",{parentName:"p"},"core/relay")," folder."),Object(i.b)("h4",{id:"building"},"Building"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Prerequisite"),": make sure Rust is already installed and that the ",Object(i.b)("inlineCode",{parentName:"p"},"cargo")," executable is in your system path (after installation of Rust, this should be available in ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME/.cargo/bin"),"); you can also ensure this by running ",Object(i.b)("inlineCode",{parentName:"p"},'source "$HOME/.cargo/env"'),"."),Object(i.b)("p",null,"Build the generic (i.e., common to all DLTs) relay module as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/relay")," folder."),Object(i.b)("li",{parentName:"ul"},"Run the following:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make\n")))),Object(i.b)("h4",{id:"deployment"},"Deployment"),Object(i.b)("p",null,"An instance or a relay can be run using a suitable configuration file. Samples are available in the ",Object(i.b)("inlineCode",{parentName:"p"},"core/relay/config")," folder."),Object(i.b)("p",null,"Run a relay for ",Object(i.b)("inlineCode",{parentName:"p"},"network1")," as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/relay")," folder."),Object(i.b)("li",{parentName:"ul"},"Run the following:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"RELAY_CONFIG=config/Fabric_Relay.toml cargo run --bin server\n")))),Object(i.b)("p",null,"Run a relay for ",Object(i.b)("inlineCode",{parentName:"p"},"network2")," as follows (",Object(i.b)("em",{parentName:"p"},"do this only if you wish to test interoperation between the two Fabric networks ",Object(i.b)("inlineCode",{parentName:"em"},"network1")," and ",Object(i.b)("inlineCode",{parentName:"em"},"network2")),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/relay")," folder."),Object(i.b)("li",{parentName:"ul"},"Run the following:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"RELAY_CONFIG=config/Fabric_Relay2.toml cargo run --bin server\n")))),Object(i.b)("p",null,"For more information, see the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/tree/master/core/relay"},"relay README"),"."),Object(i.b)("h3",{id:"fabric-driver"},"Fabric Driver"),Object(i.b)("p",null,"A driver is a DLT-specific plugin invoked by the relay while conveying external data queries to the local peer network and collecting a response with proofs. The Fabric driver is built as a Fabric client application on the ",Object(i.b)("inlineCode",{parentName:"p"},"fabric-network")," NPM package.\nThe code for this lies in the ",Object(i.b)("inlineCode",{parentName:"p"},"core/drivers/fabric-driver")," folder."),Object(i.b)("h4",{id:"configuring"},"Configuring"),Object(i.b)("p",null,"In the ",Object(i.b)("inlineCode",{parentName:"p"},"core/drivers/fabric-driver")," folder, copy ",Object(i.b)("inlineCode",{parentName:"p"},".env.template")," to ",Object(i.b)("inlineCode",{parentName:"p"},".env")," and update ",Object(i.b)("inlineCode",{parentName:"p"},"CONNECTION_PROFILE")," to point to the connection profile of the fabric network (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"<PATH-TO-WEAVER>/tests/network-setups/fabric/shared/network1/peerOrganizations/org1.network1.com/connection-org1.json"),")"),Object(i.b)("p",null,"Configure ",Object(i.b)("inlineCode",{parentName:"p"},"fabric-driver")," for ",Object(i.b)("inlineCode",{parentName:"p"},"network1")," as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/drivers/fabric-driver")," folder."),Object(i.b)("li",{parentName:"ul"},"Create a ",Object(i.b)("inlineCode",{parentName:"li"},".env")," file by copying ",Object(i.b)("inlineCode",{parentName:"li"},".env.template")," and setting suitable parameter values:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"CONNECTION_PROFILE")," should point to the absolute path of the connection profile for ",Object(i.b)("inlineCode",{parentName:"li"},"network1"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For this exercise, specify the path ",Object(i.b)("inlineCode",{parentName:"li"},"<PATH-TO-WEAVER>/tests/network-setups/fabric/shared/network1/peerOrganizations/org1.network1.com/connection-org1.json")," (",Object(i.b)("em",{parentName:"li"},"you must specify the full absolute path here"),")."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"<PATH-TO-WEAVER>")," here is the absolute path of the ",Object(i.b)("inlineCode",{parentName:"li"},"weaver-dlt-interoperability")," clone folder."))),Object(i.b)("li",{parentName:"ul"},"Leave the default values unchanged for the other parameters. The relay and driver endpoints as well as the network name are already specified.")))),Object(i.b)("h4",{id:"building-1"},"Building"),Object(i.b)("p",null,"Build the Fabric driver module as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/drivers/fabric-driver")," folder."),Object(i.b)("li",{parentName:"ul"},"Create ",Object(i.b)("inlineCode",{parentName:"li"},".npmrc")," from template ",Object(i.b)("inlineCode",{parentName:"li"},".npmrc.template"),", by replacing ",Object(i.b)("inlineCode",{parentName:"li"},"<personal-access-token>")," with yours created above."),Object(i.b)("li",{parentName:"ul"},"Run the following:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make build\n")))),Object(i.b)("h4",{id:"running"},"Running"),Object(i.b)("p",null,"Run a Fabric driver for ",Object(i.b)("inlineCode",{parentName:"p"},"network1")," as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/drivers/fabric-driver")," folder."),Object(i.b)("li",{parentName:"ul"},"Run the following:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")))),Object(i.b)("p",null,"Run a Fabric driver for ",Object(i.b)("inlineCode",{parentName:"p"},"network2")," as follows (",Object(i.b)("em",{parentName:"p"},"do this only if you wish to test interoperation between the two Fabric networks ",Object(i.b)("inlineCode",{parentName:"em"},"network1")," and ",Object(i.b)("inlineCode",{parentName:"em"},"network2")),")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/drivers/fabric-driver")," folder."),Object(i.b)("li",{parentName:"ul"},"Run the following:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"CONNECTION_PROFILE=<PATH-TO-WEAVER>/tests/network-setups/fabric/shared/network2/peerOrganizations/org1.network2.com/connection-org1.json NETWORK_NAME=network2 RELAY_ENDPOINT=localhost:9083 DRIVER_ENDPOINT=localhost:9095 npm run dev\n")),Object(i.b)("em",{parentName:"li"},"Note"),": the variables we specified earlier in the ",Object(i.b)("inlineCode",{parentName:"li"},".env")," are now passed in the command line. Alternatively, you can make a copy of the ",Object(i.b)("inlineCode",{parentName:"li"},"fabric-driver")," folder with a different  name and create a separate ",Object(i.b)("inlineCode",{parentName:"li"},".env")," file within it that contains links to the connection profile, relay, and driver for ",Object(i.b)("inlineCode",{parentName:"li"},"network2"),".")),Object(i.b)("h2",{id:"corda-components"},"Corda Components"),Object(i.b)("p",null,"Using the sequence of instructions below, you can start a Corda network and run an application Cordapp on it. You can also run an interoperation Cordapp, a relay and a ",Object(i.b)("em",{parentName:"p"},"driver")," acting on behalf of the network. You can initialize the network's vault with access control policies, foreign networks' security groups (i.e., membership providers' certificate chains), and some sample state values that can be shared during subsequent interoperation flows."),Object(i.b)("h3",{id:"corda-network"},"Corda Network"),Object(i.b)("p",null,"The Corda network code lies in the ",Object(i.b)("inlineCode",{parentName:"p"},"tests/network-setups/corda")," folder. You can launch a network consisting of one node (",Object(i.b)("inlineCode",{parentName:"p"},"PartyA"),") and one notary. This network uses ",Object(i.b)("inlineCode",{parentName:"p"},"samples/corda/corda-simple-application")," which maintains a state of type ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleState"),", which is a set of key-value pairs (of strings).\nFollowing steps will build above cordapp and a corda-client as well in ",Object(i.b)("inlineCode",{parentName:"p"},"samples/corda/client"),"."),Object(i.b)("h4",{id:"running-with-interoperation-cordapp-from-github-packages"},"Running with Interoperation Cordapp from Github Packages"),Object(i.b)("p",null,"Follow the instructions below to build and launch the network:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"tests/network-setups/corda")," folder."),Object(i.b)("li",{parentName:"ul"},"Create a copy of ",Object(i.b)("inlineCode",{parentName:"li"},"github.properties.template")," as ",Object(i.b)("inlineCode",{parentName:"li"},"github.properties"),"."),Object(i.b)("li",{parentName:"ul"},"Replace ",Object(i.b)("inlineCode",{parentName:"li"},"<GITHUB email>")," with your github email, and ",Object(i.b)("inlineCode",{parentName:"li"},"<GITHUB Personal Access Token>")," with the access token created ",Object(i.b)("a",{parentName:"li",href:"#package-access-token"},"above"),"."),Object(i.b)("li",{parentName:"ul"},"To spin up the Corda network with the interoperation Cordapp, run:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make start\n")))),Object(i.b)("p",null,"If the Corda node and notary start up successfully, you should something like the following:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Corda network startup screenshot",src:n(141).default})),Object(i.b)("h3",{id:"corda-relay"},"Corda Relay"),Object(i.b)("p",null,"The relay was built earlier, so you just need to use a different configuration file to start a relay for the Corda network."),Object(i.b)("p",null,"Run a relay in host as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/relay")," folder."),Object(i.b)("li",{parentName:"ul"},"(Make sure you've already built the relay by running ",Object(i.b)("inlineCode",{parentName:"li"},"make"),".)"),Object(i.b)("li",{parentName:"ul"},"Run the following:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"RELAY_CONFIG=config/Corda_Relay.toml cargo run --bin server\n")))),Object(i.b)("p",null,"If the relay starts up successfully, the following will be logged on your terminal:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'Relay Name: "Corda_Relay"\nRelayServer listening on [::1]:9081\n')),Object(i.b)("h3",{id:"corda-driver"},"Corda Driver"),Object(i.b)("p",null,"The code for this lies in the ",Object(i.b)("inlineCode",{parentName:"p"},"core/drivers/corda-driver")," folder."),Object(i.b)("h4",{id:"building-corda-driver"},"Building Corda Driver"),Object(i.b)("p",null,"Build the Corda driver module as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/drivers/corda-driver")," folder."),Object(i.b)("li",{parentName:"ul"},"Create a copy of ",Object(i.b)("inlineCode",{parentName:"li"},"github.properties.template")," as ",Object(i.b)("inlineCode",{parentName:"li"},"github.properties"),"."),Object(i.b)("li",{parentName:"ul"},"Replace ",Object(i.b)("inlineCode",{parentName:"li"},"<GITHUB email>")," with your github email, and ",Object(i.b)("inlineCode",{parentName:"li"},"<GITHUB Personal Access Token>")," with the access token created ",Object(i.b)("a",{parentName:"li",href:"#package-access-token"},"above"),"."),Object(i.b)("li",{parentName:"ul"},"Run the following:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make build\n")),Object(i.b)("h4",{id:"running-1"},"Running"),Object(i.b)("p",null,"Run a Corda driver as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"core/drivers/corda-driver")," folder."),Object(i.b)("li",{parentName:"ul"},"Run the following:",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./build/install/corda-driver/bin/corda-driver\n")))),Object(i.b)("p",null,"If the driver starts successfully, it should log the following message on your terminal:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Corda driver gRPC server started. Listening on port 9099\n")),Object(i.b)("h2",{id:"tear-down-the-setup"},"Tear Down the Setup"),Object(i.b)("p",null,"Bring down the test network's components as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Simply terminate the various relays and drivers, which are running in the foreground in different terminals"),Object(i.b)("li",{parentName:"ul"},"To bring down the running Corda network:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"tests/network-setups/corda")," folder."),Object(i.b)("li",{parentName:"ul"},"Run the following:")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make clean\n"))),Object(i.b)("li",{parentName:"ul"},"To bring down all the running Fabric networks:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"li"},"tests/network-setups/fabric/dev")," folder."),Object(i.b)("li",{parentName:"ul"},"Run the following:")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-bash"},"make clean\n")))))}s.isMDXComponent=!0}}]);