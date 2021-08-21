const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "ZENE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f5beeecd30942a2da47c6eacca5b05f2","url":"./01c00fab19d5.html"},{"revision":"0f5577593878c4e8ab2fe6a7d4e8d55f","url":"./0380823323ea.html"},{"revision":"e2b2548e8947b46115b50f6aac11924a","url":"./083b7d32f844.html"},{"revision":"abe242fe4dea7f4b0025da0322640f97","url":"./091f0d83f102.html"},{"revision":"f4759eb3db98553d051252fb4668b05a","url":"./0af545735672.html"},{"revision":"551c59d36c1d82567565e422ea73f2f9","url":"./0cc7ddcf0032.html"},{"revision":"4666c725e170504f0ca1953c79af128f","url":"./0cfa7e337349.html"},{"revision":"7b1586cf5abe281688e4c9a73b8ddd6a","url":"./0d714c49bb0b.html"},{"revision":"c4e690a21361f7472c45da036e5a9a28","url":"./102164869c4c.html"},{"revision":"f83ccc42c96557dfa62714582d26ebf9","url":"./144f3d359cd3.html"},{"revision":"4edd99b590054de5161934a00856974b","url":"./14f35b3a6d64.html"},{"revision":"6149eb38636ff003aa34dddf34b40045","url":"./1698a47fcf6a.html"},{"revision":"02a33aab06a1e45968ac222a0578afaa","url":"./17f5eb8bcc0d.html"},{"revision":"d1372d1456b3e4d8c8dd4df3ffca0e80","url":"./18ac9d961f0b.html"},{"revision":"96f33205fe2e99ebdc67ab6546aa5328","url":"./18e2d5e4b6f3.html"},{"revision":"1d64dbab894aaaaee84ede5a3416cad8","url":"./1b9dca731c12.html"},{"revision":"942c53b4c958ef173ae947173a4474d9","url":"./1c1b04db2c01.html"},{"revision":"0a3624b98fb4a7b1a2957c3295808a85","url":"./1e8a3115b061.html"},{"revision":"b4189ce5aed6d461dedd08d3bcc90af8","url":"./201854ea4b36.html"},{"revision":"5ed498dd6b6450b1113d4cdf814ff174","url":"./245047f7f750.html"},{"revision":"744109d8cec5f810930db6e03f304443","url":"./2605a2a5060e.html"},{"revision":"60b8a0512edf245427609eed37eb8ea8","url":"./2871874be300.html"},{"revision":"b98c46f2d8857a23e32497f2186cf48e","url":"./28d125e258a1.html"},{"revision":"c6b6cfc5c7f38c987650343aafb6f453","url":"./2cc594bf8909.html"},{"revision":"0d0091cf623d4f231d4c5f3a73a720ea","url":"./2ce74a09c8f3.html"},{"revision":"f9c8435061cd3e50b64b4e6c871206f7","url":"./2f190b34c2b3.html"},{"revision":"e4ddbd5863de52fe6c3ac567d8dfcf0a","url":"./3004cf782434.html"},{"revision":"1df0b1f074017d36a178e7cdeefcdaa9","url":"./33f8eb0da2f0.html"},{"revision":"780062dcc2ef2785e01aedb57df448e6","url":"./3494683249bc.html"},{"revision":"4b41599e790a36f46c0fa998db978912","url":"./378fe56bd246.html"},{"revision":"ea4cee98c44e5a02944394a7107840d9","url":"./3a4ba11b7a5e.html"},{"revision":"34c6a5fb66802f7666b374a2a2e10362","url":"./3dc224c52b20.html"},{"revision":"0d44a32df5d3c15d3edf37c19dfb6f1d","url":"./3e4b52661133.html"},{"revision":"52b5a370ce746a55e8d7e26614672dda","url":"./3f94559a860d.html"},{"revision":"64cf8ca6bc1c2cbdd9788fcf9e7a9655","url":"./404.html"},{"revision":"e1d678242a9446b7a0dfd48082038af6","url":"./40901eb5b99a.html"},{"revision":"b3df6ed70c06973c8e46cd239cf7cbeb","url":"./4264568384dd.html"},{"revision":"a9979c089abb293b6f4e47e27c30cc50","url":"./45cec86ad3c4.html"},{"revision":"74fc4f9a03f76a93f090a59e64176adf","url":"./49d077e64aa6.html"},{"revision":"64830276350e0135083ea8d26b6f428d","url":"./4b9608333997.html"},{"revision":"ab5987b95293239455f551e81c61dd4e","url":"./51c5316ba4dc.html"},{"revision":"41a961a6fce34c2595492da4f7871fbb","url":"./543613fef7da.html"},{"revision":"2ec76b4966f99f1f6c84da39f1ca4492","url":"./546c10072d86.html"},{"revision":"eea548d1a4290567903e0ae93a71347d","url":"./57bfd13fa382.html"},{"revision":"a57d35b136f83e8fe525694dc35b5cbe","url":"./59d451fe7cbc.html"},{"revision":"ab6d12139eef4fc7e6c475df5df10446","url":"./5a25eafad98e.html"},{"revision":"9335fab4b2030ee11187f4b2971345f4","url":"./5d0a7171e2be.html"},{"revision":"efabb3bcb8d0df52ad22506c11bab2d0","url":"./5e4e6842d754.html"},{"revision":"f82eb5b938ff8a00b496a3651fb3192f","url":"./6321ac3497ca.html"},{"revision":"218a5ed23e0870ba9e805860b42a0c81","url":"./63d02054b042.html"},{"revision":"49474a8d0028281f3e2118fa2a3e1c8f","url":"./641601337f0b.html"},{"revision":"7305f6a15f05f9d7bf111c57f745cc96","url":"./65e4aa78c9e6.html"},{"revision":"6427a171fc118a59c990b3f13aa4e26c","url":"./672524809abe.html"},{"revision":"3263e187d55f7576977f7154f9ae0783","url":"./675ab52ded3d.html"},{"revision":"49c0d0e8ec8d54b26a4fc25cddbfa5ad","url":"./69bb6d2d9142.html"},{"revision":"bc4ac0dff191acc654324168dfdc5276","url":"./69f998dd7524.html"},{"revision":"6ee0d9386a6e708d448a91470f8855a4","url":"./6b7289fc875f.html"},{"revision":"9921a726dc95ed96a72b9f9002825ff6","url":"./6f2cd147c9da.html"},{"revision":"8014699a2f91d6e72c3459ce89944f58","url":"./6fe7860f08d4.html"},{"revision":"ce36b24ff042e99a77db7ac4f7fcd812","url":"./70ca5927dc18.html"},{"revision":"e8f375da59a12836f843b0697621aa07","url":"./7371f7e698bd.html"},{"revision":"615b5d06c1e5dbe0ad86a4c9457ac7d9","url":"./7434890e6022.html"},{"revision":"edfe7611e944dc6f78481ea4196d7d8f","url":"./79edd52b58c3.html"},{"revision":"042c70fde70d64578b2e1f4df963c2c6","url":"./7b851fc8c287.html"},{"revision":"615292dd2cc4c7cf9206380c87228d26","url":"./7c039cfe73f4.html"},{"revision":"ea124c867b5be685ca098a4407142a08","url":"./7c8516486039.html"},{"revision":"823a1a2856d4d41bc31c22ea376838fa","url":"./8193ae6cfd9c.html"},{"revision":"44d3dc2dad5a05635554e3c9f2ef9512","url":"./837862e41b91.html"},{"revision":"0bec4f942a17da09124aeec425b1750f","url":"./83e4d5ba76f4.html"},{"revision":"57d88a0ff06713e8fab90912f5db6d8e","url":"./843e58d8929c.html"},{"revision":"2b6c94390c33ba83003042cb9772406d","url":"./85bb8468cbb1.html"},{"revision":"aba477349c4f5f591b7c9b139b41fec4","url":"./8aea8b702ec9.html"},{"revision":"d679825864ca5a98683da7d94f41ddfb","url":"./8f0902f5fa56.html"},{"revision":"6159b646d480aab1d6361b780dbc2849","url":"./918110f64071.html"},{"revision":"69c59c69d131310d536bee23dfa289ad","url":"./9865be07681a.html"},{"revision":"f4203e8f4bce036ab54b2e1f45fa5d66","url":"./a21c0106b4dc.html"},{"revision":"b7675912b1264292cac0dbf17ea151ef","url":"./a27d16b8d0e7.html"},{"revision":"bb3733d24f36c8901450e211984ff2fd","url":"./a295f8b882ca.html"},{"revision":"ccbac0da3d7ecd6b0ce297cf69ef9f3f","url":"./a2cff47e45b4.html"},{"revision":"38535d23f617fd79cc325fc69874f34d","url":"./a39447736c9e.html"},{"revision":"f8f482e5bb3ab0e96d0f518c11d5b0db","url":"./a66da301ed65.html"},{"revision":"01b6b1a934245a7b8caa9e6083f9306d","url":"./a8e99b664015.html"},{"revision":"8d6cf26f49841251e6128ac44bfb9293","url":"./a911b7f249e6.html"},{"revision":"000fc982e0af6076223f45459fab5bbe","url":"./aaafb3b4b102.html"},{"revision":"21be7d8bdc627a4dd24c0bb2280f508e","url":"./ab4774b19476.html"},{"revision":"5165c280fe50bf5fdad02286371c352d","url":"./ac05f6c6cbcf.html"},{"revision":"17a84e339039361da48621cd7d7d987a","url":"./ac93dc79a32b.html"},{"revision":"70f9001c942ddb987688e43c845ec643","url":"./aee8b86da60e.html"},{"revision":"29deb291385d0cc1c390ec8e4708171f","url":"./af0c06af727c.html"},{"revision":"944e5c3e73519517b9c93a9c3bd362a3","url":"./af9f2ecdb071.html"},{"revision":"321404dc2539c4a257a2cb8e4771e904","url":"./archives/2018/04/index.html"},{"revision":"195cab63f47bb64bfc236f12f4a37160","url":"./archives/2018/04/page/2/index.html"},{"revision":"2ed02f44e421a005adcb1c06153f5a2b","url":"./archives/2018/index.html"},{"revision":"a4cdf8745a4658d4000349afdb73856d","url":"./archives/2018/page/2/index.html"},{"revision":"fab359bee161a65a81139997a5b3fcee","url":"./archives/2019/01/index.html"},{"revision":"ebf053043cc2bcf11fbeefaee83f2602","url":"./archives/2019/01/page/2/index.html"},{"revision":"009c811135a33fd0a12360901ad1d294","url":"./archives/2019/02/index.html"},{"revision":"54d7363c5841c71097414489559a2810","url":"./archives/2019/03/index.html"},{"revision":"719ef5c9c8e16976a3c4813a3d077563","url":"./archives/2019/04/index.html"},{"revision":"82fda80411e839bf75af44c76f0c1295","url":"./archives/2019/04/page/2/index.html"},{"revision":"24ae6684cbe9086cfc779b363076075e","url":"./archives/2019/05/index.html"},{"revision":"504725d4602ce1c0828334b2f7efb1fe","url":"./archives/2019/11/index.html"},{"revision":"9fadcc7017b593979bbfe2e3bdfa3ff8","url":"./archives/2019/index.html"},{"revision":"582c222aa4f8a426fcc1cca0a53fc57b","url":"./archives/2019/page/2/index.html"},{"revision":"1815b0ea116310bb574bcb3d0d4df35d","url":"./archives/2019/page/3/index.html"},{"revision":"a12eeb17f1f182f8670f08596afb20ae","url":"./archives/2019/page/4/index.html"},{"revision":"b9e08b3f938944160c85f64e9d91b889","url":"./archives/2019/page/5/index.html"},{"revision":"38276153c1b51920353041066daf9533","url":"./archives/2020/01/index.html"},{"revision":"a7f7010008f1271dacb54b3317dece4e","url":"./archives/2020/03/index.html"},{"revision":"30c5d5a934b2deaf86485ddd7e266812","url":"./archives/2020/03/page/2/index.html"},{"revision":"ee23e2636144bdf42ca0e978535ca2ce","url":"./archives/2020/03/page/3/index.html"},{"revision":"a0417d0e9dbb935d2627feebdd0563fb","url":"./archives/2020/04/index.html"},{"revision":"48a6475266597fe27c924ad453e834fa","url":"./archives/2020/04/page/2/index.html"},{"revision":"d6b8dae4de62f6e3186372b708822370","url":"./archives/2020/04/page/3/index.html"},{"revision":"64713014dcbe4cbc7a48980ff4c70f77","url":"./archives/2020/04/page/4/index.html"},{"revision":"60f8e7282853765463a6acf5767a6f95","url":"./archives/2020/index.html"},{"revision":"9f336c872034064c951b497c0679f739","url":"./archives/2020/page/2/index.html"},{"revision":"3d25983fef779631771455f1a2f3374f","url":"./archives/2020/page/3/index.html"},{"revision":"f11bf59f6907cfeb5877ed2a748ad361","url":"./archives/2020/page/4/index.html"},{"revision":"14223f01fe89728fce85a3d8582b0e6d","url":"./archives/2020/page/5/index.html"},{"revision":"db86e71790fc33ee36c13a326d4fe278","url":"./archives/2020/page/6/index.html"},{"revision":"f71ff5bd6068ec384405d87888e8c21d","url":"./archives/2020/page/7/index.html"},{"revision":"919ea8213145382ee2b6d3d546f3c43d","url":"./archives/2020/page/8/index.html"},{"revision":"3135854eadc83310dd0fee92c93ddcd6","url":"./archives/2021/01/index.html"},{"revision":"4ec81bf986171d41fee32e36a8a77a7d","url":"./archives/2021/03/index.html"},{"revision":"a204bf1ef2523c27fcc35648ebb4d7e6","url":"./archives/2021/06/index.html"},{"revision":"0f61de2974beb3ea701226fb36f86086","url":"./archives/2021/07/index.html"},{"revision":"f91c1cd08a32962398e2a9e9fc42da2e","url":"./archives/2021/07/page/2/index.html"},{"revision":"d8719bf500b521bb79f94c610fc5a5b6","url":"./archives/2021/07/page/3/index.html"},{"revision":"8824d8ce3b95191536469d6ca51a193a","url":"./archives/2021/08/index.html"},{"revision":"f8250d3f68562523a450a338f1f61f2d","url":"./archives/2021/index.html"},{"revision":"04ceb806ec9dbca25582f04f7f783684","url":"./archives/2021/page/2/index.html"},{"revision":"87fd8234cf0eec1d7fc74a758b5e8cd8","url":"./archives/2021/page/3/index.html"},{"revision":"88b9a5160d9945447b029279ebd735f1","url":"./archives/index.html"},{"revision":"901b5f4c10763f12d5ea762ff640124f","url":"./archives/page/10/index.html"},{"revision":"ac5bef6232311040e6a2a51e04f2fc03","url":"./archives/page/11/index.html"},{"revision":"89bd2c57fc9d1193c0b884cf45ea9c98","url":"./archives/page/12/index.html"},{"revision":"b8ed961f5d9312aadc359fe47e050710","url":"./archives/page/13/index.html"},{"revision":"331c495813bb74c625ac2a41289bfec2","url":"./archives/page/14/index.html"},{"revision":"b69c987117dc83e94bc574c9143214da","url":"./archives/page/15/index.html"},{"revision":"af8354a8f6b718c91d87a0ccf544bfa0","url":"./archives/page/16/index.html"},{"revision":"afb8e7dcc3b99d3df9fa0dccd5a6ff06","url":"./archives/page/2/index.html"},{"revision":"4bb6db50b8c5779618c13a35e6c0f69c","url":"./archives/page/3/index.html"},{"revision":"5bb5d14f867129beb7dd23ce258c3d33","url":"./archives/page/4/index.html"},{"revision":"56935e23b377c8ce4069ee6fbaa350b3","url":"./archives/page/5/index.html"},{"revision":"b8d0f7b301b8b4b296547a5ad540c719","url":"./archives/page/6/index.html"},{"revision":"fd6c1f01bdfdf7b4d01b0eeedbaed5fd","url":"./archives/page/7/index.html"},{"revision":"9b3a696ab0cd92842ea7605016c277d5","url":"./archives/page/8/index.html"},{"revision":"5ca212af7a26026de9c114b9701d5fc3","url":"./archives/page/9/index.html"},{"revision":"746c27bcb08daa8b9f6edb03119865ca","url":"./b176b2fd8637.html"},{"revision":"49de22bc19a24469633b6a5d47472d26","url":"./b17819308f04.html"},{"revision":"2db5cdbea3a8af9482b433122eb1606c","url":"./b18884c315bf.html"},{"revision":"46c7a136b89f7aeac62b5d29ff8b822a","url":"./b1fbbb5bc700.html"},{"revision":"a9878fd13ed500a879cd6f17979d57b8","url":"./b28bf5bb0dae.html"},{"revision":"3f988c361a253cc26362b2e4f01cd10c","url":"./b2be80fe9e8f.html"},{"revision":"6c17a392bea5406908e5a87cb80b2c59","url":"./b3421d932a26.html"},{"revision":"0361993e88edd650533924d4d1bd5686","url":"./b3946cdad917.html"},{"revision":"8cfd46bc15e2e451ba54898c433868c6","url":"./b44c36a2cabb.html"},{"revision":"00c20cbb3031260b6750e5afa62b7468","url":"./b53c187d0041.html"},{"revision":"d75c8a6655cdc0c8a24e107d3fb91191","url":"./b6106669f562.html"},{"revision":"3c6b6bde4a363d3d346a160db922a493","url":"./b69418481828.html"},{"revision":"f768ae59a2111e726a701d7c709feca8","url":"./b6a4fd82fcfc.html"},{"revision":"e9746d362a43093bb5c0b36e0838dd09","url":"./be1395c7d0f0.html"},{"revision":"1641301cbab4a8f7dbe02878c7bb903f","url":"./bef1ac8b1d67.html"},{"revision":"31c4a8dc8cb547a519fe375477fdc3ce","url":"./c5e01090a818.html"},{"revision":"c58eb7eda967586ebac7de6d17d715e1","url":"./c60ecd4f0833.html"},{"revision":"66415de2780d1bedbd32ea657ca672ba","url":"./c6c507ac38c4.html"},{"revision":"4f8ca02d9760e052be5a7534442ed502","url":"./c6e327594862.html"},{"revision":"b7f1ddaf95db11826420e1c3e9147419","url":"./c748da646b0b.html"},{"revision":"839d3bf2e6c2ed1471f9facd07b11071","url":"./ca04d468491e.html"},{"revision":"6d481fbb454a8e9b3c9a5294088889ec","url":"./categories/Hexo/index.html"},{"revision":"bdc7c6ee3ac9c756b9a0fdc388719119","url":"./categories/Html/index.html"},{"revision":"dd4012ad7c7eeb9d7e5ddf52336b241a","url":"./categories/Java/index.html"},{"revision":"b7f2a8c2f20d85dfa733d821152759c6","url":"./categories/Java/page/2/index.html"},{"revision":"01d608067577bd3f973f75c91567b361","url":"./categories/Java/page/3/index.html"},{"revision":"f8df582741f1af22d25296a7dced8ec8","url":"./categories/Java/page/4/index.html"},{"revision":"1c2a5e4988813386d6151669bd08bb0d","url":"./categories/Java/page/5/index.html"},{"revision":"08c14c3f9795c01e35d850e7a80bffd4","url":"./categories/Java/page/6/index.html"},{"revision":"898175075c15a7da8ed6b09fefae86e8","url":"./categories/Java/page/7/index.html"},{"revision":"fdc5f6a09765bc3441adb98ebba4c86a","url":"./categories/Java/page/8/index.html"},{"revision":"8076eed95cf8948025c6b26c14d9f92e","url":"./categories/Linux/index.html"},{"revision":"976065679aea0453be41e8be69ed6987","url":"./categories/Maven/index.html"},{"revision":"673e73964f1262e9183ec76124e3e035","url":"./categories/工具/index.html"},{"revision":"09409e49b8729750f63f016f3e712aab","url":"./categories/数据库/index.html"},{"revision":"e21562f5bb02be46597dedb46bfb645f","url":"./categories/日常/index.html"},{"revision":"447981ac7316551f9b8ecb6bed1fa87b","url":"./categories/生活/index.html"},{"revision":"365c181f2c413b32cafeb065bbdfbd55","url":"./categories/算法/index.html"},{"revision":"ffb9482f0c59df9254d2fb700665341b","url":"./categories/算法/page/2/index.html"},{"revision":"c4dfcfbac0ca2024c513adf98324a896","url":"./categories/语雀/index.html"},{"revision":"f493c340145787a09fc385d327d2b30c","url":"./categories/语雀/page/2/index.html"},{"revision":"2988923617bf0a7848ab9fdb30908d37","url":"./categories/语雀/page/3/index.html"},{"revision":"187fcf427c3d998f4aa7ee2396b4586e","url":"./cf7513efc8a3.html"},{"revision":"2011401b584922173a138355d627f7d9","url":"./cfa84fd74626.html"},{"revision":"57865e8eb3de6eab2715be99bfcc7707","url":"./cfd6d46b475d.html"},{"revision":"9d6e706f970ac2a240a15d2a3f74b7aa","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"5a9beabb91c9eefe2de09cea266d77e7","url":"./d149732b2cfe.html"},{"revision":"5aaaff2f191f4adf7dbd634984f75fee","url":"./d2d51dce913f.html"},{"revision":"af4955bc8cd12af17923faec3442fc70","url":"./d4fe7f53dfd9.html"},{"revision":"3583216f82993918a46247ba8cc0244d","url":"./d620a8aa8580.html"},{"revision":"8e198bb5ee114b37678a53c5af745622","url":"./d71834e48b4e.html"},{"revision":"810e195ab3406d81b4d6b67623802ce1","url":"./d7751bc6745e.html"},{"revision":"ee45f274c57ced74807eb7c91c9a6ae3","url":"./d8aaf5d37cb0.html"},{"revision":"3eac26412ebb9f8c4593b0b1f14dceea","url":"./d911e46da2b8.html"},{"revision":"6d18af9a71a491911e1e859b9c786bed","url":"./da07fbdb9fd0.html"},{"revision":"beab8e9fe3586ec8880c82e7ded9b6d1","url":"./da89cd139d26.html"},{"revision":"c377a8ea2997cef31c67c0ffd081d219","url":"./dc5ef838632f.html"},{"revision":"adea407c4caa9112e8356507bec4ee26","url":"./dc7e2b97a6a2.html"},{"revision":"4f35763466a2dd08a4113b2d91aaafe1","url":"./de53a68554c4.html"},{"revision":"e43cded81dc70084236ac79b9fe70168","url":"./df5068bb57d2.html"},{"revision":"307a5acad7019ba93aab8c6d1115774c","url":"./df52bcc43c75.html"},{"revision":"5e8839993fce173ecf8910907523478f","url":"./df684ffb9540.html"},{"revision":"312d29df8d538f09ffb5d8b1bdaef4bd","url":"./e1ce4e19566f.html"},{"revision":"ffc477c42bbdec3d13b983c3e232d752","url":"./e337a70add48.html"},{"revision":"ed14252ce90ea5f9a39d9773026367b5","url":"./e43d8e1e85d5.html"},{"revision":"599f24a4ddb4df53dad1e326c2a9d393","url":"./e460c106f773.html"},{"revision":"544f377f3cb7f6417191e7f7e85f3ed8","url":"./e47508c7c8ce.html"},{"revision":"e7d1b0a9eb5dd92e5fdd9ab56dba2d9c","url":"./e5ad37bd9e65.html"},{"revision":"80c49848d86fc1fa97bc8ea7646c8fa1","url":"./e6323226da63.html"},{"revision":"150f353ba6558e447402b77713a88ef3","url":"./e6ddddcf68e6.html"},{"revision":"c847555b7e2c7cf96f6f258c941680cf","url":"./e72787e674a1.html"},{"revision":"919ff1302fa69935cc57ae9783219650","url":"./e877f7d30bd2.html"},{"revision":"173ca0b1220b44509614d451952756f5","url":"./e8d6d5f114d9.html"},{"revision":"86d11764d918ae2a96a34f7c31d78d2c","url":"./ed6a15da5969.html"},{"revision":"a1cbefb457838aa7dc2e00e5c26ddef7","url":"./ed9501b8d471.html"},{"revision":"d47bce9be96798477bfdc219d6458c6c","url":"./ed9a6f7913bc.html"},{"revision":"f1019aae4eebf9d6a7eb6f51112a19dc","url":"./ee5c0e48c3d1.html"},{"revision":"58600ae800143609c4ed9f18ea6cb9c4","url":"./eea72e773574.html"},{"revision":"38dc70b0f202101bd317edb81f0e7049","url":"./f144d956d9c0.html"},{"revision":"66491297ff6f2d018cfdfe7911f28a39","url":"./f563a9569919.html"},{"revision":"6210a45df9e162b16ec60778ba6e030f","url":"./f5ec6e6d230c.html"},{"revision":"382cff226c97f6db9fd6879e5c0b6b74","url":"./f6db78db1f90.html"},{"revision":"baa926134396356d19dccd7204e451a2","url":"./f70d50f7bf77.html"},{"revision":"49f4565677c411faac4dc8117ffde995","url":"./fb3dac0e46f1.html"},{"revision":"43842d2e152520a064dcc0150c77de60","url":"./fcf19d075d62.html"},{"revision":"5ca3372495380e0b7f53392520b92544","url":"./fdb3287fae31.html"},{"revision":"81676b24b27a2338c7180762fbeb36fa","url":"./fe248847c921.html"},{"revision":"33922e5ec39beb9c9c1fbd3b88e53cb9","url":"./fee0daf7ca52.html"},{"revision":"95d511953945907d2277ac6e3d76b0d0","url":"./index.html"},{"revision":"e78fd4852566e88f8ff0cf9264677ce3","url":"./js/bundle.js"},{"revision":"50d0a0948dbed506ec2636d190e97fbb","url":"./js/search/algolia.js"},{"revision":"c10120d4322a75b944fc13a3b663d596","url":"./js/tw_cn.js"},{"revision":"5d5ce926fe0c857d58fa4172cc1483f4","url":"./menu/about/index.html"},{"revision":"263c5cb1dc065ab64e80ee7de37492da","url":"./menu/aria2/index.html"},{"revision":"0b939ff0b4abd823b3f4e98324fed4ca","url":"./menu/categories/index.html"},{"revision":"83aa3a9aba7b0f768568012d4b5b7036","url":"./menu/link/index.html"},{"revision":"dcac8c2ed2abe8486e0f1e54f7948f1e","url":"./menu/tags/index.html"},{"revision":"9453a19ac43fcf9e65eb8dc1bd5fd57c","url":"./page/10/index.html"},{"revision":"949e9d5f46420aa4d23518443b765db7","url":"./page/11/index.html"},{"revision":"67dcdd8d8dcd7da41c5c8ead0d20ebe9","url":"./page/12/index.html"},{"revision":"fe6fcb0a021fbbdf3fe2fb9abd99e86c","url":"./page/13/index.html"},{"revision":"f30d77070c40215bf22a02851c5407c7","url":"./page/14/index.html"},{"revision":"c1d684f10aa722cce6e83117eefbd8bb","url":"./page/15/index.html"},{"revision":"340769689bc3bf9fad373dc153a8bcc6","url":"./page/16/index.html"},{"revision":"eab861e4376cc1c542d82c7aeb362166","url":"./page/2/index.html"},{"revision":"a12c2d4504e5ed3c037539443ffab2c4","url":"./page/3/index.html"},{"revision":"3962bb4d7870e0e51111aea9ef38867c","url":"./page/4/index.html"},{"revision":"1baeb6aeefeb2b0ec45955122102008d","url":"./page/5/index.html"},{"revision":"f3e30c9b909251908e715a4cec95f61c","url":"./page/6/index.html"},{"revision":"16ae08e12f3531a0c1eab02e9fd5776c","url":"./page/7/index.html"},{"revision":"a29cfeedaeae3c2b6981597643798c6e","url":"./page/8/index.html"},{"revision":"6fedab80bc07fcc788500d53da050f0e","url":"./page/9/index.html"},{"revision":"09096e6c07061e5e8874d509ef58e688","url":"./static/pwa/icons/README.html"},{"revision":"559d8512ff2e6d361a8f0797a2c13cff","url":"./static/pwa/manifest.json"},{"revision":"56b698e4830b8d1e397606e6df3de90b","url":"./tags/Ajax/index.html"},{"revision":"daa3db3dc2d14b60fe417cbcf915482b","url":"./tags/Contos/index.html"},{"revision":"f39bdbcea195c726319606133c252abc","url":"./tags/Hexo/index.html"},{"revision":"99ddff802f7ad284ebe9bcb6ebc92666","url":"./tags/Html/index.html"},{"revision":"f831d29a3c527b15c20e912f7cc4aad7","url":"./tags/IntelliJ-IDEA/index.html"},{"revision":"63ed7dde9d91b7817189b26c86dbf5d2","url":"./tags/Java/index.html"},{"revision":"73849cf69fbaadb3b1ea9b7ee7a56687","url":"./tags/Java/page/10/index.html"},{"revision":"0180c1419eab8da87b344d5d4019192e","url":"./tags/Java/page/11/index.html"},{"revision":"11bb6968558517aefd5afe7aada4a774","url":"./tags/Java/page/12/index.html"},{"revision":"a6569cf1b4bdf1a9f0da23e8974400f6","url":"./tags/Java/page/2/index.html"},{"revision":"ee17387c1f72ca52c1a6bf8834432f88","url":"./tags/Java/page/3/index.html"},{"revision":"4a578a3133fa9b75da92c0babb0e9dbb","url":"./tags/Java/page/4/index.html"},{"revision":"99992a8037305d1f169bcacbed4797b0","url":"./tags/Java/page/5/index.html"},{"revision":"4f7176b6c5cfc6fd623cbc62eeb6f766","url":"./tags/Java/page/6/index.html"},{"revision":"f1f3c9a18dbdf6429f0b50ff6e270179","url":"./tags/Java/page/7/index.html"},{"revision":"0b18aa18df0d078d58cee73facbbd111","url":"./tags/Java/page/8/index.html"},{"revision":"b12014456ed8f97ed335d879b56bcae6","url":"./tags/Java/page/9/index.html"},{"revision":"b7ba45bb5bf9dde91aeb04140d130816","url":"./tags/JMeter/index.html"},{"revision":"676775c5d232c243ef162ca8831d4f2f","url":"./tags/JQuery/index.html"},{"revision":"50870f6a729229f92927d4a6fe6bada8","url":"./tags/Linux/index.html"},{"revision":"36d2ea75c5c11cac5a742c9ebb1c589e","url":"./tags/Log4j/index.html"},{"revision":"def7b7a61196e89b96d76ee3674b1bf8","url":"./tags/Maven/index.html"},{"revision":"4dc07a41b32446552338e1a50928f5c1","url":"./tags/MySQL/index.html"},{"revision":"7441f37a18a5550b1d94d32e34cc71eb","url":"./tags/Node/index.html"},{"revision":"1ca1e21c684c4d54304dea9fd2c0959c","url":"./tags/Redis/index.html"},{"revision":"c523d434ee032c8fe5d6fbaf71af9035","url":"./tags/Rest/index.html"},{"revision":"d328d0a814e222a991fe6489a4470b59","url":"./tags/Socket/index.html"},{"revision":"a5b61cef99422f24f1bbb60288d1eb4d","url":"./tags/Solr/index.html"},{"revision":"080f81638eca9ffa60247cf97dc5024f","url":"./tags/SpringBoot/index.html"},{"revision":"b291add29965483453f462b1ed068dce","url":"./tags/SpringBoot/page/2/index.html"},{"revision":"c404fb1eb9275551187297d8bb342103","url":"./tags/SQL-Server/index.html"},{"revision":"1ad95d3d28a2141bee8d376b6ae47456","url":"./tags/SSM/index.html"},{"revision":"9759a15afed461580e716e4d557826f0","url":"./tags/Travis/index.html"},{"revision":"fbb319863364feb5f3cc021b62921454","url":"./tags/Ubuntu/index.html"},{"revision":"87b9c6e96b0adf7bd1bea7efc6104b1f","url":"./tags/WebService/index.html"},{"revision":"b62f78eab8ff55719f7d4e8e51707d42","url":"./tags/学车/index.html"},{"revision":"be90341806a7a149a120d80ec4981c82","url":"./tags/工具/index.html"},{"revision":"b034382552ae652d6b9279c11794f03d","url":"./tags/数据库/index.html"},{"revision":"3ad1c87a3ec21d125b79711891692fdd","url":"./tags/日常/index.html"},{"revision":"583147b052d8abca9035986921dad1fa","url":"./tags/流书/index.html"},{"revision":"22e372b964bc41255a0aa826ac6f617e","url":"./tags/生活/index.html"},{"revision":"086f26ccb564f272ad8c8a9931647c14","url":"./tags/算法/index.html"},{"revision":"119a023b34fa57c304d2e42c5680b051","url":"./tags/算法/page/2/index.html"},{"revision":"4505023d1782a5680c19f0ae41be03fe","url":"./tags/蓝桥杯/index.html"},{"revision":"dc8c6066db824052f37088e8b7149f3d","url":"./tags/蓝桥杯/page/2/index.html"},{"revision":"519ace5b35d559fd2736b6d86c9ec3e5","url":"./tags/语雀/index.html"},{"revision":"08f176229ab0a7027e5678a9ed392fc6","url":"./tags/语雀/page/2/index.html"},{"revision":"dd7d84c000195542c6382ede711997ec","url":"./tags/语雀/page/3/index.html"},{"revision":"7568d4ab2f81dd768159abdda133de21","url":"./tags/音乐/index.html"}],{
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
