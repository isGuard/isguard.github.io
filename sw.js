/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/01c00fab19d5.html","e33a7605351e178b340f18cae7253663"],["/01c00fab19d5/异常体系.png","c5c7085c9534763d0287a8596ac12170"],["/01c00fab19d5/异常的分类.png","184234974b5fb6b40c7a910bc62453c2"],["/0380823323ea.html","89a0e0d39cbb4d3d82d9198ce048c92f"],["/0380823323ea/01-交通方式.png","20baf2be33220faf5424e2b38abb9f2a"],["/0380823323ea/02-Lambda.png","b81b8780f6c9f898cecf5c61fb269cba"],["/0380823323ea/03-Overview.png","2e91cc2bc78cc176a9bf1ea4c2c4e4b8"],["/083b7d32f844.html","19e1282a4141500dc00de48cabf852c2"],["/0cc7ddcf0032.html","4017749b47a88396376baf98d0f04a2b"],["/0cfa7e337349.html","d409a1f8d1e838a9bdc8de462343a37d"],["/0d714c49bb0b.html","4de47a2ddabbf8e064b784cf0b8203cd"],["/0d714c49bb0b/02-IDEA的项目结构.png","8b74aa7a0c8b45738da6f60a7c8c82d5"],["/0d714c49bb0b/image-20200402170317121.png","0a21436324dfe37cc9bc25a285e5c269"],["/0d714c49bb0b/image-20200402170351577.png","4e8fae75c5835948f20cbfa30671b793"],["/0d714c49bb0b/image-20200402170525471.png","c8ba4559770e9b05fd3d809c2af4fd65"],["/0d714c49bb0b/image-20200402170544275.png","70997ada2c42f2638ce3e6c8f7e26b1a"],["/0d714c49bb0b/image-20200402170608817.png","53799839d571fc055b5e8168309be822"],["/0d714c49bb0b/image-20200402170635952.png","bf0d4fdb3e08e48770316f0a133c724f"],["/0d714c49bb0b/image-20200402170652435.png","c4d32db71014c53c966b5c25c309303b"],["/0d714c49bb0b/image-20200402170744130.png","0d821ae94e290e1c218c3716b9309c41"],["/0d714c49bb0b/image-20200402170816522.png","183b99538645e2be0a047d6da6025581"],["/0d714c49bb0b/image-20200402170854718.png","5138b6ebb7cddb68c1fb56f1a1911f17"],["/0d714c49bb0b/image-20200402170941742.png","f511755960329f7ed68cb3a2825a5eef"],["/0d714c49bb0b/image-20200402171012124.png","f357f908cb6253f6307dbdf4ad276f57"],["/0d714c49bb0b/image-20200402171036407.png","fb15a59a9f3d09eb926d8a7618b8c5a5"],["/0d714c49bb0b/image-20200402171237437.png","ad9f808953c6a83dc8e86107619a0664"],["/0d714c49bb0b/image-20200402171303668.png","dd28f9f0e51164047af482d3cdb9edf2"],["/0d714c49bb0b/image-20200402171333076.png","8ac6f9c313f3adaaccea32eb0d9781ea"],["/0d714c49bb0b/image-20200402171834576.png","1b7f44d86f47e2915cadc0badb8b7cbd"],["/0d714c49bb0b/image-20200402171910062.png","57f34418de5b5dfa7a9fd8a35df2ff8b"],["/0d714c49bb0b/image-20200402172005458.png","76b8b59e48e4c382a172388b3da2aa59"],["/0d714c49bb0b/image-20200402172028412.png","6e7c3258038e3f012b3ee3a7474451aa"],["/0d714c49bb0b/image-20200402172155375.png","bbd2df3b1cf70da76c8d05d7c7bfd5fe"],["/0d714c49bb0b/image-20200402172320302.png","651fa7bc2295b9a59d3c44be5949a3fa"],["/0d714c49bb0b/image-20200402172334670.png","643b1cb409001c43decb3692de5443da"],["/0d714c49bb0b/image-20200402172453930.png","e4e52b70a16686728e85480de73ced45"],["/0d714c49bb0b/image-20200402173148296.png","e275325ca847573540094b9d78f77c77"],["/0d714c49bb0b/image-20200402173230646.png","6d28fa4aadf18d1fe9044d3e02ab2ca5"],["/0d714c49bb0b/image-20200402173336235.png","cd514e83295b5d8baf07556fdff8ab2c"],["/0d714c49bb0b/image-20200402173432324.png","b4e036c55b1382062cd2391638d0185f"],["/0d714c49bb0b/image-20200402173507196.png","b10bf67d55bb6870126c496e9f720676"],["/0d714c49bb0b/image-20200402173526958.png","ceb66ece6373d5f6b4c1992a84b8fa79"],["/102164869c4c.html","89b114ebccc1b5973477da975363567d"],["/144f3d359cd3.html","c22c62cfdee146b62e357837748e4354"],["/14f35b3a6d64.html","9f235958c129ebf930566af0b6a683a7"],["/14f35b3a6d64/无限等待.png","843fb162c73be740ea19fae4db531f2f"],["/14f35b3a6d64/线程状态图.png","1435bf41de7de963d30a0d609664fbb4"],["/14f35b3a6d64/计时等待.png","d898f2321427d0d5adb21dbfb57c6e27"],["/14f35b3a6d64/锁阻塞.png","76d0dc098a92acff05cd620cfcf73989"],["/1698a47fcf6a.html","b078912ef73db798463eac3ebee2fd3e"],["/17f5eb8bcc0d.html","a9c718c6cc4cfb9f1a7b85c6b8ec9d3c"],["/18ac9d961f0b.html","2b4cd84f9e8411e48d00ea8df02280f5"],["/18e2d5e4b6f3.html","1beae9a92d987497dffabca6f4eb5bca"],["/1c1b04db2c01.html","3b217659df46722d9ad87ee3ca7f28ba"],["/1e8a3115b061.html","393d51fda075019fcb0ebebb097cc357"],["/201854ea4b36.html","c59ff76065e4ee1740f7e0f6cea53879"],["/201854ea4b36/05-抽象的概念.png","3fa8fd49f634a83c1b8709583d67f917"],["/245047f7f750.html","d3eb1e02e2c9c6e5d51e821e32664de2"],["/2605a2a5060e.html","e1b87f1303a20a0e7eac36645df78a00"],["/2871874be300.html","afe2d9e9228ea292e3f68f81b5f558be"],["/2871874be300/05-for循环的流程图.png","ee8e09264573212bf7faeadb8ae95c73"],["/2871874be300/06-while循环的流程图.png","5102af69c968c54f7fb68dbade9fd2c7"],["/2871874be300/image-20200402161047519.png","0f3a4c51b1bacba096bfa91c13e62e1f"],["/28d125e258a1.html","ae35bb70ee31cc3b5820f0ee707aede0"],["/28d125e258a1/01-继承的基本概念.png","3c166b96e322ca31dc16b18e96b65f7c"],["/28d125e258a1/03-super与this的内存图.png","3bfdb3236e01f1a1cfa3dbc672352495"],["/28d125e258a1/image-20200406161705307.png","9130706cf62f91ae526b7797dc533900"],["/2cc594bf8909.html","03adbf0c52bf04fd4d6ea339e550b7c0"],["/2ce74a09c8f3.html","27c1b0bed32f3084a91d699c7cf760b3"],["/2ce74a09c8f3/image-20200412180201258.png","3fc7618ad3d87cd4651e94fc833b6d78"],["/2f190b34c2b3.html","8de69cde9ad361b13502c329d34872ce"],["/33f8eb0da2f0.html","e8ba0e12e6675cdc0bc2dbf66c839e5c"],["/3494683249bc.html","dd89d843581349a56cd84db174d255cd"],["/378fe56bd246.html","8442d9aab6ad14b94dbf55eccdab302c"],["/378fe56bd246/1.png","e8ab3fad15c582d8346389cb1e0622db"],["/378fe56bd246/2.png","93a6489e32cd0606bbd2d7aefcac2af5"],["/378fe56bd246/3.png","756b09e3719426443eb8ccc8f3cd6826"],["/378fe56bd246/4.png","676b1d2d704c4ce1985bdd593a670a16"],["/3a4ba11b7a5e.html","f5cadaefb5aff28e1d366c707666cfdb"],["/3a4ba11b7a5e/image-20200401173052296.png","879e243b37d4b10b87685c737974398f"],["/3a4ba11b7a5e/image-20200401173119744.png","039d6220d51db77bef500ea2d58054ab"],["/3dc224c52b20.html","1bf7fe3800d1a2a530326318e7bb0b6e"],["/3dc224c52b20/1.jpg","d3740d1dca2d445a65b7a7ea2a0db495"],["/3e4b52661133.html","b86d82640ca890304854d8de30fa2d80"],["/3f94559a860d.html","aec2d45836420824771fce00ef346fdb"],["/404.html","6afab1eb7639dba3776f483edefd117e"],["/40901eb5b99a.html","1a95b89c01b491fd0960b78a78faa0e0"],["/4264568384dd.html","ae42309bea49f99fd71b487138cc6fe0"],["/45cec86ad3c4.html","1ab6dbe5b706283e67f763cf7098fb74"],["/45cec86ad3c4/image-20200330111401992.png","1fd2f36c87ea776413fef3fc6dd5351d"],["/45cec86ad3c4/image-20200330112240805.png","4236d980f8843e08b1d3989eec7211f8"],["/45cec86ad3c4/image-20200330114552195.png","84ad09d2c056d27d2fa498c186140519"],["/49d077e64aa6.html","6cf66a9ecf51ac41ac547f0f47fd0a36"],["/4b9608333997.html","85acfaad61fb27724397e6eb77edfb2c"],["/51c5316ba4dc.html","8740c5c246ee0bf21a023b1e50dbc4a0"],["/543613fef7da.html","8b5d7b52b4d71aabca9df55b40add798"],["/546c10072d86.html","fe0a1b38408fc9ea7bde340672a08688"],["/57bfd13fa382.html","830934734e2cf5fa5fd13189fb39dcce"],["/59d451fe7cbc.html","de7a88563f18e0b35f09c9f0392840cd"],["/5a25eafad98e.html","7b23f93d2ce9d6f824d08970b1ccd300"],["/5d0a7171e2be.html","e693c0f6534a3961a24029e6b6f4737f"],["/5d0a7171e2be/1.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/5d0a7171e2be/2.png","66ba7100d5a6b8a35fcd8984ae45f464"],["/5d0a7171e2be/3.png","7098e295719eede6400d6f6ab773bd19"],["/5e4e6842d754.html","5ecb0b42470ac231929b8ffaf04f725d"],["/6321ac3497ca.html","d4a788a19e2d8d309be2a40d8c37a336"],["/641601337f0b.html","899e46ebc6985dfa38441eb71891d4b7"],["/65e4aa78c9e6.html","ac15adf30fecd633386ee95670e47e58"],["/672524809abe.html","19a8922059790174fd9cb9ec1f724745"],["/672524809abe/03-多态的概述.png","a888e0f98189750a9521479068a9feef"],["/672524809abe/04-使用多态的好处.png","57a3e777f90e689efef1f8ef5c8ea839"],["/672524809abe/05-对象的上下转型.png","2b5852061fa0be376309ee5e6da0905a"],["/675ab52ded3d.html","1d2ba9620da494074ab9bc52bf3cd5df"],["/69bb6d2d9142.html","0a6efbf0d0323da96cac8b05161f99e3"],["/6b7289fc875f.html","92ca1422f2a0aa41fd0df919fedef2ba"],["/6fe7860f08d4.html","c632de55d2c9e0fa63ee9f908e450be8"],["/6fe7860f08d4/双向链表.png","60da2f48ec4429c92b0847c369dd76ee"],["/70ca5927dc18.html","6b1fc0286e9eb2b700f685216650df43"],["/7371f7e698bd.html","abd97140d174b9368300c6803e9a528b"],["/7371f7e698bd/哈希流程图.png","cbbf94f55d26e1b07ece7eb27839762e"],["/7371f7e698bd/哈希表.png","8c767e1d1903d8c0af0b98c18a7b8482"],["/7434890e6022.html","93fc6ebfbc9611d158efbc4840b53da0"],["/79edd52b58c3.html","b32702095c20ef87d435e306274acf77"],["/7b851fc8c287.html","17031e68cca8fcad152cd4d47e6b5e93"],["/7b851fc8c287/image-20200403172358617.png","9ba7fac26f9759e59bd9928418efa5f0"],["/7b851fc8c287/image-20200403172438473.png","dc069d4ac98ee9b62af00ec01ba19407"],["/7b851fc8c287/image-20200403173538440.png","a8b50a4addcb8553ef417ccd82cc8b8f"],["/7b851fc8c287/image-20200403173638585.png","02535b9f9e06b956817a485b38acf727"],["/7b851fc8c287/image-20200403173732626.png","c226d5308e78f5645cbdf36088392c1e"],["/7b851fc8c287/image-20200403174051861.png","22587d383cee01abeb8c7affbbc64bf9"],["/7b851fc8c287/image-20200403174218198.png","47618ae709bbc13f10c7965f5e8fba3c"],["/7c039cfe73f4.html","49f86f57298da30948973b5824ce5a89"],["/7c8516486039.html","19bf99fb6a7b668f23ee5bc6760d7040"],["/843e58d8929c.html","ccf9f91ecb52d2f851249a9ccd6d1975"],["/843e58d8929c/01-Java中的内存划分.png","f0d1cb25805220dfd863fe37ad77f2c6"],["/843e58d8929c/02-只有一个数组的内存图.png","69f6f1d6c511b78a7ddf1f35b0c10dc1"],["/843e58d8929c/03-有两个独立数组的内存图.png","d42d92bfd731ea4dc5dca3c9a25f783a"],["/843e58d8929c/04-两个引用指向同一个数组的内存图.png","6c01cb592cf2f8525cd0bc13b12a356d"],["/843e58d8929c/05-数组的长度运行期间不可改变.png","48c5da1bfabeb6205c1ac7463abfb285"],["/843e58d8929c/07-数组元素反转的思路.png","c82e0a86fc164a77fca5f122c751c132"],["/843e58d8929c/image-20200404115449968.png","e8b41810ac037c021e5fdffeb4b2f71e"],["/843e58d8929c/image-20200404115849231.png","664652907cb17076701342e366e6b736"],["/85bb8468cbb1.html","65cf821b0eb830c2bfd5ac9bf56fc5dd"],["/8aea8b702ec9.html","4bcaf0e2cb20094526cc5753d467eb7e"],["/8aea8b702ec9/day08_01_递归累和.jpg","00a399ad84b80d9656a81c25016f0652"],["/8f0902f5fa56.html","bbb21c9bc1a00215691bce4899d29605"],["/8f0902f5fa56/01-顺序结构的流程图.png","a9911e0efeae9f4680bdd631b4c3f9c0"],["/918110f64071.html","b51090321335c613e94ee0041d6ed2d0"],["/9865be07681a.html","4dc54664d1127482efc8afbaf52bb4ff"],["/a21c0106b4dc.html","56fa716a94eb200e68f1466a367fb2ba"],["/a295f8b882ca.html","209bf898ccb620412777ec159c2428fe"],["/a2cff47e45b4.html","e8e1f2e4595188cad6d2bb17a8f8f6e6"],["/a2cff47e45b4/1.png","18b58f9ca1c01c119fddda4c2b829c8a"],["/a2cff47e45b4/2.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/a39447736c9e.html","381e938aee24806a474cf1a0cd9917b8"],["/a66da301ed65.html","8c2070ef7af5fbdfcc76f3fa2876bb81"],["/a8e99b664015.html","dcbf03a354419f37124b85517f005e8d"],["/aaafb3b4b102.html","71cf4a84fe5aa00f3b1538fac5996fff"],["/aaafb3b4b102/游泳池.jpg","51efcbec541a872015228e88bbc5e1f5"],["/ab4774b19476.html","53928c2c5bdca09fff9eb178f4a94924"],["/about/index.html","87b4b42a73566276ca0f89d9163b087e"],["/ac05f6c6cbcf.html","37673b105636f92891a1f322c1df02d1"],["/ac93dc79a32b.html","85a67ffd32c0f79dd3b93e3d340f157a"],["/aee8b86da60e.html","5dae6dd1607d69d1deca91d207c3232f"],["/af0c06af727c.html","85f8502a340f716f2c6e8cc4cfc34cd7"],["/af9f2ecdb071.html","924698d6b07487aafb0a547cbb4c3add"],["/af9f2ecdb071/006tNbRwly1gbmnj3i2fyj315m0rc0z8.jpg","34e75e808c6a21129f77f90bb2ca9d97"],["/af9f2ecdb071/20170618230136472.png","db43b62aef576e79499f1b7dbc15c2d8"],["/af9f2ecdb071/20170618230149347.png","caeb24d26d0dd6412e22eb92ccfd98d6"],["/af9f2ecdb071/20170618230200082.png","df5f4b8492fb58ca5947363fb8a77142"],["/af9f2ecdb071/image-20200330135909560.png","b46f9fb593ef1c4599510c691a3bc4ef"],["/af9f2ecdb071/image-20200330140526466.png","bce32a0c5c4ad90c635e08224d3f28cf"],["/af9f2ecdb071/image-20200330140937480.png","7e106d34b8063a1dd3708242e363555e"],["/af9f2ecdb071/image-20200330141046227.png","e55ca8faeac102dfb5e6bfe49b9dcf6d"],["/af9f2ecdb071/image-20200330142153915.png","08c041252166a6c8eb135cc93e734457"],["/archives/2018/04/index.html","5f53b14eab42f6e19a7854a0c431eeef"],["/archives/2018/04/page/2/index.html","dad2434c14bc1d0eba2487318b06d337"],["/archives/2018/index.html","679505f836c11125083cbdd25a089e17"],["/archives/2018/page/2/index.html","3c877ad692a8e38f18df41987cc12ed5"],["/archives/2019/01/index.html","378d6cf9001a43642da6442b7a945408"],["/archives/2019/01/page/2/index.html","4a5be5bfecb203b57e22095370c13455"],["/archives/2019/02/index.html","176ed21d1158686682102e7dce45061a"],["/archives/2019/03/index.html","ff2ef6f1bcf4ab75c35dd2403da432e9"],["/archives/2019/04/index.html","f34abd5aec352f2b8e427ce4fdaae241"],["/archives/2019/04/page/2/index.html","ae5705a814dca3edb51fb278e8c09290"],["/archives/2019/05/index.html","1df4e435b9351316f11b0d09648aa252"],["/archives/2019/11/index.html","a714ef5a8475ca3010bdbcea46bebc42"],["/archives/2019/index.html","e1acdc0bb25cf8e768922042d1fb0e2b"],["/archives/2019/page/2/index.html","950210c271a79d49a45fa6cddbcad199"],["/archives/2019/page/3/index.html","ce83d9e4a20d54e5e411fc49542a606e"],["/archives/2019/page/4/index.html","793c0fa7af1fa43f0cc206bf2d5675df"],["/archives/2019/page/5/index.html","f90b6ddf48a45cd64103b79ce57636be"],["/archives/2020/01/index.html","3c765a8f5529af29ed3b626737286332"],["/archives/2020/03/index.html","a7232aab0c11a59ef914dd2b18a456db"],["/archives/2020/03/page/2/index.html","e76f3b87c5ca10ce4007843abb0b598c"],["/archives/2020/03/page/3/index.html","0b3de3e3ba7f7d5cf9e67e3349e210a1"],["/archives/2020/04/index.html","36c6099941e0cc95b3b37b0a7e8683b8"],["/archives/2020/04/page/2/index.html","4c39c2f513fa24fd63b3ccc101cf8749"],["/archives/2020/04/page/3/index.html","46c783ec622b2629603110ce01b4444d"],["/archives/2020/04/page/4/index.html","88ba3c56a8dc70e55a45620752e6d0ae"],["/archives/2020/index.html","6d8970730f963fcbba5f8d741deb0e76"],["/archives/2020/page/2/index.html","0fa11aec6e771d134858113f897d3518"],["/archives/2020/page/3/index.html","b6afea0a8873c8e1bb56078e037198ed"],["/archives/2020/page/4/index.html","4d526058471456b555a1397767d14bf0"],["/archives/2020/page/5/index.html","3d27159b7b9af032dceabbcfe03832c2"],["/archives/2020/page/6/index.html","accfb4f3112eaae8a10b60561e843ca1"],["/archives/2020/page/7/index.html","96c968624cf86a4d855d8afebba2e98c"],["/archives/2020/page/8/index.html","7ed791a7a8cf485e1e4a299b4805778a"],["/archives/2021/01/index.html","ba6047cedc594486c4b500209d2b62c4"],["/archives/2021/03/index.html","a7f3673c28b8b8d0976032d03f33d9ee"],["/archives/2021/07/index.html","79dcd720815b7f47a3f400ab7fcd8f98"],["/archives/2021/index.html","0753e547c0c7b1f796b820b8565d0d43"],["/archives/index.html","f6659748d6924ef140d7db6c4d195f58"],["/archives/page/10/index.html","dfa830f191aec8a696b505f01362923d"],["/archives/page/11/index.html","a7bb25ee6909061bb128a6e512eb02bb"],["/archives/page/12/index.html","7efd7e21d23eb76c9f77d837357c6801"],["/archives/page/13/index.html","6defefa1aec89daa096d8d253a981742"],["/archives/page/14/index.html","4d5dc0124fef48459585b1a50679ea47"],["/archives/page/2/index.html","880479f16a2c7330f120eb80c9cae590"],["/archives/page/3/index.html","24c9da96f2a21f0e4032704c38f71b16"],["/archives/page/4/index.html","b6d49c2bdac10241e73944c39a2cb376"],["/archives/page/5/index.html","637d6d19c9df35425894fb15cbcb80ab"],["/archives/page/6/index.html","4aa36978e682d5eee5db060e398341b8"],["/archives/page/7/index.html","5c7e136bd7ccccc2a8a698261223071f"],["/archives/page/8/index.html","20e18a6cf5d1c20deaab96e02c5b3aa2"],["/archives/page/9/index.html","c966828dda9ebb4191cb54a0d1845414"],["/aria2/index.html","fe8e7ac93ac5250e2a1ce83902e419f4"],["/b176b2fd8637.html","e89f297dcba31f007aefd1c17e500cac"],["/b17819308f04.html","0788a737c6322ae93fa478bbfb01e77c"],["/b17819308f04/1.png","42d384ef717c67317df1707860c0e869"],["/b18884c315bf.html","656c0816d5d1e4a65a89b4c84654445d"],["/b18884c315bf/image-20200415161132979.png","1865906c907eaaca646d74dbc1b36653"],["/b1fbbb5bc700.html","d3f584fcf8233ca874957afedec90a7f"],["/b1fbbb5bc700/线程概念.png","2d7ec41d1fcaed56b4a897abd805c45a"],["/b1fbbb5bc700/进程概念.png","fde4d3aee971b63223592f389f002a2f"],["/b28bf5bb0dae.html","d9b6d3a09943df0b086ead9dd20b4f32"],["/b28bf5bb0dae/image-20200403165720339.png","026e9da64624f52f029cf9fbd5b1ddfe"],["/b28bf5bb0dae/image-20200403165813924.png","6bf9658341fdb6386c03398266cafaad"],["/b28bf5bb0dae/image-20200403165857456.png","5df4555d1d7a3aaa796c6fea080961b9"],["/b3421d932a26.html","b3fd788c735925c70c2518506bb3bd19"],["/b3421d932a26/04-方法返回值的有无.png","fdbd700f2c4937fd27782c7d0173c1f0"],["/b3421d932a26/image-20200403103522213.png","0ba82c7b28aa764d51474cc7eec1cf07"],["/b3946cdad917.html","1cddb8dab440aaa57309db44165eebf9"],["/b44c36a2cabb.html","8ce90be67a16827c1e79d97c0503bb7a"],["/b44c36a2cabb/02-单if语句的流程图.png","0cbaa6c5ff208679b2770353b5ccfff9"],["/b44c36a2cabb/03-标准if-else语句的流程图.png","26461d4506152634920073b1c4412f31"],["/b44c36a2cabb/04-扩展if-else语句的流程图.png","9483f33d5d0d3cf1c7b12d9189ac2eb7"],["/b53c187d0041.html","a454b275be589f7b0861b152cd54c175"],["/b6106669f562.html","68580b8ae6966466cc0398c2a0c88e16"],["/b6106669f562/1.png","6016fc838ad5be04a184c351034049a3"],["/b6106669f562/2.png","bbb6aa26ab4a90c852f0a33b57930f72"],["/b6106669f562/3.png","1d40120e6520be551e1a81eec28d4758"],["/b6106669f562/4.png","63cff42026b9c5dd37b7d07fc7a6f357"],["/b6106669f562/5.png","7cd380faf7620ebb1679054d296d3b12"],["/b6a4fd82fcfc.html","44d9233801938a3956a0e233d08ad9db"],["/be1395c7d0f0.html","7a9071c2a7f8e0dde982f2e07797ce3d"],["/be1395c7d0f0/debug0.png","67cc01daa7865a889cdb75da8d8b5823"],["/be1395c7d0f0/debug1.png","15e1ac2ae3dc2f39a872bec2718b150c"],["/be1395c7d0f0/debug11.png","865b0fdc19dcf56b6ccf6b664580c834"],["/be1395c7d0f0/debug12.png","f991588906163359b85813356ccedd27"],["/be1395c7d0f0/debug13.png","cda0b9f981426eeb4ce6ae79789a2296"],["/be1395c7d0f0/debug14.png","5b1b1cdaa88c4f303028ebf8debdf1b3"],["/be1395c7d0f0/debug15.png","5f73da1cdd926f604016d4b9193d0f57"],["/be1395c7d0f0/debug16.png","81e3194b8205dbaaa207ecf105105bb2"],["/be1395c7d0f0/debug2.png","26d42fee18206cf3483182a1fa368939"],["/be1395c7d0f0/debug3.png","ef607efedf9a29400f12b170f529f54d"],["/be1395c7d0f0/debug4.png","596077adeba3ed7ba79548db2b149bfe"],["/be1395c7d0f0/debug5.png","ddcc6de4769ea0ed71d6b743547b4b0f"],["/be1395c7d0f0/debug6.png","baf0c4d46af638668cd3463414dece66"],["/be1395c7d0f0/debug7.png","8ccc3f1773c66fbb8ab0c9ab787d213e"],["/be1395c7d0f0/debug8.png","ed025cfaaeb04bcadf2f484fe57195d4"],["/be1395c7d0f0/debug9.png","c5d9b9796966bdafcfcfa646c0ff6d01"],["/bef1ac8b1d67.html","dbda7cbe3deb367172159f5950d93a89"],["/c60ecd4f0833.html","8eb4339d66cc79ca9a4aa92d714f4df6"],["/c60ecd4f0833/03-静态的内存图.png","be7769f21afb0eb37a9de57850b999d8"],["/c6c507ac38c4.html","4bf731814e8a0244c747cb938245086f"],["/c6e327594862.html","299e679ccbf6ef68cfd7e3314aecd143"],["/c748da646b0b.html","11e1aaae21ff1e17917d78f527994b52"],["/ca04d468491e.html","7f8f7a134f9470f23e3cdf04d7fab632"],["/categories/Hexo/index.html","c72383db2b25ab2fbc1af7edb7cff09e"],["/categories/Html/index.html","cadfeaac97efa29b10315a2673867b0a"],["/categories/Java/index.html","bf1f5dae6bfeb598e590356d4a36c251"],["/categories/Java/page/2/index.html","9505389af09cff614b4a5cc0c21a66ce"],["/categories/Java/page/3/index.html","7ca022bb921bf7c3e5292178a6d27070"],["/categories/Java/page/4/index.html","ce7e2fddb3c9109fd950c23a6329067a"],["/categories/Java/page/5/index.html","3fc343867d006b0cd6489cca2215fca1"],["/categories/Java/page/6/index.html","e5581a279ce0bcc1877bc6dfe166ccad"],["/categories/Java/page/7/index.html","a4087d11e1bbb66a4eae95f7da529718"],["/categories/Java/page/8/index.html","4af80d3de4b463a94f8276be380b8446"],["/categories/Linux/index.html","93c43a7d5117bff1406d988978f2e6ab"],["/categories/Maven/index.html","c87c74b341af3c9292b329b982fb4bba"],["/categories/index.html","8acd70c9fa7cc13d532b8ba1a6ed8775"],["/categories/工具/index.html","d6cbe28c11214acee268754e6dbdf49b"],["/categories/数据库/index.html","e3f2650374f7a99a8fc94aab99fedf46"],["/categories/日常/index.html","4c627b35e13376dfeb4c85fbec4ad0cc"],["/categories/生活/index.html","b89a3cb557c3b22445a587d71bef076a"],["/categories/算法/index.html","aca79d965693a927d9e74fb174f64a60"],["/categories/算法/page/2/index.html","acc91114bf1ce5492f2a212abc2549ca"],["/categories/语雀/index.html","f62af5955b4e7d10992cb3684e1e64cd"],["/cf7513efc8a3.html","83ebd4a5968765947a59d21c9eee145c"],["/css/gitalk.css","8498d3203f623e2ab883851edc90c013"],["/css/main.css","9a5509f3634ca9970868100cac91564c"],["/d149732b2cfe.html","6d16ac8dd084248496a6aa0abda02ca3"],["/d2d51dce913f.html","a9d0de904c5565741b784abed444b881"],["/d4fe7f53dfd9.html","b0442186ef1c45ca0acbc5e19a98931f"],["/d4fe7f53dfd9/image-20200415155230943.png","1bd6b66581ea7508da15d14e356808d4"],["/d4fe7f53dfd9/线程流程图.png","750c5abc8080da8deab61f1021790880"],["/d620a8aa8580.html","da71b73ad2ab8ff340ddd3ab180b1e61"],["/d71834e48b4e.html","2e784943c559dbd566fcb5957429b3fc"],["/d7751bc6745e.html","29ec87b23ad67fbe65af77deccbd5c82"],["/d8aaf5d37cb0.html","953f0f1bf52dd5f1cb67c2215d010025"],["/d911e46da2b8.html","e8d8ae29a4c0708194af4d574a7042e9"],["/d911e46da2b8/01-只有一个对象的内存图.png","26b64cb79b76a6c16073ca056648a7b2"],["/d911e46da2b8/02-两个对象使用同一个方法的内存图.png","c69e441adf515802e44f3a7a0410e812"],["/d911e46da2b8/03-两个引用指向同一个对象的内存图.png","1b91256b8dfe1c2894ef798600e3d655"],["/d911e46da2b8/04-使用对象类型作为方法的参数.png","ded2949267c638f983a1fec8c8c9ea95"],["/d911e46da2b8/05-使用对象类型作为方法的返回值.png","6cceaddd7a4fc9d4da856ba7238e4ead"],["/d911e46da2b8/image-20200404165047761.png","2316b6b22d1fe5c373f8f4c7c86af0ae"],["/da89cd139d26.html","98a30cf10cbbee3e3c3f90639a290158"],["/dc5ef838632f.html","701e43f01022a261d7265f4c6bbdef88"],["/dc7e2b97a6a2.html","d1b24d88e87e5298d9953f6da96e444d"],["/de53a68554c4.html","512bf30c369234b3484e920866387f76"],["/de53a68554c4/image-20200403171326693.png","a9ffb639ab2a1c54ca8fd7c1e5655391"],["/de53a68554c4/image-20200403171359402.png","655cfffeffb0242b79b069e3397cc747"],["/de53a68554c4/image-20200403171423549.png","168bf89397306a192310bbd748374070"],["/de53a68554c4/image-20200403171516801.png","7b1bfa4279e88833584699a1eb3f5cfc"],["/de53a68554c4/image-20200403171608393.png","d3109eac00db0ee439b6958855b92ffb"],["/df5068bb57d2.html","0fa3ea1722ef8acebd52365963a23950"],["/df52bcc43c75.html","544ef0ed085600bea0f9fb4c993e88be"],["/df52bcc43c75/01-生活中接口的举例.png","170cfd539216918898bc63c1a46ca1cc"],["/df684ffb9540.html","41d557e056d7210f6320bb4b1f9c10e3"],["/df684ffb9540/image-20200330143419255.png","14e9175802198872eb08f5a575762a0e"],["/df684ffb9540/image-20200330144757408.png","ec15ec3529d3e7350b1199306c8062c9"],["/df684ffb9540/image-20200330145037750.png","c5121c6db3a3fa5ceab975aeb98e0676"],["/df684ffb9540/image-20200330145407426.png","d5502daab31bc6b3b20d8fca103f5d86"],["/e1ce4e19566f.html","6250c5382edf06e4a08f003723db1c24"],["/e1ce4e19566f/1.png","5ca8d314e27dc900cae5d0428c3c0fa4"],["/e1ce4e19566f/10.png","9c5cae86e23370c5472864cccaf3d57e"],["/e1ce4e19566f/11.png","f50a9c52e8652e4b52bb512c6b2f01de"],["/e1ce4e19566f/12.png","08e0fb74169dacb6f5177f32a393141c"],["/e1ce4e19566f/13.png","84d5a35c01c730ae8fcf299d771c0146"],["/e1ce4e19566f/14.png","4c0a08a5744e3dd1e456377d0d4af96c"],["/e1ce4e19566f/15.png","0a0e8d381aa90d54d2b1faa27f3c0976"],["/e1ce4e19566f/16.png","d86e5e6e6294be6531e06de4432ecc8a"],["/e1ce4e19566f/17.png","650077ef41677b3d554afef2ab1a462e"],["/e1ce4e19566f/2.png","2daafd7e4946225e01c71ee63e1b9eed"],["/e1ce4e19566f/3.png","151b2116e1607f066163062c849ea9db"],["/e1ce4e19566f/4.png","9be2d0a9213ff97c6f0695bb21ab7735"],["/e1ce4e19566f/5.png","df0031e66e15a961d221fada7f859eae"],["/e1ce4e19566f/6.png","3279d641a06b122f591eb6c858ccee45"],["/e1ce4e19566f/7.png","d182a0b3854d95f29c779db413f18ad4"],["/e1ce4e19566f/8.png","765d6d2c2b9391ab46a1ceb904db9683"],["/e1ce4e19566f/9.png","56da1aadbde4525009e68b4c3e66ea8e"],["/e43d8e1e85d5.html","c2bb3435bde0e340eb84cf8f785ed4a2"],["/e460c106f773.html","12cfd684592ef73966f2c319df72352c"],["/e460c106f773/image-20200402150825436.png","a4a160d87a22a6ca4077d71381c9ee1e"],["/e47508c7c8ce.html","31764f0bccf8aff0c9f6891d0732ef87"],["/e5ad37bd9e65.html","bc9cf19fca6595e19083585e89723aea"],["/e6323226da63.html","dfab070922bdd201cf35cb84f1c5d9c0"],["/e6ddddcf68e6.html","d60d0a88aa7808b0c9d76742aacc955c"],["/e72787e674a1.html","58f312eeee74b9a374ae8b36e6efed28"],["/e8d6d5f114d9.html","d6596d04bd9cccfa047354e0cfbdac10"],["/ed6a15da5969.html","0267a219ff540eae8d5ca48d67796674"],["/ed6a15da5969/01-字符串的常量池.png","31c59cacfe1c71c19bf82e7e9965732f"],["/ed6a15da5969/image-20200405165653102.png","b6bf856be92e3f5d734984734428b937"],["/ed9501b8d471.html","4e410c4fb3058de973ce16c3012bf09d"],["/ed9a6f7913bc.html","3f8d3e20a1746e18b6c5b37bd6304975"],["/ee5c0e48c3d1.html","4274c6b0ce062ca1301e7982ddc617a5"],["/eea72e773574.html","88bf6fd1fd3bf165db9b31a1c448dd0a"],["/f144d956d9c0.html","08302269eb9652c9e57664c9c0413fc1"],["/f144d956d9c0/image-20200403154017477.png","4a7c19f55135c2f2feb3c468fb5b38aa"],["/f144d956d9c0/image-20200403154049421.png","7941904bdce5fa61c95daec464dedb08"],["/f144d956d9c0/image-20200403154231003.png","e6c507adc67d9f2b7b2ffb80aff34428"],["/f144d956d9c0/image-20200403154423758.png","7e67cedc19797f41d50cb092f1cfccde"],["/f144d956d9c0/image-20200403154528596.png","aab072fd7bd28cbd286b08ffd9a94d65"],["/f144d956d9c0/image-20200403154642694.png","8606ca85a92287181a0067e80cc5aaa9"],["/f144d956d9c0/image-20200403154754885.png","b4ffd79c37e2b200beafbafadd46cc4b"],["/f144d956d9c0/image-20200403154918626.png","bc71862a94afc0ced7e1c5a876e90de7"],["/f144d956d9c0/image-20200403155024305.png","0051db760837a5fde99746b5f715e240"],["/f144d956d9c0/image-20200403155511139.png","5dc3af98ce932c53190bd64d79124839"],["/f144d956d9c0/image-20200403155616418.png","9c725cbbf1b3fc1fc204dfa9911a3cb3"],["/f144d956d9c0/image-20200403155721067.png","a235af280908dffaf54a246c5e614375"],["/f144d956d9c0/image-20200403160005254.png","d5048285b97fa69a449ca8545a1cc647"],["/f144d956d9c0/image-20200403160112674.png","8ebe62ea4f24b687a2ca40f9811fd4a6"],["/f144d956d9c0/image-20200403160327152.png","8335a0e987f2152179fa46e0fcdd833f"],["/f144d956d9c0/image-20200403160409883.png","edf6c918637bf6c20332501964b404c5"],["/f144d956d9c0/image-20200403160543542.png","02dcd244098ef54cbf83470889df94c3"],["/f144d956d9c0/image-20200403160734500.png","84246f78bee169ca76cd2988f5d79608"],["/f144d956d9c0/image-20200403160847663.png","3f21af1e7aebfa42d12dbd71b677c04d"],["/f144d956d9c0/image-20200403160922375.png","d6223e664c75b0bcd6a1a5a49db3d52d"],["/f144d956d9c0/image-20200403165402354.png","da7d7c18cf5a8bceb06fc2453b3217d0"],["/f563a9569919.html","fcbe4dd8b51c49018045b1ef1fdf5ac6"],["/f6db78db1f90.html","a27229e29262c2b4f9215f4307cc3627"],["/f70d50f7bf77.html","7e2e648a6489e7521cb0f8199bd53d74"],["/fb3dac0e46f1.html","c24f01e5151174e18800cb3038ecd526"],["/fcf19d075d62.html","e79a51604c4b9d706252fe395044ee57"],["/fcf19d075d62/单链表结构.png","77da287c03306c0af8bccea8fc75d98e"],["/fcf19d075d62/单链表结构特点.png","b77bae38ecd04f538d97bfef0933204b"],["/fcf19d075d62/堆栈.png","cc0c5baa240e657259487e4ba72ba36f"],["/fcf19d075d62/增加结点.png","c0b5d5d3dbc7dfe4fad9b5162b0e8a85"],["/fcf19d075d62/数据结构比喻.png","a5623a80743f52d623548e8a9a049159"],["/fcf19d075d62/数组删除.png","e71b3f0a3c7d5595ee5a644314926615"],["/fcf19d075d62/数组查询快.png","0ed31d09c19a740a45f1d607fad11bf9"],["/fcf19d075d62/数组添加.png","fef814236b4c08b9b240198505fef5d7"],["/fe248847c921.html","772b4da11731d1f15fa8a6459a1d7f83"],["/fee0daf7ca52.html","d55de7bcb0313eb536a9de8e72ba854e"],["/img/avatar.jpg","fa60f84cd72c22fa341f7c2ccf8cfbcf"],["/img/avatar.png","b199d5fc93eb5da97fe5934c3e0e1c62"],["/img/default.jpg","a564b03f4409d080701a816ea4f32b81"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default_about.jpg","99f1f2b62e8585fd5dbf742884ab354f"],["/img/default_archive.jpg","4dc33b40a700dd1d2cd01fc443278f5d"],["/img/default_category.jpg","b315fbf6a0937d27c36380ea4c59a42d"],["/img/default_post.jpg","256c13731ae0ab5d082f33d8a9a5552e"],["/img/default_post_index.jpg","b858cbbc619b777672927280920819fe"],["/img/default_tag.jpg","2b113de5269bf811a005293e6d3ee6cd"],["/img/favicon.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-128x128.png","f45d502c892ad54f9fddc00dd8a04a63"],["/img/icons/icon-144x144.png","c9d419ae3cad258fe568a01851f41c62"],["/img/icons/icon-152x152.png","582d561035fdc3fa8b40b1928c11e566"],["/img/icons/icon-192x192.png","47e76b4e7732c7a00ff4a45d4626c5eb"],["/img/icons/icon-384x384.png","536ad9bc8478762c40e6bd9eb2495423"],["/img/icons/icon-512x512.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-72x72.png","0f6e2d426fe26a088537c7704bdb6c49"],["/img/icons/icon-96x96.png","8a52f59125300b22369cf86d2198573a"],["/img/loading.gif","2136c8686469a7992ffad348dd7bacd7"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","3445f2074dd071b643dbc33e0be750b4"],["/js/boot.js","e2e7defad6d45a0409b0143389c87de0"],["/js/color-schema.js","3b82e09aa5708c9b5bd793304aa99a86"],["/js/duration.js","93216890ef56c36e62d2e5314e36a368"],["/js/events.js","33e028d78bd6a0739c153c52ae09fc4b"],["/js/img-lazyload.js","906050e291c80575119e9a45011fed62"],["/js/leancloud.js","f73d1d762afc4dc49a80f02f3b5f2261"],["/js/local-search.js","fbd0afaf0f77792287ecfc7664739c80"],["/js/plugins.js","0c27945e81144140b91cd815d11e05c4"],["/js/utils.js","f0d81bb1f391f84140fd327652b519f1"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","3ed6be9972e79b7e4433e6bf45609a0b"],["/page/10/index.html","7a2a3b303f6cdbf01bd4c0fb74c757a7"],["/page/11/index.html","6e777f340596decc38d5b0701e0a7fea"],["/page/12/index.html","99dd2f46e47ec5ce9151c48ff2dbb8e9"],["/page/13/index.html","130ecdd38efda8b0db42a1ae252f889b"],["/page/14/index.html","3a86e13ef1aa4fe20f059e4e2f291d98"],["/page/2/index.html","b2b2a2745e53b9bc111eb44f4da35b2a"],["/page/3/index.html","2d8a5e88a1829cdee515070455340f2d"],["/page/4/index.html","870719c7a5808f78a58d909ef63bc12a"],["/page/5/index.html","6ec217525e1610710c17fc5cf62d4e11"],["/page/6/index.html","48d9e0a601ebcf09f81e5ae591aa0340"],["/page/7/index.html","be7770b24dba962e4555cb10f8d78772"],["/page/8/index.html","f8d99bdbcc536de7504b04fc183bb02d"],["/page/9/index.html","45a522b9b201430d505ada063af1073c"],["/sw-register.js","8a7c774e01402bd3ed48237b27e8ccf3"],["/tags/Ajax/index.html","f7f40107a60606bbb4ecb6a16ff08af6"],["/tags/Hexo/index.html","f5e63c55e804c2c00e6c6cdbe3bc89ac"],["/tags/Html/index.html","82dc201ae0ced8cf2169d94b389b94a7"],["/tags/IntelliJ-IDEA/index.html","24048408bd01ecdfa7a9d0d914c09229"],["/tags/JMeter/index.html","d726bffbf09d8b78247e50cc382f53fe"],["/tags/JQuery/index.html","ec2f2892ea01a78ee0f34e0e6502d229"],["/tags/Java/index.html","948100944bd3efc0c58c94afc525e130"],["/tags/Java/page/10/index.html","7fd3173fe095a9c9fda85d749e11defb"],["/tags/Java/page/2/index.html","09a1fbe58ca7b13492f77f02a30bc914"],["/tags/Java/page/3/index.html","d8ed0f2b58d8a90ee746fc5967e76b5d"],["/tags/Java/page/4/index.html","3d359df22db435d4db7e9b505f83fe2f"],["/tags/Java/page/5/index.html","9d958aae01a5d30f2b317a72781a072a"],["/tags/Java/page/6/index.html","89366503e88ba6a62dc5f590bcc202e9"],["/tags/Java/page/7/index.html","65e2a14875e2af6613b13aeabdf37682"],["/tags/Java/page/8/index.html","b625c8c2e251cf72f51810eedbf00936"],["/tags/Java/page/9/index.html","e634b351b649af1f3e1b5db08a33b78b"],["/tags/Linux/index.html","428a0f2e91a3b1a2c93763740a23f6b5"],["/tags/Log4j/index.html","fdf55ea62012cfffcb14e770acf2a33c"],["/tags/Maven/index.html","ff1309cf215972a50cec4a75342e0060"],["/tags/MySQL/index.html","d139c8123ff7a33dfce46671b2d1738e"],["/tags/Redis/index.html","3c723f2b193778f428e44bcb62490c5d"],["/tags/Rest/index.html","c2fb055bbce022027af79e82a859af8e"],["/tags/SSM/index.html","217a55e3279dabfcf193492cc72ed7d9"],["/tags/Socket/index.html","bbf65ff85396fc4f6e0d01347b474d96"],["/tags/Solr/index.html","1e83b584ebbcf07fac9ec537786429b2"],["/tags/SpringBoot/index.html","69fbab69f9fedfa7f3a6e052fdfa7455"],["/tags/Travis/index.html","311f07606e35db6d727c8934123b5bcd"],["/tags/Ubuntu/index.html","58561863057f4ba6a1faf34ad24dd5be"],["/tags/WebService/index.html","025da0fa14034a83bf3bd08ec28ec497"],["/tags/index.html","c0eb86756f40f4d9088fc37d242cb9da"],["/tags/学车/index.html","00484d51990fe201231f2a1b114267fa"],["/tags/工具/index.html","26d91fd98e2f23bbe36ef5a9752ce0a8"],["/tags/数据库/index.html","24c75ab9fc50f96d91a8874595286590"],["/tags/日常/index.html","472bc672399c246a234f3d3d04fa90f7"],["/tags/流书/index.html","441ca1a2b69e93eff2940ff47cdad1b0"],["/tags/生活/index.html","aa6acef6af018a406c80a8650237ad4c"],["/tags/算法/index.html","10b2d8e793cbaf54e3d6f07ad4a3eabc"],["/tags/算法/page/2/index.html","86dc9affa5da67a661354c838b2b7415"],["/tags/蓝桥杯/index.html","a50256ebaa8e9c9c37549a37e7f8e65a"],["/tags/蓝桥杯/page/2/index.html","e031859b11dd22601b5810d805fa0804"],["/tags/语雀/index.html","d17b7aa4a41233edc491d7543be6b167"],["/tags/音乐/index.html","4e434135f1110ab1f4380e0c5d23338e"]];
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
