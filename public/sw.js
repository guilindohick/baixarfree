if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let r={};const d=e=>i(e,n),f={module:{uri:n},exports:r,require:d};a[n]=Promise.all(s.map((e=>f[e]||d(e)))).then((e=>(c(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/8jJPlITa7pUC5UFUpRIcb/_buildManifest.js",revision:"b1fd2d0137911bd438110b2770b15af1"},{url:"/_next/static/8jJPlITa7pUC5UFUpRIcb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1122-a67bfdd20ebc32ff.js",revision:"a67bfdd20ebc32ff"},{url:"/_next/static/chunks/1664-9ad65ab6e4502b59.js",revision:"9ad65ab6e4502b59"},{url:"/_next/static/chunks/1954-97f2f302121c99f4.js",revision:"97f2f302121c99f4"},{url:"/_next/static/chunks/2148-4261f2c7fdd0084b.js",revision:"4261f2c7fdd0084b"},{url:"/_next/static/chunks/3433-21004cd8311db077.js",revision:"21004cd8311db077"},{url:"/_next/static/chunks/4076-0bc948eea5e065ce.js",revision:"0bc948eea5e065ce"},{url:"/_next/static/chunks/4085-6a741ec3c8f16fea.js",revision:"6a741ec3c8f16fea"},{url:"/_next/static/chunks/4122-6383f6d95af90acf.js",revision:"6383f6d95af90acf"},{url:"/_next/static/chunks/4176-6feee0bc94cabccc.js",revision:"6feee0bc94cabccc"},{url:"/_next/static/chunks/4773-1eff0fd5f1b31f91.js",revision:"1eff0fd5f1b31f91"},{url:"/_next/static/chunks/5224-f5c7c519461b24d4.js",revision:"f5c7c519461b24d4"},{url:"/_next/static/chunks/5236-bc554edc27a61876.js",revision:"bc554edc27a61876"},{url:"/_next/static/chunks/589-90c54cc55e52f7ef.js",revision:"90c54cc55e52f7ef"},{url:"/_next/static/chunks/6455-e8f96a54770f0dcf.js",revision:"e8f96a54770f0dcf"},{url:"/_next/static/chunks/6877-5a0f1b63cd8045a4.js",revision:"5a0f1b63cd8045a4"},{url:"/_next/static/chunks/75fc9c18-2cc04cd5a8e46304.js",revision:"2cc04cd5a8e46304"},{url:"/_next/static/chunks/9161-d29d38c8b3bf6e53.js",revision:"d29d38c8b3bf6e53"},{url:"/_next/static/chunks/9256-d54d77b2246799a7.js",revision:"d54d77b2246799a7"},{url:"/_next/static/chunks/9509-45970596655326e5.js",revision:"45970596655326e5"},{url:"/_next/static/chunks/9893-804e30e2615de755.js",revision:"804e30e2615de755"},{url:"/_next/static/chunks/framework-1f1fb5c07f2be279.js",revision:"1f1fb5c07f2be279"},{url:"/_next/static/chunks/main-77328bc3cf0dc848.js",revision:"77328bc3cf0dc848"},{url:"/_next/static/chunks/pages/%5Bproduct_details%5D-2c2a5c4693304bdc.js",revision:"2c2a5c4693304bdc"},{url:"/_next/static/chunks/pages/404-341cac423ecf4c04.js",revision:"341cac423ecf4c04"},{url:"/_next/static/chunks/pages/_app-02742baf74aa9e63.js",revision:"02742baf74aa9e63"},{url:"/_next/static/chunks/pages/_error-02cc11fd74b4e5ff.js",revision:"02cc11fd74b4e5ff"},{url:"/_next/static/chunks/pages/about-us-1ab746682c42eb7d.js",revision:"1ab746682c42eb7d"},{url:"/_next/static/chunks/pages/account/all-download-3053f3d062c496b4.js",revision:"3053f3d062c496b4"},{url:"/_next/static/chunks/pages/account/all-sales-86bd855018ca20d7.js",revision:"86bd855018ca20d7"},{url:"/_next/static/chunks/pages/account/boards-4759c9a7afadb617.js",revision:"4759c9a7afadb617"},{url:"/_next/static/chunks/pages/account/devices-ded8c36b3cf93288.js",revision:"ded8c36b3cf93288"},{url:"/_next/static/chunks/pages/account/downloads-b08e276db9332e5f.js",revision:"b08e276db9332e5f"},{url:"/_next/static/chunks/pages/account/edit-product/%5Bslug%5D-769b18e97071a677.js",revision:"769b18e97071a677"},{url:"/_next/static/chunks/pages/account/favourites-1660ca4ba219af7f.js",revision:"1660ca4ba219af7f"},{url:"/_next/static/chunks/pages/account/following-3672154e1e77b459.js",revision:"3672154e1e77b459"},{url:"/_next/static/chunks/pages/account/my-earnings-3cc61e8def949874.js",revision:"3cc61e8def949874"},{url:"/_next/static/chunks/pages/account/my-product-40bd978e71b95439.js",revision:"40bd978e71b95439"},{url:"/_next/static/chunks/pages/account/my-subscription-f53d5c2cab29f53f.js",revision:"f53d5c2cab29f53f"},{url:"/_next/static/chunks/pages/account/my-wallet-a6aa5c9bda7506e7.js",revision:"a6aa5c9bda7506e7"},{url:"/_next/static/chunks/pages/account/my_purchases-843dff1456a7cc6a.js",revision:"843dff1456a7cc6a"},{url:"/_next/static/chunks/pages/account/order-fb4909da81a89927.js",revision:"fb4909da81a89927"},{url:"/_next/static/chunks/pages/account/profile-7f3a60881728cf70.js",revision:"7f3a60881728cf70"},{url:"/_next/static/chunks/pages/account/upload-21d99976f87085e4.js",revision:"21d99976f87085e4"},{url:"/_next/static/chunks/pages/account/withdraw-history-b7d755ddecf806b7.js",revision:"b7d755ddecf806b7"},{url:"/_next/static/chunks/pages/be-a-contributer-eaa19f97a6e8f77f.js",revision:"eaa19f97a6e8f77f"},{url:"/_next/static/chunks/pages/blog-16f79361937647aa.js",revision:"16f79361937647aa"},{url:"/_next/static/chunks/pages/blog/%5Bdetails%5D-08d0231d2fb5b936.js",revision:"08d0231d2fb5b936"},{url:"/_next/static/chunks/pages/blog/category/%5Bslug%5D-a664945aeed7f533.js",revision:"a664945aeed7f533"},{url:"/_next/static/chunks/pages/board/%5Buuid%5D/%5Bslug%5D-a56a832eeaaeb95f.js",revision:"a56a832eeaaeb95f"},{url:"/_next/static/chunks/pages/cancel-payment-8194dd97802946f6.js",revision:"8194dd97802946f6"},{url:"/_next/static/chunks/pages/colors-products/%5Bslug%5D-22d1280d65b69cb4.js",revision:"22d1280d65b69cb4"},{url:"/_next/static/chunks/pages/contact-us-2b7acbda1a8572e8.js",revision:"2b7acbda1a8572e8"},{url:"/_next/static/chunks/pages/cookie-policy-7dcf197e78ae1f59.js",revision:"7dcf197e78ae1f59"},{url:"/_next/static/chunks/pages/customer/%5Bslug%5D-6e36368de7e61e79.js",revision:"6e36368de7e61e79"},{url:"/_next/static/chunks/pages/customer/%5Bslug%5D/follower-6a7b69b209365927.js",revision:"6a7b69b209365927"},{url:"/_next/static/chunks/pages/customer/%5Bslug%5D/following-13057c1c7ceca5a6.js",revision:"13057c1c7ceca5a6"},{url:"/_next/static/chunks/pages/filter-abf1a4e24f999eba.js",revision:"abf1a4e24f999eba"},{url:"/_next/static/chunks/pages/forgot-password-8278151cbce73d73.js",revision:"8278151cbce73d73"},{url:"/_next/static/chunks/pages/index-927e4e2812cef955.js",revision:"927e4e2812cef955"},{url:"/_next/static/chunks/pages/login-4c9c0fb27d862f7f.js",revision:"4c9c0fb27d862f7f"},{url:"/_next/static/chunks/pages/pay-3a473adedbbd86cd.js",revision:"3a473adedbbd86cd"},{url:"/_next/static/chunks/pages/payment-processing-979b4e8db9ba4ba6.js",revision:"979b4e8db9ba4ba6"},{url:"/_next/static/chunks/pages/pricing-003dbc37b2146ae2.js",revision:"003dbc37b2146ae2"},{url:"/_next/static/chunks/pages/privacy-policy-6b98e638644cc168.js",revision:"6b98e638644cc168"},{url:"/_next/static/chunks/pages/referrals-dfb33b235ca3f813.js",revision:"dfb33b235ca3f813"},{url:"/_next/static/chunks/pages/server-sitemap.xml-f5d3b49b1ae6e97f.js",revision:"f5d3b49b1ae6e97f"},{url:"/_next/static/chunks/pages/signup-b7815d9471046d81.js",revision:"b7815d9471046d81"},{url:"/_next/static/chunks/pages/tags/%5Bslug%5D/%5Btype_id%5D/%5Bid%5D-042d8d8aa3ed96d1.js",revision:"042d8d8aa3ed96d1"},{url:"/_next/static/chunks/pages/terms-and-condition-6475b265331222d8.js",revision:"6475b265331222d8"},{url:"/_next/static/chunks/pages/thank-you-ec0ec4b9d7ebb0f1.js",revision:"ec0ec4b9d7ebb0f1"},{url:"/_next/static/chunks/pages/user/%5Bslug%5D-5bc28e10c20e2d96.js",revision:"5bc28e10c20e2d96"},{url:"/_next/static/chunks/pages/user/%5Bslug%5D/follower-8f65de099b2a31f0.js",revision:"8f65de099b2a31f0"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-dd8919a572f3efbe.js",revision:"dd8919a572f3efbe"},{url:"/_next/static/css/8b6a89e1ef8c1d83.css",revision:"8b6a89e1ef8c1d83"},{url:"/_next/static/media/fa-brands-400.1fd0b4d7.ttf",revision:"1fd0b4d7"},{url:"/_next/static/media/fa-brands-400.5d5236fb.woff2",revision:"5d5236fb"},{url:"/_next/static/media/fa-regular-400.64b3730e.woff2",revision:"64b3730e"},{url:"/_next/static/media/fa-regular-400.95a8a8af.ttf",revision:"95a8a8af"},{url:"/_next/static/media/fa-solid-900.6115ad71.woff2",revision:"6115ad71"},{url:"/_next/static/media/fa-solid-900.f0203cfc.ttf",revision:"f0203cfc"},{url:"/_next/static/media/fa-v4compatibility.c71d2ee3.woff2",revision:"c71d2ee3"},{url:"/_next/static/media/fa-v4compatibility.e1023515.ttf",revision:"e1023515"},{url:"/_next/static/media/flaticon.887712ec.woff",revision:"887712ec"},{url:"/_next/static/media/flaticon.b76c93f4.eot",revision:"b76c93f4"},{url:"/_next/static/media/flaticon.c6aa769a.svg",revision:"c6aa769a"},{url:"/_next/static/media/flaticon.f10ea2cc.woff2",revision:"f10ea2cc"},{url:"/_next/static/media/flaticon.ff738355.ttf",revision:"ff738355"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/images/about-us/1.png",revision:"649333910267685fc5fd6f1c1409131f"},{url:"/images/about-us/2.png",revision:"1d70e22e4021887288f480a570795d88"},{url:"/images/about-us/3.png",revision:"c4640281dcd76e6fb025c130c8bfb23f"},{url:"/images/about-us/4.png",revision:"dc9defd22ba241b8a58c052933a9b17b"},{url:"/images/about-us/5.png",revision:"095ed12cb794587ace5b8fb9e81efdb0"},{url:"/images/about-us/cooperate.png",revision:"0d1b654b89c9dd296b5de8db62217072"},{url:"/images/about-us/medal.png",revision:"1ec775d875c0ab29e3c1dddd7cd1d247"},{url:"/images/about-us/paper.png",revision:"0983a2265c5c8d3cf30c5174b28659a5"},{url:"/images/account/bg-account-content.png",revision:"7c50e1a78a230d42a14f1edf2b29d6b9"},{url:"/images/account/bg-account-left.png",revision:"309d3531f46e0726cda552f4a908cef5"},{url:"/images/account/logo.png",revision:"0ca65bd82ad919b0db0d9ce9897c15a3"},{url:"/images/account/pay-per-click.png",revision:"5ed1546e429f9c5fb3d2703dd7e4518e"},{url:"/images/bg/bg-breadcrumb.png",revision:"bb9a0a2dd7b866570f435da93a571a9c"},{url:"/images/bg/bg-create-board.png",revision:"fdb95e4cdd68023bedb7b2afec9ebf26"},{url:"/images/bg/bg-hero-pattern.png",revision:"c425d66d73bb6a696d50375f67448fca"},{url:"/images/bg/bg-subscribe-2.png",revision:"ec16d3c23a5a4d40b33f3d2b1a0c2a98"},{url:"/images/bg/bg-subscribe.png",revision:"1aca4182f9aed49cf9a83644d5086364"},{url:"/images/bg/bg-why.png",revision:"1581381982c00f697d74a8b42d535290"},{url:"/images/bg/dashboard-bg.jpg",revision:"cfdf4e420389668eec3e94f6a1232da9"},{url:"/images/bg/error-bg.png",revision:"d76a351353cf3114f4c87e357b10fb01"},{url:"/images/bg/error.png",revision:"b90446422c0e3b0744c25e0fba0d0a4f"},{url:"/images/bg/home-big-bg.jpg",revision:"d28d6feee6363668b4b955eb9fe9e40f"},{url:"/images/bg/subscribe-img.png",revision:"87017871d76522617bf5104824f6cba9"},{url:"/images/blog/1.png",revision:"97b5f6c84c1c17e553d2cbeeb3fe563d"},{url:"/images/blog/10.png",revision:"011ec1f13dc1cb6d929ead01e9b27528"},{url:"/images/blog/2.png",revision:"757de59f45f1d5371886f0e3047e209b"},{url:"/images/blog/3.png",revision:"b1efdead6b4dde873b5960af71c04a97"},{url:"/images/blog/4.png",revision:"4bb486dbf9dfd3b70a0e66464c1fd6bf"},{url:"/images/blog/5.png",revision:"e0d09f43419e05c03d3179ed698e81bc"},{url:"/images/blog/6.png",revision:"a5d182527c64f88cb88beb409aa84b9c"},{url:"/images/blog/7.png",revision:"6586a777543784ce7cfa10d257a43e0a"},{url:"/images/blog/8.png",revision:"222f88e46ac09d5be131caa9e3a64e8d"},{url:"/images/blog/9.png",revision:"30766b20f1190cfc51734018ebb7a08b"},{url:"/images/boards/1.png",revision:"6f4bf73155c5e7c78235b47b37f1028a"},{url:"/images/boards/2.png",revision:"ca76a7046192d213321a2f252770b139"},{url:"/images/boards/3.png",revision:"351901e2ba32f0b6b078da0822788f5c"},{url:"/images/boards/4.png",revision:"c0db4d37baa1a3825de084ff966343ed"},{url:"/images/contributor/1.png",revision:"f221806028fedb1b8c50a468641ab62f"},{url:"/images/contributor/2.png",revision:"a20cc1ba2e0ee0476d8b775599eb637e"},{url:"/images/contributor/3.png",revision:"92c4899d8880e0336642595f9389f40c"},{url:"/images/contributor/paid-area-bg.jpg",revision:"6b7d6f23c48bb8b963fb7fad208788ff"},{url:"/images/contributor/pay-per-click.png",revision:"5ed1546e429f9c5fb3d2703dd7e4518e"},{url:"/images/counter/1.png",revision:"2762346d27ce780b09e2c842635cb151"},{url:"/images/counter/2.png",revision:"c483ba572f082a67b95db627fe7b2abf"},{url:"/images/counter/3.png",revision:"b4b8bf6924ec29a6676b22a2a0b05364"},{url:"/images/counter/4.png",revision:"26c6ef66025fbf6b774f27298f9a20e1"},{url:"/images/counter/counter-bg.jpg",revision:"8506284bf8c59411ad84c7ebca979965"},{url:"/images/download/1.png",revision:"3576c15c4eb7c7e4bb9d76ca602b8f8d"},{url:"/images/download/2.png",revision:"b2f6fe98c730df8947d94835a6c54785"},{url:"/images/download/3.png",revision:"95e404949de0daa6899b69c9a19078af"},{url:"/images/download/4.png",revision:"00fea87c93aaa4e66b892214becfd59e"},{url:"/images/download/5.png",revision:"46776cde79ee93a65a9344ecc08c5090"},{url:"/images/download/6.png",revision:"954e0335fc101fea35efddd6b438aa6f"},{url:"/images/favourite/1.png",revision:"0a8cc182086bc6610b45c5d01454beba"},{url:"/images/favourite/10.png",revision:"8c4d5c8519dc176e99e7239daf5cb6ef"},{url:"/images/favourite/11.png",revision:"0f343451e28fa95554bb478fff644cf5"},{url:"/images/favourite/2.png",revision:"27b92d1144ae9a6f861a35747d65a1cf"},{url:"/images/favourite/3.png",revision:"f78af1ba5f821cce1aec34d600c1df65"},{url:"/images/favourite/4.png",revision:"36dada9bc7038b56de1bed81f447f8e9"},{url:"/images/favourite/5.png",revision:"d950e904f7a356e6f05207e73aead76b"},{url:"/images/favourite/6.png",revision:"1a6a63c5b2134c87654347ae9d77e2fb"},{url:"/images/favourite/7.png",revision:"d68eba4798873794d2c06f4dbbb17eaf"},{url:"/images/favourite/8.png",revision:"e7986ee8990efdb4587530334a9037af"},{url:"/images/favourite/9.png",revision:"2f865f2036d7c41c01661f842d822043"},{url:"/images/features/1.png",revision:"35a4334e8faf1918d1494d9eae128f96"},{url:"/images/features/2.png",revision:"fd4efa827e38f498927f7b845a13c50f"},{url:"/images/features/3.png",revision:"33b1abc1c06d58bcb4c5bcd94091bbd8"},{url:"/images/features/4.png",revision:"4bf5c26771ba38ae3d3a561664a33116"},{url:"/images/features/5.png",revision:"dfcdb6c73d22ba914ace27a20cd6b1d2"},{url:"/images/features/6.png",revision:"ea878acd6409e31754341662369faf5c"},{url:"/images/features/features-gallery-bg.jpg",revision:"83f1d65ecae1756f06c6a57d39ff4322"},{url:"/images/filter-page/1.jpg",revision:"72eb944975c883316776f560db4e9470"},{url:"/images/filter-page/10.jpg",revision:"ac04020c80f584f2bd0d7320b00957c3"},{url:"/images/filter-page/11.jpg",revision:"eeaba5c57e89335833a16a758fc51f8f"},{url:"/images/filter-page/12.jpg",revision:"fe9b8ac2765b6bdec01f3510195b036a"},{url:"/images/filter-page/13.jpg",revision:"c671b8a3d872a4e1b6ab232a0b3d29d5"},{url:"/images/filter-page/14.jpg",revision:"d3c13e15ca5cdad44bd93d86aba363eb"},{url:"/images/filter-page/2.jpg",revision:"eb75fc767cae6ae3c80df39ae6b35745"},{url:"/images/filter-page/3.jpg",revision:"646e6606a7062ab4255945061bfcdca0"},{url:"/images/filter-page/4.jpg",revision:"c671b8a3d872a4e1b6ab232a0b3d29d5"},{url:"/images/filter-page/5.jpg",revision:"d3c13e15ca5cdad44bd93d86aba363eb"},{url:"/images/filter-page/6.jpg",revision:"eeaba5c57e89335833a16a758fc51f8f"},{url:"/images/filter-page/7.jpg",revision:"fe9b8ac2765b6bdec01f3510195b036a"},{url:"/images/filter-page/8.jpg",revision:"189e0a938d1ff97982d69d605bf4ebda"},{url:"/images/filter-page/9.jpg",revision:"b48db8194b47e4aa5c4f4a4bf16e9882"},{url:"/images/filter-page/filter-icon.png",revision:"b6349c249b52395883daa4d3326a7f94"},{url:"/images/following/1.png",revision:"da984b016ace989587a226d0aaa2a71f"},{url:"/images/following/2.png",revision:"6e8ed776bd7eaed3e7d6a6fc42f6def5"},{url:"/images/following/3.png",revision:"bfe46949e68133c572e149dd9d04aec1"},{url:"/images/following/4.png",revision:"90b7ffd84ba43a11e2fee2faab30d596"},{url:"/images/following/5.png",revision:"aa66ea5c6918c87ff13322e4b47ec001"},{url:"/images/following/6.png",revision:"5fa2d40190ac1d70cc6ba62e4fb76e0f"},{url:"/images/following/7.png",revision:"c9711f1c60b0625aa5c3c9465d3cb53a"},{url:"/images/following/8.png",revision:"bbecd877e628a749f6bc8fa37db5a10b"},{url:"/images/following/u1.png",revision:"cce5f8d6949478eef53156564ccd9920"},{url:"/images/following/u2.png",revision:"f5b35b4e487b3ce1c25f192c60e98567"},{url:"/images/icons/3d-box-light.svg",revision:"946d12a39be81796ee2de88470ffc81f"},{url:"/images/icons/bars.svg",revision:"c2c3074e2327f9b07a3bea9de6406cb7"},{url:"/images/icons/board.svg",revision:"c90c6a2a74b744c1695a854459ce879d"},{url:"/images/icons/boards.svg",revision:"57d9d628dbbed95addaadccca1e46a4d"},{url:"/images/icons/burger.svg",revision:"41be50a68e4cc4a37b5a3f404c65477b"},{url:"/images/icons/card-big.svg",revision:"0618178f3fe25a35f4d6b9a65e5d677c"},{url:"/images/icons/card.svg",revision:"9d6fce9e29036e5157a64a8974d25a88"},{url:"/images/icons/cart-2.svg",revision:"91e49cd95614eaebee109047feeee672"},{url:"/images/icons/cart.svg",revision:"7d0a8d809db5ff44ccd2b1a4aa5e5ef9"},{url:"/images/icons/comment.svg",revision:"488d252fe11291c76754fb8a06377cc1"},{url:"/images/icons/contribute.svg",revision:"cba1593a6e35926a87eabfafd04f113c"},{url:"/images/icons/cross.svg",revision:"3275a66674d4716b6e91b21406d76ff9"},{url:"/images/icons/cross2.svg",revision:"eede248e5438e35dd6ce2b87e4af5f35"},{url:"/images/icons/device-theme.svg",revision:"94d854116125477abac323abcfe15307"},{url:"/images/icons/devices.svg",revision:"6bbd8daec3344b3b2ff82265b695492e"},{url:"/images/icons/dollar-sign.svg",revision:"b6715fce553f835d61c60d590c93bec1"},{url:"/images/icons/dollar.svg",revision:"eb413727a591de4f6a8863fb300fb4e1"},{url:"/images/icons/dots-h.svg",revision:"cf4c58907306673e140bb83334b1b384"},{url:"/images/icons/double-ring.svg",revision:"5347d06f25d2092328bd2606f9a6d095"},{url:"/images/icons/download-2.svg",revision:"e4472f97b2c16a34a67f3ee4dd479ab9"},{url:"/images/icons/download.svg",revision:"49828cbe7a8f9a3262892629e687252b"},{url:"/images/icons/edit-2.svg",revision:"06a1c3e2e5be65d862efafabe782e33a"},{url:"/images/icons/edit.svg",revision:"c9d8cdc8b1e555b0f9581454edb9062f"},{url:"/images/icons/eye-2.svg",revision:"7c1fa83350d295c795c1bafd9275d6d0"},{url:"/images/icons/eye-3.svg",revision:"00c04c03c0ce0cc5dd60797acbb0c991"},{url:"/images/icons/eye.svg",revision:"8efebe75b71663001fdab1d2954446f3"},{url:"/images/icons/facebook.svg",revision:"53ca7b0397fed537616f460a97f1c13e"},{url:"/images/icons/flags/germany.svg",revision:"586e8e051dfe0e84d8872a0eee564bc5"},{url:"/images/icons/flags/spain.svg",revision:"0ed6b59fd005901046a6584c71744e16"},{url:"/images/icons/flags/usa.svg",revision:"de89e70557ef727780db75372f941adf"},{url:"/images/icons/gmail.svg",revision:"7cb9209bcc5a3f7dbf1654bb1b140cf3"},{url:"/images/icons/google.svg",revision:"0ffeac261e0876be9e5bcd6dfdddb122"},{url:"/images/icons/heart.svg",revision:"a9b4e16cc9857b81e3267e08ba2d6514"},{url:"/images/icons/instagram.svg",revision:"d042dc77f6419f95d86523b0493dbe69"},{url:"/images/icons/map-location.svg",revision:"7f07f1d81f92d36e7d49884881d4a745"},{url:"/images/icons/maximize.svg",revision:"ef08f174e18d3ce2f8444d4642dbcb6f"},{url:"/images/icons/noun-premium.svg",revision:"ac82c06f65f6de16071e8ba1da92dc42"},{url:"/images/icons/paypal.svg",revision:"6da275973d0ca441279c5729cf640368"},{url:"/images/icons/pdf.svg",revision:"c31abd6bde031b5c27ee1d0de2311016"},{url:"/images/icons/play.svg",revision:"360ab2dfcacc254bcfbfde0dcb3e7577"},{url:"/images/icons/png-file.svg",revision:"0506c4b0b9a0bd16286ebc8858f5c10f"},{url:"/images/icons/premium-2.svg",revision:"a562b9b0316baa5f8a371895e9fd03e7"},{url:"/images/icons/premium.svg",revision:"ac51d95ed15fc34c59ecf6c444974d9e"},{url:"/images/icons/price.svg",revision:"9a20741ab05086c0ef3eeb870fd82ac7"},{url:"/images/icons/quote-2.svg",revision:"61f36cefdbfaf7f4d229c953168439da"},{url:"/images/icons/quote.svg",revision:"29f77d8c8e1388419eece3d7d31eb44c"},{url:"/images/icons/search-light.svg",revision:"2e53b58b4dd92f362c3d838107f2a700"},{url:"/images/icons/share.svg",revision:"66af9bb46ec8a33a52c825d5e3f1bec3"},{url:"/images/icons/telephone.svg",revision:"067bb3a537338e6c9fa3c8bb890375bc"},{url:"/images/icons/trash-2.svg",revision:"89b5dfc5e54ac5bffed74025a7bc3e09"},{url:"/images/icons/trash.svg",revision:"8b7ef5c884f91ce7e8005227eaec12df"},{url:"/images/icons/upload-2.svg",revision:"4a1920481c49a5df8e47f723cde61280"},{url:"/images/icons/upload.svg",revision:"27a0370497978daf14a214d8b1c7dcb7"},{url:"/images/icons/user-dolar.svg",revision:"56ad0fc7b6ba7e426b55a4b587ba1639"},{url:"/images/icons/user-plus.svg",revision:"abc75df8d0a92d859c3dab776e5e23bb"},{url:"/images/icons/user.svg",revision:"1c5fdb8781de157add745ae7c890f148"},{url:"/images/icons/visa-card.svg",revision:"5f40d47b9abe7299fe033cdef85a76ed"},{url:"/images/img-gallery/1.png",revision:"1c727f961941bf65c487cd3a13f25193"},{url:"/images/img-gallery/10.png",revision:"a564b22d442a71ad2a495748db98392c"},{url:"/images/img-gallery/11.png",revision:"3b5821208c25c75598920866b3c01d29"},{url:"/images/img-gallery/12.png",revision:"303ab67ecc430a6dadc18c313acfda04"},{url:"/images/img-gallery/13.png",revision:"834ad6fa5875bc56a0023d0bb6c82ea2"},{url:"/images/img-gallery/14.png",revision:"1a9824e27787ae931e08f01d373c12eb"},{url:"/images/img-gallery/2.png",revision:"d5bc8d2d6171b6e19a420533cb89d8e5"},{url:"/images/img-gallery/3.png",revision:"f675661f582103b6eab44b16181288d9"},{url:"/images/img-gallery/4.png",revision:"869783bdf7b681f7d15b72887690d7d8"},{url:"/images/img-gallery/5.png",revision:"0404805a709730174ebebdd0ad437f44"},{url:"/images/img-gallery/6.png",revision:"a2f5d9da9fd4ecde51d8a1899a09c937"},{url:"/images/img-gallery/7.png",revision:"b097d99515096da8d2de4fbbb49195cd"},{url:"/images/img-gallery/8.png",revision:"f3557b4e40aab02aad9c05558a4d4894"},{url:"/images/img-gallery/9.png",revision:"d257be5b551dbd02fc2a8eae56425759"},{url:"/images/logo/authentication.png",revision:"4697bbd7f7a6d1a27c8456ed5489dd9b"},{url:"/images/logo/failed.png",revision:"f634ce58f7a9a6b1bc1c6f957f285981"},{url:"/images/logo/favicon.png",revision:"38133acfe7672cfed66b7ac911fcab14"},{url:"/images/logo/footer-logo.png",revision:"45742594df59cc242b3b8f8dca6b6020"},{url:"/images/logo/header-logo.png",revision:"7980f98423f2e7f72c43a881eda1d714"},{url:"/images/logo/loader.svg",revision:"4a91e617ae19af81d660339c1c2f97f2"},{url:"/images/logo/preloader-logo.png",revision:"7980f98423f2e7f72c43a881eda1d714"},{url:"/images/logo/spinner.svg",revision:"637bd3d141693440cff20cdcca393cb0"},{url:"/images/logo/thank-you-bg.png",revision:"5e804eae1637b581001d8342c23d7824"},{url:"/images/most-downloading/1.png",revision:"6bbf2bd04297b171cc19ab57225481d2"},{url:"/images/most-downloading/2.png",revision:"ef0d597b5aa7fa9f9f1add1b1c27481b"},{url:"/images/most-downloading/3.png",revision:"3bd5bbaebec5b25a178710ac4e3a1d0b"},{url:"/images/most-downloading/4.png",revision:"c86540bc20c8563926d9cdaac6e14f93"},{url:"/images/most-downloading/5.png",revision:"69751bb4c0b7e74b3a2ae3580cde9098"},{url:"/images/most-downloading/6.png",revision:"834b3c065b03f4da0326082c88957ef1"},{url:"/images/my-earnings/dolar-1.png",revision:"4e24c1904c7ade7e14b7d10cb08a4358"},{url:"/images/my-earnings/dolar-2.png",revision:"9bfe5eb6d91b78d5abfca1aae47f48f8"},{url:"/images/my-earnings/dolar-3.png",revision:"c405176648527faf0d42930fae533f21"},{url:"/images/my-product/empty_box.png",revision:"d36fde174884437e7514493ee5dfe5a3"},{url:"/images/my-product/f-1.png",revision:"052c0a48c9f68499c4f2e189e52f3dd2"},{url:"/images/my-product/f-2.png",revision:"5250524b579862418eb529195d631456"},{url:"/images/my-product/f-3.png",revision:"6852587ff2b9a310e03ed5cb8aaeabff"},{url:"/images/my-product/f-4.png",revision:"4ad31d9efa6187f447db31b0142ec0ea"},{url:"/images/my-product/p-1.png",revision:"6f4bf73155c5e7c78235b47b37f1028a"},{url:"/images/payment/1.svg",revision:"15d4e7672d3c467c310d43f8d28dbb42"},{url:"/images/payment/10.svg",revision:"2b9f68ea09906a74c6c587ddc66d0497"},{url:"/images/payment/2.svg",revision:"86675a1bdb252bfbc0bd13e720274bd6"},{url:"/images/payment/3.svg",revision:"99a4ecf49f205c5b1777a78a7090a6be"},{url:"/images/payment/4.svg",revision:"4e4fdb6542ce1670e15283a218a4d212"},{url:"/images/payment/5.svg",revision:"443c5309ddd9d378c2e4fb87f6757682"},{url:"/images/payment/6.svg",revision:"1c892db9d943977c2ac35dc60d3a3780"},{url:"/images/payment/7.svg",revision:"1e5ec7cbc9cbec05a947f2c466613454"},{url:"/images/payment/8.svg",revision:"58e849ea38a382f2b1838d0e58bcbdaf"},{url:"/images/payment/9.svg",revision:"e5e95b94c6251dd6e82c2a3bba37ff81"},{url:"/images/preloader.svg",revision:"05e5229127cb431a4eac113b29df3fd0"},{url:"/images/pricing-plan/1.png",revision:"fcf185700124a24cc9a2caf159652aa1"},{url:"/images/pricing-plan/2.png",revision:"affc137eaaf9ee7284b84765db920f91"},{url:"/images/pricing-plan/3.png",revision:"7c053a3c56e0c0f2cd0b7ebc985552d8"},{url:"/images/purchase/ad-img.png",revision:"8f1c50075413d78e9fe4ca5b3024a094"},{url:"/images/purchase/bg-ad-img.png",revision:"981089116c1830b92acb5dcd23711f06"},{url:"/images/purchase/purchase-img-2.png",revision:"41c27414c2c1c8eb844664e75e909d4c"},{url:"/images/purchase/purchase-img.png",revision:"c5bc747005f3695cadbbba7e04931db7"},{url:"/images/purchase/user.png",revision:"a3cfa1ffe3ad29bcf656e5fa1a43a20d"},{url:"/images/related-products/1.png",revision:"9c2a3989e7ec390025198f379cd0a818"},{url:"/images/related-products/2.png",revision:"dbc81c66e333bac7e2a4e304c7d413de"},{url:"/images/related-products/3.png",revision:"1346ae1d8e63e5f2ea324cfbb6ff2197"},{url:"/images/related-products/4.png",revision:"c84b539bd5098932ab3294e2a4e30bc2"},{url:"/images/related-products/5.png",revision:"6f816b4510f36ecf149113cf1026d9f6"},{url:"/images/related-products/6.png",revision:"8e30764814a2ead7da30966de3706709"},{url:"/images/related-products/7.png",revision:"9e3f5e71327286dcaeafefb633e37eb6"},{url:"/images/related-products/8.png",revision:"0fdeb8cd5bf15bfcd76d064a49705453"},{url:"/images/related-products/9.png",revision:"0904312565e3d0c71903421b429c37ac"},{url:"/images/subscription/bg-shape.png",revision:"b1e0a117c742a1c29dba957962e6debf"},{url:"/images/subscription/bg-subscription.png",revision:"9c2c679b45c0af0926d9c75f864b7443"},{url:"/images/subscription/logo-img-black.png",revision:"c6f4cc7f6f82769ffeedf05f6611da86"},{url:"/images/subscription/logo-img-white.png",revision:"1968c97cefbfc380814b953e19eb9e6b"},{url:"/images/team/1.jpg",revision:"ba54e513cb2762abb01e186a22568f96"},{url:"/images/team/2.jpg",revision:"4f01a22d94799fde29c56a2d4e167a35"},{url:"/images/team/3.jpg",revision:"9ed5feb21ed4bd3f31a494463dfd9d7c"},{url:"/images/team/4.jpg",revision:"57bbda93fe055cacedc4c33ce0b6ebdc"},{url:"/images/testimonial/1.png",revision:"6d92779ca93ec3c35605bda4160f0e21"},{url:"/images/testimonial/2.png",revision:"74e78a76210471acfccb05e090a3d637"},{url:"/images/testimonial/3.png",revision:"89b861b19ff61490602659ec10adc7a7"},{url:"/images/top-selling/1.png",revision:"156c9216eff891207c7a17ee416d02e2"},{url:"/images/top-selling/2.png",revision:"1058a16ce60c7f02010f41e9d2d4bbcb"},{url:"/images/top-selling/3.png",revision:"69bb1675c51d903d77d58e12a5ebd47b"},{url:"/images/top-selling/4.png",revision:"e7736a99eb43d9518cf5a825d0bca033"},{url:"/images/top-selling/5.png",revision:"d3668967ce973ff83bc1558b75061f53"},{url:"/images/upload/up-1.png",revision:"ec1499b4fc1621b3992492e49bc26e29"},{url:"/images/upload/up-2.png",revision:"7b4b38e387b5d40715aebad8dca15ffd"},{url:"/images/upload/up-3.png",revision:"2f34dd1d6703e127838d4ec72334222a"},{url:"/images/upload/up-big.png",revision:"54bd8e9432320705cd9242a178a747dd"},{url:"/images/users/1.png",revision:"c1c42f84deef69bddda83dd6e27a42bf"},{url:"/images/users/2.png",revision:"df14caaf0592c318c2fe6c76d9dc71de"},{url:"/images/users/3.png",revision:"be8d440b06da31ff344762bd50bd3e2e"},{url:"/images/users/4.png",revision:"ea7e88eb02ebcedb18545c4fe66989c9"},{url:"/images/why/1.png",revision:"e4b6674bb2633e86eaea9b762549b6f7"},{url:"/images/why/2.png",revision:"da41c620ec73ad265ede990b98656589"},{url:"/images/why/3.png",revision:"530d3181e62ab09b85da3b063149a470"},{url:"/mainifest.js",revision:"49ca04330691a8250c13a338f6c0ce9b"},{url:"/manifest.json",revision:"6d46a151684d32c822fef8ac48dcf7e8"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/robots.txt",revision:"09bf88bebe317e1a253099179f03c36e"},{url:"/sitemap-0.xml",revision:"f3b8d7845dc6ebd5f91963d5d9616d5b"},{url:"/sitemap.xml",revision:"4b6db26648dfb45d43a2dae87652d6a0"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/webfonts/fa-brands-400.ttf",revision:"0fbfc862056bad982c93ba51460e31d9"},{url:"/webfonts/fa-brands-400.woff2",revision:"a9afdb72826cde196ddf29eb8f9d0f8f"},{url:"/webfonts/fa-regular-400.ttf",revision:"35307505c129ab1f9173f7917b50756f"},{url:"/webfonts/fa-regular-400.woff2",revision:"f817938f131b0cabee81e59a96f9c2a6"},{url:"/webfonts/fa-solid-900.ttf",revision:"ffc89d3ea2e2c3ba295689305f91ca78"},{url:"/webfonts/fa-solid-900.woff2",revision:"297973a488f688271dd223d542ba2697"},{url:"/webfonts/fa-v4compatibility.ttf",revision:"4bde6a62454b669bb0ce0448491a71d7"},{url:"/webfonts/fa-v4compatibility.woff2",revision:"72d85419b5a3c5867b1903ef565f5a8d"},{url:"/webfonts/flaticon.css",revision:"4bd76bc4a4c5567462df805cc48a12c4"},{url:"/webfonts/flaticon.eot",revision:"446b34bce4d13c5ab6d1d8bad70825c8"},{url:"/webfonts/flaticon.html",revision:"6dc0dc19f2e17655e51ca7c0a3b71b67"},{url:"/webfonts/flaticon.svg",revision:"54973664f3ca49a0fd40766a3dd3feb0"},{url:"/webfonts/flaticon.ttf",revision:"c36d3cd8acfe984d4b6471ee891cfeb7"},{url:"/webfonts/flaticon.woff",revision:"5df746f77924c83f9d2e9fa9ab1b7007"},{url:"/webfonts/flaticon.woff2",revision:"ccc6874cf16dc3cea181e7429b88da21"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
