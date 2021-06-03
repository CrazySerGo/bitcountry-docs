(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),r=(n(0),n(81)),i={id:"node-operator",title:"How to run a node"},c={unversionedId:"node-operator",id:"node-operator",isDocsHomePage:!1,title:"How to run a node",description:'Tewai Chain is a Bit.Country Metaverse Public Testnet. Tewai means "The Water" in Maori, and we aim to make Tewai Protocol become the most important substance for the metaverse and flows like water adjusting to any objects.',source:"@site/docs/node-operator.md",slug:"/node-operator",permalink:"/node-operator",editUrl:"https://github.com/bit-country/bitcountry-docs/edit/master/docs/node-operator.md",version:"current",sidebar:"someSidebar",previous:{title:"Getting $NUUM Faucet",permalink:"/faucet"},next:{title:"Architecture",permalink:"/architecture"}},l=[{value:"Run a node",id:"run-a-node",children:[{value:"Initial Set-up",id:"initial-set-up",children:[]}]},{value:"<strong>Running a Node as Collator Node Operator</strong>",id:"running-a-node-as-collator-node-operator",children:[]},{value:"<strong>Become a Validator - authority of producing block</strong>",id:"become-a-validator---authority-of-producing-block",children:[{value:"Run the node as validator",id:"run-the-node-as-validator",children:[]},{value:"Bond NUUM",id:"bond-nuum",children:[]},{value:"Generate Session Keys",id:"generate-session-keys",children:[]},{value:"Submitting the setKeys Transaction",id:"submitting-the-setkeys-transaction",children:[]},{value:"Validate",id:"validate",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'Tewai Chain is a Bit.Country Metaverse Public Testnet. Tewai means "The Water" in Maori, and we aim to make Tewai Protocol become the most important substance for the metaverse and flows like water adjusting to any objects.'),Object(r.b)("p",null,"If you would like to support and be a part of the most important aspects of the future Metaverse, you can apply to become a Collator Node Operator to run the Tewai Protocol through our testnet and up to mainnet launch as a Parachain Collator."),Object(r.b)("p",null,"Head into this section ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"node-operator/#run-a-node"}),"Run a node"),". Or if you simply wanted to accessing Bit.Country metaverse, click ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://bit.country"}),"Access Bit.Country"),"."),Object(r.b)("h2",{id:"run-a-node"},"Run a node"),Object(r.b)("h3",{id:"initial-set-up"},"Initial Set-up"),Object(r.b)("h4",{id:"requirements"},Object(r.b)("strong",{parentName:"h4"},"Requirements")),Object(r.b)("p",null,"The most common way for a beginner to run a validator is on a cloud server running Linux. You can choose whatever VPS provider e.g AWS, Azure, or running on your own local setup."),Object(r.b)("p",null,"Standard Hardware Specs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CPU - 2.2 GHz 6-Core Intel Core i7"),Object(r.b)("li",{parentName:"ul"},"Storage - SSD - Should be reasonably sized to deal with blockchain growth. Starting around 10 GB - 80 GB will be okay for the first six months. Recommend to re-evaluate every six month"),Object(r.b)("li",{parentName:"ul"},"RAM - 8 Gb")),Object(r.b)("p",null,"Or "),Object(r.b)("p",null,"AWS Medium EC2 instance with 30 GB Hard drive should be efficient."),Object(r.b)("h2",{id:"running-a-node-as-collator-node-operator"},Object(r.b)("strong",{parentName:"h2"},"Running a Node as Collator Node Operator")),Object(r.b)("p",null,"There are two ways that you can run a node and connect to the Bit.Country Tewai Chain testnet. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Build from source (takes about 5 - 15 minutes with standard specs)"),Object(r.b)("li",{parentName:"ul"},"Use Docker")),Object(r.b)("h4",{id:"building-from-source"},Object(r.b)("strong",{parentName:"h4"},"Building from source")),Object(r.b)("p",null,"Window users: please use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://substrate.dev/docs/en/knowledgebase/getting-started/windows-users"}),"this tutorial")," to setup your build environment "),Object(r.b)("p",null,"Linux-based machine"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Clone Bit.Country Blockchain code")),Object(r.b)("p",null,"Go to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/bit-country/Bit-Country-Blockchain"}),"Bit.Country repo"),", clone the repo from correct commit hash."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-git"}),"# clone the code locally\n\ngit clone https://github.com/bit-country/Bit-Country-Blockchain.git\n\n# change directory\n\ncd Bit-Country-Blockchain\n\n# select correct commit hash\ngit checkout bfece87795f3b4bd4be225989af2ed717fbf9f8c\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Install Rust")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"curl https://sh.rustup.rs -sSf | sh\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Initialize your Wasm Build environment")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"./scripts/init.sh\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"if init.sh file is not found, make sure you are currently inside Bit-Country-Blockchain directory")),Object(r.b)("p",null,"After initializing you can then start building by using the cargo command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"cargo build --release --features=with-bitcountry-runtime\n")),Object(r.b)("p",null,"Once the build has finished you will have the bitcountry-node binary available in the target/release folder. You can start a node for Tewai Chain from the root of the directory like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"./target/release/bitcountry-node --chain tewai --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooW9rDqyS5S5F6oGHYsmFjSdZdX6HAbTD88rPfxYfoXJdNU --name 'your_node_name' --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \n")),Object(r.b)("p",null,"You should see your node begin to sync blocks."),Object(r.b)("p",null,"Feel free to play around with the other available options, which you can inspect by executing:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"./target/release/bitcountry-node --help\n")),Object(r.b)("p",null,"Then you can start bonding NUUM to become validator or nominator"),Object(r.b)("h4",{id:"using-docker"},Object(r.b)("strong",{parentName:"h4"},"Using Docker")),Object(r.b)("p",null,"We publish the latest version to the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://hub.docker.com/repository/docker/bitcountry/bitcountry-node/tags?page=1&ordering=last_updated"}),"Docker Hub")," that can be pulled and ran locally to connect to the network. In order to do this first make sure that you have Docker installed locally. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"How to install and run Docker")),Object(r.b)("h4",{id:"downloading-the-docker-image"},"Downloading the docker image"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker pull bitcountry/bitcountry-node:5f860f4\n")),Object(r.b)("h4",{id:"running-the-docker-image"},"Running the docker image"),Object(r.b)("p",null,"You can test if the docker image is running by using the following command, but the node id\nand the chain data will be deleted after you shut down the docker container:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker run bitcountry/bitcountry-node:5f860f4 --chain tewai\n")),Object(r.b)("p",null,"Now, it's time to set up your node to connect to Tewai Chain Bootnode, you need to choose which folder that you would like to store your chain data. Ensure the folder is exists and you have write permission in the folder."),Object(r.b)("p",null,"Assuming the example path you want to use locally is ",Object(r.b)("em",{parentName:"p"},"path/to/tewaiDb/bitcountry-node"),",\nthe command would be:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker run --network=host -v /tewaiDb/bitcountry-node:/bitcountry-db bitcountry/bitcountry-node:5f860f4 -d /bitcountry-db --chain tewai --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooW9rDqyS5S5F6oGHYsmFjSdZdX6HAbTD88rPfxYfoXJdNU --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \n")),Object(r.b)("p",null,"That's it, your node should be running and syncing with other nodes. Please note, if you want to participate in our Collator Node Operator application, please make sure your node id is permanent and has a high up-time. To continue to receive the reward if you loss your data (by any chance) then you can restore the secret_ed25519 inside your database folder that you set up above e.g ",Object(r.b)("em",{parentName:"p"},"path/to/tewaiDb/bitcountry-node/network/secret_ed25519")," "),Object(r.b)("p",null,"Make sure you back up the secret_ed25519 in the safe place."),Object(r.b)("p",null,"You can apply to becoming a Collator via ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://forms.zohopublic.com/industryconnect/form/BCCollatorNodeApplication/formperma/ua5J1ddpxRlIoLmc-dEZgqKa2rAL7zRMUy7sBHiEyds"}),"Bit.Country Collator Node Operator Program")),Object(r.b)("h2",{id:"become-a-validator---authority-of-producing-block"},Object(r.b)("strong",{parentName:"h2"},"Become a Validator - authority of producing block")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"$NUUM on Tewai Chain Testnet is for testing purpose, they have no value or reflection of NUUM on public mainnet")),Object(r.b)("h3",{id:"run-the-node-as-validator"},"Run the node as validator"),Object(r.b)("p",null,"Once your node from step 1 is fully synced then you can stop the node by Control + C, and run the node again with --validator and --name arguments.\n",Object(r.b)("strong",{parentName:"p"},"Running from source")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"./target/release/bitcountry-node --chain tewai --validator --name 'your node name' --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooW9rDqyS5S5F6oGHYsmFjSdZdX6HAbTD88rPfxYfoXJdNU --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Running from docker")),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-sh"}),"docker run bitcountry/bitcountry-node:5f860f4 --chain tewai --validator --name 'your node name' --bootnodes /ip4/13.239.118.231/tcp/30344/p2p/12D3KooW9rDqyS5S5F6oGHYsmFjSdZdX6HAbTD88rPfxYfoXJdNU --telemetry-url 'wss://telemetry.polkadot.io/submit/ 0' \n")),Object(r.b)("h3",{id:"bond-nuum"},"Bond NUUM"),Object(r.b)("p",null,"Go to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftewai-node.bit.country#/explorer/node"}),"Tewai Chain Explorer")),Object(r.b)("p",null,"Bond the ",Object(r.b)("strong",{parentName:"p"},"$NUUM")," of the Stash account. These ",Object(r.b)("strong",{parentName:"p"},"$NUUM")," will be put at stake for the security of the network and can be slashed.\nSelect the Controller. This is the account that will decide when to start or stop validating."),Object(r.b)("p",null,"First, go to the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Ftewai-node.bit.country#/staking"}),"Staking"),' section. Click on "Account Actions", and then the "+ Stash" button.'),Object(r.b)("h3",{id:"generate-session-keys"},"Generate Session Keys"),Object(r.b)("p",null,"You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator node with your Controller account on Tewai Chain."),Object(r.b)("p",null,"Your generate session keys on ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://explorer.bit.country/apps/?rpc=wss%3A%2F%2Ftewai-node.bit.country#/rpc"}),"Tewai Explorer")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"You need to change the node connection to YOUR validator node in order to use rpc author call")),Object(r.b)("h3",{id:"submitting-the-setkeys-transaction"},"Submitting the setKeys Transaction"),Object(r.b)("p",null,"You need to tell the chain your Session keys by signing and submitting an extrinsic. This is what associates your validator with your Controller account."),Object(r.b)("p",null,'Go to Staking > Account Actions, and click "Set Session Key" on the bonding account you generated earlier. Enter the output from author_rotateKeys in the field and click "Set Session Key".'),Object(r.b)("p",null,"Submit this extrinsic and you are now ready to start validating."),Object(r.b)("h3",{id:"validate"},"Validate"),Object(r.b)("p",null,"To verify that your node is live and synchronized, head to Telemetry and find your node. Note that this will show all nodes on the Bit.Country Tewai Chain network, which is why it is important to select a unique name!"),Object(r.b)("p",null,'If everything looks good, go ahead and click on "Validate" in Explorer UI.'),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Congratulations!")," If you have followed all of these steps, and been selected to be a part of the validator set, you are now running a Bit.Country Tewai Chain validator!"))}u.isMDXComponent=!0},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=o,h=b["".concat(i,".").concat(p)]||b[p]||d[p]||r;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);