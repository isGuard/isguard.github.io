const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "ZENE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"4d272eaa4b450ebd49248e754faa0559","url":"./01c00fab19d5.html"},{"revision":"bb3917a2e0fc623da8dd303308fb5b07","url":"./0380823323ea.html"},{"revision":"f05d4f080de05ea85b24f1b8f5d15aae","url":"./083b7d32f844.html"},{"revision":"f4d3262cb97d86d29b42edacf22b49ea","url":"./091f0d83f102.html"},{"revision":"ea2ff8fbea7aeae69c4bd48950f883bf","url":"./0af545735672.html"},{"revision":"c8efa44ee8c4432abcdb70a176a3798f","url":"./0cc7ddcf0032.html"},{"revision":"0e6aad619089e48fc3578acbe18607f1","url":"./0cfa7e337349.html"},{"revision":"57a1244d2a1bac13ac9d0d91147cac71","url":"./0d714c49bb0b.html"},{"revision":"58c00e6b52c2e6d064e9608582a9b946","url":"./102164869c4c.html"},{"revision":"9ec86e2a1a967d7e9099036f129ab2f7","url":"./144f3d359cd3.html"},{"revision":"984144746bb4eb4559c7e55eac9e0ce0","url":"./14f35b3a6d64.html"},{"revision":"40687713dd3ccbd09464b7def5680594","url":"./1698a47fcf6a.html"},{"revision":"1c25647d95d93934170dc6f5df9f079e","url":"./17f5eb8bcc0d.html"},{"revision":"aceed01cf43c069a3ddc987ce2245d77","url":"./18ac9d961f0b.html"},{"revision":"5017ab5ff885a77a83b0648a61aae50f","url":"./18e2d5e4b6f3.html"},{"revision":"fae44ef44e99da55f2074ee34e136a9a","url":"./1b9dca731c12.html"},{"revision":"ebfd0db82f70456842b41811ccda9a90","url":"./1c1b04db2c01.html"},{"revision":"6d1c106c3d35ae15c6caebe726187bac","url":"./1e8a3115b061.html"},{"revision":"1fb29cf3d04e06639959ac0e191930be","url":"./201854ea4b36.html"},{"revision":"cd4e641841287301fda0fbee3075da43","url":"./245047f7f750.html"},{"revision":"c1a1a7892165c69baaf7afdb31f758fd","url":"./2605a2a5060e.html"},{"revision":"4d16736e42004ad6c1b6e11c45256708","url":"./2871874be300.html"},{"revision":"741ca0439ffb06f20e6fd8a487ad7fa2","url":"./28d125e258a1.html"},{"revision":"f8131c1b08c914f8984d590387f83d32","url":"./2cc594bf8909.html"},{"revision":"e1f0fb4a6d82e8a815586ee9da444b78","url":"./2ce74a09c8f3.html"},{"revision":"7299312e7600e9f80bdd857e5b053002","url":"./2f190b34c2b3.html"},{"revision":"c76b969ff8fdc84873b764677477669c","url":"./3004cf782434.html"},{"revision":"11185d63b97fbc7ac80f6b5b6e4d7ab8","url":"./33f8eb0da2f0.html"},{"revision":"6f3f2ce6de4a8bb607a277c339c241cf","url":"./3494683249bc.html"},{"revision":"e0ea1c6ad81dd2bb8e3103f25bc23e0b","url":"./378fe56bd246.html"},{"revision":"16196bbd12cf2245ed11bbb03883947c","url":"./3a4ba11b7a5e.html"},{"revision":"2c314939d31937dc5698deb77001b98b","url":"./3dc224c52b20.html"},{"revision":"478ea97486d6de488995351c201502c7","url":"./3e4b52661133.html"},{"revision":"cf2128006dc2d9107acdbad92a2df3c8","url":"./3f94559a860d.html"},{"revision":"5d715d6719689f00d980fed795f04054","url":"./404.html"},{"revision":"7ed2c400515cff2f81626b7fb1402f31","url":"./40901eb5b99a.html"},{"revision":"1f6661c90607b3accbbc1c30a3541848","url":"./4264568384dd.html"},{"revision":"9c95c404cabf09b1d6a2d045cd123423","url":"./45cec86ad3c4.html"},{"revision":"dc319c21c96a590fd94abeb0a7af4631","url":"./49d077e64aa6.html"},{"revision":"7772ebd00658f1b44a2626c872011a21","url":"./4b9608333997.html"},{"revision":"11b56514f2509a0df07854c4c61033b6","url":"./51c5316ba4dc.html"},{"revision":"76f16416551833789c2471d4bccaeac0","url":"./543613fef7da.html"},{"revision":"e0bd6262062d4291d3f89504352b1b17","url":"./546c10072d86.html"},{"revision":"3bf3ebf9e74ad985a0c9dd66ef9a0523","url":"./57bfd13fa382.html"},{"revision":"1771eb2af2ef4e69d28f1903602b3c5a","url":"./59d451fe7cbc.html"},{"revision":"95c67dae7c6a1fde0d4fa304480bf905","url":"./5a25eafad98e.html"},{"revision":"6821818f77a0958617e7361f916715dd","url":"./5d0a7171e2be.html"},{"revision":"a2c1e0fbce90cc800111072fc6d08cbb","url":"./5e4e6842d754.html"},{"revision":"fc7d5b5dbacc90a69c54337d0413f7a5","url":"./6321ac3497ca.html"},{"revision":"e13b440ecb425380edee53d7f6d5a697","url":"./63d02054b042.html"},{"revision":"cf34e726b1a9009300f240491f9f65e0","url":"./641601337f0b.html"},{"revision":"f0a8f6318861f40221fffba648dff96a","url":"./65e4aa78c9e6.html"},{"revision":"3e8e7afe98993ad4f0347d23bf6a9733","url":"./672524809abe.html"},{"revision":"b49c58b824806afc8356b8ec7cedea13","url":"./675ab52ded3d.html"},{"revision":"7a12482f2bb710e7118f02cba2beba89","url":"./69bb6d2d9142.html"},{"revision":"3aecf2ffa7a7f710f6d2afcbb423dff6","url":"./69f998dd7524.html"},{"revision":"a7e8df8c432ddee88d0502944e9efbf7","url":"./6b7289fc875f.html"},{"revision":"7fe297c16e5e313bbcc90dfdaf48f41a","url":"./6f2cd147c9da.html"},{"revision":"e65868e6dddd97598ee735ee19b0f260","url":"./6fe7860f08d4.html"},{"revision":"a415b8cee012f4169ba88aad774f5ccc","url":"./70ca5927dc18.html"},{"revision":"bfd5b701600c0988533af3064684055c","url":"./7371f7e698bd.html"},{"revision":"21ee4fd337d91c81c831a189a5ffb773","url":"./7434890e6022.html"},{"revision":"4d940336020aedc3d1f24b176781aab1","url":"./79edd52b58c3.html"},{"revision":"0c639d73269addcdca6ac1a1ee5350b6","url":"./7b851fc8c287.html"},{"revision":"39b95fdea1e9100dce3c87401a45c855","url":"./7c039cfe73f4.html"},{"revision":"6ab68fa51dbab1243bf75054723c4052","url":"./7c8516486039.html"},{"revision":"676ec5aeef806f92ba5b8ea190f1cfdf","url":"./8193ae6cfd9c.html"},{"revision":"edb0072af1ba18059fcd4dc469c4d0cb","url":"./837862e41b91.html"},{"revision":"0f997f11a4ac5ea3f80b0e8541fe0c74","url":"./83e4d5ba76f4.html"},{"revision":"2f1761121edc8419c674c79178f4c3a1","url":"./843e58d8929c.html"},{"revision":"f0108b71e4baa245c6fa3ecc59154f94","url":"./85bb8468cbb1.html"},{"revision":"14891c0241861e2cb01644f3e63b6c0e","url":"./8aea8b702ec9.html"},{"revision":"1a61fe52ea54e90dda8bbb34a350195f","url":"./8f0902f5fa56.html"},{"revision":"21b5bca603737ac2e5e7c58b1ba51bc5","url":"./918110f64071.html"},{"revision":"fd0dc798ba0df405de86443641a3de53","url":"./9865be07681a.html"},{"revision":"f05f375032528fa35b9558a57f53b197","url":"./a21c0106b4dc.html"},{"revision":"c334c3e7b3726089a66b82fbb1dc9b35","url":"./a295f8b882ca.html"},{"revision":"27dd949eaf75142e28aaf0c6a33da0f9","url":"./a2cff47e45b4.html"},{"revision":"7434276a026fd949d8e240e91b539b3f","url":"./a39447736c9e.html"},{"revision":"c613c999a1ef7e41e0bfaf715d760cd0","url":"./a66da301ed65.html"},{"revision":"e0797c09fcf40c3449a70152c1ede72e","url":"./a8e99b664015.html"},{"revision":"a2613f8fbf62336156591e858744d7c8","url":"./a911b7f249e6.html"},{"revision":"f9474df2c9591f9698ad9c70270d6177","url":"./aaafb3b4b102.html"},{"revision":"079b3b47ebdae751456e998d1cd3038d","url":"./ab4774b19476.html"},{"revision":"4c6025bbbf3bf22bc8877014869c161f","url":"./about/index.html"},{"revision":"97fd755c883218c499a24fa010352980","url":"./ac05f6c6cbcf.html"},{"revision":"a058b5038f6e7e7b02c17f33863505ad","url":"./ac93dc79a32b.html"},{"revision":"248ea3e7a6d60cbf0e59188d44512ee9","url":"./aee8b86da60e.html"},{"revision":"74bf7df34c4569115b2b68aebcae98a4","url":"./af0c06af727c.html"},{"revision":"1dc9e092bec4ed0e0fee053ee059eaeb","url":"./af9f2ecdb071.html"},{"revision":"e36d1849007f0e70147dfe28b95ab8ce","url":"./archives/2018/04/index.html"},{"revision":"935b4f83c8a889df0b709948045298b8","url":"./archives/2018/04/page/2/index.html"},{"revision":"7e6d5b688f9377b9e5423b9721d79d01","url":"./archives/2018/index.html"},{"revision":"7fdd37dd7c36ec74a33b549c3d7b1761","url":"./archives/2018/page/2/index.html"},{"revision":"aa1a5ef90551877d04aa3e03b93cbf9a","url":"./archives/2019/01/index.html"},{"revision":"d8903760604de0fada40dae8562187a6","url":"./archives/2019/01/page/2/index.html"},{"revision":"a1e6e200396db31f0f64a0e0e7c6b2b5","url":"./archives/2019/02/index.html"},{"revision":"b10e35877255bdb186357f9882eb1646","url":"./archives/2019/03/index.html"},{"revision":"c3bb4167e67b82a8356b37cd2214e8f2","url":"./archives/2019/04/index.html"},{"revision":"9158b2c3ac0b5024568e2620c02cc219","url":"./archives/2019/04/page/2/index.html"},{"revision":"102b000eb705bbc083f8f979d9984caf","url":"./archives/2019/05/index.html"},{"revision":"04dcbf4018cb79fe80e324945f662178","url":"./archives/2019/11/index.html"},{"revision":"edd6c02c0d43c15347b7149c21ccd12e","url":"./archives/2019/index.html"},{"revision":"65a13dad1ca7a3f5100bcc1395305479","url":"./archives/2019/page/2/index.html"},{"revision":"70ff36370c33140f19f69b5acd19c567","url":"./archives/2019/page/3/index.html"},{"revision":"df015c2ddd97d397ab128724905a3ce1","url":"./archives/2019/page/4/index.html"},{"revision":"3907c3c9a449909e4a5e77f5d7067550","url":"./archives/2019/page/5/index.html"},{"revision":"999d49e34967de769f1f591d1a824896","url":"./archives/2020/01/index.html"},{"revision":"41ec79f55aeea96acd169dd5e4963a73","url":"./archives/2020/03/index.html"},{"revision":"7faacc001e4c6a7a1340bb4963ad075d","url":"./archives/2020/03/page/2/index.html"},{"revision":"8568f1040518e330ef7fb5b6737f7a1f","url":"./archives/2020/03/page/3/index.html"},{"revision":"8ab78572448efd7e2d2b257cd88c0e31","url":"./archives/2020/04/index.html"},{"revision":"cf1ca2a1cf40165a5e47b1f6a6594e46","url":"./archives/2020/04/page/2/index.html"},{"revision":"aa47868765bea78093bff490ff059e2a","url":"./archives/2020/04/page/3/index.html"},{"revision":"0388c101b3576a153fae0173b391ff65","url":"./archives/2020/04/page/4/index.html"},{"revision":"f2baffbe1342c3e918a1cade7e403468","url":"./archives/2020/index.html"},{"revision":"0b77ecda1a26ef7deaea6ce24be25fc6","url":"./archives/2020/page/2/index.html"},{"revision":"6fd153074cfbbd46da01fea948e79f40","url":"./archives/2020/page/3/index.html"},{"revision":"14b8e8bee1e5949c86bff58b8940f600","url":"./archives/2020/page/4/index.html"},{"revision":"1e661a993b751b909e62ad57bd287020","url":"./archives/2020/page/5/index.html"},{"revision":"f886a74e8475a9854db06650c689323f","url":"./archives/2020/page/6/index.html"},{"revision":"cc24b62b82de8cb238a9ef3740d7d8f0","url":"./archives/2020/page/7/index.html"},{"revision":"44a726d5573d61d1e7b79e5d2e0526cd","url":"./archives/2020/page/8/index.html"},{"revision":"1efde1792adde6425ae264f541e9c14d","url":"./archives/2021/01/index.html"},{"revision":"304022c5943058685ebf17557d74c999","url":"./archives/2021/03/index.html"},{"revision":"1c2d707fac55905766a7c79752993894","url":"./archives/2021/06/index.html"},{"revision":"c17b1afc92049ff56899ef7f225f53e3","url":"./archives/2021/07/index.html"},{"revision":"0bb65160d7aabe645c32cc865884e620","url":"./archives/2021/07/page/2/index.html"},{"revision":"274b8c41875c2df771c6708a248b4507","url":"./archives/2021/07/page/3/index.html"},{"revision":"4c600e660343fe9e153898da2fba2fe6","url":"./archives/2021/index.html"},{"revision":"bf41b6647be96c7eccd775dbc6ea8563","url":"./archives/2021/page/2/index.html"},{"revision":"f1193742ee942949eed2505b162a0334","url":"./archives/2021/page/3/index.html"},{"revision":"2e32f952393d1b25d2e205f588ba0455","url":"./archives/index.html"},{"revision":"4237f9b49068713bb4a8e28dc587fb32","url":"./archives/page/10/index.html"},{"revision":"8ca8695c3c479fcdb1922b4f4004173f","url":"./archives/page/11/index.html"},{"revision":"47c54b3c606091e6274dadfe2d691c04","url":"./archives/page/12/index.html"},{"revision":"89e84bcfabdcdceb55d985d0f890565d","url":"./archives/page/13/index.html"},{"revision":"1683314cfe9f674af290c9117fa748d3","url":"./archives/page/14/index.html"},{"revision":"a9a23239807a077dc8de3c66fae2cb55","url":"./archives/page/15/index.html"},{"revision":"f0a7350627f17df94c4413bc8e8ff521","url":"./archives/page/16/index.html"},{"revision":"b062feca0e6c8f655749de08c11609f5","url":"./archives/page/2/index.html"},{"revision":"2561c892fe44fe30428ed481d7355468","url":"./archives/page/3/index.html"},{"revision":"35f58f47d1dbcf6e8a1853751b683939","url":"./archives/page/4/index.html"},{"revision":"33aacc290a827f28118248ec6b779bfa","url":"./archives/page/5/index.html"},{"revision":"04f00d727b1f33b43283dc7a46165f60","url":"./archives/page/6/index.html"},{"revision":"5c540a0ba77c0febb149c5c3de8e3f32","url":"./archives/page/7/index.html"},{"revision":"6f35190601a0e58b08a57dde5fba848a","url":"./archives/page/8/index.html"},{"revision":"3d837520f24a0f13226edba46ffda946","url":"./archives/page/9/index.html"},{"revision":"263c5cb1dc065ab64e80ee7de37492da","url":"./aria2/index.html"},{"revision":"62e0f87a4bb4db38e000f547310ddc87","url":"./b176b2fd8637.html"},{"revision":"5822abe7eac3add15b34084361ff4523","url":"./b17819308f04.html"},{"revision":"e9c936545df967f2c29a2aa9ab09700e","url":"./b18884c315bf.html"},{"revision":"532af92ff96bf38a7d493e4ad615f0f6","url":"./b1fbbb5bc700.html"},{"revision":"ee339b53c0f839075486d48b4177d8ec","url":"./b28bf5bb0dae.html"},{"revision":"2d4323b6268b2905b996ec4125ce4c4f","url":"./b2be80fe9e8f.html"},{"revision":"5852bab52a2f6ea48922a308692b0f6c","url":"./b3421d932a26.html"},{"revision":"0ba6e64943c18af93ae0d4e285a92517","url":"./b3946cdad917.html"},{"revision":"884c65bf126a5ec0ca9f1e7b50396b4f","url":"./b44c36a2cabb.html"},{"revision":"d95067047f811a838493788fa65af736","url":"./b53c187d0041.html"},{"revision":"256afa9c04355d3fe785640c181ca063","url":"./b6106669f562.html"},{"revision":"e67d50df28f7b45c59fed78e11144bb1","url":"./b69418481828.html"},{"revision":"e20df5d5519e03319190a7e5459c8c44","url":"./b6a4fd82fcfc.html"},{"revision":"c22c591bf754f413d8735de7c51957c1","url":"./be1395c7d0f0.html"},{"revision":"6e137ef10f3cee03dfb70fc2bb01ba7b","url":"./bef1ac8b1d67.html"},{"revision":"f6da75a142da7d99f99a8351c36ac2bc","url":"./c5e01090a818.html"},{"revision":"2b7c66dcb09de22ad7eddecca6d3b8b7","url":"./c60ecd4f0833.html"},{"revision":"988f3f33afb8b4fe421d207b172f6a5c","url":"./c6c507ac38c4.html"},{"revision":"e5c3a951c7eda4e9612596205f628d55","url":"./c6e327594862.html"},{"revision":"f96dc68c8bb3c75a118ad28fc4eb01bf","url":"./c748da646b0b.html"},{"revision":"98e2ceb17e3f572cb177cdd9d975e7b8","url":"./ca04d468491e.html"},{"revision":"50a8d6e521a832e44654de6bb2c6d7d9","url":"./categories/Hexo/index.html"},{"revision":"6075a71adffe8646c32377b5797f9de5","url":"./categories/Html/index.html"},{"revision":"44f4126367f4d1b637b605e23e6a620e","url":"./categories/index.html"},{"revision":"ce144dc763342c585a5d2f51ec0f75f0","url":"./categories/Java/index.html"},{"revision":"e129000cb9e6d6c7f31e08ea81eed7e6","url":"./categories/Java/page/2/index.html"},{"revision":"a64d10686b9a9caaac3ea9077f4dfd0a","url":"./categories/Java/page/3/index.html"},{"revision":"a53d174626432d272ab60cfa77ad21b2","url":"./categories/Java/page/4/index.html"},{"revision":"389c0ce90ffbe3bb21ffafe789fb8f05","url":"./categories/Java/page/5/index.html"},{"revision":"96dea7dc91f9a1df0db4f50afff4491a","url":"./categories/Java/page/6/index.html"},{"revision":"ba2fec321b9c6e866349f228670a1d8a","url":"./categories/Java/page/7/index.html"},{"revision":"8bf8094a31e324253a15215b2dabd233","url":"./categories/Java/page/8/index.html"},{"revision":"d949d57a84c75470b962a1bc3ae31d4f","url":"./categories/Linux/index.html"},{"revision":"1a120afd868fd4bd66ded1a33f8b345f","url":"./categories/Maven/index.html"},{"revision":"49ffadb8331ce8a2f0ddc29496f306d0","url":"./categories/工具/index.html"},{"revision":"3dd7817739ae4365c6aea43ead61b8f0","url":"./categories/数据库/index.html"},{"revision":"8e52af8c212ee293830082390f1c167d","url":"./categories/日常/index.html"},{"revision":"63c5419c478e756aaa55b874aaf799a2","url":"./categories/生活/index.html"},{"revision":"68b876155141c8775d04575d709e4166","url":"./categories/算法/index.html"},{"revision":"56231b2b23bb808cb35c49f3e79045f8","url":"./categories/算法/page/2/index.html"},{"revision":"73d280933085055d0bccda99f04bd8c9","url":"./categories/语雀/index.html"},{"revision":"6d16fda34525d394fc574f37f91359e8","url":"./categories/语雀/page/2/index.html"},{"revision":"eb81f15d39dacd410d8a54f4922dc38c","url":"./categories/语雀/page/3/index.html"},{"revision":"1bfee5be92fc9c16d46ed187ac302fab","url":"./cf7513efc8a3.html"},{"revision":"829869cb45c842592c866eb52ee552d4","url":"./cfa84fd74626.html"},{"revision":"ba114d69145fbf28f93880cfedfc4460","url":"./cfd6d46b475d.html"},{"revision":"cbf31ab7a725204581b03d39e3ad9b44","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"449758c4a7181c5841c054c7f6389567","url":"./d149732b2cfe.html"},{"revision":"93c0a5ab5d881109cd371ae13f36c992","url":"./d2d51dce913f.html"},{"revision":"08970e3a1d071513fd74d8fb0606054f","url":"./d4fe7f53dfd9.html"},{"revision":"9316a303d9b155fad0a1c637dbfd86b7","url":"./d620a8aa8580.html"},{"revision":"bb7c1008fb54956ab988c5b6dce78ec2","url":"./d71834e48b4e.html"},{"revision":"48fe37c502338313c911568e39b77b84","url":"./d7751bc6745e.html"},{"revision":"5e78cf780a58e3a3a0631b54fbe82552","url":"./d8aaf5d37cb0.html"},{"revision":"cc0bcdb2bd072171250dad693646f010","url":"./d911e46da2b8.html"},{"revision":"ea31d4f046a5cb75d600f9bd45b761ba","url":"./da07fbdb9fd0.html"},{"revision":"4d55dad8adba54a4d217f1c69345f349","url":"./da89cd139d26.html"},{"revision":"cdc72e549bafdf56288fcc0a9f80c24a","url":"./dc5ef838632f.html"},{"revision":"339fc6cb9f2f78478a9f120e0aa0b6b9","url":"./dc7e2b97a6a2.html"},{"revision":"8890bbeda0ccefc10d17f39fb11a57fe","url":"./de53a68554c4.html"},{"revision":"ce71b5cb77810ea768ea5871549adb41","url":"./df5068bb57d2.html"},{"revision":"b9bc865b71fa42a82277aab100db7906","url":"./df52bcc43c75.html"},{"revision":"065d28ad820daf6daf1e8723fdfe6ce0","url":"./df684ffb9540.html"},{"revision":"a73f1de8aa4f919925e4f4f5e4a855c8","url":"./e1ce4e19566f.html"},{"revision":"f865a876ad0c33c7df1d0eec560bde71","url":"./e337a70add48.html"},{"revision":"aeb2b22921df63b2c97e62e055ab5292","url":"./e43d8e1e85d5.html"},{"revision":"e813106a6719892087880588f34542e6","url":"./e460c106f773.html"},{"revision":"9d7a82c707a4d367b42cfd80d4202db0","url":"./e47508c7c8ce.html"},{"revision":"91abb2b18dfbcb9dd2649c40f1050515","url":"./e5ad37bd9e65.html"},{"revision":"01b7252edb03d0893955e2908e9b6d3b","url":"./e6323226da63.html"},{"revision":"7a04276dcf7f4c9a3403b3a50ed7d5d5","url":"./e6ddddcf68e6.html"},{"revision":"d6d239cc79eda8af7c6db0f8f34c5bc7","url":"./e72787e674a1.html"},{"revision":"802aa85c1c3cca23809e0604d15a07bd","url":"./e877f7d30bd2.html"},{"revision":"085c9cb98fc193d0d6a0a52f05070b5f","url":"./e8d6d5f114d9.html"},{"revision":"7cdd67fd73c2debdd18b209e76ce34c2","url":"./ed6a15da5969.html"},{"revision":"b9310bfb81907b56121a11e46dbed536","url":"./ed9501b8d471.html"},{"revision":"2ae7409e491bb53972fd03f17f2a7cd9","url":"./ed9a6f7913bc.html"},{"revision":"d7ea0e434f813ba2b501004f72e4303f","url":"./ee5c0e48c3d1.html"},{"revision":"9c06413498f8d852041d7f4554eea20c","url":"./eea72e773574.html"},{"revision":"0fb8debdde4e810ce6a3910474fc9cbe","url":"./f144d956d9c0.html"},{"revision":"4fd5b8762608420f07ddfc5bca28c1b6","url":"./f563a9569919.html"},{"revision":"4e89275da8963c7aa83fcae1e31acadc","url":"./f5ec6e6d230c.html"},{"revision":"6e27e211bcc9e4fab2650f60ab0a1dbb","url":"./f6db78db1f90.html"},{"revision":"2b7bb4aa91e003a7404e5e9f1bc38e4d","url":"./f70d50f7bf77.html"},{"revision":"226b77b5969c337d2034d1cd35a4c891","url":"./fb3dac0e46f1.html"},{"revision":"318595419b14add1eb3a56adbc71439d","url":"./fcf19d075d62.html"},{"revision":"10166ccb71f23b433cdd9bd2204f869d","url":"./fdb3287fae31.html"},{"revision":"09f3e054e5230bd7df144c4dc0f0340d","url":"./fe248847c921.html"},{"revision":"37e486278ee4293ad462845b3e756ae5","url":"./fee0daf7ca52.html"},{"revision":"90568b32772d0e7765ce3cc9877fe930","url":"./index.html"},{"revision":"f7f11822b00d96f665b6e3f8e18b0f0a","url":"./js/bundle.js"},{"revision":"50d0a0948dbed506ec2636d190e97fbb","url":"./js/search/algolia.js"},{"revision":"05423e3096abe125b6b6ea9a91fe78e1","url":"./js/search/local-search.js"},{"revision":"c10120d4322a75b944fc13a3b663d596","url":"./js/tw_cn.js"},{"revision":"aa5bfc1e999df64ee1229342f96cba8a","url":"./link/index.html"},{"revision":"7791b2da3f1573093a55522d0127d37b","url":"./page/10/index.html"},{"revision":"76aeeaba9ab9387f445b651dc27da098","url":"./page/11/index.html"},{"revision":"f631b818001326d9ea7f1781df24abb5","url":"./page/12/index.html"},{"revision":"f0995f491dd10255214177610ff3928d","url":"./page/13/index.html"},{"revision":"90808e04b8b61444c54d0cb662aeee41","url":"./page/14/index.html"},{"revision":"159bf273e85641babaa8f7d041a41622","url":"./page/15/index.html"},{"revision":"ef9d273182734c3193c8865207072a70","url":"./page/16/index.html"},{"revision":"ef483e502746680fa9b7ddf70d41dd14","url":"./page/2/index.html"},{"revision":"db01a9794abce1f2e7322a6d1cdbb946","url":"./page/3/index.html"},{"revision":"82b3782242bc7a62739d10e124a05af9","url":"./page/4/index.html"},{"revision":"5cd1a9fa95637aad751674fb2c71c5f0","url":"./page/5/index.html"},{"revision":"3f4b6b3937bf956832779038cc6faf98","url":"./page/6/index.html"},{"revision":"7a99ea1bd3c9222d487fa23d4db3c6eb","url":"./page/7/index.html"},{"revision":"0d298ab00dec7dc406ffe002eac05be4","url":"./page/8/index.html"},{"revision":"d9c3993b8c813fcb6013645d79c3a0f4","url":"./page/9/index.html"},{"revision":"c113f2596ab1bc8857edddfc63770d84","url":"./pwa/icons/README.html"},{"revision":"add9bece2507b6091f32ab462da9a7cb","url":"./pwa/manifest.json"},{"revision":"f597b11ed715a2985fd17deed5babf77","url":"./tags/Ajax/index.html"},{"revision":"e0b42a550d30cea88db60121923b50fe","url":"./tags/Contos/index.html"},{"revision":"f282b5a3cba43a5728fac81fd231f1cb","url":"./tags/Hexo/index.html"},{"revision":"fe17375de47a216b4eb114c0720da17f","url":"./tags/Html/index.html"},{"revision":"398bb03b3a5b7cf86810d9c5ad367572","url":"./tags/index.html"},{"revision":"cc970d7414dc350d0f38be5a0bf1a9ef","url":"./tags/IntelliJ-IDEA/index.html"},{"revision":"429f51b8c01fdcf5e69f9a120f9339bf","url":"./tags/Java/index.html"},{"revision":"93d47521a23414f6748f770b77be99e8","url":"./tags/Java/page/10/index.html"},{"revision":"23fa3f1e7c4f59e282bb40920d7f8491","url":"./tags/Java/page/11/index.html"},{"revision":"36ecaafce036c7b5b70a781d2178ca24","url":"./tags/Java/page/12/index.html"},{"revision":"f8f00eb45d90688dcc080e79df4206a9","url":"./tags/Java/page/2/index.html"},{"revision":"2a21aa5cac74fa7c4e1a2d3f1e6c53b2","url":"./tags/Java/page/3/index.html"},{"revision":"15b7670cfe89816c48db2ee54f5d1b0f","url":"./tags/Java/page/4/index.html"},{"revision":"3e8648cedd79c3605590c081c07f1296","url":"./tags/Java/page/5/index.html"},{"revision":"0d3775131f0d1ae2452e672f17e4f535","url":"./tags/Java/page/6/index.html"},{"revision":"5c58f9aa327693275d3665ecc7bcba98","url":"./tags/Java/page/7/index.html"},{"revision":"7031186c2c3d116ed22905646653d6b5","url":"./tags/Java/page/8/index.html"},{"revision":"b1a4342e576282d2a01fa63f95df5351","url":"./tags/Java/page/9/index.html"},{"revision":"13e7b441404396f39ddda7477133f024","url":"./tags/JMeter/index.html"},{"revision":"b5103700fcf9e1617e5b3a6ea0a2a143","url":"./tags/JQuery/index.html"},{"revision":"894d18eaaa9bb0b455577bb29f99f47a","url":"./tags/Linux/index.html"},{"revision":"8734cac1c6da7ee0442794a3a2098dd1","url":"./tags/Log4j/index.html"},{"revision":"19135d98e3dfcf0ac4a7a0e9dc3dd9aa","url":"./tags/Maven/index.html"},{"revision":"2d7202f119e404e70b6c5bdd9dfb448d","url":"./tags/MySQL/index.html"},{"revision":"2563651d2eb75908d3cd19ef5384b32a","url":"./tags/Node/index.html"},{"revision":"b9d1608896e0b3424a98cb6a7b67cc82","url":"./tags/Redis/index.html"},{"revision":"e0e9be0f98106d24c2682382b7ea5140","url":"./tags/Rest/index.html"},{"revision":"155d12e5b59bdae947c6b8a53544f0bc","url":"./tags/Socket/index.html"},{"revision":"8e40d955ba236484e122cef5a0359e1a","url":"./tags/Solr/index.html"},{"revision":"7c0a8d5ee17e08a0f089531606a685cc","url":"./tags/SpringBoot/index.html"},{"revision":"364c76fe8659be339750a4027c05081a","url":"./tags/SpringBoot/page/2/index.html"},{"revision":"a75566caa826fa92b36b6da2949ffd4e","url":"./tags/SQL-Server/index.html"},{"revision":"b9e5cd79c6c6c3fb9aa3272b9b5d7769","url":"./tags/SSM/index.html"},{"revision":"7c007190fd538fc875e679467b24ce22","url":"./tags/Travis/index.html"},{"revision":"0980eb73ea435c9c309849fa975af051","url":"./tags/Ubuntu/index.html"},{"revision":"4c5a2edf96540d0f1c2ed33a1ce2e594","url":"./tags/WebService/index.html"},{"revision":"f9b11d4c2a73441b8a0f80b1ecae6ff5","url":"./tags/学车/index.html"},{"revision":"306745bd2da24bb53d57fab513651fde","url":"./tags/工具/index.html"},{"revision":"7d6525beae3981634603a26c8fe26092","url":"./tags/数据库/index.html"},{"revision":"1bda0c2733c07e5b7da5621c24c22cc0","url":"./tags/日常/index.html"},{"revision":"e6a7a96dffe4a1bba38de29daa6acb76","url":"./tags/流书/index.html"},{"revision":"c32485004aa3a2f72da794ae19c2da93","url":"./tags/生活/index.html"},{"revision":"9798f8c22c82731aa1352bc2f4aebf1e","url":"./tags/算法/index.html"},{"revision":"678b31885af5f69b53f959207135511c","url":"./tags/算法/page/2/index.html"},{"revision":"a82c0ff2b82e2fbb2a7ab5ac5d3ba546","url":"./tags/蓝桥杯/index.html"},{"revision":"adcd8f49b0b365db4d6605f40dbaad69","url":"./tags/蓝桥杯/page/2/index.html"},{"revision":"f7eea358f94ebd67dc18a90844e27b4b","url":"./tags/语雀/index.html"},{"revision":"3d8c4f60af952f3d94c538df44a84b6a","url":"./tags/语雀/page/2/index.html"},{"revision":"d146897a5febf7e656390e017f33458a","url":"./tags/语雀/page/3/index.html"},{"revision":"df0ef8dac0a7966456cb3e2280964a20","url":"./tags/音乐/index.html"}],{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();
