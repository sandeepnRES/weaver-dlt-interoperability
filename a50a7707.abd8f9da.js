(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),d=n,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(m,s(s({ref:t},c),{},{components:a})):r.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},194:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/confidential-message-exchange-464a9dd7ced8b637e79114f0a5a5ea7f.png"},195:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/confidential-message-exchange2-66fcb64e5ccf9f3c67f8515bbaf949eb.png"},196:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/private-message-exchange-e152ae2c623b0b2e22a10aa8c1ab4303.png"},197:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/private-public-message-exchange-154e73e46c6a606c4d8fe0ed016f5672.png"},198:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/private-public-message-exchange2-c7dcb3f4a8faaaecec32928569aa29dc.png"},199:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/private-public-message-exchange3-07fb1f5baf8ad3c32448493bdecd23a7.png"},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(121)),o={id:"end-to-end-security",title:"End-to-End Security"},s={unversionedId:"external/security-model/end-to-end-security",id:"external/security-model/end-to-end-security",isDocsHomePage:!1,title:"End-to-End Security",description:"\x3c!--",source:"@site/docs/external/security-model/end-to-end-security.md",slug:"/external/security-model/end-to-end-security",permalink:"/weaver-dlt-interoperability/docs/external/security-model/end-to-end-security",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/security-model/end-to-end-security.md",version:"current",sidebar:"Documentation",previous:{title:"Proofs and Verification",permalink:"/weaver-dlt-interoperability/docs/external/security-model/proofs-and-verification"},next:{title:"Deployment Patterns",permalink:"/weaver-dlt-interoperability/docs/external/deployment-considerations/deployment-patterns"}},l=[{value:"Relay Security Model",id:"relay-security-model",children:[]},{value:"A Relayer of Cryptographic Proofs",id:"a-relayer-of-cryptographic-proofs",children:[]},{value:"Deployment Configurations and Security Implications",id:"deployment-configurations-and-security-implications",children:[{value:"1. Confidential Message Exchange Between Groups of Parties",id:"1-confidential-message-exchange-between-groups-of-parties",children:[]},{value:"2. Private Message Exchange Between Networks",id:"2-private-message-exchange-between-networks",children:[]},{value:"3. Public Message Exchange Between Networks",id:"3-public-message-exchange-between-networks",children:[]}]},{value:"Nonces and Replay Attacks",id:"nonces-and-replay-attacks",children:[]}],c={toc:l};function b(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"relay-security-model"},"Relay Security Model"),Object(i.b)("h2",{id:"a-relayer-of-cryptographic-proofs"},"A Relayer of Cryptographic Proofs"),Object(i.b)("p",null,"The primary function of the relay is to orchestrate the flow of cyrptographic messages between networks enabling a variety of interoperability modes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Transfer of data between networks"),Object(i.b)("li",{parentName:"ul"},"Transfer of assets between networks"),Object(i.b)("li",{parentName:"ul"},"Exchange of value between networks")),Object(i.b)("p",null,"These cryptographic messages represent valid state in a distributed ledger and are generated using a range of cryptographic approaches, such as attestation by a set of authoritative nodes, a non-interactive proof of PoW, or a zero-knowledge proof (proof of computational integrity). The mechanisms for deriving such proofs rely on the model of trust provided by the underlying network of nodes. The relay thus plays no direct role in the generation of proofs, removing the need for remote agents (decentralized networks, applications or users) to trust the relay for proof veracity."),Object(i.b)("p",null,"The relay's message exchange protocol is in a state of development with a view towards supporting multiple interoperability modes. The current implementation however is limited to the transfer of data between networks. Future versions will enable asset and value transfers protocols."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," The security models examined below is limited to the transfer of data where remote queries are initiated by applications."),Object(i.b)("h2",{id:"deployment-configurations-and-security-implications"},"Deployment Configurations and Security Implications"),Object(i.b)("p",null,"The relay acts as a gateway between networks for enabling cross-chain communication and supports flexible deployment configurations. "),Object(i.b)("p",null,"The configuration in any deployment must statisfy the goals of the parties involved in the message exchange. These goals inform the security policy and the adversarial assumptions. The mechanisms for threat mitigation is based on these assumptions. "),Object(i.b)("p",null,"The configurations described below assume that:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A small fraction of the parties (e.g. f < n - m, where 'm' is the minimum threshold required for agreement) in a group or network might be byzantine. "),Object(i.b)("li",{parentName:"ul"},"The threat imposed by a byzantine party with priviledges to construct a valid proof is no worse if the party is also in control of a relay."),Object(i.b)("li",{parentName:"ul"},"A valid proof is one that satisfies a consumer's proof critieria (policy).")),Object(i.b)("h3",{id:"1-confidential-message-exchange-between-groups-of-parties"},"1. Confidential Message Exchange Between Groups of Parties"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Confidential Message Exchange",src:a(194).default,title:"Confidential Message Exchange"})),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Goals")," "),Object(i.b)("p",null,"A group of parties sharing confidential data agree to share a view of their data to remote group. The system configuration will provide the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Preserve confidentiality of messages exchanged between the groups involved."),Object(i.b)("li",{parentName:"ul"},"Preserve integrity of messages exchanged across the groups."),Object(i.b)("li",{parentName:"ul"},"The system must be available for servicing requests.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Threat Assumptions")),Object(i.b)("p",null,"An adversary in this configuration might seek to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Gain access to the confidential data."),Object(i.b)("li",{parentName:"ul"},"Tamper with the integrity of the messages exchanged."),Object(i.b)("li",{parentName:"ul"},"Censor messages."),Object(i.b)("li",{parentName:"ul"},"Deny service.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Mechanisms for Threat Mitigation")),Object(i.b)("p",null,"A suitable deployment configuration that addresses these threat assumptions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Relays will only be deployed and operated by organizations with access to the confidential data and privileges to construct valid proofs."),Object(i.b)("li",{parentName:"ul"},"A secure channel (mutual TLS) between the relays prevents external adversaries from evesdropping on the communication."),Object(i.b)("li",{parentName:"ul"},"The inclusion of a nonce in the proof enables replays of past messages to be detected."),Object(i.b)("li",{parentName:"ul"},"The deployment of multiple relays ensures availability and resistance to censorship.")),Object(i.b)("p",null,"In the following configuration, a group in one network maintains confidential data and have similar goals as above. The data in the providing network is private but visible to all organizations. The relay in the providing network can be operated by any organization with access to the data (the implications of this are examined next)."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Confidential Message Exchange",src:a(195).default,title:"Confidential Message Exchange"})),Object(i.b)("h3",{id:"2-private-message-exchange-between-networks"},"2. Private Message Exchange Between Networks"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Goals")),Object(i.b)("p",null,"In the following configuration, the data is private to both networks but not confidential to any subset of the members. The system configuration must provide the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Preserve confidentiality of messages exchanged between the networks."),Object(i.b)("li",{parentName:"ul"},"Preserve integrity of messages exchanged across the networks."),Object(i.b)("li",{parentName:"ul"},"The system must be available for servicing requests.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Threat Assumptions")),Object(i.b)("p",null,"An adversary in this configuration might seek to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Gain access to the private data."),Object(i.b)("li",{parentName:"ul"},"Tamper with the integrity of the messages exchanged."),Object(i.b)("li",{parentName:"ul"},"Censor messages."),Object(i.b)("li",{parentName:"ul"},"Deny service.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Mechanisms for Threat Mitigation")),Object(i.b)("p",null,"A suitable deployment configuration that addresses the threat assumptions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Relays will be deployed and operated by organizations that are members of the network with access to the shared private data and privileges to construct valid proofs."),Object(i.b)("li",{parentName:"ul"},"A secure channel (mutual TLS) between the relays prevents external adversaries from evesdropping on the communication."),Object(i.b)("li",{parentName:"ul"},"The inclusion of a nonce in the proof enables replays of past messages to be detected."),Object(i.b)("li",{parentName:"ul"},"The deployment of multiple relays ensures availability and resistance to censorship.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Private Message Exchange",src:a(196).default,title:"Private Message Exchange"})),Object(i.b)("h3",{id:"3-public-message-exchange-between-networks"},"3. Public Message Exchange Between Networks"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Goals")),Object(i.b)("p",null,"A private network consumes data from a public permissionless network. The system configuration must provide the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Preserve confidentiality of messages exchanged between the networks."),Object(i.b)("li",{parentName:"ul"},"Preserve integrity of messages exchanged across the networks."),Object(i.b)("li",{parentName:"ul"},"The system must be available for servicing requests.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Threat Assumptions")),Object(i.b)("p",null,"An adversary in this configuration might seek to:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Monitor data accessed by the private network."),Object(i.b)("li",{parentName:"ul"},"Tamper with the integrity of the messages exchanged."),Object(i.b)("li",{parentName:"ul"},"Censor messages."),Object(i.b)("li",{parentName:"ul"},"Deny service.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Mechanisms for Threat Mitigation")),Object(i.b)("p",null,"A suitable deployment configuration that addresses the threat assumptions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Nodes (clients) of the public ledger will be deployed and operated by multiple organizations in the private network (a sufficient distribution to accomodate 'f' faulty nodes)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Nodes modified to sign responses with a valid identity certificate (e.g. Hyperledger Besu as Ethereum mainnet client)."))),Object(i.b)("li",{parentName:"ul"},"Relays to private and public nodes will be deployed and operated by organizations within the network."),Object(i.b)("li",{parentName:"ul"},"The inclusion of a nonce in the proof enables replays of past messages to be detected."),Object(i.b)("li",{parentName:"ul"},"The deployment of multiple relays ensures availability and resistance to censorship.")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Private Public Data Exchange",src:a(197).default,title:"Private-Public Message Exchange"})),Object(i.b)("p",null,"The following alternate configuration allows for a public node to be operated by a single organization. The oracle provides trusted meta-data to ensure proofs can be validated correctly (E.g. current validator set used for signing blocks in PoS/BFT sysmtems and block height to verify currency of state. A formal study on mechanisms for proof construction and their short-commings has been deferred)."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Private Public Data Exchange",src:a(198).default,title:"Private-Public Message Exchange"})),Object(i.b)("p",null,"In the following configuration an external notary acts as an authoritative source for public ledger data. A secure channel (mutual TLS) between the relays prevents external adversaries from evesdropping on the communication."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Private Public Data Exchange",src:a(199).default,title:"Private-Public Message Exchange"})),Object(i.b)("h2",{id:"nonces-and-replay-attacks"},"Nonces and Replay Attacks"))}b.isMDXComponent=!0}}]);