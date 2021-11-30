"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[7459],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,u=m["".concat(l,".").concat(p)]||m[p]||h[p]||i;return n?r.createElement(u,o(o({ref:t},c),{},{components:n})):r.createElement(u,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"decentralized-identity",title:"Decentralized Identity"},l=void 0,d={unversionedId:"external/architecture-and-design/decentralized-identity",id:"external/architecture-and-design/decentralized-identity",isDocsHomePage:!1,title:"Decentralized Identity",description:"\x3c!--",source:"@site/docs/external/architecture-and-design/decentralized-identity.md",sourceDirName:"external/architecture-and-design",slug:"/external/architecture-and-design/decentralized-identity",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/decentralized-identity",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/architecture-and-design/decentralized-identity.md",tags:[],version:"current",frontMatter:{id:"decentralized-identity",title:"Decentralized Identity"},sidebar:"Documentation",previous:{title:"Weaver Dapps",permalink:"/weaver-dlt-interoperability/docs/external/architecture-and-design/weaver-dapps"},next:{title:"Authentication",permalink:"/weaver-dlt-interoperability/docs/external/security-model/authentication"}},c=[{value:"Identity Plane: Strawman Approach",id:"identity-plane-strawman-approach",children:[],level:3},{value:"Networks as Groups of Self-Sovereign Members",id:"networks-as-groups-of-self-sovereign-members",children:[],level:3},{value:"Distributed Identity Management Infrastructure",id:"distributed-identity-management-infrastructure",children:[{value:"Interoperation Identity Network",id:"interoperation-identity-network",children:[],level:4},{value:"Network Membership Credentials",id:"network-membership-credentials",children:[],level:4},{value:"Identity Info: Units of Exchange",id:"identity-info-units-of-exchange",children:[],level:4},{value:"IIN Agents as Member Representatives",id:"iin-agents-as-member-representatives",children:[],level:4},{value:"Protocols",id:"protocols",children:[],level:4}],level:3},{value:"References",id:"references",children:[],level:3}],h={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Interoperation for asset or data transfers/exchanges relies on a message-passing infratructure and pan-network data processing modules, as we have seen in earlier pages. But there is yet another crucial basis these data processing modules need to satisfy our design principles of network independence and avoidance of trust parties. This is the ability of a network as a whole and of its individual members to accurately identify and authenticate another network's members."),(0,i.kt)("p",null,"Further, for the networks to remain independent and interact ad hoc with each other, we cannot impose a central authority that unifies their private identity management systems. So the identity basis of interoperation must be decentralized, leading inevitably to the requirement of exchanging identity information across networks as a pre-requisite for asset and data transfers/exchanges. This is illustrated in the figure below where interoperation protocols are classified in two planes (or tiers), data and identity, with the former depending on the latter."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(9685).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("strong",{parentName:"li"},"data plane")," lies the protocols that effect the actual exchanges of data and assets. The figure above illustrates a typical data-sharing instance, where the network at the left requests a data record from the right. The latter receives the request via the two relays (not explicitly marked in this diagram) and runs an access control check through consensus in its ",(0,i.kt)("em",{parentName:"li"},"interop module")," before responding with the data record and supporting proof. The network at the left receives the data and proof, again via the two relays, and verifies the data using the supplied proof. ",(0,i.kt)("strong",{parentName:"li"},"Note: since a core part of both request and proof are digital signatures of network members, the ability to identify and authenticate network members is necessary to perform these endpoint functions"),"."),(0,i.kt)("li",{parentName:"ul"},"Here is where the ",(0,i.kt)("strong",{parentName:"li"},"identity plane")," enters the picture, as a trust anchor for the data plane. The most general function of this plane is illustrated in the figure, where the networks get each others' identity and configuration (i.e., membership structure and network topology) information. This exchange has as its own trust basis (or dependency) a set of identity providers and verifiers. (",(0,i.kt)("em",{parentName:"li"},"Note"),": these identity providers and verifiers may belong to the two networks or they could be external entities.) The outcome of the exchange is a record of the other network's identity and configuration information on one's ledger, which can then be looked up in a data plane protocol instance.")),(0,i.kt)("h3",{id:"identity-plane-strawman-approach"},"Identity Plane: Strawman Approach"),(0,i.kt)("p",null,"The simplest identity plane protocol involves a direct exchange of identity information between representatives of the two networks: in other words, an API integration. But this approach suffers from the same drawbacks that API integration in the data plane would. It diminishes a blockchain network to a single trusted spokesperson, exposing that network to risk. Even if such a spokesperson could be designated, appropriately framing access control policies for potentially every other blockchain network in the world would be very challenging. This approach is therefore insecure and not scalable, and therefore ought to be treated purely as a strawman."),(0,i.kt)("h3",{id:"networks-as-groups-of-self-sovereign-members"},"Networks as Groups of Self-Sovereign Members"),(0,i.kt)("p",null,"A secure and sustainable identity plane plaform can be built on the basis of ",(0,i.kt)("em",{parentName:"p"},"self-sovereign identity")," and ",(0,i.kt)("em",{parentName:"p"},"decentralized identifiers"),". We recognize that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each constituent member of a blockchain network may already possess an identity from a third-party provider"),(0,i.kt)("li",{parentName:"ul"},"Membership within a network can be treated as a property of a sovereign organization rather than subordination to a network's governing authority"),(0,i.kt)("li",{parentName:"ul"},"DIDs allow members to control who they wish to share their identities with and the levels of exposure"),(0,i.kt)("li",{parentName:"ul"},"Network membership lists and individual members' identities can respectively be validated by different providers, thereby maintaining decentralization of infrastructure")),(0,i.kt)("h3",{id:"distributed-identity-management-infrastructure"},"Distributed Identity Management Infrastructure"),(0,i.kt)("p",null,"The distributed identity management infrastructure for interoperation is illustrated in the figure below. We assume the existence of one or more ",(0,i.kt)("em",{parentName:"p"},"Interoperation Identity Networks (IINs)")," that act as registries and credential validators for the organizations that form the memberships of blockchain networks."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(9189).Z})),(0,i.kt)("p",null,"An IIN can be built from scratch to facilitate blockchain interoperation, but it can also be an augmentation of an existing decentralized identity provider or registry. Its purpose is to maintain identity records and credentials for organizations and validate these to third parties as per the desire of the identity or credential owner. In this model, an IIN can itself be reputed or it can bring together many reputed and trusted identity providers (called ",(0,i.kt)("em",{parentName:"p"},"stewards"),") into a shared network. As long as the members of two blockchain networks have shared trust in one or more IINs, an identity plane exchange can be effected, thereby setting the foundation for data and asset transfers."),(0,i.kt)("h4",{id:"interoperation-identity-network"},"Interoperation Identity Network"),(0,i.kt)("p",null,"The ideal IIN architecture is illustrated in the figure below, inspired by Hyperleder Indy, whose architecture is used in our canonical (or reference) implementation. Built on a DLT itself, an Indy-based IIN can provide the combination of assurance and decentralization that a centralized registry cannot. Further, such an IIN will support the entire SSI and DID standard, maintaining credential schemas and verification keys, and issuing ",(0,i.kt)("em",{parentName:"p"},"verifiable credentials")," that can be used for privacy-preserving authentications."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(5411).Z})),(0,i.kt)("p",null,"An IIN is modeled as a network with a distributed shared ledger, implemented using an Indy Node Pool and running BFT consensus. The ledger is also (ideally) meant to be publicly accessible, though there is nothing preventing our protocols from working with a private IIN."),(0,i.kt)("p",null,"A canonical IIN maintains the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DID records corresponding to organizations that are members of one or more blockchain networks, whose salient attributes include:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Unique (within an IIN) identifier or ",(0,i.kt)("em",{parentName:"li"},"verinym")," for the identity owner"),(0,i.kt)("li",{parentName:"ul"},"Service endpoint for the identity owner"),(0,i.kt)("li",{parentName:"ul"},"Credential schemas"),(0,i.kt)("li",{parentName:"ul"},"Credential definitions (public keys used to authenticate signed credentials)")))),(0,i.kt)("p",null,"Every IIN has a set of bootstrapped ",(0,i.kt)("em",{parentName:"p"},"trust anchors")," called ",(0,i.kt)("em",{parentName:"p"},"stewards"),". A steward can create other trust anchors by issuing them suitable credentials. The trust anchors are the primary identity providers in our distributed identity management architecture. They can be existing reputed authorities or identity providers who are trusted to certify blockchain networks' memberships, or they can be created ad hoc by a consortium representing the members of a blockchain network."),(0,i.kt)("p",null,"For one blockchain network to discover and validate another in the identity plane, it must trust one or more IINs and trust anchors who can provide that validation. We envision a shared and mutually reinforcing trust among stewards and other anchors within an IIN. An anchor could gain trust by virtue of joining a well-established IIN. Similarly, an IIN bootstrapped with well-known stewards gains trust because of the collective reputations of those stewards."),(0,i.kt)("p",null,"Examples of entities that can act as stewards or trust anchors within IINs: the Sovrin Foundation (an organization dedicated to enabling open-source digital ID management, and which also maintains Indy), companies like Maersk or Walmart that have founded real-world blockchain networks, companies like IBM or R3 that maintain popular DLT platforms."),(0,i.kt)("p",null,"IINs don't have to be built on Indy. Alternatives like Sidetree exist, providing similar functionality. There are also various existing DID registries that are already issuing credentials to existing organizations. To the extent possible, we would like to leverage all of this existing infrastructure and not force any network menmber to find yet another identity provider. Therefore, these existing registries or networks can be used as IINs: the only requirement is that they follow the standards for SSI and DIDs and issuing VCs."),(0,i.kt)("h4",{id:"network-membership-credentials"},"Network Membership Credentials"),(0,i.kt)("p",null,"Two kinds of credentials (each with a schema and a definition) are maintained on an IIN ledger:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Member list"),": This contains a network name or ID and a set of DIDs of that network's members.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is a per-network credential whose schema and verification key must be maintained on an IIN."),(0,i.kt)("li",{parentName:"ul"},"This is issued by a steward or trust anchor in an IIN and is associated with that steward's or anchor's DID.")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Membership"),": This contains an oranization's attributes, including the set of IDs of networks to which it belongs.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is designed to be an extensible credential, i.e., support more attributes in the future."),(0,i.kt)("li",{parentName:"ul"},"An existing membership credential (of the VC form) can be used as long as it matches the schema recorded on an IIN."),(0,i.kt)("li",{parentName:"ul"},"The issuer must be a steward or trust anchor (or equivalent, if it's a non-Indy registry) in an IIN."),(0,i.kt)("li",{parentName:"ul"},"This is associated with the member's DID.")),(0,i.kt)("h4",{id:"identity-info-units-of-exchange"},"Identity Info: Units of Exchange"),(0,i.kt)("p",null,"The IIN is used to discover the membership list of a foreign network and establish the authenticity of its members. Memnbership credentials are independent of blockchain networks."),(0,i.kt)("p",null,"But data plane transfers and exchanges require knowledge of in-network identities and certificates, which are issued by a network's membership manager(s) to peers and clients. These are not shared through IINs for several reasons. First, the volume of this information can be quite high and further it is subject to change based on a network's internal needs. Also, a network or its members may not wish to expose all this information to an IIN, which is designed to be publicly accessible. Therefore, it is infeasible or undesirable to shared network-specific credentials via established IINs. Instead, we will enable the ",(0,i.kt)("em",{parentName:"p"},"peer-to-peer")," exchange of such credentials after the membership discovery and validation procedure is complete."),(0,i.kt)("p",null,"Specifically, the identity information for a network member consists of the set of certificate chains of the membership managers for that particular member (organization). These consist of one or more hierarchies of root and intermediate CA certificates. For example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In Fabric, each organization uses one or more MSPs (",(0,i.kt)("em",{parentName:"li"},"membership service providers"),"), each running one or more root and intermediate Fabric-CA servers. Any network peer belonging to an organization is issued a certificate authorized by one of these certificate chains. To authenticate a network peer or client in a data plane protocol, knowledge of these certificate chains is essential."),(0,i.kt)("li",{parentName:"ul"},"In Corda, the entire network typically consists of a hierarchy of CAs, from a root to multiple ",(0,i.kt)("em",{parentName:"li"},"doormen"),", and from each doorman to multiple nodes. Finally, the certificates used to sign transactions are issued by the node CAs. Therefore, knowledge of the root, doormen, and node CA certificates is essential for authenticating signers.")),(0,i.kt)("p",null,"More generally, each unit of exchange corresponding to a network member is a ",(0,i.kt)("em",{parentName:"p"},"Security Group"),", so-called because each network member is an independent organization in its own right with a security domain."),(0,i.kt)("h4",{id:"iin-agents-as-member-representatives"},"IIN Agents as Member Representatives"),(0,i.kt)("p",null,'Every network member needs a proxy (either an abstraction or a separate module) for communication with IINs and with the members of foreign networks in the identity plane. We use the term "IIN Agent" to refer to this proxy, and illustrate its functioning as a module within a Fabric network through the reference diagram below.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(7735).Z})),(0,i.kt)("p",null,"In the reference implementation, IIN Agents are built as Hyperledger Aries nodes and communicate with each other and with IIN stewards and trust anchors using the Aries protocol. (IIN stewards and trust anchors are also built as Aries nodes.)"),(0,i.kt)("p",null,"The list of trusted IINs is recorded on the local network's shared ledger, as illustrated in the figure (and thereby agreed through network consensus). To be able to interoperate with another network, the latter's members must have identity records maintained by sume subset of these trusted IINs and their VCs must be issued by these IINs stewards and trust anchors."),(0,i.kt)("h4",{id:"protocols"},"Protocols"),(0,i.kt)("p",null,"Let us consider a scenario where ",(0,i.kt)("em",{parentName:"p"},"NETWORK 1")," and ",(0,i.kt)("em",{parentName:"p"},"NETWORK 2")," wish to interoperate, and their respective member organizations are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),": Org3, Org4, Org5"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),": Org1, Org2")),(0,i.kt)("p",null,"Each network discovers the other's member list and obtains and records ech member's security group to the local shared ledger. We can enumerate these as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"NETWORK 1")," discovers and registers ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),":Org1"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"NETWORK 1")," discovers and registers ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),":Org2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"NETWORK 2")," discovers and registers ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),":Org3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"NETWORK 2")," discovers and registers ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),":Org4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"NETWORK 2")," discovers and registers ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),":Org5")),(0,i.kt)("p",null,"Each of these can be done in parallel and each discovery and registration operation is idempotent as long as the security group of a network member does not change."),(0,i.kt)("p",null,"The high-level workflow for discovery and registration is illustrated below (using ",(0,i.kt)("em",{parentName:"p"},"NETWORK 2")," as the seeker and ",(0,i.kt)("em",{parentName:"p"},"NETWORK 1")," as the provider)."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(2488).Z})),(0,i.kt)("p",null,"(",(0,i.kt)("em",{parentName:"p"},"Note"),': "Network unit" is synonymous with "network member")'),(0,i.kt)("p",null,"Prerequisites for this process are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The member list credential of ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1")," is provided by a steward or trust anchor in a particular IIN which is also on the trust list recorded in the ledger of ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),"."),(0,i.kt)("li",{parentName:"ul"},"The membership credentials for both organizations in ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1")," are supplied by one or more IINs that are on the trust list of ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),"."),(0,i.kt)("li",{parentName:"ul"},"Each of the 5 organizations (2 in ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1")," and 3 in ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),") has an IIN Agent running on their behalf.")),(0,i.kt)("p",null,"Let us take the example of ",(0,i.kt)("em",{parentName:"p"},"NETWORK 2")," having already obtained the security group info for Org4 and Org5 in ",(0,i.kt)("em",{parentName:"p"},"NETWORK 1"),". It is now discovering and registering ",(0,i.kt)("em",{parentName:"p"},"NETWORK 1"),":Org3. We assume that there is a single IIN with a single Steward for validating member list as well as membership credentials for all members of both the networks."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note"),": we assume here for simplicity that a steward as a reputed identity provider has a mechanism to validate the bona fides of an orgganization and its membership in a given network. There are other techniques involving group signatures that could be applied to corroborate an organization's claim to network membership rather than requiring a steward to use an out-of-band security mechanism, but that is presently beyond the scope of this design."),(0,i.kt)("p",null,"The discovery and registration procedure steps are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The IIN Agent for Org3 registers its membership to ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1")," at the Steward in IIN:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),":Org3 gets a DID (verinym) issued"),(0,i.kt)("li",{parentName:"ul"},"The Steward updates the member list credential for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1")," to include Org3"),(0,i.kt)("li",{parentName:"ul"},"Org3 obtains a membership credential from Steward"))),(0,i.kt)("li",{parentName:"ul"},"The IIN Agent for Org3 issues itself a self-signed VC containing its security group info"),(0,i.kt)("li",{parentName:"ul"},"The IIN Agent for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),":Org2 (only one organization in the network needs to do this) obtains the new member list credential from Steward in IIN and validates it using the IIN ledger records"),(0,i.kt)("li",{parentName:"ul"},"The IIN Agent for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),":Org2 discovers that Org3 is a member of ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),", fetches Org3's membership credential from Org3's IIN Agent, and validates it using the IIN ledger records"),(0,i.kt)("li",{parentName:"ul"},"The IIN agent for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),":Org2 fetches the self-signed security group credential from the IIN agent of ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),":Org3 and validates it"),(0,i.kt)("li",{parentName:"ul"},"The IIN agent for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),":Org2 triggers a flow among the IIN Agents of ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2")," to collect signatures endorsing the security group info for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),":Org3 fetched above",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The IIN Agent for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),":Org1 gets this endorsement request, and validates both the membership credential and the security group info for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),":Org3 by communicating with the Steward, the IIN ledger, and the IIN Agent for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),":Org3"),(0,i.kt)("li",{parentName:"ul"},"The IIN Agent for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),":Org1 signs the request from Org2 containing the security group info for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),":Org3 after the above check succeeds"))),(0,i.kt)("li",{parentName:"ul"},"When the IIN agent for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),":Org2 gets signatures from the IIN Agents representing each member of ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),", it submits the security group info for ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),":Org3 alon with the signatures to the ",(0,i.kt)("em",{parentName:"li"},"interop module")," (typically smart contract) for recording on the ledger of ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Now the ledger of ",(0,i.kt)("em",{parentName:"li"},"NETWORK 2")," contains the identities and certificates of all three members of ",(0,i.kt)("em",{parentName:"li"},"NETWORK 1"),": Org3,Org4,Org5, and data plane interoperation may ensue.")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note"),": the last step above (recording to the local ledger via the ",(0,i.kt)("em",{parentName:"p"},"interop module"),") may be performed by IIN Agents of both Org1 and Org2 as they have no means of synchronizing their actions, but this recording will be idempotent and hence not cause any harm."),(0,i.kt)("p",null,"The process above is illustrated with a few more details in the sequence of protocol diagrams below."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(2118).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(9885).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt text",src:n(1075).Z})),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("p",null,"Bishakh Chandra Ghosh, Venkatraman Ramakrishna, Chander Govindarajan, Dushyant Behl, Dileban Karunamoorthy, Ermyas Abebe, Sandip Chakraborty, ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2104.03277"},"Decentralized Cross-Network Identity Management for Blockchain Interoperation"),", ",(0,i.kt)("em",{parentName:"p"},"ICBC 2021")))}m.isMDXComponent=!0},9189:function(e,t,n){t.Z=n.p+"assets/images/decentralized-id-mgmt-arch-7ed4587b65ff744dfc673abd501e4ba7.jpg"},9685:function(e,t,n){t.Z=n.p+"assets/images/identity-data-planes-debbbfc93b380e8b7d19d806f5bd6938.jpg"},7735:function(e,t,n){t.Z=n.p+"assets/images/iin-augmented-network-825564146ecf315409523fc5143b91e4.jpg"},5411:function(e,t,n){t.Z=n.p+"assets/images/iin-5a100d43a34ee6ee2a1d8e630c3e918d.jpg"},9885:function(e,t,n){t.Z=n.p+"assets/images/protocol-get-info-phase-9c3977e73e33da03ef6ceb6024cb2a85.jpg"},2488:function(e,t,n){t.Z=n.p+"assets/images/protocol-identity-overview-1b83a4b8fd6f467e31e44f86f2b5fdc1.jpg"},2118:function(e,t,n){t.Z=n.p+"assets/images/protocol-registration-phase-f6105952390836cc034643eebbee5009.jpg"},1075:function(e,t,n){t.Z=n.p+"assets/images/protocol-update-info-phase-560b85ccf7c2f12f83dd6c2fec1fbbcd.jpg"}}]);