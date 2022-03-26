"use strict";(self.webpackChunkdocs_1=self.webpackChunkdocs_1||[]).push([[813],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),b=a,h=d["".concat(u,".").concat(b)]||d[b]||p[b]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(7294);function a(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(7462),a=r(7294),o=r(2389),s=r(3725),l=r(6010),u="tabItem_LplD";function i(e){var t,r,o,i=e.lazy,c=e.block,p=e.defaultValue,d=e.values,b=e.groupId,h=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),m=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(m.length>0)throw new Error('Docusaurus error: Duplicate values "'+m.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(t=null!=p?p:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,s.UB)(),w=y.tabGroupChoices,x=y.setTabGroupChoices,g=(0,a.useState)(v),S=g[0],E=g[1],O=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=b){var P=w[b];null!=P&&P!==S&&k.some((function(e){return e.value===P}))&&E(P)}var j=function(e){var t=e.currentTarget,r=O.indexOf(t),n=k[r].value;n!==S&&(T(t),E(n),null!=b&&x(b,n))},N=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;r=O[n]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},h)},k.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:function(e){return O.push(e)},onKeyDown:N,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(f.filter((function(e){return e.props.value===S}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==S})}))))}function c(e){var t=(0,o.Z)();return a.createElement(i,(0,n.Z)({key:String(t)},e))}},1229:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return b}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=r(9877),l=r(8215),u=["components"],i={sidebar_position:3},c="Block explorers",p={unversionedId:"quickstart/explorers",id:"quickstart/explorers",title:"Block explorers",description:"Overview",source:"@site/docs/quickstart/explorers.md",sourceDirName:"quickstart",slug:"/quickstart/explorers",permalink:"/astar-docs/docs/quickstart/explorers",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart/explorers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Network endpoints",permalink:"/astar-docs/docs/quickstart/endpoints"},next:{title:"Faucet",permalink:"/astar-docs/docs/quickstart/faucet"}},d={},b=[{value:"Overview",id:"overview",level:2},{value:"Explorers",id:"explorers",level:2}],h={toc:b};function f(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-explorers"},"Block explorers"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Block explorers are the Google for searching on a blockchain. They give developers and users the possibility to search information such as balances, contracts, tokens, transactions, and API services."),(0,o.kt)("p",null,"Astar provides two different kinds of explorers: one that combines Substrate and EVM, and another that is dedicated to our EVM ecosystem."),(0,o.kt)("h2",{id:"explorers"},"Explorers"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"astar",label:"Astar Network",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Subscan is the most used explorer in the Polkadot ecosystem. With Subscan you can search the complete Astar Network. Subscan support Substrate and Ethereum API. BlockScout is the best explorer for developers who are building in our EVM environment, it has all the features as EtherScan."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Subscan:")," ",(0,o.kt)("a",{href:"https://astar.subscan.io"},"https://astar.subscan.io")),(0,o.kt)("p",null,(0,o.kt)("b",null,"BlockScout:")," ",(0,o.kt)("a",{href:"https://blockscout.com/astar"},"https://blockscout.com/astar")),(0,o.kt)("p",null,(0,o.kt)("b",null,"Polkadot JS:")," ",(0,o.kt)("a",{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fastar.api.onfinality.io%2Fpublic-ws#/explorer"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fastar.api.onfinality.io%2Fpublic-ws#/explorer"))),(0,o.kt)(l.Z,{value:"shiden",label:"Shiden Network",mdxType:"TabItem"},(0,o.kt)("p",null,"Subscan is the most used explorer in the Polkadot ecosystem. With Subscan you can search the complete Astar Network. Subscan support Substrate and Ethereum API. BlockScout is the best explorer for developers who are building in our EVM environment, it has all the features as EtherScan."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Subscan:")," ",(0,o.kt)("a",{href:"https://shiden.subscan.io"},"https://shiden.subscan.io")),(0,o.kt)("p",null,(0,o.kt)("b",null,"BlockScout:")," ",(0,o.kt)("a",{href:"https://blockscout.com/shiden"},"https://blockscout.com/shiden")),(0,o.kt)("p",null,(0,o.kt)("b",null,"Polkadot JS:")," ",(0,o.kt)("a",{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fshiden.api.onfinality.io%2Fpublic-ws#/explorer"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fshiden.api.onfinality.io%2Fpublic-ws#/explorer"))),(0,o.kt)(l.Z,{value:"shibuya",label:"Shibuya",mdxType:"TabItem"},(0,o.kt)("p",null,"Subscan is the most used explorer in the Polkadot ecosystem. With Subscan you can search the complete Astar Network. Subscan support Substrate and Ethereum API. BlockScout is the best explorer for developers who are building in our EVM environment, it has all the features as EtherScan."),(0,o.kt)("p",null,(0,o.kt)("b",null,"Subscan:")," ",(0,o.kt)("a",{href:"https://shibuya.subscan.io"},"https://shibuya.subscan.io")),(0,o.kt)("p",null,(0,o.kt)("b",null,"BlockScout:")," ",(0,o.kt)("a",{href:"https://blockscout.com/shibuya"},"https://blockscout.com/shibuya")),(0,o.kt)("p",null,(0,o.kt)("b",null,"Polkadot JS:")," ",(0,o.kt)("a",{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shibuya.astar.network#/explorer"},"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.shibuya.astar.network#/explorer")))))}f.isMDXComponent=!0}}]);