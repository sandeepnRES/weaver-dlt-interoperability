"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[350],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6166:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),s=["components"],i={},l=void 0,c={unversionedId:"internal/development/cordapp-interop/cordapp-interop-rest-api",id:"internal/development/cordapp-interop/cordapp-interop-rest-api",isDocsHomePage:!1,title:"cordapp-interop-rest-api",description:"\x3c!--",source:"@site/docs/internal/development/cordapp-interop/cordapp-interop-rest-api.md",sourceDirName:"internal/development/cordapp-interop",slug:"/internal/development/cordapp-interop/cordapp-interop-rest-api",permalink:"/weaver-dlt-interoperability/docs/internal/development/cordapp-interop/cordapp-interop-rest-api",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/internal/development/cordapp-interop/cordapp-interop-rest-api.md",tags:[],version:"current",frontMatter:{}},p=[],u={toc:p};function d(e){var r=e.components,t=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"id: cordapp-interop-rest-api\ntitle: REST API"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Documentation of the REST API that is intended to be called from the MarcoPolo CordApp with the underlying\nflows noted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"GET networkMapSnapshot\nreq: {}\nres: List<NodeInfo>, or failure\ncalls: proxy.networkMapSnapshot\n\nGET registeredFlows\nreq: {}\nres: List<String>, or failure\ncalls: proxy.registeredFlows\n\nGET foreignNetworkInfos\nreq: {}\nres: List<ForeignNetworkInformationManagementState>, or failure\ncalls: QueryForeignNetworkInformationManagementStates\n\nGET foreignNetworkInfos/{id}\nreq: {}\nres: ForeignNetworkInformationManagementState, or failure\ncalls: QueryForeignNetworkInformationManagementStatesById\n\nPOST foreignNetworkInfos\nreq: FNIMStateRequest\nres: FNIMStateResponse, or failure\ncalls: FNIMInitiator\n\nDELETE foreignNetworkInfos/{id}\nreq: {}\nres: id, or failure\ncalls: FNIMExitInitiator\n\nGET accessControlRequests\nreq: {}\nres: AccessControlIssueRequestStateResponse, or failure\ncalls: QueryAccessControlIssueRequestStateByLinearId\n\nPOST accessControlRequests/new\nreq: AccessControlIssueRequestStateRequest\nres: AccessControlIssueRequestStateResponse, or failure\ncalls: AccessControlIssueRequestInitiator\n\nPOST /accessControlRequests/approve/{id}\nreq: id\nres: AccessControlIssueRequestStateResponse, or failure\ncalls: AccessControlIssueRequestApprover\n\nGET accessControlStates\nreq: {}\nres: List<AccessControlState>, or failure\ncalls: QueryAccessControlStates\n\nGET accessControlStates/{id}\nreq: {}\nres: AccessControlStateResponse, or failure\ncalls: QueryAccessControlIssueRequestStateByLinearId\n\nPOST externalNetworkRequest\nreq: ExternalNetworkRequest\nres: LinearIdResponseObject, or failure\ncalls: StateQueryInitiator\n\nPOST externalNetworkRequestByTxId\nreq: ExternalNetworkRequestWithTxId\nres: TxIdResponseObject, or failure\ncalls: GetLinearIdsFromTxId\n\nGET getNetworkMap/{id}\nreq: {}\nres: NetworkMapObject, or failure\ncalls: proxy.networkMapSnapshot\n\nPOST requestExternalState\nreq: ExternalStateRequest\nres: UniqueIdentifier, or failure\ncalls: WriteExternalStateInitiator\n\nGET storeFNIM\nreq: {}\nres: ForeignNetworkMapInformationIntermediateResponse, or failure\ncalls: QueryForeignNetworkInformationManagementStateByNetworkId\n")))}d.isMDXComponent=!0}}]);