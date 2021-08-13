/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/083b7d32f844.html","29386977b50a29a3ade5dc54823fe6a2"],["/0cfa7e337349.html","ac75f10176fdfc39fbb23d8fb5efadcd"],["/102164869c4c.html","67e81afce42e86362df44eac0239da5a"],["/1698a47fcf6a.html","855a05336619f0ca736009949aca7ada"],["/18e2d5e4b6f3.html","6fb09b56e1f4778740501b9c5278031a"],["/1c1b04db2c01.html","720c6cbdb47b21472b761df1b96868d9"],["/1e8a3115b061.html","2d04007ecb85e29f78201c7c851bc4d7"],["/2605a2a5060e.html","7977e30c7500c79e370acb8f800a37f3"],["/2f190b34c2b3.html","ce9bd9c1a805e014e98fba84c42b990c"],["/3494683249bc.html","db4371db7d0ca2261ef725491319d1d1"],["/378fe56bd246.html","a26f44a77558ac0023a0f8a50aed3d1b"],["/378fe56bd246/1.png","e8ab3fad15c582d8346389cb1e0622db"],["/378fe56bd246/2.png","93a6489e32cd0606bbd2d7aefcac2af5"],["/378fe56bd246/3.png","756b09e3719426443eb8ccc8f3cd6826"],["/378fe56bd246/4.png","676b1d2d704c4ce1985bdd593a670a16"],["/3dc224c52b20.html","5f685f71d367a6017743081d19dadd95"],["/3dc224c52b20/1.jpg","d3740d1dca2d445a65b7a7ea2a0db495"],["/3e4b52661133.html","cac371ffc2ecc0402144c4edda56ddbd"],["/404.html","6030a62ee526b5fe4cb3da3ef7edb47d"],["/40901eb5b99a.html","c6bdfb73ad29d03ead6c95a0caea428d"],["/4264568384dd.html","47e1d5347859ff9087d6f2f95dcf5f3d"],["/49d077e64aa6.html","e0c5df5fa02c54a645c4b5555ea89cc8"],["/51c5316ba4dc.html","3474f209f06221b5b7f980d381fdea71"],["/543613fef7da.html","2dc66fdefa8f7963f2d1b5fa38d111bb"],["/57bfd13fa382.html","1dd5d0fe295cbd0726a21ea717efbde3"],["/5d0a7171e2be.html","0a8672f13cfedf609c753934e241220f"],["/5d0a7171e2be/1.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/5d0a7171e2be/2.png","66ba7100d5a6b8a35fcd8984ae45f464"],["/5d0a7171e2be/3.png","7098e295719eede6400d6f6ab773bd19"],["/5e4e6842d754.html","4ceb6653fa6243621565148894c68c1e"],["/641601337f0b.html","c78026cde7355c58bafd55582edee462"],["/65e4aa78c9e6.html","185930cad17d01ea813268159b160fbc"],["/69bb6d2d9142.html","637ec747f73acccedcdd7ee4be38c73e"],["/6b7289fc875f.html","11522494e7a5f9834a7b84ef6ff7869e"],["/70ca5927dc18.html","f9c0458396ed062732455897f3df3288"],["/7434890e6022.html","d46d24b27e8000f4f54c70d77647f22c"],["/79edd52b58c3.html","cc7554e5fedcb1c0fbf6581efc423789"],["/7c039cfe73f4.html","7b07b4216fc91a2d8a7b65223c97b6bf"],["/9865be07681a.html","50dd71dbf49837774828ee8519313d2c"],["/a21c0106b4dc.html","37e1eac8b1930b66c0a7a651611668b6"],["/a2cff47e45b4.html","19a266afc3038d99d3dd78e4ee014314"],["/a2cff47e45b4/1.png","18b58f9ca1c01c119fddda4c2b829c8a"],["/a2cff47e45b4/2.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/a39447736c9e.html","c56859b8e857e81e14781baf30cf148b"],["/about/index.html","e40875b3e15d36d1e5d17be88140427e"],["/aee8b86da60e.html","17e148a3208f1a56fe3dd2717efe8e75"],["/archives/2018/04/index.html","25807de2e7ab800c0fc7d2fc513a66a9"],["/archives/2018/04/page/2/index.html","acd2478e1b5583f2ae1fa482dd367154"],["/archives/2018/index.html","36a457e571f579b3a1e0d669bd0ed2dc"],["/archives/2018/page/2/index.html","5cabac4ddcbaec0ef277b10e537b8663"],["/archives/2019/01/index.html","6433f082c1b80b804b2b80b187ec6387"],["/archives/2019/01/page/2/index.html","3d3a1b666b29af8e5d04310a8c093b48"],["/archives/2019/02/index.html","52b4fcb0fac41c16acf7d0e4359e8b60"],["/archives/2019/03/index.html","71b03381cf16427275f6c61723ee6606"],["/archives/2019/04/index.html","08f9b7b86f693c25aa4b083f5074a12d"],["/archives/2019/04/page/2/index.html","1141cbdaed6a508221cd416e0a2728ef"],["/archives/2019/05/index.html","e041846fadda8ee109601a3ede60a7d7"],["/archives/2019/11/index.html","5daa86c3d5fd2204f72213a28243a0ac"],["/archives/2019/index.html","7be97bb8d7b372b66c783473e2fca82c"],["/archives/2019/page/2/index.html","9effe34b5402274a55ea15ab53f8b2a0"],["/archives/2019/page/3/index.html","cea067c2c549b8a395687f97f3138462"],["/archives/2019/page/4/index.html","57f9a8df3492357c22ba7cdfe7c78e09"],["/archives/2019/page/5/index.html","c4ec72e575dea552acde71fe0f0368aa"],["/archives/index.html","5b40c7be574ffa1320a65839e418f4d7"],["/archives/page/2/index.html","4e171cd6f6dd0004338c330fb171c563"],["/archives/page/3/index.html","ac4459d6ebdba8cd890e9c0ac7ed87b6"],["/archives/page/4/index.html","1845d0b53096a911f0aba3cfa045886f"],["/archives/page/5/index.html","7bb5c57a29d9d05c8f756643fbf36dee"],["/archives/page/6/index.html","9f59a1540aea3535a22fc326cc4c9cb3"],["/b17819308f04.html","b48d2e2a3f5350bbbdcb21b6b5a7416b"],["/b17819308f04/1.png","42d384ef717c67317df1707860c0e869"],["/b6106669f562.html","bc64a0edeece854e458c6a91fd30907f"],["/b6106669f562/1.png","6016fc838ad5be04a184c351034049a3"],["/b6106669f562/2.png","bbb6aa26ab4a90c852f0a33b57930f72"],["/b6106669f562/3.png","1d40120e6520be551e1a81eec28d4758"],["/b6106669f562/4.png","63cff42026b9c5dd37b7d07fc7a6f357"],["/b6106669f562/5.png","7cd380faf7620ebb1679054d296d3b12"],["/b6a4fd82fcfc.html","5fcea6a5c1051a9652132b81049bb4f9"],["/bef1ac8b1d67.html","a90b25d92d475d0d3b0d7bb1226eedd2"],["/c6c507ac38c4.html","79ab671339d6c289c78e25a795e2b9a6"],["/c748da646b0b.html","1e83d146f92f1f99c2e8d7c0746e865f"],["/categories/Hexo/index.html","707503ca6f245c55acb65674c4369621"],["/categories/Html/index.html","7054cc28cedb1e1493b00cc8a26dec9d"],["/categories/Java/index.html","f51cda4487b85ecf4bb3062be1fa1891"],["/categories/Java/page/2/index.html","ab1595fe59f56f7bc566f1f1e56ea8e0"],["/categories/index.html","b5b44af8a1161b570209538b7cd2eeef"],["/categories/工具/index.html","c57b1b0d1ec10a8220d81b53f44eb99b"],["/categories/数据库/index.html","a70b5b7ff83aa8a849c2b0d9827b99e9"],["/categories/日常/index.html","332e67a5b65ed4aca1596e5641eb3a22"],["/categories/生活/index.html","52444e7da60379360ceb055dfa09e90a"],["/categories/算法/index.html","bfd3ffe5bd499c873c6439d4b639316d"],["/categories/算法/page/2/index.html","e6ab240758307033638a8e389ea8015f"],["/cf7513efc8a3.html","31b54c792bb080c27f57425a846a27d5"],["/css/gitalk.css","8498d3203f623e2ab883851edc90c013"],["/css/main.css","9a5509f3634ca9970868100cac91564c"],["/d149732b2cfe.html","c8058f67e597309ee76ddb29e5eb258e"],["/d2d51dce913f.html","ab2e47a56a70538d322a1cddc2ba5162"],["/d8aaf5d37cb0.html","b0313fc60177cecfde8ca21ed2a5c311"],["/dc5ef838632f.html","0cffe42e820f48f13cd370a4cbc20bfc"],["/df5068bb57d2.html","a3ce9c5a58028b4a32d9f4911394ef50"],["/e1ce4e19566f.html","bacae95570771d1da36bf8266f567a4d"],["/e1ce4e19566f/1.png","5ca8d314e27dc900cae5d0428c3c0fa4"],["/e1ce4e19566f/10.png","9c5cae86e23370c5472864cccaf3d57e"],["/e1ce4e19566f/11.png","f50a9c52e8652e4b52bb512c6b2f01de"],["/e1ce4e19566f/12.png","08e0fb74169dacb6f5177f32a393141c"],["/e1ce4e19566f/13.png","84d5a35c01c730ae8fcf299d771c0146"],["/e1ce4e19566f/14.png","4c0a08a5744e3dd1e456377d0d4af96c"],["/e1ce4e19566f/15.png","0a0e8d381aa90d54d2b1faa27f3c0976"],["/e1ce4e19566f/16.png","d86e5e6e6294be6531e06de4432ecc8a"],["/e1ce4e19566f/17.png","650077ef41677b3d554afef2ab1a462e"],["/e1ce4e19566f/2.png","2daafd7e4946225e01c71ee63e1b9eed"],["/e1ce4e19566f/3.png","151b2116e1607f066163062c849ea9db"],["/e1ce4e19566f/4.png","9be2d0a9213ff97c6f0695bb21ab7735"],["/e1ce4e19566f/5.png","df0031e66e15a961d221fada7f859eae"],["/e1ce4e19566f/6.png","3279d641a06b122f591eb6c858ccee45"],["/e1ce4e19566f/7.png","d182a0b3854d95f29c779db413f18ad4"],["/e1ce4e19566f/8.png","765d6d2c2b9391ab46a1ceb904db9683"],["/e1ce4e19566f/9.png","56da1aadbde4525009e68b4c3e66ea8e"],["/e72787e674a1.html","1b08e8cb0177665c5ae72fbc33b3c9dd"],["/e8d6d5f114d9.html","09cd43b39f4ce95fb3c05a853824365b"],["/ee5c0e48c3d1.html","842e0bb1580a4f29bf07aefb09314ed6"],["/eea72e773574.html","8f9435c8da5c41435c1c41bc328f24db"],["/f563a9569919.html","566a42b4199b8aedba5c28290acca31f"],["/f6db78db1f90.html","de1291d4d73a7a35e7674d4cdf319eef"],["/fe248847c921.html","f3234f1fca91279bb3881725e88903d4"],["/img/avatar.jpg","fa60f84cd72c22fa341f7c2ccf8cfbcf"],["/img/avatar.png","b199d5fc93eb5da97fe5934c3e0e1c62"],["/img/default.jpg","a564b03f4409d080701a816ea4f32b81"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default_about.jpg","99f1f2b62e8585fd5dbf742884ab354f"],["/img/default_archive.jpg","4dc33b40a700dd1d2cd01fc443278f5d"],["/img/default_category.jpg","b315fbf6a0937d27c36380ea4c59a42d"],["/img/default_post.jpg","256c13731ae0ab5d082f33d8a9a5552e"],["/img/default_post_index.jpg","b858cbbc619b777672927280920819fe"],["/img/default_tag.jpg","2b113de5269bf811a005293e6d3ee6cd"],["/img/favicon.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-128x128.png","f45d502c892ad54f9fddc00dd8a04a63"],["/img/icons/icon-144x144.png","c9d419ae3cad258fe568a01851f41c62"],["/img/icons/icon-152x152.png","582d561035fdc3fa8b40b1928c11e566"],["/img/icons/icon-192x192.png","47e76b4e7732c7a00ff4a45d4626c5eb"],["/img/icons/icon-384x384.png","536ad9bc8478762c40e6bd9eb2495423"],["/img/icons/icon-512x512.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-72x72.png","0f6e2d426fe26a088537c7704bdb6c49"],["/img/icons/icon-96x96.png","8a52f59125300b22369cf86d2198573a"],["/img/loading.gif","2136c8686469a7992ffad348dd7bacd7"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","e3ea02c353d56a10117ad5de38baf5ba"],["/js/boot.js","e2e7defad6d45a0409b0143389c87de0"],["/js/color-schema.js","3b82e09aa5708c9b5bd793304aa99a86"],["/js/duration.js","93216890ef56c36e62d2e5314e36a368"],["/js/events.js","33e028d78bd6a0739c153c52ae09fc4b"],["/js/img-lazyload.js","906050e291c80575119e9a45011fed62"],["/js/leancloud.js","f73d1d762afc4dc49a80f02f3b5f2261"],["/js/local-search.js","fbd0afaf0f77792287ecfc7664739c80"],["/js/plugins.js","0c27945e81144140b91cd815d11e05c4"],["/js/utils.js","f0d81bb1f391f84140fd327652b519f1"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","19f8d1b6872e8b4587dc99cec1edbc31"],["/page/2/index.html","e4988f991463aee63ad7b639d76a89a1"],["/page/3/index.html","6ebfb1d1ae96559db1ed82db75e645b5"],["/page/4/index.html","0717eee976d489ec818d004fc861945a"],["/page/5/index.html","91e5123a48be96d470f08e143a2883fa"],["/page/6/index.html","b80fd567c674e488865dc09fc64252fc"],["/sw-register.js","df6b52427a924a0c9e5e33105942ad54"],["/tags/Ajax/index.html","a776ca466b0d6e9957ea539d7c404e57"],["/tags/Hexo/index.html","ddaf69fb470d081f7cfaf4858f104990"],["/tags/Html/index.html","9767a917beb2763cc496293999b75f2e"],["/tags/IntelliJ-IDEA/index.html","8dd187681bff182f9cb0f63fb2069e49"],["/tags/JMeter/index.html","49ae4c33227fc013c6d6eec53a11ca1e"],["/tags/JQuery/index.html","0122e8ac1385cea4bc1a9765fda9d701"],["/tags/Java/index.html","72ddff1a3521f3d2b70fb0c87fc5935f"],["/tags/Java/page/2/index.html","c5fa9e131356fa1b493a00ad6c971873"],["/tags/Java/page/3/index.html","eb9a666dab3d2ddb20b2850e2e5eed74"],["/tags/Java/page/4/index.html","ee138ba2864caf05b651fae17784f396"],["/tags/Log4j/index.html","78ac48f1c3e16147deecc71798d77dcd"],["/tags/MySQL/index.html","610971e5ce28cc18d5e02de073a36203"],["/tags/Redis/index.html","0224b2802bfc92e461556c1068845d95"],["/tags/Rest/index.html","d0810a27cc4c0af81ebc208b03e6deeb"],["/tags/SSM/index.html","7dcf999c72624ed42957f98476ae38fc"],["/tags/Socket/index.html","538932d055d5ffada134063ecaa44190"],["/tags/Solr/index.html","b78d344a5f5eef56004857ddc79b958f"],["/tags/SpringBoot/index.html","d9c2ec1b270122e2880c132c9dbf09fc"],["/tags/Travis/index.html","e8ad82c2f01f311b8691b519e391e85b"],["/tags/WebService/index.html","b22fc19c8301c722339f2246a606f98a"],["/tags/index.html","bfc728a61e7d715bf03b41831d9f8496"],["/tags/学车/index.html","32494b4718464f3e090083a7b8dbf5fc"],["/tags/工具/index.html","07b0c542799bcfa376214b7f946ddc32"],["/tags/数据库/index.html","ce23507530de17b5f0528e277125bf6c"],["/tags/日常/index.html","aafa3e95bf8b83542bb7a4e32e92e17f"],["/tags/流书/index.html","ed70ec6492eaca07bc5cfa277d8d7350"],["/tags/生活/index.html","a566b9ef4a9b06d2d1edf46cac58b2dc"],["/tags/算法/index.html","5f586faf7db9e9c82b89f13f28c7bf7b"],["/tags/算法/page/2/index.html","d319acd54f61fac98074dd293cc43bbe"],["/tags/蓝桥杯/index.html","c59fd1d372fb8f7394c4cb2aa5d2d398"],["/tags/蓝桥杯/page/2/index.html","044fe167dc515c2fbca78b37002ed5c2"]];
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
