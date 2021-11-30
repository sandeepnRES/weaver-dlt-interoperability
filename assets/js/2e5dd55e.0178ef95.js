"use strict";(self.webpackChunkweaver_dlt_interoperability=self.webpackChunkweaver_dlt_interoperability||[]).push([[4010],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=p(n),m=r,b=k["".concat(s,".").concat(m)]||k[m]||c[m]||i;return n?a.createElement(b,o(o({ref:t},d),{},{components:n})):a.createElement(b,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8854:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"asset-transfer",title:"Asset Transfer"},s=void 0,p={unversionedId:"external/getting-started/interop/asset-transfer",id:"external/getting-started/interop/asset-transfer",isDocsHomePage:!1,title:"Asset Transfer",description:"\x3c!--",source:"@site/docs/external/getting-started/interop/asset-transfer.md",sourceDirName:"external/getting-started/interop",slug:"/external/getting-started/interop/asset-transfer",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-transfer",editUrl:"https://github.com/hyperledger-labs/weaver-dlt-interoperability/edit/master/docs/external/getting-started/interop/asset-transfer.md",tags:[],version:"current",frontMatter:{id:"asset-transfer",title:"Asset Transfer"},sidebar:"Documentation",previous:{title:"Asset Exchange",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/interop/asset-exchange"},next:{title:"Hyperledger Fabric",permalink:"/weaver-dlt-interoperability/docs/external/getting-started/enabling-weaver-network/fabric"}},d=[{value:"Transfer or recover a bond (non-fungible) asset",id:"transfer-or-recover-a-bond-non-fungible-asset",children:[],level:2},{value:"Transfer or recover token (fungible) assets",id:"transfer-or-recover-token-fungible-assets",children:[],level:2}],c={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document lists sample ways in which you can exercise the asset-transfer interoperation protocol on the test network ",(0,i.kt)("a",{parentName:"p",href:"../test-network/overview"},"launched earlier"),"."),(0,i.kt)("p",null,"Once the networks, relays, and drivers have been launched, and the ledgers bootstrapped, you can trigger the following interoperation flows corresponding to distinct asset-sharing combinations ",(0,i.kt)("em",{parentName:"p"},"other combinations of DLTs will be supported soon"),"):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Fabric with Fabric"),": One Fabric network transfers either a bond or some tokens owned by Alice to Bob in the other network")),(0,i.kt)("p",null,"Assuming that the ",(0,i.kt)("inlineCode",{parentName:"p"},"simpleassettransfer")," chaincode has been deployed in both networks, run the following steps by navigating to the ",(0,i.kt)("inlineCode",{parentName:"p"},"samples/fabric/fabric-cli")," folder (",(0,i.kt)("em",{parentName:"p"},"the Go CLI doesn't support asset transfer yet"),")."),(0,i.kt)("h2",{id:"transfer-or-recover-a-bond-non-fungible-asset"},"Transfer or recover a bond (non-fungible) asset"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," owns bonds with ids ",(0,i.kt)("inlineCode",{parentName:"li"},"a03")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"a04")," as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./bin/fabric-cli chaincode query --user=alice mychannel simpleassettransfer ReadAsset \'["bond01","a03"]\' --local-network=network1\n./bin/fabric-cli chaincode query --user=alice mychannel simpleassettransfer ReadAsset \'["bond01","a04"]\' --local-network=network1\n')),"You should see a JSON structure corresponding to the bond being logged on the console in each case."),(0,i.kt)("li",{parentName:"ol"},"Get ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," to pledge bond ",(0,i.kt)("inlineCode",{parentName:"li"},"a03")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," as follows (with a 1 hour timeout):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset transfer pledge --source-network=network1 --dest-network=network2 --recipient=bob --expiry-secs=3600 --type=bond --ref=a03 --data-file=src/data/assetsForTransfer.json\n")),"You should see a message containing the unique ID of this pledge on the console as ",(0,i.kt)("inlineCode",{parentName:"li"},"Asset pledged with ID <pledge-id>")," (",(0,i.kt)("inlineCode",{parentName:"li"},"<pledge-id>")," is a hexadecimal string)."),(0,i.kt)("li",{parentName:"ol"},"Get ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," to claim this bond asset as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset transfer claim --source-network=network1 --dest-network=network2 --user=bob --owner=alice --type=bond --pledge-id=<pledge-id> --param=bond01:a03\n"))),(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," does not own this asset as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./bin/fabric-cli chaincode query --user=alice mychannel simpleassettransfer ReadAsset \'["bond01","a03"]\' --local-network=network1\n')),"You should see an error message like ",(0,i.kt)("inlineCode",{parentName:"li"},"Error: the asset a03 does not exist"),"."),(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," now owns this asset as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./bin/fabric-cli chaincode query --user=bob mychannel simpleassettransfer ReadAsset \'["bond01","a03"]\' --local-network=network2\n'))),(0,i.kt)("li",{parentName:"ol"},"Now get ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," to pledge bond ",(0,i.kt)("inlineCode",{parentName:"li"},"a04")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," as follows (with a 1 minute timeout):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset transfer pledge --source-network=network1 --dest-network=network2 --recipient=bob --expiry-secs=60 --type=bond --ref=a04 --data-file=src/data/assetsForTransfer.json\n")),"Wait for a minute as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sleep 60\n")),"You should see a message containing the unique ID of this pledge on the console as ",(0,i.kt)("inlineCode",{parentName:"li"},"Asset pledged with ID <pledge-id>")," (",(0,i.kt)("inlineCode",{parentName:"li"},"<pledge-id>")," is a hexadecimal string)."),(0,i.kt)("li",{parentName:"ol"},"Now get ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," to claim this bond asset as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset transfer claim --source-network=network1 --dest-network=network2 --user=bob --owner=alice --type=bond --pledge-id=<pledge-id> --param=bond01:a04\n")),"This should fail as the pledge has already expired."),(0,i.kt)("li",{parentName:"ol"},"Now get ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," to reclaim the asset as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset transfer reclaim --source-network=network1 --user=alice --type=bond --pledge-id=<pledge-id> --param=bond01:a04\n"))),(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," owns this asset as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./bin/fabric-cli chaincode query --user=alice mychannel simpleassettransfer ReadAsset \'["bond01","a04"]\' --local-network=network1\n'))),(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," does not own this asset as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./bin/fabric-cli chaincode query --user=bob mychannel simpleassettransfer ReadAsset \'["bond01","a04"]\' --local-network=network2\n')),"You should see an error message like ",(0,i.kt)("inlineCode",{parentName:"li"},"Error: the asset a04 does not exist"),".")),(0,i.kt)("h2",{id:"transfer-or-recover-token-fungible-assets"},"Transfer or recover token (fungible) assets"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," owns ",(0,i.kt)("inlineCode",{parentName:"li"},"10000")," tokens as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getTokenBalance.sh network1 alice\n"))),(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," owns no tokens as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getTokenBalance.sh network2 bob\n")),"You should see an error message like ",(0,i.kt)("inlineCode",{parentName:"li"},"Error: owner does not have a wallet"),"."),(0,i.kt)("li",{parentName:"ol"},"Get ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," to pledge 50 tokens to ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," as follows (with a 1 hour timeout):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset transfer pledge --source-network=network1 --dest-network=network2 --recipient=bob --expiry-secs=3600 --type=token --units=50 --owner=alice --data-file=src/data/tokensForTransfer.json\n")),"You should see a message containing the unique ID of this pledge on the console as ",(0,i.kt)("inlineCode",{parentName:"li"},"Asset pledged with ID <pledge-id>")," (",(0,i.kt)("inlineCode",{parentName:"li"},"<pledge-id>")," is a hexadecimal string)."),(0,i.kt)("li",{parentName:"ol"},"Get ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," to claim these tokens as follows (replace ",(0,i.kt)("inlineCode",{parentName:"li"},"<pledge-id>")," with the above hexadecimal value):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset transfer claim --source-network=network1 --dest-network=network2 --user=bob --owner=alice --type=token --pledge-id=<pledge-id> --param=token1:50\n"))),(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," owns ",(0,i.kt)("inlineCode",{parentName:"li"},"9950")," tokens (after losing ",(0,i.kt)("inlineCode",{parentName:"li"},"50"),") as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getTokenBalance.sh network1 alice\n"))),(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," now owns ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," tokens as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getTokenBalance.sh network2 bob\n"))),(0,i.kt)("li",{parentName:"ol"},"Now get ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," to pledge 100 tokens to ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," as follows (with a 1 minute timeout):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset transfer pledge --source-network=network1 --dest-network=network2 --recipient=bob --expiry-secs=60 --type=token --units=100 --owner=alice --data-file=src/data/tokensForTransfer.json\n")),"Wait for a minute as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sleep 60\n")),"You should see a message containing the unique ID of this pledge on the console as ",(0,i.kt)("inlineCode",{parentName:"li"},"Asset pledged with ID <pledge-id>")," (",(0,i.kt)("inlineCode",{parentName:"li"},"<pledge-id>")," is a hexadecimal string)."),(0,i.kt)("li",{parentName:"ol"},"Now get ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," to claim these tokens as follows (replace ",(0,i.kt)("inlineCode",{parentName:"li"},"<pledge-id>")," with the above hexadecimal value):",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset transfer claim --source-network=network1 --dest-network=network2 --user=bob --owner=alice --type=token --pledge-id=<pledge-id> --param=token1:100\n")),"This should fail as the pledge has already expired."),(0,i.kt)("li",{parentName:"ol"},"Now get ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," to reclaim these tokens as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/fabric-cli asset transfer reclaim --source-network=network1 --user=alice --type=token --pledge-id=<pledge-id> --param=token1:100\n"))),(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"alice")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network1")," still owns ",(0,i.kt)("inlineCode",{parentName:"li"},"9950")," tokens (after losing ",(0,i.kt)("inlineCode",{parentName:"li"},"50"),") as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getTokenBalance.sh network1 alice\n"))),(0,i.kt)("li",{parentName:"ol"},"Verify that ",(0,i.kt)("inlineCode",{parentName:"li"},"bob")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"network2")," still owns only ",(0,i.kt)("inlineCode",{parentName:"li"},"50")," tokens as follows:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./scripts/getTokenBalance.sh network2 bob\n")))))}k.isMDXComponent=!0}}]);