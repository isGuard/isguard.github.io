/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/083b7d32f844/index.html","914a2c4d3fbcf0ed99b15d870f92b577"],["/0cfa7e337349/index.html","01b2db764de65bda8035128e2e629fd3"],["/102164869c4c/index.html","1b8b59913be23c415b42bf590b846c3f"],["/1698a47fcf6a/index.html","6f48bf485b592cd224e7c55d77106f40"],["/18e2d5e4b6f3/index.html","699b3082e61ede47c8508ae28bbc7a8f"],["/1c1b04db2c01/index.html","451c652208f3df86e6b33d4425d1bf4d"],["/1e8a3115b061/index.html","16cdb98d36f6c95ae718a453d21e8368"],["/2605a2a5060e/index.html","acaca42cf6a70af0a30f802faef02a78"],["/2f190b34c2b3/index.html","3dbe3870b616829b1583c34c2bc6f2cf"],["/3494683249bc/index.html","8667d1217db5bc1686e6eb0811a3e745"],["/378fe56bd246/1.png","7241bf6d92fe0da0338bd5631aca6c13"],["/378fe56bd246/2.png","3c471ab75051f639f2e2251aa7b1a477"],["/378fe56bd246/3.png","82d2c0489501faf560f15be718d4092f"],["/378fe56bd246/4.png","d69241af8d0fc37d548ee077f3da45e5"],["/378fe56bd246/index.html","aec70954619e0311cb619f9aca78039f"],["/3dc224c52b20/1.jpg","53c3e68cab10d6e33338d187374b7a58"],["/3dc224c52b20/index.html","5f6a97656e17206c6e04e046a922feb6"],["/3e4b52661133/index.html","1dc209e0c016b32703d8be1122279362"],["/404.html","4d6457cb038ca1df1e26ae645f58d807"],["/40901eb5b99a/index.html","6c2837e16741ab91bcff812f6ee1140b"],["/4264568384dd/index.html","b42e8199983e81f7315889d6c4e7f42a"],["/49d077e64aa6/index.html","4b51a64c8ad0fd241262be5fe6c41dee"],["/51c5316ba4dc/index.html","02240630e99aeddce75384325653b814"],["/543613fef7da/index.html","7f0a935ac22351c5892f6817fe5c0e74"],["/57bfd13fa382/index.html","09a19705b0dec190136c55412d25980e"],["/5d0a7171e2be/1.png","818af3dfe0c752cfed2e1add04fc73b3"],["/5d0a7171e2be/2.png","79012ed062799ff0307982fd28b5d919"],["/5d0a7171e2be/3.png","34e138de8914a7fd7390fb4e30a05b3f"],["/5d0a7171e2be/index.html","c42e1af96ce4d621da33799d7ef0df5c"],["/5e4e6842d754/index.html","6b615a163706f592a929996ae7e2ba74"],["/641601337f0b/index.html","f6da851f9340beee8ce856d436676705"],["/65e4aa78c9e6/index.html","028fc013a086e7ad545ef99ea7cba871"],["/69bb6d2d9142/index.html","168bbc76868ce708e39ab0101823ac5d"],["/6b7289fc875f/index.html","2fa86b4134ad81584cbffa206df9174e"],["/70ca5927dc18/index.html","f02cfead9a514c087b7a7dd01424d53f"],["/7434890e6022/index.html","47478b68739de8d042e088800a608cfd"],["/79edd52b58c3/index.html","9786fc9e7940aa1ac642cf9a1c8903a6"],["/7c039cfe73f4/index.html","864f46103d3ab39f6b00d15c59cca710"],["/9865be07681a/index.html","d61321459fbbe4c49f3ef2b2b2216fea"],["/a21c0106b4dc/index.html","a2b39e6e4fd1f061edb54e654bf522ac"],["/a2cff47e45b4/1.png","5d3d1c01d440f79c95cb4902959b52ac"],["/a2cff47e45b4/2.png","818af3dfe0c752cfed2e1add04fc73b3"],["/a2cff47e45b4/index.html","17a19f1a0347921563837df5c843a2bb"],["/a39447736c9e/index.html","0b7551650017a7e7a0dbeb6bee22b278"],["/about/index.html","f4f33e3e0d95be58fa04802ec665b3f3"],["/aee8b86da60e/index.html","5eac07233b3050dd95334c2104b23e01"],["/archives/2018/04/index.html","93ae640eb9f0754c640ba2739d4f1fc3"],["/archives/2018/04/page/2/index.html","0a47918d75694ebe6b6754f2b240550d"],["/archives/2018/index.html","ffa13492f609ab752b1eb6e0c4b1182f"],["/archives/2018/page/2/index.html","e58117fcf0ee6d9b4a3d51977fbaec2f"],["/archives/2019/01/index.html","5e598e26403588e68a703fb6635e1ccc"],["/archives/2019/01/page/2/index.html","30b7976a3483a4912bf8e27a3ba3f39f"],["/archives/2019/02/index.html","9735e353f77c7f900cf401e4dc6bbf77"],["/archives/2019/03/index.html","c5d42a79441d2713312715cb53bc0f2e"],["/archives/2019/04/index.html","4b94fba5d412b2bed7a86578f758de65"],["/archives/2019/04/page/2/index.html","351cd06260e3b39572b1e22d729ed3cc"],["/archives/2019/05/index.html","0ec42a619f405d411a60a8a9c3c64969"],["/archives/2019/11/index.html","edab132b1b5c4535abdbc106cde4ca8e"],["/archives/2019/index.html","97d6c14746908a89569d9df5530e8937"],["/archives/2019/page/2/index.html","ada0ae9e497859caaeb13a3180d4f292"],["/archives/2019/page/3/index.html","c52cf5f966ee855235a0c593e3c71756"],["/archives/2019/page/4/index.html","41ea340baa572d842175b999a4ef0553"],["/archives/2019/page/5/index.html","0c49f7ac10150ff553ac8e556f137858"],["/archives/index.html","d7706b33a30add6aede7c779717532d4"],["/archives/page/2/index.html","dd6ffa40b390d51e8e7341c8aa7793b9"],["/archives/page/3/index.html","7518bc749dc2215829cc338b14993e34"],["/archives/page/4/index.html","39ffa434af0e19a42f548b56cc69009a"],["/archives/page/5/index.html","4d050e47417290dcde8ca183b78bd36b"],["/archives/page/6/index.html","4282c5a2da1fa50de9227329c0eea4ee"],["/b17819308f04/1.png","210fb1d064dc93db35e3e76964f37fa7"],["/b17819308f04/index.html","3f603edf39e43ddbdd95e802ea564e30"],["/b6106669f562/1.png","949023d0e2d579c42339865b6aacd49f"],["/b6106669f562/2.png","660751c34fc040ee54a9a0d8e45e19e1"],["/b6106669f562/3.png","2283adc384cd1a13bf1c011e46abb704"],["/b6106669f562/4.png","af69b70a06548f031933c6b2162391e8"],["/b6106669f562/5.png","da6bc47d2eea0a8bd5e3dd948f1f5cd8"],["/b6106669f562/index.html","a50fefe8ec07dab519fb5eb68a535c75"],["/b6a4fd82fcfc/index.html","15f5fe23939251c0dd945412629d864d"],["/bef1ac8b1d67/index.html","f2c4633a824a544c8e01697ea0e9a08b"],["/c6c507ac38c4/index.html","cfeb6a41f4bc244826a04f6c7ee03048"],["/c748da646b0b/index.html","4e4f8549b25c10d0b9d9f6ea7bba0808"],["/categories/Hexo/index.html","d86973c5a072e32c56173a97ff0ef7c7"],["/categories/Html/index.html","d75b447aac038c4d66e74c84c9c098cd"],["/categories/Java/index.html","f0c79342e3b385d631548c2c9cf4e26e"],["/categories/Java/page/2/index.html","ca1f2348aa9bec64237b439db4933586"],["/categories/index.html","8858071cbdc7c0db46faefbaaa08d188"],["/categories/工具/index.html","6708d45a8b79461bb938217920991b4b"],["/categories/数据库/index.html","2b99907e9d8b9af00b6fb0db43d49c69"],["/categories/日常/index.html","6d6a912fa683f12afe94867177c006d9"],["/categories/生活/index.html","420372aaf122a2c32cb1a71532218ce0"],["/categories/算法/index.html","86daf4560fcc6dce586356067d240478"],["/categories/算法/page/2/index.html","70b911a991be19e8c0d33b3a806d94c9"],["/cf7513efc8a3/index.html","3375d75eb39715c880a915ed258239a2"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/main.css","ce561e9e98a6a4ba8ceb53e06d0526fd"],["/d149732b2cfe/index.html","1f16fa7c77182102143c22e68d93b056"],["/d2d51dce913f/index.html","01571f01dc1f8646091060358ec0505b"],["/d8aaf5d37cb0/index.html","3cd65f01d8e13140cf5faff4f52826ca"],["/dc5ef838632f/index.html","b052b0c7de43762f032d7d552d46e760"],["/df5068bb57d2/index.html","d17a0dbd15d3c94bd9cc5da2d3393acc"],["/e1ce4e19566f/1.png","14566fd2884ad4e49c788f61610ba157"],["/e1ce4e19566f/10.png","c44d667dcf002ee0ddeaa9d234ebec7e"],["/e1ce4e19566f/11.png","ff978457bfc1c7a3c62d76b52e938900"],["/e1ce4e19566f/12.png","5e42cfb6aa944adbb6f18b8f2690c1b1"],["/e1ce4e19566f/13.png","d06305fbfd2d01b606c3b522cb7ce975"],["/e1ce4e19566f/14.png","be0a78ddaa7f099ee87278dd981bae40"],["/e1ce4e19566f/15.png","2a8afd5adf15472eb3170df5ea6003b8"],["/e1ce4e19566f/16.png","044a34ab53207c1068b5a4a1a7b5d387"],["/e1ce4e19566f/17.png","93f15cfad7eec9dd014c15168a401e30"],["/e1ce4e19566f/2.png","dfb95266878f7d9cce2409fe4afc4399"],["/e1ce4e19566f/3.png","af8621f09dcee4d2d885ad0e713175f6"],["/e1ce4e19566f/4.png","0f537a6a2053961ccff90fd9e392d6b0"],["/e1ce4e19566f/5.png","3a5f704b11c2bf99886d32e7da88586f"],["/e1ce4e19566f/6.png","f02dfca47f9f86ee56fa7683a68f51e3"],["/e1ce4e19566f/7.png","14d2a46c5d059614c8a5bc0a5e09d597"],["/e1ce4e19566f/8.png","5247cd8ef52d31a1bb32636acaab2f12"],["/e1ce4e19566f/9.png","9dd3b78513e214e61d311d374082dda4"],["/e1ce4e19566f/index.html","ce6013ea293d8adcb7a5c9aa665a2399"],["/e72787e674a1/index.html","0101c82ee99a9c48c7206da426a8197d"],["/e8d6d5f114d9/index.html","af880948256d3be6296a70f7a309bd8c"],["/ee5c0e48c3d1/index.html","7a37ab927040743a5ed0ef34f768722e"],["/eea72e773574/index.html","643fe92f6c924d039be18debddd4dd70"],["/f563a9569919/index.html","e42c997e412aad1fbd0fddafb6f52eae"],["/f6db78db1f90/index.html","2fa1395f6c1f4861505e8837589baf3c"],["/fe248847c921/index.html","908b33c5d1e8bcbfa2f901eacae651ea"],["/img/avatar.jpg","fa60f84cd72c22fa341f7c2ccf8cfbcf"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.jpg","74193e310d94390068356ea7d082b282"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default_about.jpg","ac5b38e46443c78d0b74ae09f38b8540"],["/img/default_archive.jpg","4ceba240061e012a84dfb6108e588627"],["/img/default_category.jpg","b62ec9e64befde092a04de0c10a2ad33"],["/img/default_post.jpg","fcce71914901e5af8d048752138c91c0"],["/img/default_post_index.jpg","d389c1d69f3f39aeba9bae33ef23b1cd"],["/img/default_tag.jpg","0f5bb5561bbd1d73229d509aa616e967"],["/img/favicon.png","00468deb65db5e95bd59026d2e2a0026"],["/img/icons/icon-128x128.png","c7c3c59f49e4de116bd033f23f24e04f"],["/img/icons/icon-144x144.png","5b0386b786789c013a0d6b2a0f73fe2e"],["/img/icons/icon-152x152.png","c2027009a57c0189992583ecfea5a4f2"],["/img/icons/icon-192x192.png","c5a490dea61d284ee3ecb74799ab1e38"],["/img/icons/icon-384x384.png","edffcc99b822a364f18282d3ec311fa3"],["/img/icons/icon-512x512.png","00468deb65db5e95bd59026d2e2a0026"],["/img/icons/icon-72x72.png","86df8695650b1d7f9259bf8b68e9871b"],["/img/icons/icon-96x96.png","d82242260857521b21145fb75d54c180"],["/img/loading.gif","2136c8686469a7992ffad348dd7bacd7"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","feb5e97b99809f10fc99c0e442564b53"],["/js/boot.js","169ffc208dd5e8717a784877dc45828f"],["/js/color-schema.js","c6cf5c216322ed487d845c91d004b2a0"],["/js/events.js","d1ad0ef23e2b8f5330d37b9432e564af"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","d5b5f8c32b663e0ee42a21be17585f83"],["/js/local-search.js","94369155d7ed57ddb6e464adaa0fbc0e"],["/js/plugins.js","a21bf058047d0f3a2ee95b8c911e6916"],["/js/utils.js","a19e10303f1fc4143cab109ba27dbf75"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","b14b615859e3ec94f2c67bf7d1dfe279"],["/page/2/index.html","3b625ef3ec435ad637695cca71f07823"],["/page/3/index.html","4eedc4a010b9685da9b9def9bfed8df9"],["/page/4/index.html","0d02ee8373e61b1e69b20dfa8267c45b"],["/page/5/index.html","60d4dd7ee8a4bcb7b266dad63fb9b648"],["/page/6/index.html","233d915186abca21dcfb761750fa4a3e"],["/sw-register.js","f0ccf65174e04cb403a6b6a1ec7e6deb"],["/tags/Ajax/index.html","f8a1b5ab7a539c85231d2bbf32ed17b7"],["/tags/Hexo/index.html","e521a1dfd65fbf2aaaf0e0cdd937bb4e"],["/tags/Html/index.html","80a3b4dbec6afa40c2c489e6c67d69bd"],["/tags/IntelliJ-IDEA/index.html","adca2bde55d27269f3def4a6013ad0da"],["/tags/JMeter/index.html","b59f0aa8e7575c7084449474ab182297"],["/tags/JQuery/index.html","cf9784ae4d8b4e4bbb5528e5e98a9686"],["/tags/Java/index.html","4670a06fade587ce9f8fc928b5e06c53"],["/tags/Java/page/2/index.html","b98720ff619800a7610934b1d2a433ec"],["/tags/Java/page/3/index.html","917ec4fb93be21c74f063e25bb3f9a4f"],["/tags/Java/page/4/index.html","b657b5542a7808d3fe896b90be0d4109"],["/tags/Log4j/index.html","9436b362130dd1cc83075da2674ed5ad"],["/tags/MySQL/index.html","178c027acf428a81ed4f9d497309a874"],["/tags/Redis/index.html","8d1e54db92acd0ed89dc88ba9bc81ed2"],["/tags/Rest/index.html","5ef9be189cd36ad596e8e94cae8eefcf"],["/tags/SSM/index.html","36adc30a64a46ff82d1c5dfa8dfc805e"],["/tags/Socket/index.html","d19eaba02cea0a14359423e858ad7c80"],["/tags/Solr/index.html","97af61c19392fb4bab99d8c211861243"],["/tags/SpringBoot/index.html","62b816dc6a0762ab3657321386f81be7"],["/tags/Travis/index.html","9d23c61081b08f670f738979757e5887"],["/tags/WebService/index.html","aca1c9c67242a87dbf48adc421d34e3f"],["/tags/index.html","0f5019cf0016baa9b71c2aa57997af30"],["/tags/学车/index.html","ae823d1fe45eabf784ea2e9f75feb788"],["/tags/工具/index.html","5124fcfb64c5f98f2aa69a4afb7a1275"],["/tags/数据库/index.html","0f077c9809914ad445c42d84bfd7b0e6"],["/tags/日常/index.html","e3e37be1dfa990a484d2580402aab731"],["/tags/流书/index.html","c0aa7696b33bdc806ae69bb78f77c58d"],["/tags/生活/index.html","f1285af6f2a1188c9a75500de42500c6"],["/tags/算法/index.html","d2d953f05bb49c304c8320406584d320"],["/tags/算法/page/2/index.html","18421d90d4e792a3e56b283a1487bfb4"],["/tags/蓝桥杯/index.html","dbdd39ce0e6d4bf6912d70e83048a8c0"],["/tags/蓝桥杯/page/2/index.html","68f80e8ef05e801b50952908e5662654"]];
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
