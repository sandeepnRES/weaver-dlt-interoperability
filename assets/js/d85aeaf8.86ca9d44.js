"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[5651],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},s=void 0,i={unversionedId:"internal/development/cordapp-interop/cordapp-interop-flows",id:"internal/development/cordapp-interop/cordapp-interop-flows",title:"cordapp-interop-flows",description:"\x3c!--",source:"@site/docs/internal/development/cordapp-interop/cordapp-interop-flows.md",sourceDirName:"internal/development/cordapp-interop",slug:"/internal/development/cordapp-interop/cordapp-interop-flows",permalink:"/weaver-dlt-interoperability/docs/internal/development/cordapp-interop/cordapp-interop-flows",draft:!1,editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/main/docs/internal/development/cordapp-interop/cordapp-interop-flows.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"AccessControlFlows",id:"accesscontrolflows",level:3},{value:"AccessControlQueryFlows",id:"accesscontrolqueryflows",level:3},{value:"FNIMFlows",id:"fnimflows",level:3},{value:"FNIMQueryFlows",id:"fnimqueryflows",level:3},{value:"HandleRequestsFromForeignNetworkFlows",id:"handlerequestsfromforeignnetworkflows",level:3},{value:"WriteStateFromExternalNetworkFlows",id:"writestatefromexternalnetworkflows",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"id: cordapp-interop-flows\ntitle: Flows"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"accesscontrolflows"},"AccessControlFlows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class AccessControlIssueRequestInitiator(\n        externalNetworkCertificates: List<String>,\n        externalNetworkId: String,\n        stateLinearId: UniqueIdentifier,\n        participants: List<Party> {\n    // creates an access control state on the ledger for a particular document\n}\n\nclass AccessControlIssueRequestApprover(\n    id: UniqueIdentifier){\n    // allows for a party to approve an access control issuance request\n}\n")),(0,o.kt)("h3",{id:"accesscontrolqueryflows"},"AccessControlQueryFlows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class QueryAccessControlIssueRequestStates() List<AccessControlIssueRequestState> {\n    // returns access control requests\n}\n\nclass QueryAccessControlIssueRequestStateByLinearId(linearId: UniqueIdentifier) AccessControlIssueRequestState {\n    // returns access control request by Id\n}\n\nclass QueryAccessControlStates() List<AccessControlState> {\n    // returns list of access control states\n}\n\nclass QueryAccessControlStateByLinearId(linearId: UniqueIdentifier) AccessControlState {\n    // returns access control state by Id\n}\n")),(0,o.kt)("h3",{id:"fnimflows"},"FNIMFlows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class FNIMInitiator(\n    networkId: String,\n    topology: List<FNNode>,\n    participants: List<Party>) {\n    // creates FNIM record for an external network\n}\n\nclass FNIMExitInitiator(\n    id: String ) {\n    // marks FNIM state as consumed\n}\n")),(0,o.kt)("h3",{id:"fnimqueryflows"},"FNIMQueryFlows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class QueryForeignNetworkInformationManagementStates : List<ForeignNetworkInformationManagementState> {\n    // returns list of FNIM states\n}\n\nclass QueryForeignNetworkInformationManagementStatesById(\n    linearId: UniqueIdentifier) ForeignNetworkInformationManagementState {\n    // returns FNIM state\n}\n\nclass QueryForeignNetworkInformationManagementStateByNetworkId(\n    networkId: String) ForeignNetworkInformationManagementState {\n    // returns FNIM state for specified network\n}\n")),(0,o.kt)("h3",{id:"handlerequestsfromforeignnetworkflows"},"HandleRequestsFromForeignNetworkFlows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class StateQueryInitiator(\n    externalNetworkId: String,\n    organizationName: String,\n    stateLinearId: UniqueIdentifier,\n    requesterCertString: String,\n    requesterSignature: String,\n    txId: String?\n) List<StateQueryResponse> {\n    // returns requested state\n}\n\nclass GetLinearIdsFromTxId(\n    txId: String\n) List<UniqueIdentifier> {\n    // returns list ids for states that match the query criterion\n}\n")),(0,o.kt)("h3",{id:"writestatefromexternalnetworkflows"},"WriteStateFromExternalNetworkFlows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class CreateExternalRequestStateObject(\n        request: ExternalStateRequest\n) RelayRequestObject {\n    // returns request object to query relay about a foreign network state\n}\n\nclass WriteExternalStateInitiator(\n    nodeResponses: List<NodeResponse>,\n    externalNetworkId: String,\n    participants: List<Party>\n) UniqueIdentifier {\n    // writes external state to ledger and returns unique identifier to be used to query from MarcoPolo\n}\n")))}d.isMDXComponent=!0}}]);