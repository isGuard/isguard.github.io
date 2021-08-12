/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/083b7d32f844/index.html","d2eb16254d5407df09fabfff1e6d3c3a"],["/0cfa7e337349/index.html","74a409e9227705261669c75c9497a8db"],["/102164869c4c/index.html","84c944d4f9d7584650194d6fb54f6f2e"],["/1698a47fcf6a/index.html","4f330418f152541147dbd0569fce621a"],["/18e2d5e4b6f3/index.html","005e0c52aac6c8e0ce50cd3f61cc05d8"],["/1c1b04db2c01/index.html","3bebee29c8b1d362cc91754b1839982b"],["/1e8a3115b061/index.html","6ee18ab70e76bbebed1c55bbdbfa205b"],["/2605a2a5060e/index.html","c12a8300d8d9becfd5354ee7fcea1492"],["/2f190b34c2b3/index.html","0b762c7466bc205e8f9b75a4b42de107"],["/3494683249bc/index.html","06160d69d6a244f1c9d86ee2025dee1a"],["/378fe56bd246/1.png","7241bf6d92fe0da0338bd5631aca6c13"],["/378fe56bd246/2.png","3c471ab75051f639f2e2251aa7b1a477"],["/378fe56bd246/3.png","82d2c0489501faf560f15be718d4092f"],["/378fe56bd246/4.png","d69241af8d0fc37d548ee077f3da45e5"],["/378fe56bd246/index.html","96868ee61c96084b14f6c6e1733e429c"],["/3dc224c52b20/1.jpg","53c3e68cab10d6e33338d187374b7a58"],["/3dc224c52b20/index.html","0ea40113d91761414d3ef0f9a796c886"],["/3e4b52661133/index.html","68c8d0da092146e82b497bd68f546ab9"],["/404.html","e6f56e0a802ed87d75021a145d04c625"],["/40901eb5b99a/index.html","4789452658fb9f24333b916dadc05dab"],["/4264568384dd/index.html","5eb7dccbefb8c2dd6972a2df17c30be4"],["/49d077e64aa6/index.html","4b9442fc3c53459b296eb937c78ca1ab"],["/51c5316ba4dc/index.html","22c85d018cd11fe73e543fb3c8e57202"],["/543613fef7da/index.html","777a8844e8ce948b4ffd4eb2e546b623"],["/57bfd13fa382/index.html","ddfb6f233340fedcd0aff5f238620312"],["/5d0a7171e2be/1.png","818af3dfe0c752cfed2e1add04fc73b3"],["/5d0a7171e2be/2.png","79012ed062799ff0307982fd28b5d919"],["/5d0a7171e2be/3.png","34e138de8914a7fd7390fb4e30a05b3f"],["/5d0a7171e2be/index.html","bc3a5b88209a3b6239c661f4d03e6894"],["/5e4e6842d754/index.html","dd8e74d911eaf110c8ca8722e571237f"],["/641601337f0b/index.html","88e542444ee5dfa65635c5c79a6fbc63"],["/65e4aa78c9e6/index.html","e1345666f52181116caf09b581005a97"],["/69bb6d2d9142/index.html","ae3d22b202efe267bffc83ca780f07d2"],["/6b7289fc875f/index.html","72977f22466d98258bd33ff1e0bc4e95"],["/70ca5927dc18/index.html","883641d30aafe79035891226d80ec076"],["/7434890e6022/index.html","45f45813fa1f5e9b84d49a2d1f74318c"],["/79edd52b58c3/index.html","564b5e9752d37c9115fde5722686e698"],["/7c039cfe73f4/index.html","f089a3935f673630f79044795fe69d34"],["/9865be07681a/index.html","0b6158f7f6509d984107bbf1e19f2c99"],["/a21c0106b4dc/index.html","7848b4116e111268b336f3a3036ff836"],["/a2cff47e45b4/1.png","5d3d1c01d440f79c95cb4902959b52ac"],["/a2cff47e45b4/2.png","818af3dfe0c752cfed2e1add04fc73b3"],["/a2cff47e45b4/index.html","a7980b07c9d25193b1a48c337e2e80e1"],["/a39447736c9e/index.html","dbf485505665a91d0df2ce61a089ead1"],["/about/index.html","ac5c537641b8c8e72e460f63dce378ee"],["/aee8b86da60e/index.html","a93499ab7256e95f23e9ad3b5b39909d"],["/archives/2018/04/index.html","646d994a5a254a71b33f7b5758b05262"],["/archives/2018/04/page/2/index.html","72d5e828fb5d7adfcbea296fd69fb85b"],["/archives/2018/index.html","657d55b4bb697da52a7f4fcc391d1edc"],["/archives/2018/page/2/index.html","203983088136cb0c587d7d23343289e5"],["/archives/2019/01/index.html","8b3127d1ce00db8e1498f5c1006dfc60"],["/archives/2019/01/page/2/index.html","9dfb1db11fa2e2dcb85edf5858f3603b"],["/archives/2019/02/index.html","6904ddf08095820c63d34f35e38aee2f"],["/archives/2019/03/index.html","4649deedd9e804e92b18b6da84a8e2f4"],["/archives/2019/04/index.html","1aa23630ca14a1340f634923279cb8fa"],["/archives/2019/04/page/2/index.html","90e3f76679d6e61db9930e51ff3385ff"],["/archives/2019/05/index.html","39635aff1539b90a09e012027d4b677b"],["/archives/2019/11/index.html","1130d88d13535a1c173683051788d558"],["/archives/2019/index.html","8d479be680dc5d87048a3147a7212e96"],["/archives/2019/page/2/index.html","a7e1a15800ac25f3a0d4e3f385f8f651"],["/archives/2019/page/3/index.html","a386b78224e4e8f77adbab66839d26e1"],["/archives/2019/page/4/index.html","bc14a9252cd321906f3a18e49465077b"],["/archives/2019/page/5/index.html","8ea0d9293d3d866e0a25b432644b07e5"],["/archives/index.html","f2ee62002625214029a0008c51e44285"],["/archives/page/2/index.html","961fca10f937ff164f43d39a52d0b549"],["/archives/page/3/index.html","e6e44787c703ad94f1ece585c882db42"],["/archives/page/4/index.html","5cc68ebbf1fe66662dabf0b6b9c7b06f"],["/archives/page/5/index.html","2851e58c642fde07e6c7f4231b5be752"],["/archives/page/6/index.html","6db9dc6ac26a2ad706e945bda333abdc"],["/b17819308f04/1.png","210fb1d064dc93db35e3e76964f37fa7"],["/b17819308f04/index.html","9ffde015bdfaf80f264c46b063703fd2"],["/b6106669f562/1.png","949023d0e2d579c42339865b6aacd49f"],["/b6106669f562/2.png","660751c34fc040ee54a9a0d8e45e19e1"],["/b6106669f562/3.png","2283adc384cd1a13bf1c011e46abb704"],["/b6106669f562/4.png","af69b70a06548f031933c6b2162391e8"],["/b6106669f562/5.png","da6bc47d2eea0a8bd5e3dd948f1f5cd8"],["/b6106669f562/index.html","f0d89b52ae6cd8077bbe9a5569177e7a"],["/b6a4fd82fcfc/index.html","08a1ac126d12cad1a2c44e3f58bb540b"],["/bef1ac8b1d67/index.html","2acacb7158797b0f7a60f91c7894d3ab"],["/c6c507ac38c4/index.html","f0a9a0f997d6446c926ae9b6cda8c770"],["/c748da646b0b/index.html","6972451a1c51c1d7126e82ed08fb2bed"],["/categories/Hexo/index.html","a8d31f3c04ac6b3b18d4a526cd58da04"],["/categories/Html/index.html","9218d73425ea8dcd9cf54f735aea621d"],["/categories/Java/index.html","a6a79e93f9343e3737651ee20a17f504"],["/categories/Java/page/2/index.html","ec461fa3beb388db8c2f32f33b5a183f"],["/categories/index.html","ed61def574db42bb7afd153c76c5abac"],["/categories/工具/index.html","651b3eb63c4dbb2a29c80dbcf58b0057"],["/categories/数据库/index.html","7146b39a11c4daf734b5cdd2b8ec7b3f"],["/categories/日常/index.html","9748c3d4791481be604916c16e010dfd"],["/categories/生活/index.html","63824c133f1dcb149598392f96dad35d"],["/categories/算法/index.html","521cba725cc1de15d4ef955011a28255"],["/categories/算法/page/2/index.html","b2a8a58ee51547d228a31ef4ff2d298a"],["/cf7513efc8a3/index.html","e719121ac4c782ca45aeda38d7b2189b"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/main.css","ce561e9e98a6a4ba8ceb53e06d0526fd"],["/d149732b2cfe/index.html","952656a3123e2ac6ab21564687bf301f"],["/d2d51dce913f/index.html","82d83972eb558c26a7e8c31a8ae738c7"],["/d8aaf5d37cb0/index.html","2156577782ae5159ba9035fe2a475003"],["/dc5ef838632f/index.html","0ff537b1f4b1efcf5c94f25ed773346e"],["/df5068bb57d2/index.html","f5a06ff2013446889636b82e6abedc89"],["/e1ce4e19566f/1.png","14566fd2884ad4e49c788f61610ba157"],["/e1ce4e19566f/10.png","c44d667dcf002ee0ddeaa9d234ebec7e"],["/e1ce4e19566f/11.png","ff978457bfc1c7a3c62d76b52e938900"],["/e1ce4e19566f/12.png","5e42cfb6aa944adbb6f18b8f2690c1b1"],["/e1ce4e19566f/13.png","d06305fbfd2d01b606c3b522cb7ce975"],["/e1ce4e19566f/14.png","be0a78ddaa7f099ee87278dd981bae40"],["/e1ce4e19566f/15.png","2a8afd5adf15472eb3170df5ea6003b8"],["/e1ce4e19566f/16.png","044a34ab53207c1068b5a4a1a7b5d387"],["/e1ce4e19566f/17.png","93f15cfad7eec9dd014c15168a401e30"],["/e1ce4e19566f/2.png","dfb95266878f7d9cce2409fe4afc4399"],["/e1ce4e19566f/3.png","af8621f09dcee4d2d885ad0e713175f6"],["/e1ce4e19566f/4.png","0f537a6a2053961ccff90fd9e392d6b0"],["/e1ce4e19566f/5.png","3a5f704b11c2bf99886d32e7da88586f"],["/e1ce4e19566f/6.png","f02dfca47f9f86ee56fa7683a68f51e3"],["/e1ce4e19566f/7.png","14d2a46c5d059614c8a5bc0a5e09d597"],["/e1ce4e19566f/8.png","5247cd8ef52d31a1bb32636acaab2f12"],["/e1ce4e19566f/9.png","9dd3b78513e214e61d311d374082dda4"],["/e1ce4e19566f/index.html","522926f44214abb89df5a3559439fe1c"],["/e72787e674a1/index.html","1f3d7bab7ede44af1d03483bc4b40d28"],["/e8d6d5f114d9/index.html","e93af2b93ec1630f348dec17b9e95b97"],["/ee5c0e48c3d1/index.html","7ffc18168379acee9af662df3cf4a9bc"],["/eea72e773574/index.html","aebee958e694f9608cc2c12ff7ebc363"],["/f563a9569919/index.html","ee70fecdbe16df416519c3adccbb72d8"],["/f6db78db1f90/index.html","2e0fa7bd67b586f2626c39b04ea7aec7"],["/fe248847c921/index.html","e1d7ec913a156ec69c234891981654e0"],["/img/avatar.jpg","fa60f84cd72c22fa341f7c2ccf8cfbcf"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.jpg","74193e310d94390068356ea7d082b282"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default_about.jpg","ac5b38e46443c78d0b74ae09f38b8540"],["/img/default_archive.jpg","4ceba240061e012a84dfb6108e588627"],["/img/default_category.jpg","b62ec9e64befde092a04de0c10a2ad33"],["/img/default_post.jpg","fcce71914901e5af8d048752138c91c0"],["/img/default_post_index.jpg","d389c1d69f3f39aeba9bae33ef23b1cd"],["/img/default_tag.jpg","0f5bb5561bbd1d73229d509aa616e967"],["/img/favicon.png","00468deb65db5e95bd59026d2e2a0026"],["/img/icons/icon-128x128.png","c7c3c59f49e4de116bd033f23f24e04f"],["/img/icons/icon-144x144.png","5b0386b786789c013a0d6b2a0f73fe2e"],["/img/icons/icon-152x152.png","c2027009a57c0189992583ecfea5a4f2"],["/img/icons/icon-192x192.png","c5a490dea61d284ee3ecb74799ab1e38"],["/img/icons/icon-384x384.png","edffcc99b822a364f18282d3ec311fa3"],["/img/icons/icon-512x512.png","00468deb65db5e95bd59026d2e2a0026"],["/img/icons/icon-72x72.png","86df8695650b1d7f9259bf8b68e9871b"],["/img/icons/icon-96x96.png","d82242260857521b21145fb75d54c180"],["/img/loading.gif","2136c8686469a7992ffad348dd7bacd7"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","fd26bf3ba9bc5950e5f5f9804387ae06"],["/js/boot.js","169ffc208dd5e8717a784877dc45828f"],["/js/color-schema.js","c6cf5c216322ed487d845c91d004b2a0"],["/js/events.js","d1ad0ef23e2b8f5330d37b9432e564af"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","d5b5f8c32b663e0ee42a21be17585f83"],["/js/local-search.js","94369155d7ed57ddb6e464adaa0fbc0e"],["/js/plugins.js","a21bf058047d0f3a2ee95b8c911e6916"],["/js/utils.js","a19e10303f1fc4143cab109ba27dbf75"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","a8a8b1aeff89a704ac4f5f21901106cc"],["/page/2/index.html","f8a67f0892f8406fbbef38894ce08efb"],["/page/3/index.html","8ffbeff83bb2d5eff22a7fff70426229"],["/page/4/index.html","fe91498c224737147aecf37c7982edbc"],["/page/5/index.html","30907910c3af624874df0278209dc579"],["/page/6/index.html","35e79b3f99780c5fb0f3f6c28259b3e7"],["/sw-register.js","e8ab277391eb8f3f0ae457f68c8a0471"],["/tags/Ajax/index.html","f69b58550ddf37d2a7234e5596977501"],["/tags/Hexo/index.html","fee623daebd8446c76fec163f3261c3d"],["/tags/Html/index.html","128f19e3a20f13a4d373f1258f4f2f43"],["/tags/IntelliJ-IDEA/index.html","5d8add8ae41890bbb89658970d2e2cab"],["/tags/JMeter/index.html","b2b201141a9319fd73c413642ca73b5f"],["/tags/JQuery/index.html","e871bee8dd165035a6ed13484aefc0e3"],["/tags/Java/index.html","5a0a24e1a077d8bd394d6917a9e74b7e"],["/tags/Java/page/2/index.html","475c87a50f71e0847a01f9d4469c2cbc"],["/tags/Java/page/3/index.html","6d4a5f052f1a0af6f91234046aebeca6"],["/tags/Java/page/4/index.html","8e78193c8ee422554274495e8ec94eaf"],["/tags/Log4j/index.html","8ff82442f4b3a9c1f61e13a95fa5fa73"],["/tags/MySQL/index.html","911a114ff0a6806d2757cfa5b6d1f6d2"],["/tags/Redis/index.html","920768c13571375634b777bffee9dc94"],["/tags/Rest/index.html","64e671743d01fd930ace3c804371d9b7"],["/tags/SSM/index.html","c1a0ea3af27bae1b2cc4dc4db466d403"],["/tags/Socket/index.html","3bb8f374dc7afcbf935b9d0801108381"],["/tags/Solr/index.html","fc823926f583b6f19161535221d98a41"],["/tags/SpringBoot/index.html","6b6ed26a462446bb12b8fc8090671932"],["/tags/Travis/index.html","ec42563b0ed5f277a9e2d6f71dcf4ac8"],["/tags/WebService/index.html","66b5f8629dd3a3388899ddbbfbcff1af"],["/tags/index.html","b491da353fc03ba58481d2f6bb7f8cfe"],["/tags/学车/index.html","e1f2b9e665ba992344df1524466c86f5"],["/tags/工具/index.html","fbc6e5cfb7bc5951e8c48d2946b3d53f"],["/tags/数据库/index.html","1d71f81b94aaf8a4b036600f37e82310"],["/tags/日常/index.html","9402b349c1c0eb112a03af829fdf87e4"],["/tags/流书/index.html","b70ac150f7d6196582d8604e0c283fb8"],["/tags/生活/index.html","0198d82a40dbf59be57a95c039724f96"],["/tags/算法/index.html","024034d4f0f0b4522199cc65bd1a8f7e"],["/tags/算法/page/2/index.html","d42ac027550241d976cf02cc1d364699"],["/tags/蓝桥杯/index.html","4f386c0f189c68460c87463edfd3554c"],["/tags/蓝桥杯/page/2/index.html","5c48952f1f6dd7692f34c06c822e32a9"]];
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
