/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01c00fab19d5.html","81dc934002ef49143eb65acfa2fee2ad"],["/01c00fab19d5/异常体系.png","c5c7085c9534763d0287a8596ac12170"],["/01c00fab19d5/异常的分类.png","184234974b5fb6b40c7a910bc62453c2"],["/0380823323ea.html","4c9ed5f88f95a3422d8bf7e589eb4df5"],["/0380823323ea/01-交通方式.png","20baf2be33220faf5424e2b38abb9f2a"],["/0380823323ea/02-Lambda.png","b81b8780f6c9f898cecf5c61fb269cba"],["/0380823323ea/03-Overview.png","2e91cc2bc78cc176a9bf1ea4c2c4e4b8"],["/083b7d32f844.html","dcc3503d7b8e639daa9ae8e093a45e7f"],["/0cc7ddcf0032.html","49a788d4044bd7b6a3c1165e789828ac"],["/0cfa7e337349.html","fe5abb1a925c7d0f825ab20c8fadfd0f"],["/0d714c49bb0b.html","da1e3271d60ad00c619ceb903c70d0f0"],["/0d714c49bb0b/02-IDEA的项目结构.png","8b74aa7a0c8b45738da6f60a7c8c82d5"],["/0d714c49bb0b/image-20200402170317121.png","0a21436324dfe37cc9bc25a285e5c269"],["/0d714c49bb0b/image-20200402170351577.png","4e8fae75c5835948f20cbfa30671b793"],["/0d714c49bb0b/image-20200402170525471.png","c8ba4559770e9b05fd3d809c2af4fd65"],["/0d714c49bb0b/image-20200402170544275.png","70997ada2c42f2638ce3e6c8f7e26b1a"],["/0d714c49bb0b/image-20200402170608817.png","53799839d571fc055b5e8168309be822"],["/0d714c49bb0b/image-20200402170635952.png","bf0d4fdb3e08e48770316f0a133c724f"],["/0d714c49bb0b/image-20200402170652435.png","c4d32db71014c53c966b5c25c309303b"],["/0d714c49bb0b/image-20200402170744130.png","0d821ae94e290e1c218c3716b9309c41"],["/0d714c49bb0b/image-20200402170816522.png","183b99538645e2be0a047d6da6025581"],["/0d714c49bb0b/image-20200402170854718.png","5138b6ebb7cddb68c1fb56f1a1911f17"],["/0d714c49bb0b/image-20200402170941742.png","f511755960329f7ed68cb3a2825a5eef"],["/0d714c49bb0b/image-20200402171012124.png","f357f908cb6253f6307dbdf4ad276f57"],["/0d714c49bb0b/image-20200402171036407.png","fb15a59a9f3d09eb926d8a7618b8c5a5"],["/0d714c49bb0b/image-20200402171237437.png","ad9f808953c6a83dc8e86107619a0664"],["/0d714c49bb0b/image-20200402171303668.png","dd28f9f0e51164047af482d3cdb9edf2"],["/0d714c49bb0b/image-20200402171333076.png","8ac6f9c313f3adaaccea32eb0d9781ea"],["/0d714c49bb0b/image-20200402171834576.png","1b7f44d86f47e2915cadc0badb8b7cbd"],["/0d714c49bb0b/image-20200402171910062.png","57f34418de5b5dfa7a9fd8a35df2ff8b"],["/0d714c49bb0b/image-20200402172005458.png","76b8b59e48e4c382a172388b3da2aa59"],["/0d714c49bb0b/image-20200402172028412.png","6e7c3258038e3f012b3ee3a7474451aa"],["/0d714c49bb0b/image-20200402172155375.png","bbd2df3b1cf70da76c8d05d7c7bfd5fe"],["/0d714c49bb0b/image-20200402172320302.png","651fa7bc2295b9a59d3c44be5949a3fa"],["/0d714c49bb0b/image-20200402172334670.png","643b1cb409001c43decb3692de5443da"],["/0d714c49bb0b/image-20200402172453930.png","e4e52b70a16686728e85480de73ced45"],["/0d714c49bb0b/image-20200402173148296.png","e275325ca847573540094b9d78f77c77"],["/0d714c49bb0b/image-20200402173230646.png","6d28fa4aadf18d1fe9044d3e02ab2ca5"],["/0d714c49bb0b/image-20200402173336235.png","cd514e83295b5d8baf07556fdff8ab2c"],["/0d714c49bb0b/image-20200402173432324.png","b4e036c55b1382062cd2391638d0185f"],["/0d714c49bb0b/image-20200402173507196.png","b10bf67d55bb6870126c496e9f720676"],["/0d714c49bb0b/image-20200402173526958.png","ceb66ece6373d5f6b4c1992a84b8fa79"],["/102164869c4c.html","c2680b7cbc0be2e3572ec1f6e1add154"],["/144f3d359cd3.html","055bcbf9ec6e8a531b6b81ee7586e2bb"],["/14f35b3a6d64.html","6839b1350690959c5929f47ef8a768f9"],["/14f35b3a6d64/无限等待.png","843fb162c73be740ea19fae4db531f2f"],["/14f35b3a6d64/线程状态图.png","1435bf41de7de963d30a0d609664fbb4"],["/14f35b3a6d64/计时等待.png","d898f2321427d0d5adb21dbfb57c6e27"],["/14f35b3a6d64/锁阻塞.png","76d0dc098a92acff05cd620cfcf73989"],["/1698a47fcf6a.html","4c6712079960829b7fbbfc4e37b361b0"],["/17f5eb8bcc0d.html","8b649151f9a0d3cd8ff19d9e97455116"],["/18ac9d961f0b.html","f54c3c1d690f86979000b9f43bffa148"],["/18e2d5e4b6f3.html","7b256f480d6c0afad912dbe8ea3fca91"],["/1c1b04db2c01.html","27e07a7a6b18bd7bd34dbb736c282934"],["/1e8a3115b061.html","c407573fa772d22257e5cfabab706c7f"],["/201854ea4b36.html","f8fcb6e9cc4cb045815606ba53d86fa6"],["/201854ea4b36/05-抽象的概念.png","3fa8fd49f634a83c1b8709583d67f917"],["/245047f7f750.html","de3654deb5e3b80f7a6a639c53ca4e9e"],["/2605a2a5060e.html","75e871d708e9d16f71cea82d63987b76"],["/2871874be300.html","d00c0ed2452a53147dc4c337d5e9f084"],["/2871874be300/05-for循环的流程图.png","ee8e09264573212bf7faeadb8ae95c73"],["/2871874be300/06-while循环的流程图.png","5102af69c968c54f7fb68dbade9fd2c7"],["/2871874be300/image-20200402161047519.png","0f3a4c51b1bacba096bfa91c13e62e1f"],["/28d125e258a1.html","c6cc814663feee5442a08e4a47e93270"],["/28d125e258a1/01-继承的基本概念.png","3c166b96e322ca31dc16b18e96b65f7c"],["/28d125e258a1/03-super与this的内存图.png","3bfdb3236e01f1a1cfa3dbc672352495"],["/28d125e258a1/image-20200406161705307.png","9130706cf62f91ae526b7797dc533900"],["/2cc594bf8909.html","facbca5bea79e21fa6070e83669658a9"],["/2ce74a09c8f3.html","e149750fc6d60cb6ba45fe4b245e2245"],["/2ce74a09c8f3/image-20200412180201258.png","3fc7618ad3d87cd4651e94fc833b6d78"],["/2f190b34c2b3.html","773f04d55f737f2e8f9db31f24716f1d"],["/33f8eb0da2f0.html","b5bd73e97eb1acf293e9015e3bb9e972"],["/3494683249bc.html","5dafb3627dc1e5c1c428e46d89e9b4b0"],["/378fe56bd246.html","df9844afa8870e39bcb8a2f0e6c6514a"],["/378fe56bd246/1.png","e8ab3fad15c582d8346389cb1e0622db"],["/378fe56bd246/2.png","93a6489e32cd0606bbd2d7aefcac2af5"],["/378fe56bd246/3.png","756b09e3719426443eb8ccc8f3cd6826"],["/378fe56bd246/4.png","676b1d2d704c4ce1985bdd593a670a16"],["/3a4ba11b7a5e.html","fd6f8235811c353038a11f85f6467d8a"],["/3a4ba11b7a5e/image-20200401173052296.png","879e243b37d4b10b87685c737974398f"],["/3a4ba11b7a5e/image-20200401173119744.png","039d6220d51db77bef500ea2d58054ab"],["/3dc224c52b20.html","08f8439106a6f5401c2b4160ffc530e9"],["/3dc224c52b20/1.jpg","d3740d1dca2d445a65b7a7ea2a0db495"],["/3e4b52661133.html","9016e4eb8850d4ce4b30e51ab733aa0d"],["/3f94559a860d.html","e6366803e18eeac6c0f522c4e209dba2"],["/404.html","74b888a59a37e5bd3c3e62c3a246af8a"],["/40901eb5b99a.html","3aa8f9eec9676d95e42b5442ca45686d"],["/4264568384dd.html","5d6d19e3077e767cffbd28ba83046d0b"],["/45cec86ad3c4.html","5ce47367b6f9783707f9c9a2a6841889"],["/45cec86ad3c4/image-20200330111401992.png","1fd2f36c87ea776413fef3fc6dd5351d"],["/45cec86ad3c4/image-20200330112240805.png","4236d980f8843e08b1d3989eec7211f8"],["/45cec86ad3c4/image-20200330114552195.png","84ad09d2c056d27d2fa498c186140519"],["/49d077e64aa6.html","362645c60313ad6625e561612d52c4c2"],["/4b9608333997.html","e807df4e8565d01a785d5d80e3bef181"],["/51c5316ba4dc.html","6c6a5e8953fdbe22b31d3378e85cb990"],["/543613fef7da.html","32f85fdbb8cad040f3da396257c63fb5"],["/546c10072d86.html","29fa200ea551aa133bc428a5ba1426a9"],["/57bfd13fa382.html","6ae2570ae3b5cc8bc8d53bce0d5c590c"],["/59d451fe7cbc.html","93f8f0632ba09e6d2b80f8e711a98b7c"],["/5a25eafad98e.html","36368ffa86e04393985a066f99039ba9"],["/5d0a7171e2be.html","e0a16d936e43990c085aa61dec33afb4"],["/5d0a7171e2be/1.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/5d0a7171e2be/2.png","66ba7100d5a6b8a35fcd8984ae45f464"],["/5d0a7171e2be/3.png","7098e295719eede6400d6f6ab773bd19"],["/5e4e6842d754.html","597beb36f67b15d2094344d694d2fa08"],["/6321ac3497ca.html","85601a198a93e1238b76df2a70df23f0"],["/641601337f0b.html","f7d8534aa6ac3da79e994cf989fa206b"],["/65e4aa78c9e6.html","be764e8f429f1153452c02674ac1b65b"],["/672524809abe.html","c61eef62310d36f1672898e65319cca2"],["/672524809abe/03-多态的概述.png","a888e0f98189750a9521479068a9feef"],["/672524809abe/04-使用多态的好处.png","57a3e777f90e689efef1f8ef5c8ea839"],["/672524809abe/05-对象的上下转型.png","2b5852061fa0be376309ee5e6da0905a"],["/675ab52ded3d.html","f2ac3b65a7463d10ad332182669f9cb9"],["/69bb6d2d9142.html","98fad993dd5fca4d5db6faf022d6f21e"],["/6b7289fc875f.html","69ad0b5bd3add0c0ff42938926c781e4"],["/6fe7860f08d4.html","1b8656405a1f498674431b40bd87d356"],["/6fe7860f08d4/双向链表.png","60da2f48ec4429c92b0847c369dd76ee"],["/70ca5927dc18.html","b105c7069104b91260f3f2af32c26e93"],["/7371f7e698bd.html","68da99b5deb57c3760c044e564fc10b8"],["/7371f7e698bd/哈希流程图.png","cbbf94f55d26e1b07ece7eb27839762e"],["/7371f7e698bd/哈希表.png","8c767e1d1903d8c0af0b98c18a7b8482"],["/7434890e6022.html","5560be70e9fb98b968b6436a29e3baf7"],["/79edd52b58c3.html","7691b933887cbe8400ed3b318c313a26"],["/7b851fc8c287.html","65eb51d43aa4d6fda602c7f604f002f3"],["/7b851fc8c287/image-20200403172358617.png","9ba7fac26f9759e59bd9928418efa5f0"],["/7b851fc8c287/image-20200403172438473.png","dc069d4ac98ee9b62af00ec01ba19407"],["/7b851fc8c287/image-20200403173538440.png","a8b50a4addcb8553ef417ccd82cc8b8f"],["/7b851fc8c287/image-20200403173638585.png","02535b9f9e06b956817a485b38acf727"],["/7b851fc8c287/image-20200403173732626.png","c226d5308e78f5645cbdf36088392c1e"],["/7b851fc8c287/image-20200403174051861.png","22587d383cee01abeb8c7affbbc64bf9"],["/7b851fc8c287/image-20200403174218198.png","47618ae709bbc13f10c7965f5e8fba3c"],["/7c039cfe73f4.html","db04d2125a80dded805125584687dfba"],["/7c8516486039.html","baa64f5699f405c7ac1329bcb6cc7a0b"],["/843e58d8929c.html","6d05466969b99a0a9c620b97b3d9d6c4"],["/843e58d8929c/01-Java中的内存划分.png","f0d1cb25805220dfd863fe37ad77f2c6"],["/843e58d8929c/02-只有一个数组的内存图.png","69f6f1d6c511b78a7ddf1f35b0c10dc1"],["/843e58d8929c/03-有两个独立数组的内存图.png","d42d92bfd731ea4dc5dca3c9a25f783a"],["/843e58d8929c/04-两个引用指向同一个数组的内存图.png","6c01cb592cf2f8525cd0bc13b12a356d"],["/843e58d8929c/05-数组的长度运行期间不可改变.png","48c5da1bfabeb6205c1ac7463abfb285"],["/843e58d8929c/07-数组元素反转的思路.png","c82e0a86fc164a77fca5f122c751c132"],["/843e58d8929c/image-20200404115449968.png","e8b41810ac037c021e5fdffeb4b2f71e"],["/843e58d8929c/image-20200404115849231.png","664652907cb17076701342e366e6b736"],["/85bb8468cbb1.html","2b5a5f71ae18ce7454b73930e7540bfa"],["/8aea8b702ec9.html","c9cd56c551aec87bd6f9fc932d111998"],["/8aea8b702ec9/day08_01_递归累和.jpg","00a399ad84b80d9656a81c25016f0652"],["/8f0902f5fa56.html","6447bff667eafb0d770ac8c4d777206a"],["/8f0902f5fa56/01-顺序结构的流程图.png","a9911e0efeae9f4680bdd631b4c3f9c0"],["/918110f64071.html","7acf282e05786a4d9a1a2459f9b7cdc7"],["/9865be07681a.html","56cf47f6e3d06e73fac7543be2da6133"],["/a21c0106b4dc.html","f81192a950a1b6adfa04eb0c54fe9df3"],["/a295f8b882ca.html","b2bc81266785b15c3cb53e7f713d8ad4"],["/a2cff47e45b4.html","e75c03fa16ac73bcb2e41d609b0a979a"],["/a2cff47e45b4/1.png","18b58f9ca1c01c119fddda4c2b829c8a"],["/a2cff47e45b4/2.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/a39447736c9e.html","b9d1a28437a3865502398ae3b1aeff91"],["/a66da301ed65.html","f5a88791e0506c0d2f3aac16d38a4412"],["/a8e99b664015.html","d00e8a5baf8b5af5b135a2b5938f7acb"],["/aaafb3b4b102.html","87177b171aae31aa1c0f07bd390cbeea"],["/aaafb3b4b102/游泳池.jpg","51efcbec541a872015228e88bbc5e1f5"],["/ab4774b19476.html","e422c1847489c8f1d5cfe90b71933cd3"],["/about/index.html","d4fb9e5f095a0d2b577b60fda81206fe"],["/ac05f6c6cbcf.html","e209fcafa2bec25e97c1fd25e1df101d"],["/ac93dc79a32b.html","b9f25aa06d7f23a19d791c1e0d322039"],["/aee8b86da60e.html","9cb3b0c874c77d5174e12bde93ec1504"],["/af0c06af727c.html","18bf34473bc5d402d7ee7ca1a26e56e4"],["/af9f2ecdb071.html","4dabc5b057a2ebc9c6f7151d37a394aa"],["/af9f2ecdb071/006tNbRwly1gbmnj3i2fyj315m0rc0z8.jpg","34e75e808c6a21129f77f90bb2ca9d97"],["/af9f2ecdb071/20170618230136472.png","db43b62aef576e79499f1b7dbc15c2d8"],["/af9f2ecdb071/20170618230149347.png","caeb24d26d0dd6412e22eb92ccfd98d6"],["/af9f2ecdb071/20170618230200082.png","df5f4b8492fb58ca5947363fb8a77142"],["/af9f2ecdb071/image-20200330135909560.png","b46f9fb593ef1c4599510c691a3bc4ef"],["/af9f2ecdb071/image-20200330140526466.png","bce32a0c5c4ad90c635e08224d3f28cf"],["/af9f2ecdb071/image-20200330140937480.png","7e106d34b8063a1dd3708242e363555e"],["/af9f2ecdb071/image-20200330141046227.png","e55ca8faeac102dfb5e6bfe49b9dcf6d"],["/af9f2ecdb071/image-20200330142153915.png","08c041252166a6c8eb135cc93e734457"],["/archives/2018/04/index.html","37deebad71be408e41acbe408817bfb8"],["/archives/2018/04/page/2/index.html","c69d7a7c683e7ffdadce40aa36e06953"],["/archives/2018/index.html","734fd1324ba0a45f0347398210cb253e"],["/archives/2018/page/2/index.html","fe6cb49b669bcc9dec754dace0ebbf36"],["/archives/2019/01/index.html","41590564d827c7b66b8a14fadb457e14"],["/archives/2019/01/page/2/index.html","736028c600ad4089e6cea0b96d9cc3fb"],["/archives/2019/02/index.html","6b11faafdf8708ee10da90aaf8343fa4"],["/archives/2019/03/index.html","b428495e241da6944efd92328b5658f2"],["/archives/2019/04/index.html","439a74907909637b2d627fa8dad3c5bc"],["/archives/2019/04/page/2/index.html","f630bbcd0c8b29c9f9aacf3d803a1c1f"],["/archives/2019/05/index.html","d9992087f61c22b750edcf5309790205"],["/archives/2019/11/index.html","4dfb258ab13d0f5347d45a097f7f1e2f"],["/archives/2019/index.html","0e820ab585491654ed2b50fd4269b3c2"],["/archives/2019/page/2/index.html","1d54c2c234c5c080ce32bcebf5d8e07e"],["/archives/2019/page/3/index.html","410de2242b248d9e5336e7236c7b1dc0"],["/archives/2019/page/4/index.html","be6c6606c2512c860581f1ad6407f64f"],["/archives/2019/page/5/index.html","fa3dff855d0dd8b94be1b1c22df01053"],["/archives/2020/01/index.html","e5ab43534579dfbec2aa6b655d3d5a4c"],["/archives/2020/03/index.html","dd6384522a5611f03494554a8340b45b"],["/archives/2020/03/page/2/index.html","b1cb01f60bf5c2cc0a8bd778c50670b8"],["/archives/2020/03/page/3/index.html","23abd5a4d9981704bc5ba30b33856950"],["/archives/2020/04/index.html","d620c04f9abf89c23d158f3c58c1c4a1"],["/archives/2020/04/page/2/index.html","9b0a75278c85631463edda8e7b0de043"],["/archives/2020/04/page/3/index.html","93c193e9f732ccf9145e32db367fd331"],["/archives/2020/04/page/4/index.html","85ed2f7232496f8c9afe1547ab2f8c23"],["/archives/2020/index.html","531f0f527cec740511acea2ead8072f0"],["/archives/2020/page/2/index.html","524e9d243a455340cbed0123a93d8fed"],["/archives/2020/page/3/index.html","6a0c2f0045292e2dee3f478cf5f23f53"],["/archives/2020/page/4/index.html","56ec73d45b2fd336656be491f733b367"],["/archives/2020/page/5/index.html","be529aa368fa917c2cbeb96d9ebbd685"],["/archives/2020/page/6/index.html","edc08ad845ee94fb0f65d24931d49a5e"],["/archives/2020/page/7/index.html","cc2437cecfb71119dde62261101c1d65"],["/archives/2020/page/8/index.html","fdabed8d32e922992fb8426188736b43"],["/archives/2021/01/index.html","7b2a6e91f55839997f0cab81cbc336a1"],["/archives/2021/03/index.html","999dd9c45e5526388745afa81e2fe244"],["/archives/2021/07/index.html","2cba66420e82f8c7fbf5a8cba1e8a682"],["/archives/2021/index.html","7f2e09fdc17c4c488850af04020ff622"],["/archives/index.html","004ed2f475d718502b5799ece961e14b"],["/archives/page/10/index.html","a70ba8a6f9bd20dcf4839ecdd2084bfa"],["/archives/page/11/index.html","1d101904d556e4bff116d06450d2245a"],["/archives/page/12/index.html","7e058654ce090e24928621455e303a61"],["/archives/page/13/index.html","4ba1d1661d400cac5e920232c958c5a1"],["/archives/page/14/index.html","44bce1ce79339c988b6e64d131064cb0"],["/archives/page/2/index.html","b68a195a5bd70d5b956e4578dc07f1cf"],["/archives/page/3/index.html","b3cb27232ccaf649fe0767dafa6d18aa"],["/archives/page/4/index.html","02424e34915808639cc4d8938e9315b3"],["/archives/page/5/index.html","4fd646c89717518fe08ec6c3847e85f1"],["/archives/page/6/index.html","a1c788b4a134d6dbdbc32b94b4a8be8d"],["/archives/page/7/index.html","219ab75a03ff625082c2ffaba8aa75a6"],["/archives/page/8/index.html","597b18a69cde59b8de8457b5a387ab16"],["/archives/page/9/index.html","6f7dbf6365a2188c9c351ad305906654"],["/aria2/index.html","263c5cb1dc065ab64e80ee7de37492da"],["/b176b2fd8637.html","977c77ec2a51d3c3b65f7288f080e9b9"],["/b17819308f04.html","579cf5b1a1487db758be868526455244"],["/b17819308f04/1.png","42d384ef717c67317df1707860c0e869"],["/b18884c315bf.html","407ada8bf11d4907e58e5f5f3cebf59d"],["/b18884c315bf/image-20200415161132979.png","1865906c907eaaca646d74dbc1b36653"],["/b1fbbb5bc700.html","a026c33884bd0f39394298becd9c804b"],["/b1fbbb5bc700/线程概念.png","2d7ec41d1fcaed56b4a897abd805c45a"],["/b1fbbb5bc700/进程概念.png","fde4d3aee971b63223592f389f002a2f"],["/b28bf5bb0dae.html","3f5200e64a4684a1c9cc234ce3acaf67"],["/b28bf5bb0dae/image-20200403165720339.png","026e9da64624f52f029cf9fbd5b1ddfe"],["/b28bf5bb0dae/image-20200403165813924.png","6bf9658341fdb6386c03398266cafaad"],["/b28bf5bb0dae/image-20200403165857456.png","5df4555d1d7a3aaa796c6fea080961b9"],["/b3421d932a26.html","2d343db488e663b96e9d145a718bc5d4"],["/b3421d932a26/04-方法返回值的有无.png","fdbd700f2c4937fd27782c7d0173c1f0"],["/b3421d932a26/image-20200403103522213.png","0ba82c7b28aa764d51474cc7eec1cf07"],["/b3946cdad917.html","c50321e7497bc29e97dbff4a289c63bb"],["/b44c36a2cabb.html","2d5f9e467b5d66e4f36c6c9b17feab2d"],["/b44c36a2cabb/02-单if语句的流程图.png","0cbaa6c5ff208679b2770353b5ccfff9"],["/b44c36a2cabb/03-标准if-else语句的流程图.png","26461d4506152634920073b1c4412f31"],["/b44c36a2cabb/04-扩展if-else语句的流程图.png","9483f33d5d0d3cf1c7b12d9189ac2eb7"],["/b53c187d0041.html","9fb2c89000d8a77cf7274dbbe2a14346"],["/b6106669f562.html","25528734fff0c36df01d33647083230e"],["/b6106669f562/1.png","6016fc838ad5be04a184c351034049a3"],["/b6106669f562/2.png","bbb6aa26ab4a90c852f0a33b57930f72"],["/b6106669f562/3.png","1d40120e6520be551e1a81eec28d4758"],["/b6106669f562/4.png","63cff42026b9c5dd37b7d07fc7a6f357"],["/b6106669f562/5.png","7cd380faf7620ebb1679054d296d3b12"],["/b6a4fd82fcfc.html","ed683fb79c0a4e36031a2292bf7af2f0"],["/be1395c7d0f0.html","24bdc1d3e7edca54c77617dd307f25d1"],["/be1395c7d0f0/debug0.png","67cc01daa7865a889cdb75da8d8b5823"],["/be1395c7d0f0/debug1.png","15e1ac2ae3dc2f39a872bec2718b150c"],["/be1395c7d0f0/debug11.png","865b0fdc19dcf56b6ccf6b664580c834"],["/be1395c7d0f0/debug12.png","f991588906163359b85813356ccedd27"],["/be1395c7d0f0/debug13.png","cda0b9f981426eeb4ce6ae79789a2296"],["/be1395c7d0f0/debug14.png","5b1b1cdaa88c4f303028ebf8debdf1b3"],["/be1395c7d0f0/debug15.png","5f73da1cdd926f604016d4b9193d0f57"],["/be1395c7d0f0/debug16.png","81e3194b8205dbaaa207ecf105105bb2"],["/be1395c7d0f0/debug2.png","26d42fee18206cf3483182a1fa368939"],["/be1395c7d0f0/debug3.png","ef607efedf9a29400f12b170f529f54d"],["/be1395c7d0f0/debug4.png","596077adeba3ed7ba79548db2b149bfe"],["/be1395c7d0f0/debug5.png","ddcc6de4769ea0ed71d6b743547b4b0f"],["/be1395c7d0f0/debug6.png","baf0c4d46af638668cd3463414dece66"],["/be1395c7d0f0/debug7.png","8ccc3f1773c66fbb8ab0c9ab787d213e"],["/be1395c7d0f0/debug8.png","ed025cfaaeb04bcadf2f484fe57195d4"],["/be1395c7d0f0/debug9.png","c5d9b9796966bdafcfcfa646c0ff6d01"],["/bef1ac8b1d67.html","1ef66f0149363afd0bdce62e3b5357df"],["/c60ecd4f0833.html","651fd6d34f9bdca8eb6968d37b66802a"],["/c60ecd4f0833/03-静态的内存图.png","be7769f21afb0eb37a9de57850b999d8"],["/c6c507ac38c4.html","9aee8deaed6497a2553b1c922f25db28"],["/c6e327594862.html","21dc2ee0f25af6af8c70f72a7300c017"],["/c748da646b0b.html","9eb050fca6ebc478321a936e698a6a4f"],["/ca04d468491e.html","fe2c3c0334ea38c0ee233145d72ae4a0"],["/categories/Hexo/index.html","041adb2326612d21af2dc2d50618f95f"],["/categories/Html/index.html","fe1ded2d3c1c7fa340021e6f3c1244fd"],["/categories/Java/index.html","60235c29c5f7051a8ca0a04553c1e8c7"],["/categories/Java/page/2/index.html","af43569ea88c7410d996d107d278fd11"],["/categories/Java/page/3/index.html","a3203c291a9bd36abc05bbdf81692f79"],["/categories/Java/page/4/index.html","456d23371b3be60f7f97eea34268b520"],["/categories/Java/page/5/index.html","1031e2f6e8aaa5315d92e0747b801b1c"],["/categories/Java/page/6/index.html","8adfd4a6e181067d248905fa39deea3d"],["/categories/Java/page/7/index.html","3f9df9ebd0e5124512200fb532d9f5e0"],["/categories/Java/page/8/index.html","aff2e8ed1583f32b51c3f48f2efeb4e6"],["/categories/Linux/index.html","b6ceeaeeb6513433e668db2e9ddb945f"],["/categories/Maven/index.html","8ab572797d935fb7074b152ef7ffceb1"],["/categories/index.html","dc85578d100e38d93ab361999dac23b7"],["/categories/工具/index.html","6a3052af0163d6ab972d2fdf770c84aa"],["/categories/数据库/index.html","1c31e9ee321a00e3f181bda82723c71c"],["/categories/日常/index.html","0926c285ec8febc710552ffc727a6d5b"],["/categories/生活/index.html","4d339f426e655c9d07702c63aa28f75a"],["/categories/算法/index.html","7a108d575c4078e1efb9680d96629876"],["/categories/算法/page/2/index.html","ff63b4e86cf9698ec205a81fb77a0dce"],["/categories/语雀/index.html","199aac96df30870ccdebfed5b23e258b"],["/cf7513efc8a3.html","2b62b1081a0065577bdc9f6483bb2344"],["/css/gitalk.css","8498d3203f623e2ab883851edc90c013"],["/css/main.css","9a5509f3634ca9970868100cac91564c"],["/d149732b2cfe.html","1bb5860339bee5b357db21d4dc64bfb8"],["/d2d51dce913f.html","b027e2db6ec9961f2ba8562f0e85fbca"],["/d4fe7f53dfd9.html","9a1e113800b8508769d6aba95d9c33f6"],["/d4fe7f53dfd9/image-20200415155230943.png","1bd6b66581ea7508da15d14e356808d4"],["/d4fe7f53dfd9/线程流程图.png","750c5abc8080da8deab61f1021790880"],["/d620a8aa8580.html","8957774bd2d3e3d63d81bea369fc2c29"],["/d71834e48b4e.html","c632463e1824d141c884faa9020b5624"],["/d7751bc6745e.html","d37d763d9919f918a1c4256920d80e7a"],["/d8aaf5d37cb0.html","3c2fc71883851a3109a3c95fcbfbd208"],["/d911e46da2b8.html","63e907f933ecb8fe56a08825dab9fd88"],["/d911e46da2b8/01-只有一个对象的内存图.png","26b64cb79b76a6c16073ca056648a7b2"],["/d911e46da2b8/02-两个对象使用同一个方法的内存图.png","c69e441adf515802e44f3a7a0410e812"],["/d911e46da2b8/03-两个引用指向同一个对象的内存图.png","1b91256b8dfe1c2894ef798600e3d655"],["/d911e46da2b8/04-使用对象类型作为方法的参数.png","ded2949267c638f983a1fec8c8c9ea95"],["/d911e46da2b8/05-使用对象类型作为方法的返回值.png","6cceaddd7a4fc9d4da856ba7238e4ead"],["/d911e46da2b8/image-20200404165047761.png","2316b6b22d1fe5c373f8f4c7c86af0ae"],["/da89cd139d26.html","ee323c2ccad1403f1a1a28f4ae304cf7"],["/dc5ef838632f.html","47cb2f2f8cdda7d53ed654c1aa15064f"],["/dc7e2b97a6a2.html","63c1a272c5273de58b8347485b996800"],["/de53a68554c4.html","f0fb04d29adbd6a0de2bf10f9c3ef60e"],["/de53a68554c4/image-20200403171326693.png","a9ffb639ab2a1c54ca8fd7c1e5655391"],["/de53a68554c4/image-20200403171359402.png","655cfffeffb0242b79b069e3397cc747"],["/de53a68554c4/image-20200403171423549.png","168bf89397306a192310bbd748374070"],["/de53a68554c4/image-20200403171516801.png","7b1bfa4279e88833584699a1eb3f5cfc"],["/de53a68554c4/image-20200403171608393.png","d3109eac00db0ee439b6958855b92ffb"],["/df5068bb57d2.html","51371d313a5eb6d53c318516fa451123"],["/df52bcc43c75.html","959ee5cdf299aeea253501e3bc816a75"],["/df52bcc43c75/01-生活中接口的举例.png","170cfd539216918898bc63c1a46ca1cc"],["/df684ffb9540.html","04ecc5136231bc37fcaeee3cd6143500"],["/df684ffb9540/image-20200330143419255.png","14e9175802198872eb08f5a575762a0e"],["/df684ffb9540/image-20200330144757408.png","ec15ec3529d3e7350b1199306c8062c9"],["/df684ffb9540/image-20200330145037750.png","c5121c6db3a3fa5ceab975aeb98e0676"],["/df684ffb9540/image-20200330145407426.png","d5502daab31bc6b3b20d8fca103f5d86"],["/e1ce4e19566f.html","7d20f228f1b469ec679f7e15ebc8b55e"],["/e1ce4e19566f/1.png","5ca8d314e27dc900cae5d0428c3c0fa4"],["/e1ce4e19566f/10.png","9c5cae86e23370c5472864cccaf3d57e"],["/e1ce4e19566f/11.png","f50a9c52e8652e4b52bb512c6b2f01de"],["/e1ce4e19566f/12.png","08e0fb74169dacb6f5177f32a393141c"],["/e1ce4e19566f/13.png","84d5a35c01c730ae8fcf299d771c0146"],["/e1ce4e19566f/14.png","4c0a08a5744e3dd1e456377d0d4af96c"],["/e1ce4e19566f/15.png","0a0e8d381aa90d54d2b1faa27f3c0976"],["/e1ce4e19566f/16.png","d86e5e6e6294be6531e06de4432ecc8a"],["/e1ce4e19566f/17.png","650077ef41677b3d554afef2ab1a462e"],["/e1ce4e19566f/2.png","2daafd7e4946225e01c71ee63e1b9eed"],["/e1ce4e19566f/3.png","151b2116e1607f066163062c849ea9db"],["/e1ce4e19566f/4.png","9be2d0a9213ff97c6f0695bb21ab7735"],["/e1ce4e19566f/5.png","df0031e66e15a961d221fada7f859eae"],["/e1ce4e19566f/6.png","3279d641a06b122f591eb6c858ccee45"],["/e1ce4e19566f/7.png","d182a0b3854d95f29c779db413f18ad4"],["/e1ce4e19566f/8.png","765d6d2c2b9391ab46a1ceb904db9683"],["/e1ce4e19566f/9.png","56da1aadbde4525009e68b4c3e66ea8e"],["/e43d8e1e85d5.html","b953dc794032160f585afe6765a03cf3"],["/e460c106f773.html","9e62169bc3e65beaf3dab3366c592e32"],["/e460c106f773/image-20200402150825436.png","a4a160d87a22a6ca4077d71381c9ee1e"],["/e47508c7c8ce.html","39463064583e29dda838de325502b432"],["/e5ad37bd9e65.html","7917919d8683d2d0098b776e7a13c7f0"],["/e6323226da63.html","b4d1360bc1bf4c41c4135fd3cc15860a"],["/e6ddddcf68e6.html","21442dfabee618154ab7b11af2cf284a"],["/e72787e674a1.html","3b45c7620b485a85269389aedc8cc0c3"],["/e8d6d5f114d9.html","37a041ce5b89169aca9603a0ddf7b608"],["/ed6a15da5969.html","45ebe3e23c84b2ff5b4d9299a184fe15"],["/ed6a15da5969/01-字符串的常量池.png","31c59cacfe1c71c19bf82e7e9965732f"],["/ed6a15da5969/image-20200405165653102.png","b6bf856be92e3f5d734984734428b937"],["/ed9501b8d471.html","5dcb0762d79efe4c121f5db10e96d9ef"],["/ed9a6f7913bc.html","dac504d9be45945786b6dc2ba4bdc570"],["/ee5c0e48c3d1.html","5ae2e1b9c3ec5f7cf89249f2a2614c1f"],["/eea72e773574.html","61796fc025c47c936fc504415ed499c7"],["/f144d956d9c0.html","1be0c7900759974e8f356a0f13335625"],["/f144d956d9c0/image-20200403154017477.png","4a7c19f55135c2f2feb3c468fb5b38aa"],["/f144d956d9c0/image-20200403154049421.png","7941904bdce5fa61c95daec464dedb08"],["/f144d956d9c0/image-20200403154231003.png","e6c507adc67d9f2b7b2ffb80aff34428"],["/f144d956d9c0/image-20200403154423758.png","7e67cedc19797f41d50cb092f1cfccde"],["/f144d956d9c0/image-20200403154528596.png","aab072fd7bd28cbd286b08ffd9a94d65"],["/f144d956d9c0/image-20200403154642694.png","8606ca85a92287181a0067e80cc5aaa9"],["/f144d956d9c0/image-20200403154754885.png","b4ffd79c37e2b200beafbafadd46cc4b"],["/f144d956d9c0/image-20200403154918626.png","bc71862a94afc0ced7e1c5a876e90de7"],["/f144d956d9c0/image-20200403155024305.png","0051db760837a5fde99746b5f715e240"],["/f144d956d9c0/image-20200403155511139.png","5dc3af98ce932c53190bd64d79124839"],["/f144d956d9c0/image-20200403155616418.png","9c725cbbf1b3fc1fc204dfa9911a3cb3"],["/f144d956d9c0/image-20200403155721067.png","a235af280908dffaf54a246c5e614375"],["/f144d956d9c0/image-20200403160005254.png","d5048285b97fa69a449ca8545a1cc647"],["/f144d956d9c0/image-20200403160112674.png","8ebe62ea4f24b687a2ca40f9811fd4a6"],["/f144d956d9c0/image-20200403160327152.png","8335a0e987f2152179fa46e0fcdd833f"],["/f144d956d9c0/image-20200403160409883.png","edf6c918637bf6c20332501964b404c5"],["/f144d956d9c0/image-20200403160543542.png","02dcd244098ef54cbf83470889df94c3"],["/f144d956d9c0/image-20200403160734500.png","84246f78bee169ca76cd2988f5d79608"],["/f144d956d9c0/image-20200403160847663.png","3f21af1e7aebfa42d12dbd71b677c04d"],["/f144d956d9c0/image-20200403160922375.png","d6223e664c75b0bcd6a1a5a49db3d52d"],["/f144d956d9c0/image-20200403165402354.png","da7d7c18cf5a8bceb06fc2453b3217d0"],["/f563a9569919.html","f3e2f6460c4f6def357dedd65a1fa9d6"],["/f6db78db1f90.html","f34b438a29809b32eb74c2f64f6c602b"],["/f70d50f7bf77.html","8c7e276e6abdc87d91d3d6d8d6889182"],["/fb3dac0e46f1.html","e5cc8f0a612fd2ca8eeeb4d0d8b59f6f"],["/fcf19d075d62.html","5591dfa01783418e76ffda993ef43c61"],["/fcf19d075d62/单链表结构.png","77da287c03306c0af8bccea8fc75d98e"],["/fcf19d075d62/单链表结构特点.png","b77bae38ecd04f538d97bfef0933204b"],["/fcf19d075d62/堆栈.png","cc0c5baa240e657259487e4ba72ba36f"],["/fcf19d075d62/增加结点.png","c0b5d5d3dbc7dfe4fad9b5162b0e8a85"],["/fcf19d075d62/数据结构比喻.png","a5623a80743f52d623548e8a9a049159"],["/fcf19d075d62/数组删除.png","e71b3f0a3c7d5595ee5a644314926615"],["/fcf19d075d62/数组查询快.png","0ed31d09c19a740a45f1d607fad11bf9"],["/fcf19d075d62/数组添加.png","fef814236b4c08b9b240198505fef5d7"],["/fe248847c921.html","1a98f10d4e2b74150d226fb96ec34761"],["/fee0daf7ca52.html","7f23704e87855a284242c4a70f110daa"],["/img/avatar.jpg","fa60f84cd72c22fa341f7c2ccf8cfbcf"],["/img/avatar.png","b199d5fc93eb5da97fe5934c3e0e1c62"],["/img/default.jpg","a564b03f4409d080701a816ea4f32b81"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default_about.jpg","99f1f2b62e8585fd5dbf742884ab354f"],["/img/default_archive.jpg","4dc33b40a700dd1d2cd01fc443278f5d"],["/img/default_category.jpg","b315fbf6a0937d27c36380ea4c59a42d"],["/img/default_post.jpg","256c13731ae0ab5d082f33d8a9a5552e"],["/img/default_post_index.jpg","b858cbbc619b777672927280920819fe"],["/img/default_tag.jpg","2b113de5269bf811a005293e6d3ee6cd"],["/img/favicon.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-128x128.png","f45d502c892ad54f9fddc00dd8a04a63"],["/img/icons/icon-144x144.png","c9d419ae3cad258fe568a01851f41c62"],["/img/icons/icon-152x152.png","582d561035fdc3fa8b40b1928c11e566"],["/img/icons/icon-192x192.png","47e76b4e7732c7a00ff4a45d4626c5eb"],["/img/icons/icon-384x384.png","536ad9bc8478762c40e6bd9eb2495423"],["/img/icons/icon-512x512.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-72x72.png","0f6e2d426fe26a088537c7704bdb6c49"],["/img/icons/icon-96x96.png","8a52f59125300b22369cf86d2198573a"],["/img/loading.gif","2136c8686469a7992ffad348dd7bacd7"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","90661d48997146bb2a07ef2bdab68bb4"],["/js/boot.js","e2e7defad6d45a0409b0143389c87de0"],["/js/color-schema.js","3b82e09aa5708c9b5bd793304aa99a86"],["/js/duration.js","93216890ef56c36e62d2e5314e36a368"],["/js/events.js","33e028d78bd6a0739c153c52ae09fc4b"],["/js/img-lazyload.js","906050e291c80575119e9a45011fed62"],["/js/leancloud.js","f73d1d762afc4dc49a80f02f3b5f2261"],["/js/local-search.js","fbd0afaf0f77792287ecfc7664739c80"],["/js/plugins.js","0c27945e81144140b91cd815d11e05c4"],["/js/utils.js","f0d81bb1f391f84140fd327652b519f1"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","930090f29d6126b4a1a1ccdbf4d6f715"],["/page/10/index.html","974f32ba947f10983570724f9fb1a840"],["/page/11/index.html","80a706edf4b72805e0df82e5424ef495"],["/page/12/index.html","cc6c1538595b3702ee1687792ccbbffa"],["/page/13/index.html","7a24c1a8f1fbe123c4a24dd504ea386d"],["/page/14/index.html","260baa186d41a564b6e343bf4e76b1cc"],["/page/2/index.html","8a81cb9aaa7bd6b47c0f7264b9c54db9"],["/page/3/index.html","08821d497d8e66db4cc33d6e9cc9cadb"],["/page/4/index.html","d63b48139b2cdec87cc067798f11d8d7"],["/page/5/index.html","f69dc887271950eb856258e3a88d632e"],["/page/6/index.html","6221b661e9c09e11739deee1125ea5b4"],["/page/7/index.html","422653331078b4683d31c90458cbed65"],["/page/8/index.html","d68e48b2be7ce2c36305ae50d0f007b4"],["/page/9/index.html","e31f2ef7e65f6b40f00ab87ea9846c36"],["/sw-register.js","f72712705e5fa4781af0f319f4795421"],["/tags/Ajax/index.html","09a9aeef6042e7dcf5c2fea82f63a631"],["/tags/Hexo/index.html","5bea3f7df1536fb0ebdaffab4d5fc037"],["/tags/Html/index.html","ee0722b9471e6a6994a5932df7a4704c"],["/tags/IntelliJ-IDEA/index.html","5e5276652605757051717bf2f71d3ceb"],["/tags/JMeter/index.html","a4e50b2353fe483c3722ecfaa8615fa8"],["/tags/JQuery/index.html","9f29e686a4e9543de2b566e61f67e15b"],["/tags/Java/index.html","a9bc409ee72a93190319e35a65d3cfe0"],["/tags/Java/page/10/index.html","3cee280bc790c594eabd1bfff11aaa5f"],["/tags/Java/page/2/index.html","59be4807fa9157e59e868e42e4079b4a"],["/tags/Java/page/3/index.html","1b3d98c7e950a5563f84e24a64edcdd9"],["/tags/Java/page/4/index.html","9b7b3361d61bdb647cc5c2bba1319b6c"],["/tags/Java/page/5/index.html","dc2879e9f1b0f4abc38083cca263dd59"],["/tags/Java/page/6/index.html","13760f16c73832ac0a1957f4425ce439"],["/tags/Java/page/7/index.html","3eec8b43f494ad9431cc4040811f650b"],["/tags/Java/page/8/index.html","ab2142e59c7c99eee01b65540f2fe88c"],["/tags/Java/page/9/index.html","16b605bc2e5d0e4696ca424e21e403a4"],["/tags/Linux/index.html","c5fec8532933927c69c679f2f39d43c4"],["/tags/Log4j/index.html","56adb89acca2ac76c3f82b5ceef9ea4b"],["/tags/Maven/index.html","55c7203a2dd1dc8e0f875a613057cf73"],["/tags/MySQL/index.html","ecfb4f319dc3bd5a123f8632826b919c"],["/tags/Redis/index.html","881cfa9b179e00d61996d55788c1877d"],["/tags/Rest/index.html","736c83d052393db046e0978db743ea40"],["/tags/SSM/index.html","bfd1ad297d7896c44e041395e07568ab"],["/tags/Socket/index.html","eab54f655eb1c7ba45fd9b6ecac5ffea"],["/tags/Solr/index.html","767fbb929b1d7f6ea93a980c4cc99609"],["/tags/SpringBoot/index.html","4680d572c156b1e08657215b1001cfdc"],["/tags/Travis/index.html","18a77c0cc7c5c2fbbc812af115a748e3"],["/tags/Ubuntu/index.html","fc5e91cf7a504725a8bd8feac06cf178"],["/tags/WebService/index.html","e946cf563d87c013d0a449f9b9d86aa3"],["/tags/index.html","c55c26703d5bad2eed77338a41676dee"],["/tags/学车/index.html","7386eb4036c74ac5ea8e4580534100b2"],["/tags/工具/index.html","2d6756d5f5269df11a131196791c4625"],["/tags/数据库/index.html","475f011579e8bc6ccb0a82205b5ffdc0"],["/tags/日常/index.html","fb30f36cb747ffb3a5b1601e7beb8bec"],["/tags/流书/index.html","7c18fe4528e7a48166a015a2f8d9cc34"],["/tags/生活/index.html","a0143ff80668b8678b94f00c043cd259"],["/tags/算法/index.html","567b34a7dd5ced102124fa74f5cc799e"],["/tags/算法/page/2/index.html","3f7e83208ac98b8b0c6e19f370cecf36"],["/tags/蓝桥杯/index.html","750514fa250a5aab479bd9f8f486be5f"],["/tags/蓝桥杯/page/2/index.html","8291426dfd3775757d690cec20d47650"],["/tags/语雀/index.html","382477a24de507de1244ca786a0ed6f6"],["/tags/音乐/index.html","f678df0a8f9e0e6424ed662d62f66a45"]];
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
