/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01c00fab19d5.html","607c1c74d14b476737b96662d84a235b"],["/01c00fab19d5/异常体系.png","c5c7085c9534763d0287a8596ac12170"],["/01c00fab19d5/异常的分类.png","184234974b5fb6b40c7a910bc62453c2"],["/0380823323ea.html","43a44cebf2199d94ba335600e0e146fe"],["/0380823323ea/01-交通方式.png","20baf2be33220faf5424e2b38abb9f2a"],["/0380823323ea/02-Lambda.png","b81b8780f6c9f898cecf5c61fb269cba"],["/0380823323ea/03-Overview.png","2e91cc2bc78cc176a9bf1ea4c2c4e4b8"],["/083b7d32f844.html","663104b5bf7102877f2fb545c0cc03c1"],["/091f0d83f102.html","d144897c39917bc71a8eeed73b28f46e"],["/0cc7ddcf0032.html","ab3c8256fbf6b44400d9cfbf6ef5cd2f"],["/0cfa7e337349.html","8d2914dfa6b26b99eed212bf354e666a"],["/0d714c49bb0b.html","74f3162e0328f5e60520ef99a7a09a00"],["/0d714c49bb0b/02-IDEA的项目结构.png","8b74aa7a0c8b45738da6f60a7c8c82d5"],["/0d714c49bb0b/image-20200402170317121.png","0a21436324dfe37cc9bc25a285e5c269"],["/0d714c49bb0b/image-20200402170351577.png","4e8fae75c5835948f20cbfa30671b793"],["/0d714c49bb0b/image-20200402170525471.png","c8ba4559770e9b05fd3d809c2af4fd65"],["/0d714c49bb0b/image-20200402170544275.png","70997ada2c42f2638ce3e6c8f7e26b1a"],["/0d714c49bb0b/image-20200402170608817.png","53799839d571fc055b5e8168309be822"],["/0d714c49bb0b/image-20200402170635952.png","bf0d4fdb3e08e48770316f0a133c724f"],["/0d714c49bb0b/image-20200402170652435.png","c4d32db71014c53c966b5c25c309303b"],["/0d714c49bb0b/image-20200402170744130.png","0d821ae94e290e1c218c3716b9309c41"],["/0d714c49bb0b/image-20200402170816522.png","183b99538645e2be0a047d6da6025581"],["/0d714c49bb0b/image-20200402170854718.png","5138b6ebb7cddb68c1fb56f1a1911f17"],["/0d714c49bb0b/image-20200402170941742.png","f511755960329f7ed68cb3a2825a5eef"],["/0d714c49bb0b/image-20200402171012124.png","f357f908cb6253f6307dbdf4ad276f57"],["/0d714c49bb0b/image-20200402171036407.png","fb15a59a9f3d09eb926d8a7618b8c5a5"],["/0d714c49bb0b/image-20200402171237437.png","ad9f808953c6a83dc8e86107619a0664"],["/0d714c49bb0b/image-20200402171303668.png","dd28f9f0e51164047af482d3cdb9edf2"],["/0d714c49bb0b/image-20200402171333076.png","8ac6f9c313f3adaaccea32eb0d9781ea"],["/0d714c49bb0b/image-20200402171834576.png","1b7f44d86f47e2915cadc0badb8b7cbd"],["/0d714c49bb0b/image-20200402171910062.png","57f34418de5b5dfa7a9fd8a35df2ff8b"],["/0d714c49bb0b/image-20200402172005458.png","76b8b59e48e4c382a172388b3da2aa59"],["/0d714c49bb0b/image-20200402172028412.png","6e7c3258038e3f012b3ee3a7474451aa"],["/0d714c49bb0b/image-20200402172155375.png","bbd2df3b1cf70da76c8d05d7c7bfd5fe"],["/0d714c49bb0b/image-20200402172320302.png","651fa7bc2295b9a59d3c44be5949a3fa"],["/0d714c49bb0b/image-20200402172334670.png","643b1cb409001c43decb3692de5443da"],["/0d714c49bb0b/image-20200402172453930.png","e4e52b70a16686728e85480de73ced45"],["/0d714c49bb0b/image-20200402173148296.png","e275325ca847573540094b9d78f77c77"],["/0d714c49bb0b/image-20200402173230646.png","6d28fa4aadf18d1fe9044d3e02ab2ca5"],["/0d714c49bb0b/image-20200402173336235.png","cd514e83295b5d8baf07556fdff8ab2c"],["/0d714c49bb0b/image-20200402173432324.png","b4e036c55b1382062cd2391638d0185f"],["/0d714c49bb0b/image-20200402173507196.png","b10bf67d55bb6870126c496e9f720676"],["/0d714c49bb0b/image-20200402173526958.png","ceb66ece6373d5f6b4c1992a84b8fa79"],["/102164869c4c.html","dd60d2962b9844319f4580e07ccf26a1"],["/144f3d359cd3.html","deac3666a06e24e31f3a26a22c71204f"],["/14f35b3a6d64.html","8e179f9623f9222790acafcbcf55a3b8"],["/14f35b3a6d64/无限等待.png","843fb162c73be740ea19fae4db531f2f"],["/14f35b3a6d64/线程状态图.png","1435bf41de7de963d30a0d609664fbb4"],["/14f35b3a6d64/计时等待.png","d898f2321427d0d5adb21dbfb57c6e27"],["/14f35b3a6d64/锁阻塞.png","76d0dc098a92acff05cd620cfcf73989"],["/1698a47fcf6a.html","b8efa7b2af0dc5d137a02f7ff359736e"],["/17f5eb8bcc0d.html","513480fae8907395084e341d4cc5761c"],["/18ac9d961f0b.html","2f548d557f93114084136d2606520154"],["/18e2d5e4b6f3.html","96ad0f8c8a528799539d4b270b1720d9"],["/1c1b04db2c01.html","8ca9fd5f7525518e21d13db66f1f283f"],["/1e8a3115b061.html","0e0800b1b43d4d06f69a0a1a00b999e2"],["/201854ea4b36.html","6f4b06a8b038e6f5f31d04bf06aeee57"],["/201854ea4b36/05-抽象的概念.png","3fa8fd49f634a83c1b8709583d67f917"],["/245047f7f750.html","db61b84930b93334321b0ccb88775ea7"],["/2605a2a5060e.html","45208e84c16ed3fadf236d8aaa63768e"],["/2871874be300.html","42fd7357b8cc961e7ced5089a1e5a57f"],["/2871874be300/05-for循环的流程图.png","ee8e09264573212bf7faeadb8ae95c73"],["/2871874be300/06-while循环的流程图.png","5102af69c968c54f7fb68dbade9fd2c7"],["/2871874be300/image-20200402161047519.png","0f3a4c51b1bacba096bfa91c13e62e1f"],["/28d125e258a1.html","afb957607f14d7f05343bf791d42d30b"],["/28d125e258a1/01-继承的基本概念.png","3c166b96e322ca31dc16b18e96b65f7c"],["/28d125e258a1/03-super与this的内存图.png","3bfdb3236e01f1a1cfa3dbc672352495"],["/28d125e258a1/image-20200406161705307.png","9130706cf62f91ae526b7797dc533900"],["/2cc594bf8909.html","a43f3ff49042f00d51d1be421a6d8c7c"],["/2ce74a09c8f3.html","4cdc7af4958d789b49c69357088d609c"],["/2ce74a09c8f3/image-20200412180201258.png","3fc7618ad3d87cd4651e94fc833b6d78"],["/2f190b34c2b3.html","cbf5ae4ecffd49b90eed727f50b40d8a"],["/33f8eb0da2f0.html","1fce37a0dd7988bc555448ce28ac7df7"],["/3494683249bc.html","a5a41f8782c6ac74e8f90438c6cd5597"],["/378fe56bd246.html","eaeb9c68c4db4bf1c1118b64a92cff27"],["/378fe56bd246/1.png","e8ab3fad15c582d8346389cb1e0622db"],["/378fe56bd246/2.png","93a6489e32cd0606bbd2d7aefcac2af5"],["/378fe56bd246/3.png","756b09e3719426443eb8ccc8f3cd6826"],["/378fe56bd246/4.png","676b1d2d704c4ce1985bdd593a670a16"],["/3a4ba11b7a5e.html","949700320419160ac392ad47251c108e"],["/3a4ba11b7a5e/image-20200401173052296.png","879e243b37d4b10b87685c737974398f"],["/3a4ba11b7a5e/image-20200401173119744.png","039d6220d51db77bef500ea2d58054ab"],["/3dc224c52b20.html","e15df5b1e4155166cef3482e420b08ab"],["/3dc224c52b20/1.jpg","d3740d1dca2d445a65b7a7ea2a0db495"],["/3e4b52661133.html","5488d27c775c7a1e276d5937dc71b309"],["/3f94559a860d.html","995ee972e4f8a7fb4e70a9ab8fe18275"],["/404.html","2863c1772065e573f131b608664a0605"],["/40901eb5b99a.html","b9298b43d0b6803effd28de39a6c05b0"],["/4264568384dd.html","0a65a7fb6f89d0e52c707a58d3940798"],["/45cec86ad3c4.html","4c7e94a7bf69c10341e0a18491aa88c5"],["/45cec86ad3c4/image-20200330111401992.png","1fd2f36c87ea776413fef3fc6dd5351d"],["/45cec86ad3c4/image-20200330112240805.png","4236d980f8843e08b1d3989eec7211f8"],["/45cec86ad3c4/image-20200330114552195.png","84ad09d2c056d27d2fa498c186140519"],["/49d077e64aa6.html","e7efbd063286287486fdd7726f770f8a"],["/4b9608333997.html","bcf3b42f5dfdd18c9761a9ca0cc48233"],["/51c5316ba4dc.html","68f6f5c7403486dfbbab626015a2a2a6"],["/543613fef7da.html","cb463fecd0aa471e28c58f3cb659a2c2"],["/546c10072d86.html","a7ab692a22a4411e207e7f097b474c38"],["/57bfd13fa382.html","40f49a59ed1eee5f1b0de767a4a96bf1"],["/59d451fe7cbc.html","cdb0e28ae93fd188aa9ba0e61a84268a"],["/5a25eafad98e.html","78591051081e8f7975a2de3bb0f89baf"],["/5d0a7171e2be.html","4e4b7d36830735dac2f241ba5ff859cc"],["/5d0a7171e2be/1.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/5d0a7171e2be/2.png","66ba7100d5a6b8a35fcd8984ae45f464"],["/5d0a7171e2be/3.png","7098e295719eede6400d6f6ab773bd19"],["/5e4e6842d754.html","530c2d6f6bd511ee835a938044e2b76e"],["/6321ac3497ca.html","048234ffbb09de9dd927c867b1db012e"],["/641601337f0b.html","41897789e093bc0d460ecb681c936e6a"],["/65e4aa78c9e6.html","2d1a9996455a2e55f69b4d0cc927207b"],["/672524809abe.html","5ae7ff32a4bf6b32215a2d599ae4495c"],["/672524809abe/03-多态的概述.png","a888e0f98189750a9521479068a9feef"],["/672524809abe/04-使用多态的好处.png","57a3e777f90e689efef1f8ef5c8ea839"],["/672524809abe/05-对象的上下转型.png","2b5852061fa0be376309ee5e6da0905a"],["/675ab52ded3d.html","fdca00c0719b0d6a3ed135bc54e8d33b"],["/69bb6d2d9142.html","ac0c0ac118eae0b8df60127133f74085"],["/6b7289fc875f.html","533446e0c2d340dc28318e274fa4bf4d"],["/6fe7860f08d4.html","c898eaed5f1e9f99265d7cf36549c28e"],["/6fe7860f08d4/双向链表.png","60da2f48ec4429c92b0847c369dd76ee"],["/70ca5927dc18.html","40249cf201b80c65e660d758ba0d0662"],["/7371f7e698bd.html","6d521e762e97d95eefb1d55278bb5c9d"],["/7371f7e698bd/哈希流程图.png","cbbf94f55d26e1b07ece7eb27839762e"],["/7371f7e698bd/哈希表.png","8c767e1d1903d8c0af0b98c18a7b8482"],["/7434890e6022.html","26b931a80bb8bbd3c5479fc8d48a7b4d"],["/79edd52b58c3.html","6e3847f3ffb8a9f8f3547f2404557f2b"],["/7b851fc8c287.html","59fb11a3f38c2c77d2ad239226082b49"],["/7b851fc8c287/image-20200403172358617.png","9ba7fac26f9759e59bd9928418efa5f0"],["/7b851fc8c287/image-20200403172438473.png","dc069d4ac98ee9b62af00ec01ba19407"],["/7b851fc8c287/image-20200403173538440.png","a8b50a4addcb8553ef417ccd82cc8b8f"],["/7b851fc8c287/image-20200403173638585.png","02535b9f9e06b956817a485b38acf727"],["/7b851fc8c287/image-20200403173732626.png","c226d5308e78f5645cbdf36088392c1e"],["/7b851fc8c287/image-20200403174051861.png","22587d383cee01abeb8c7affbbc64bf9"],["/7b851fc8c287/image-20200403174218198.png","47618ae709bbc13f10c7965f5e8fba3c"],["/7c039cfe73f4.html","29ecd056689d4327328bc63624951a87"],["/7c8516486039.html","cf3a26213e5c2675bf1239ce74bbb5d7"],["/8193ae6cfd9c.html","c1714661e6dd2fd2fc9ccdc7593724e2"],["/837862e41b91.html","a0cf55245da8d7e997c8ecfa93151752"],["/843e58d8929c.html","5cc7639b211b0679045ba603352e1839"],["/843e58d8929c/01-Java中的内存划分.png","f0d1cb25805220dfd863fe37ad77f2c6"],["/843e58d8929c/02-只有一个数组的内存图.png","69f6f1d6c511b78a7ddf1f35b0c10dc1"],["/843e58d8929c/03-有两个独立数组的内存图.png","d42d92bfd731ea4dc5dca3c9a25f783a"],["/843e58d8929c/04-两个引用指向同一个数组的内存图.png","6c01cb592cf2f8525cd0bc13b12a356d"],["/843e58d8929c/05-数组的长度运行期间不可改变.png","48c5da1bfabeb6205c1ac7463abfb285"],["/843e58d8929c/07-数组元素反转的思路.png","c82e0a86fc164a77fca5f122c751c132"],["/843e58d8929c/image-20200404115449968.png","e8b41810ac037c021e5fdffeb4b2f71e"],["/843e58d8929c/image-20200404115849231.png","664652907cb17076701342e366e6b736"],["/85bb8468cbb1.html","5a7a6e2536d1d738d0c95497cf034155"],["/8aea8b702ec9.html","fe0b7e7ccdb58a9dc266d08d0d6574dc"],["/8aea8b702ec9/day08_01_递归累和.jpg","00a399ad84b80d9656a81c25016f0652"],["/8f0902f5fa56.html","2e4639e9cf66e0b081eb348d41e79b84"],["/8f0902f5fa56/01-顺序结构的流程图.png","a9911e0efeae9f4680bdd631b4c3f9c0"],["/918110f64071.html","84ccb5ebe09fba7a84f95709af11894f"],["/9865be07681a.html","41b97aa68ae4c8d65bdd4147f9501da8"],["/a21c0106b4dc.html","fc3533b1bdf217c7118a4cf811bbe11d"],["/a295f8b882ca.html","825675916ed7586eb95c765498ef7ddc"],["/a2cff47e45b4.html","633c33fb1167c8289464cbe43f1a64bc"],["/a2cff47e45b4/1.png","18b58f9ca1c01c119fddda4c2b829c8a"],["/a2cff47e45b4/2.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/a39447736c9e.html","1619c5dd1e9d9836be7dae4baa56856e"],["/a66da301ed65.html","146522d1bcf7d513ea2fee8693569649"],["/a8e99b664015.html","69844f8a8da1d0daa5b4676fb1ae599a"],["/aaafb3b4b102.html","5aef5d55e11198c8a4d753d9e9317fe2"],["/aaafb3b4b102/游泳池.jpg","51efcbec541a872015228e88bbc5e1f5"],["/ab4774b19476.html","91ac75fdf2395293aa06a8bda5485acd"],["/about/index.html","963676b67e157f5af7c0bca2dec17ba1"],["/ac05f6c6cbcf.html","2cf17b548cb215fed499fc433525c882"],["/ac93dc79a32b.html","c1fb81de8d05e62d64f9b36d8334519d"],["/aee8b86da60e.html","85c510b4c51b54d0b7370492c396261a"],["/af0c06af727c.html","a205975b08bde19f0263510f98bed849"],["/af9f2ecdb071.html","43eed8c4371055bcd506d8391ca52e41"],["/af9f2ecdb071/006tNbRwly1gbmnj3i2fyj315m0rc0z8.jpg","34e75e808c6a21129f77f90bb2ca9d97"],["/af9f2ecdb071/20170618230136472.png","db43b62aef576e79499f1b7dbc15c2d8"],["/af9f2ecdb071/20170618230149347.png","caeb24d26d0dd6412e22eb92ccfd98d6"],["/af9f2ecdb071/20170618230200082.png","df5f4b8492fb58ca5947363fb8a77142"],["/af9f2ecdb071/image-20200330135909560.png","b46f9fb593ef1c4599510c691a3bc4ef"],["/af9f2ecdb071/image-20200330140526466.png","bce32a0c5c4ad90c635e08224d3f28cf"],["/af9f2ecdb071/image-20200330140937480.png","7e106d34b8063a1dd3708242e363555e"],["/af9f2ecdb071/image-20200330141046227.png","e55ca8faeac102dfb5e6bfe49b9dcf6d"],["/af9f2ecdb071/image-20200330142153915.png","08c041252166a6c8eb135cc93e734457"],["/archives/2018/04/index.html","1520d203a9cec613a0de788ddaf71aa9"],["/archives/2018/04/page/2/index.html","53dd7c352b38db55842362ff27e7e359"],["/archives/2018/index.html","3c0271c6fa1e0a704ba28c2eda824b97"],["/archives/2018/page/2/index.html","9b23cdf6da54a6f36fd4f268649d2f66"],["/archives/2019/01/index.html","ef1d934fb8334fbdfaeae3fcca87ae3e"],["/archives/2019/01/page/2/index.html","fddf9d6c620dfc08e0a6a0fbd8fe215d"],["/archives/2019/02/index.html","8b179f3a73b9f55886bf8d41bf52229a"],["/archives/2019/03/index.html","4329d7b49150f18986e14d172b348d17"],["/archives/2019/04/index.html","16c6a4217e256e91c1f545fafef05224"],["/archives/2019/04/page/2/index.html","75592c07b360e4176842f88a24a340ba"],["/archives/2019/05/index.html","4d0a9b602e44cdc66beadc8b597564ef"],["/archives/2019/11/index.html","6123740db18d9eb8e519fe866f43c395"],["/archives/2019/index.html","a9ef425c09a9b5325df67a8cab05dc0b"],["/archives/2019/page/2/index.html","72741dd540a778d92ef911301e1de157"],["/archives/2019/page/3/index.html","892edd4c07db28bbef753ef5fbe3c47d"],["/archives/2019/page/4/index.html","5e0eb30c4eeb98c0b835dad4a1af0192"],["/archives/2019/page/5/index.html","5ffa0ad5715685e85e98cb8861abcf2a"],["/archives/2020/01/index.html","c80a52d2e220c54e93622eb871e8750e"],["/archives/2020/03/index.html","cd215dd2229e20c2af6ca151949f141d"],["/archives/2020/03/page/2/index.html","b73916d82defcf8d107c353c8ba67529"],["/archives/2020/03/page/3/index.html","a5400d7c3c6a8c79b863c294688857eb"],["/archives/2020/04/index.html","88ca84fda2cfb33aa69ff76fee0a0fa6"],["/archives/2020/04/page/2/index.html","2347150f366b02b07de036bfd2227d3f"],["/archives/2020/04/page/3/index.html","5fcf7473ea9e721a47f48668f7c2a596"],["/archives/2020/04/page/4/index.html","18bae6b9b45da448fa84bd2c139358b7"],["/archives/2020/index.html","fb014848775843dff419d61605b6f217"],["/archives/2020/page/2/index.html","2fac644d836858b75b691ab87352a9c5"],["/archives/2020/page/3/index.html","240ec2d0aaa2d793a416f14ba39d3127"],["/archives/2020/page/4/index.html","c459cfad11d94c3c29913bbd91885ff0"],["/archives/2020/page/5/index.html","e42382b7fff1115326c760692a29d342"],["/archives/2020/page/6/index.html","c15c8c41b63798dd50a04caee9d69bf1"],["/archives/2020/page/7/index.html","f2b9384e5eeebb09f44bb6b6fdded47a"],["/archives/2020/page/8/index.html","b8c6d77b188b6941d8cc14a5dcc8a8d5"],["/archives/2021/01/index.html","466961d680a5089c5a5dec0b07829015"],["/archives/2021/03/index.html","e3466ecbab1627eb99a889c34c2fda4f"],["/archives/2021/07/index.html","8f3e1f21e21491421c698dd24e8bb909"],["/archives/2021/index.html","66300336b234567b3f93235e8e40e955"],["/archives/2021/page/2/index.html","cf8048b91d7757ce0f8606e3be551eb4"],["/archives/index.html","e9f35c0c5acc8cd8c5e48d0efa592f96"],["/archives/page/10/index.html","133c7e91284096d680f556ffa33449ed"],["/archives/page/11/index.html","9e36200c5ba0d3ba7b9a61d8eef88741"],["/archives/page/12/index.html","85f685d59a4360eac4b0c705d5bd401d"],["/archives/page/13/index.html","8229dae59535b7db2c630351830ea9f8"],["/archives/page/14/index.html","397b1614642e909a9df77e0f8b40d3a2"],["/archives/page/2/index.html","1fddc44ae950c9f45f4fb7ced9727bda"],["/archives/page/3/index.html","a7b8b1dbb64542a2e554e77f529d410f"],["/archives/page/4/index.html","7e0e8b3689251f051f684885d4342ca2"],["/archives/page/5/index.html","a1db426c6930172bf269c788a1839406"],["/archives/page/6/index.html","8fe16a43b8a3cc60b49cbf727df9b555"],["/archives/page/7/index.html","1b23c222f4349dec79aeaacfe1f860fe"],["/archives/page/8/index.html","6344e7b6fdbb8faa356c3bc8616e7552"],["/archives/page/9/index.html","6833f1da556517a70f62335b8c0cf89e"],["/aria2/index.html","fe8e7ac93ac5250e2a1ce83902e419f4"],["/b176b2fd8637.html","a42d38c3cabcc20713e71df03f38a749"],["/b17819308f04.html","8dc0c9706498639740de96d3bd94e5ae"],["/b17819308f04/1.png","42d384ef717c67317df1707860c0e869"],["/b18884c315bf.html","bcb4180c7ec97e06e7166348ba1524da"],["/b18884c315bf/image-20200415161132979.png","1865906c907eaaca646d74dbc1b36653"],["/b1fbbb5bc700.html","d5403582411bdbb74166a54aabf9dad4"],["/b1fbbb5bc700/线程概念.png","2d7ec41d1fcaed56b4a897abd805c45a"],["/b1fbbb5bc700/进程概念.png","fde4d3aee971b63223592f389f002a2f"],["/b28bf5bb0dae.html","b10d34a7120f5c51860ef6ffde8b1061"],["/b28bf5bb0dae/image-20200403165720339.png","026e9da64624f52f029cf9fbd5b1ddfe"],["/b28bf5bb0dae/image-20200403165813924.png","6bf9658341fdb6386c03398266cafaad"],["/b28bf5bb0dae/image-20200403165857456.png","5df4555d1d7a3aaa796c6fea080961b9"],["/b3421d932a26.html","fb81b67300527696e5401c9009edc23a"],["/b3421d932a26/04-方法返回值的有无.png","fdbd700f2c4937fd27782c7d0173c1f0"],["/b3421d932a26/image-20200403103522213.png","0ba82c7b28aa764d51474cc7eec1cf07"],["/b3946cdad917.html","cbc25192afcc303c8e7e0c2401c7a11c"],["/b44c36a2cabb.html","9f34fa7c74c062cb0ad401d2605d43c3"],["/b44c36a2cabb/02-单if语句的流程图.png","0cbaa6c5ff208679b2770353b5ccfff9"],["/b44c36a2cabb/03-标准if-else语句的流程图.png","26461d4506152634920073b1c4412f31"],["/b44c36a2cabb/04-扩展if-else语句的流程图.png","9483f33d5d0d3cf1c7b12d9189ac2eb7"],["/b53c187d0041.html","eb04ee6d2c2033c3e1fe94ffa91bde67"],["/b6106669f562.html","95ef2a1115fdaebfa1a414a367daa2b3"],["/b6106669f562/1.png","6016fc838ad5be04a184c351034049a3"],["/b6106669f562/2.png","bbb6aa26ab4a90c852f0a33b57930f72"],["/b6106669f562/3.png","1d40120e6520be551e1a81eec28d4758"],["/b6106669f562/4.png","63cff42026b9c5dd37b7d07fc7a6f357"],["/b6106669f562/5.png","7cd380faf7620ebb1679054d296d3b12"],["/b6a4fd82fcfc.html","396da72de0ffe10162e75853b90464c3"],["/be1395c7d0f0.html","0c26f6549cfa87cb099005481b38e86e"],["/be1395c7d0f0/debug0.png","67cc01daa7865a889cdb75da8d8b5823"],["/be1395c7d0f0/debug1.png","15e1ac2ae3dc2f39a872bec2718b150c"],["/be1395c7d0f0/debug11.png","865b0fdc19dcf56b6ccf6b664580c834"],["/be1395c7d0f0/debug12.png","f991588906163359b85813356ccedd27"],["/be1395c7d0f0/debug13.png","cda0b9f981426eeb4ce6ae79789a2296"],["/be1395c7d0f0/debug14.png","5b1b1cdaa88c4f303028ebf8debdf1b3"],["/be1395c7d0f0/debug15.png","5f73da1cdd926f604016d4b9193d0f57"],["/be1395c7d0f0/debug16.png","81e3194b8205dbaaa207ecf105105bb2"],["/be1395c7d0f0/debug2.png","26d42fee18206cf3483182a1fa368939"],["/be1395c7d0f0/debug3.png","ef607efedf9a29400f12b170f529f54d"],["/be1395c7d0f0/debug4.png","596077adeba3ed7ba79548db2b149bfe"],["/be1395c7d0f0/debug5.png","ddcc6de4769ea0ed71d6b743547b4b0f"],["/be1395c7d0f0/debug6.png","baf0c4d46af638668cd3463414dece66"],["/be1395c7d0f0/debug7.png","8ccc3f1773c66fbb8ab0c9ab787d213e"],["/be1395c7d0f0/debug8.png","ed025cfaaeb04bcadf2f484fe57195d4"],["/be1395c7d0f0/debug9.png","c5d9b9796966bdafcfcfa646c0ff6d01"],["/bef1ac8b1d67.html","0649763378ed5e96fa3e612226f47da4"],["/c60ecd4f0833.html","f69c3688b4f87399d1bb63634e49d403"],["/c60ecd4f0833/03-静态的内存图.png","be7769f21afb0eb37a9de57850b999d8"],["/c6c507ac38c4.html","9a61f513b7f2fbf942f90f7f5532df7e"],["/c6e327594862.html","02f97725757125e4b414c9b5487c5523"],["/c748da646b0b.html","c9ede1c814300fd4e4d84d3bf3b6ccc5"],["/ca04d468491e.html","696be7a35ae1ba5442db4221231ae881"],["/categories/Hexo/index.html","78cab1a5d7a269e3509bc0b3909a9073"],["/categories/Html/index.html","34cae66fd30e133c8bf7fd0c4193a531"],["/categories/Java/index.html","b48bc4dff1233d49c1f513f328229c5a"],["/categories/Java/page/2/index.html","218ca8501b7e761746b86e3d9255dd08"],["/categories/Java/page/3/index.html","037f94715f315e9038953622aac6964d"],["/categories/Java/page/4/index.html","78c12311f869fca16c76332b6b5ce5f6"],["/categories/Java/page/5/index.html","654d26e72f7b2f2579fb28f03e0a8a71"],["/categories/Java/page/6/index.html","76f168f2621f01fb226239840029ea13"],["/categories/Java/page/7/index.html","b904fe69d33728448cbcdc5327273eee"],["/categories/Java/page/8/index.html","36a3f781b06cfaa27a5804d5fa28288c"],["/categories/Linux/index.html","d675a1d0075b8d6bee8e2575e740feca"],["/categories/Maven/index.html","ef19cc9886c7707700fbc3a928fa89c7"],["/categories/index.html","1d5864f91fea6edb138045312bd8f314"],["/categories/工具/index.html","c1b60a6902e90ca885e3867e72e646cc"],["/categories/数据库/index.html","504a24a9415a8bab1132702c032541fc"],["/categories/日常/index.html","b508a6116dca812d8ced11f9d6b00a25"],["/categories/生活/index.html","7dcc3a6ec882845daa6255ffc1c18a82"],["/categories/算法/index.html","6f27daf543fd68f8f679cfe04c2935f0"],["/categories/算法/page/2/index.html","f8977b31fd2ae89bbf79b0c77ca3f4b6"],["/categories/语雀/index.html","1a8fcde42765bbced4cabfda64eeba1c"],["/cf7513efc8a3.html","d2db86de51d9fdaaa1f70fe82119bb2f"],["/cfa84fd74626.html","fa250b87e6537a302ee9ad247f9d503f"],["/cfd6d46b475d.html","032bf1ff87518c03fa740d57ecdb285c"],["/css/gitalk.css","8498d3203f623e2ab883851edc90c013"],["/css/main.css","9a5509f3634ca9970868100cac91564c"],["/d149732b2cfe.html","cd15a1e4beb3d7ea1188f2d330857fd5"],["/d2d51dce913f.html","0819090a26888a9d8939ad55f89d350d"],["/d4fe7f53dfd9.html","e8e99ff08d26aeb17d86c3813e9899f7"],["/d4fe7f53dfd9/image-20200415155230943.png","1bd6b66581ea7508da15d14e356808d4"],["/d4fe7f53dfd9/线程流程图.png","750c5abc8080da8deab61f1021790880"],["/d620a8aa8580.html","f4730b109d0bc059976d447477d5202e"],["/d71834e48b4e.html","7b68b72bc23467fe990f796d7be64238"],["/d7751bc6745e.html","c82c0eb204df0b0f86c3b33f6325f8e1"],["/d8aaf5d37cb0.html","0c377fa31884e6a4fc08928e1775175c"],["/d911e46da2b8.html","7f18ad5f0a8a7adef580e8b414bf7ea3"],["/d911e46da2b8/01-只有一个对象的内存图.png","26b64cb79b76a6c16073ca056648a7b2"],["/d911e46da2b8/02-两个对象使用同一个方法的内存图.png","c69e441adf515802e44f3a7a0410e812"],["/d911e46da2b8/03-两个引用指向同一个对象的内存图.png","1b91256b8dfe1c2894ef798600e3d655"],["/d911e46da2b8/04-使用对象类型作为方法的参数.png","ded2949267c638f983a1fec8c8c9ea95"],["/d911e46da2b8/05-使用对象类型作为方法的返回值.png","6cceaddd7a4fc9d4da856ba7238e4ead"],["/d911e46da2b8/image-20200404165047761.png","2316b6b22d1fe5c373f8f4c7c86af0ae"],["/da89cd139d26.html","c51be04b7d450dbc7f69c3af0a110d3f"],["/dc5ef838632f.html","425eaba9b07fe2612b03a4d7c4be6ae5"],["/dc7e2b97a6a2.html","78cd56e501d33c004df291e44011cbf9"],["/de53a68554c4.html","c29e0e67e97d918c8712c2bdab75aed2"],["/de53a68554c4/image-20200403171326693.png","a9ffb639ab2a1c54ca8fd7c1e5655391"],["/de53a68554c4/image-20200403171359402.png","655cfffeffb0242b79b069e3397cc747"],["/de53a68554c4/image-20200403171423549.png","168bf89397306a192310bbd748374070"],["/de53a68554c4/image-20200403171516801.png","7b1bfa4279e88833584699a1eb3f5cfc"],["/de53a68554c4/image-20200403171608393.png","d3109eac00db0ee439b6958855b92ffb"],["/df5068bb57d2.html","a113edbbb0fd076e41d183861bf21963"],["/df52bcc43c75.html","758ef4d170f50625ae5aa0adc663e0db"],["/df52bcc43c75/01-生活中接口的举例.png","170cfd539216918898bc63c1a46ca1cc"],["/df684ffb9540.html","484ff9c0ada7470fa99866c754d654ee"],["/df684ffb9540/image-20200330143419255.png","14e9175802198872eb08f5a575762a0e"],["/df684ffb9540/image-20200330144757408.png","ec15ec3529d3e7350b1199306c8062c9"],["/df684ffb9540/image-20200330145037750.png","c5121c6db3a3fa5ceab975aeb98e0676"],["/df684ffb9540/image-20200330145407426.png","d5502daab31bc6b3b20d8fca103f5d86"],["/e1ce4e19566f.html","7960c953ffa3411f2c120e0901d08c2b"],["/e1ce4e19566f/1.png","5ca8d314e27dc900cae5d0428c3c0fa4"],["/e1ce4e19566f/10.png","9c5cae86e23370c5472864cccaf3d57e"],["/e1ce4e19566f/11.png","f50a9c52e8652e4b52bb512c6b2f01de"],["/e1ce4e19566f/12.png","08e0fb74169dacb6f5177f32a393141c"],["/e1ce4e19566f/13.png","84d5a35c01c730ae8fcf299d771c0146"],["/e1ce4e19566f/14.png","4c0a08a5744e3dd1e456377d0d4af96c"],["/e1ce4e19566f/15.png","0a0e8d381aa90d54d2b1faa27f3c0976"],["/e1ce4e19566f/16.png","d86e5e6e6294be6531e06de4432ecc8a"],["/e1ce4e19566f/17.png","650077ef41677b3d554afef2ab1a462e"],["/e1ce4e19566f/2.png","2daafd7e4946225e01c71ee63e1b9eed"],["/e1ce4e19566f/3.png","151b2116e1607f066163062c849ea9db"],["/e1ce4e19566f/4.png","9be2d0a9213ff97c6f0695bb21ab7735"],["/e1ce4e19566f/5.png","df0031e66e15a961d221fada7f859eae"],["/e1ce4e19566f/6.png","3279d641a06b122f591eb6c858ccee45"],["/e1ce4e19566f/7.png","d182a0b3854d95f29c779db413f18ad4"],["/e1ce4e19566f/8.png","765d6d2c2b9391ab46a1ceb904db9683"],["/e1ce4e19566f/9.png","56da1aadbde4525009e68b4c3e66ea8e"],["/e43d8e1e85d5.html","7ef469d43bc505c9c79885d46d4b6749"],["/e460c106f773.html","fa2efdc32f5d5457180a619ffb19ca89"],["/e460c106f773/image-20200402150825436.png","a4a160d87a22a6ca4077d71381c9ee1e"],["/e47508c7c8ce.html","7e42b0915098dd8a5017b2e3f34e0a08"],["/e5ad37bd9e65.html","4a470edfbc4fd799aa445a0b9acced35"],["/e6323226da63.html","c5d3f6dac8956ff90adfc1d7074fe791"],["/e6ddddcf68e6.html","7bd793f04ce886d307f7f78df39c6c5e"],["/e72787e674a1.html","0959e496f0bb4aaad1703af3c2003a85"],["/e8d6d5f114d9.html","09bb084de27bac1a0d61e82d8ace41fe"],["/ed6a15da5969.html","c860ff539581e67032423f2ffa325502"],["/ed6a15da5969/01-字符串的常量池.png","31c59cacfe1c71c19bf82e7e9965732f"],["/ed6a15da5969/image-20200405165653102.png","b6bf856be92e3f5d734984734428b937"],["/ed9501b8d471.html","48ecd6f27eb7eb0aba746a1b7cd777ca"],["/ed9a6f7913bc.html","338b5db3352c74fc80da39f99d319cf7"],["/ee5c0e48c3d1.html","e521467119fbc19c12358872d70cb086"],["/eea72e773574.html","fff9baa1498f5d1bd06eb180c50d39f5"],["/f144d956d9c0.html","89077d6767796593777e1be7f4a717e8"],["/f144d956d9c0/image-20200403154017477.png","4a7c19f55135c2f2feb3c468fb5b38aa"],["/f144d956d9c0/image-20200403154049421.png","7941904bdce5fa61c95daec464dedb08"],["/f144d956d9c0/image-20200403154231003.png","e6c507adc67d9f2b7b2ffb80aff34428"],["/f144d956d9c0/image-20200403154423758.png","7e67cedc19797f41d50cb092f1cfccde"],["/f144d956d9c0/image-20200403154528596.png","aab072fd7bd28cbd286b08ffd9a94d65"],["/f144d956d9c0/image-20200403154642694.png","8606ca85a92287181a0067e80cc5aaa9"],["/f144d956d9c0/image-20200403154754885.png","b4ffd79c37e2b200beafbafadd46cc4b"],["/f144d956d9c0/image-20200403154918626.png","bc71862a94afc0ced7e1c5a876e90de7"],["/f144d956d9c0/image-20200403155024305.png","0051db760837a5fde99746b5f715e240"],["/f144d956d9c0/image-20200403155511139.png","5dc3af98ce932c53190bd64d79124839"],["/f144d956d9c0/image-20200403155616418.png","9c725cbbf1b3fc1fc204dfa9911a3cb3"],["/f144d956d9c0/image-20200403155721067.png","a235af280908dffaf54a246c5e614375"],["/f144d956d9c0/image-20200403160005254.png","d5048285b97fa69a449ca8545a1cc647"],["/f144d956d9c0/image-20200403160112674.png","8ebe62ea4f24b687a2ca40f9811fd4a6"],["/f144d956d9c0/image-20200403160327152.png","8335a0e987f2152179fa46e0fcdd833f"],["/f144d956d9c0/image-20200403160409883.png","edf6c918637bf6c20332501964b404c5"],["/f144d956d9c0/image-20200403160543542.png","02dcd244098ef54cbf83470889df94c3"],["/f144d956d9c0/image-20200403160734500.png","84246f78bee169ca76cd2988f5d79608"],["/f144d956d9c0/image-20200403160847663.png","3f21af1e7aebfa42d12dbd71b677c04d"],["/f144d956d9c0/image-20200403160922375.png","d6223e664c75b0bcd6a1a5a49db3d52d"],["/f144d956d9c0/image-20200403165402354.png","da7d7c18cf5a8bceb06fc2453b3217d0"],["/f563a9569919.html","1467991714c2ae4c1b7268ee64f393ae"],["/f5ec6e6d230c.html","c13f8bb245a85edfdd62ecf146d47062"],["/f6db78db1f90.html","340a5f5df3a8ad5a44ef853c15f5b4a7"],["/f70d50f7bf77.html","9468f1e6e4157ba27b8ebf88377e52d7"],["/fb3dac0e46f1.html","a644b72917df4ebba0ecff29ac9119ba"],["/fcf19d075d62.html","2c7e35f72ddb9f50eb4d82044b720356"],["/fcf19d075d62/单链表结构.png","77da287c03306c0af8bccea8fc75d98e"],["/fcf19d075d62/单链表结构特点.png","b77bae38ecd04f538d97bfef0933204b"],["/fcf19d075d62/堆栈.png","cc0c5baa240e657259487e4ba72ba36f"],["/fcf19d075d62/增加结点.png","c0b5d5d3dbc7dfe4fad9b5162b0e8a85"],["/fcf19d075d62/数据结构比喻.png","a5623a80743f52d623548e8a9a049159"],["/fcf19d075d62/数组删除.png","e71b3f0a3c7d5595ee5a644314926615"],["/fcf19d075d62/数组查询快.png","0ed31d09c19a740a45f1d607fad11bf9"],["/fcf19d075d62/数组添加.png","fef814236b4c08b9b240198505fef5d7"],["/fe248847c921.html","4a571b80e9af3c9d1a8f3eb81c7fbe13"],["/fee0daf7ca52.html","d13486641d0bea22fda93bab2604cee4"],["/img/avatar.jpg","fa60f84cd72c22fa341f7c2ccf8cfbcf"],["/img/avatar.png","b199d5fc93eb5da97fe5934c3e0e1c62"],["/img/default.jpg","a564b03f4409d080701a816ea4f32b81"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default_about.jpg","99f1f2b62e8585fd5dbf742884ab354f"],["/img/default_archive.jpg","4dc33b40a700dd1d2cd01fc443278f5d"],["/img/default_category.jpg","b315fbf6a0937d27c36380ea4c59a42d"],["/img/default_post.jpg","256c13731ae0ab5d082f33d8a9a5552e"],["/img/default_post_index.jpg","b858cbbc619b777672927280920819fe"],["/img/default_tag.jpg","2b113de5269bf811a005293e6d3ee6cd"],["/img/favicon.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-128x128.png","f45d502c892ad54f9fddc00dd8a04a63"],["/img/icons/icon-144x144.png","c9d419ae3cad258fe568a01851f41c62"],["/img/icons/icon-152x152.png","582d561035fdc3fa8b40b1928c11e566"],["/img/icons/icon-192x192.png","47e76b4e7732c7a00ff4a45d4626c5eb"],["/img/icons/icon-384x384.png","536ad9bc8478762c40e6bd9eb2495423"],["/img/icons/icon-512x512.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-72x72.png","0f6e2d426fe26a088537c7704bdb6c49"],["/img/icons/icon-96x96.png","8a52f59125300b22369cf86d2198573a"],["/img/loading.gif","2136c8686469a7992ffad348dd7bacd7"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","49fd818a0a02db8259d81258aa81dbe5"],["/js/boot.js","e2e7defad6d45a0409b0143389c87de0"],["/js/color-schema.js","3b82e09aa5708c9b5bd793304aa99a86"],["/js/duration.js","93216890ef56c36e62d2e5314e36a368"],["/js/events.js","33e028d78bd6a0739c153c52ae09fc4b"],["/js/img-lazyload.js","906050e291c80575119e9a45011fed62"],["/js/leancloud.js","f73d1d762afc4dc49a80f02f3b5f2261"],["/js/local-search.js","fbd0afaf0f77792287ecfc7664739c80"],["/js/plugins.js","0c27945e81144140b91cd815d11e05c4"],["/js/utils.js","f0d81bb1f391f84140fd327652b519f1"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","e61cbd4a73e0cfaf368f07a2b96e9aa8"],["/page/10/index.html","2fa0bccf374be8b43d20d08810d5cc4b"],["/page/11/index.html","c2df208bc10ec385707a163dfdd74fd5"],["/page/12/index.html","ae939fb49eff58b8ef8fbd9751d74404"],["/page/13/index.html","011560bdd3cb79809fba93f0f9ec1010"],["/page/14/index.html","f27293eeb5199c9714d485f6a4ae3a59"],["/page/2/index.html","e8ffab1a8ff43d435f502882329de2bd"],["/page/3/index.html","55a5c08a09dd59f628d77e8d235ab416"],["/page/4/index.html","ff8414f03bf09361aa3a9a02fc4f00c0"],["/page/5/index.html","9e7031f3c1a12dc1e6d8b8f92d01b77c"],["/page/6/index.html","16a60cd4e875b4cadbac75abf6f03631"],["/page/7/index.html","d991b287fd8b5251be40feae9e9af185"],["/page/8/index.html","72b4200e09f3b6124767551ea4b3f7ae"],["/page/9/index.html","5bdac3c08a4419a0f8ae473d5df9574f"],["/sw-register.js","3fabfcae8781f39540b5f213d985bc86"],["/tags/Ajax/index.html","d67a1795c4ade56b9117584f6a2bf06c"],["/tags/Hexo/index.html","d2fa185da4286b682ababbc8f1c02660"],["/tags/Html/index.html","1cb8cb1f4a26f9eb31550f8aac623af5"],["/tags/IntelliJ-IDEA/index.html","9e8e4a119f957bf37464e49012b37925"],["/tags/JMeter/index.html","4d9562e8ad2486e752eb03533db76867"],["/tags/JQuery/index.html","a0f7d1931cdf111df4dbc51f12d9aa00"],["/tags/Java/index.html","234ead88a5ebd95026e50b606120c3f7"],["/tags/Java/page/10/index.html","1341857f3f1d28abe368d57eee721f17"],["/tags/Java/page/2/index.html","52650eea7dd49e64bfc47a5eed7d6fc5"],["/tags/Java/page/3/index.html","9f0efbead88496611cc86c6df68575ae"],["/tags/Java/page/4/index.html","82820c506ce33634c0fe3374d0e52e04"],["/tags/Java/page/5/index.html","5d235f8d3c8e50e261a1426148212c38"],["/tags/Java/page/6/index.html","bb95817ed06f5dc89dd76d372c4cdb3e"],["/tags/Java/page/7/index.html","97f84ca53c93a872b67afacb84615f44"],["/tags/Java/page/8/index.html","2850b7e49e081fddc81123471a5acd11"],["/tags/Java/page/9/index.html","e1ecb283055dc79a7f0afb02d743f217"],["/tags/Linux/index.html","a235d10e5942ac9fd8b84bbd8026de5a"],["/tags/Log4j/index.html","b3e709ba0a3ca647cf0841b45b4ca360"],["/tags/Maven/index.html","4f45e39c325e4e469017cc9c296dbcec"],["/tags/MySQL/index.html","91db782b409fc538e52b4748dcc25ca1"],["/tags/Node/index.html","426846384412e6863af9de99f2d548bd"],["/tags/Redis/index.html","c86dffa0d4ca1a7670a41a7210e0ed5d"],["/tags/Rest/index.html","782d2454a818a1109acc06c911b97900"],["/tags/SQL-Server/index.html","80308403f8f81df0a94175bdf76fdce4"],["/tags/SSM/index.html","3347c7639a489ce35a1ab16fcace6c5c"],["/tags/Socket/index.html","c018b6671529e054f7f9d473ec50d367"],["/tags/Solr/index.html","1fa54bb47a89d3d1cd636a935ae2ed7b"],["/tags/SpringBoot/index.html","fa98575e23cdc0f895b421fd61757be4"],["/tags/Travis/index.html","a384ba8efbad197e6e69d668b499bbc5"],["/tags/Ubuntu/index.html","a1c1dca68abed1705c61fe149ae30da3"],["/tags/WebService/index.html","3462e108db2561f34c66031a00e81ca7"],["/tags/index.html","60dd2c6fde2ce26d7b29f0812850ac1c"],["/tags/学车/index.html","30e88236364acbca448c23320eb16c71"],["/tags/工具/index.html","9848e96fa228f6bf60553b962618f3c3"],["/tags/数据库/index.html","da173d07b272ed9d1261109730ea71d6"],["/tags/日常/index.html","cc6240902c852dcff0340e91a5322420"],["/tags/流书/index.html","9aac0766323ddb581f03069c079b6fa7"],["/tags/生活/index.html","d590214809ed1338a94a9ae73ed2328c"],["/tags/算法/index.html","27eb6144ce3674a049fd0946f7540afc"],["/tags/算法/page/2/index.html","f4ce2401368388dbf468777bd5cbe55f"],["/tags/蓝桥杯/index.html","f632e7834ab251b245146ea3a68fdc22"],["/tags/蓝桥杯/page/2/index.html","21d62d8df258c1097a4a658911dee7aa"],["/tags/语雀/index.html","d26fb0ef31974e2d7ac0d675a93394dc"],["/tags/音乐/index.html","040c8a01f17d6836ab41fa176d083435"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
