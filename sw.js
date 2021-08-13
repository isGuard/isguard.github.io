/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/083b7d32f844.html","f1094f56e02b4da598dc22e22eb7d7b7"],["/0cfa7e337349.html","076867964ac65f9f61dcd1311089da46"],["/102164869c4c.html","bfb5d13bcc5cfc8b42989080c57998df"],["/1698a47fcf6a.html","197b77c2a0cc87153891c400ef74db23"],["/18e2d5e4b6f3.html","9c705d1d010023dee29f4b35a6c80de3"],["/1c1b04db2c01.html","1159cf26c142ab817e4e6fd3d5ab6c3d"],["/1e8a3115b061.html","413784169d557ab48bbf78de357bc3b6"],["/2605a2a5060e.html","f605469d327e8e0a4596ac5c6daf76de"],["/2f190b34c2b3.html","e38f33b87d394a87e68945a2d2885292"],["/3494683249bc.html","57e5545391dc37698b0e87298d2f5ee9"],["/378fe56bd246.html","f059e0f6690e45fca7d91969b1e2fc98"],["/378fe56bd246/1.png","e8ab3fad15c582d8346389cb1e0622db"],["/378fe56bd246/2.png","93a6489e32cd0606bbd2d7aefcac2af5"],["/378fe56bd246/3.png","756b09e3719426443eb8ccc8f3cd6826"],["/378fe56bd246/4.png","676b1d2d704c4ce1985bdd593a670a16"],["/3dc224c52b20.html","ee96570f4c51835badd5c51d17b9a6d8"],["/3dc224c52b20/1.jpg","d3740d1dca2d445a65b7a7ea2a0db495"],["/3e4b52661133.html","4471700348436acb5c9de80cee92c7d1"],["/404.html","9563ce29493a2f1afc7f73853ea87dad"],["/40901eb5b99a.html","dac397275a5fb61d4c95efac471c450d"],["/4264568384dd.html","3c91b7c45ac09929b3627a992526b1f9"],["/49d077e64aa6.html","df09ab23ff6c222225bee8362c99ace4"],["/51c5316ba4dc.html","4f3ef2e11797e8a34d20118f89823169"],["/543613fef7da.html","d679096ed1faf0a7c541629f5c1becfe"],["/57bfd13fa382.html","c88e45c95e7a0132aee49f51471040df"],["/5d0a7171e2be.html","dd4c94dbc7d36ea1c17f89f5726571b1"],["/5d0a7171e2be/1.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/5d0a7171e2be/2.png","66ba7100d5a6b8a35fcd8984ae45f464"],["/5d0a7171e2be/3.png","7098e295719eede6400d6f6ab773bd19"],["/5e4e6842d754.html","0139b2caa8d333af3f65b9e1237e4c29"],["/641601337f0b.html","935079d42377b2ae75ee21e4f969c8f9"],["/65e4aa78c9e6.html","379d3e0ca7757f658a7c5af4b2372655"],["/69bb6d2d9142.html","c649e8061ef9faa0c5c4af2e6f42beea"],["/6b7289fc875f.html","8b8c837c96db1c2a618aa920c484329d"],["/70ca5927dc18.html","a739849e9b918410e54f17087a9bf99f"],["/7434890e6022.html","1b37ec5c68ab209f976fbf1787736056"],["/79edd52b58c3.html","e63d09f38b8717d4bd8dffda67123369"],["/7c039cfe73f4.html","1abadb4ee8d31a9cc6df0c99f75ff753"],["/9865be07681a.html","3d5e5aeb01184cd54ed83d45939fd244"],["/a21c0106b4dc.html","336bcc28279bf10c1ee2909a820b1404"],["/a2cff47e45b4.html","7371ec10923fd8ef5263a9ce8fc59e61"],["/a2cff47e45b4/1.png","18b58f9ca1c01c119fddda4c2b829c8a"],["/a2cff47e45b4/2.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/a39447736c9e.html","c271acce7c2c69c4a1a4537f7b634c5f"],["/about/index.html","2351e8599f08f107e079e96bd111a559"],["/aee8b86da60e.html","49d66685ee115bf1593d501075f4c79b"],["/archives/2018/04/index.html","b55a9e55865bb5a496956b34273507d2"],["/archives/2018/04/page/2/index.html","560b5af79569baa106cb5ad8ceccb2e6"],["/archives/2018/index.html","9a691a92354d76b7284f914142e74f09"],["/archives/2018/page/2/index.html","b13c933a37ccb0d11c210ed81e517472"],["/archives/2019/01/index.html","822488f73576576ff9d6a0f9a62a93fd"],["/archives/2019/01/page/2/index.html","e1e8d43dffb99d069e1a84ff4412cf3e"],["/archives/2019/02/index.html","fef018ea2afe5adb93b726e53eebe63e"],["/archives/2019/03/index.html","7f390f7af25defba788b08496e1f1b0d"],["/archives/2019/04/index.html","b76311340f4dc44d5caa8ceb3717a71b"],["/archives/2019/04/page/2/index.html","794653d5a64a4bf4a61b6a874743844c"],["/archives/2019/05/index.html","2f5d61404fe3367394aec31e0cd9bb86"],["/archives/2019/11/index.html","77dd0deb0cf9e892568f3b8e28ab75af"],["/archives/2019/index.html","afedb4fa6e8ea5461e796c4363a0f8c3"],["/archives/2019/page/2/index.html","5c9e01a9932593e27788e5c630ef6cd0"],["/archives/2019/page/3/index.html","600e52904723674acb40b47fe544f325"],["/archives/2019/page/4/index.html","bada01bc393bd3dd496d1d43d763cac7"],["/archives/2019/page/5/index.html","f136d4a684f1981692909ea16ac1bc62"],["/archives/index.html","fd5b8d613972d79bea1ae3eeb0b1aca3"],["/archives/page/2/index.html","4b385a108969cbf7dcc5dfe199e10cb3"],["/archives/page/3/index.html","e46b744c65f27fb3b616a71847a17e2a"],["/archives/page/4/index.html","1c4a14542632e7af50413c507b0ecb77"],["/archives/page/5/index.html","f961eadb76d0f1347b7358e1093f92ef"],["/archives/page/6/index.html","a1cc507394229f2e6d01fde8cd7debd9"],["/b17819308f04.html","a0427d0809d97181689cccc4477624c3"],["/b17819308f04/1.png","42d384ef717c67317df1707860c0e869"],["/b6106669f562.html","1538fe6ca32f7a9cac8c0d91b5ca3b10"],["/b6106669f562/1.png","6016fc838ad5be04a184c351034049a3"],["/b6106669f562/2.png","bbb6aa26ab4a90c852f0a33b57930f72"],["/b6106669f562/3.png","1d40120e6520be551e1a81eec28d4758"],["/b6106669f562/4.png","63cff42026b9c5dd37b7d07fc7a6f357"],["/b6106669f562/5.png","7cd380faf7620ebb1679054d296d3b12"],["/b6a4fd82fcfc.html","ad0966d17368ea048d8484a4b31c9cd5"],["/bef1ac8b1d67.html","f6e87d63a16dc5abc9e72902de099163"],["/c6c507ac38c4.html","fbe956378a952fc7b8a174612a8f4b04"],["/c748da646b0b.html","6e1f664385b0e70f6b9a99e662533278"],["/categories/Hexo/index.html","3d4934a6604f73d3e370071feb45fb8e"],["/categories/Html/index.html","d476c32ea2e48a9387dc1c4ca5b915ad"],["/categories/Java/index.html","ffbe5fc7c160993cdc8f9ff960729582"],["/categories/Java/page/2/index.html","66333c2370074349092f31df298d98f6"],["/categories/index.html","af3b1d351d63e144a6b265eca5ddd1a9"],["/categories/工具/index.html","ac56f3da3d2be205709aeeab5619a72f"],["/categories/数据库/index.html","4ece34f3c51c0612908d4b897e182b93"],["/categories/日常/index.html","447c0dea9ea74818c3012a49bd6a6d45"],["/categories/生活/index.html","fcd80f510a23a7f603f2e08b38ee3444"],["/categories/算法/index.html","76be9b7f4f49de8d19f775ae61998896"],["/categories/算法/page/2/index.html","d2a4d7857c8190155ab0811707210dd6"],["/cf7513efc8a3.html","9867b87d6054786eb03519f6bf541a34"],["/css/gitalk.css","8498d3203f623e2ab883851edc90c013"],["/css/main.css","9a5509f3634ca9970868100cac91564c"],["/d149732b2cfe.html","75bdd7ee25cde7314b28644f2ca80540"],["/d2d51dce913f.html","b415dc2b93c5bbfb8b9cf0265526e6c4"],["/d8aaf5d37cb0.html","51c114458f3e81cf0ab1fc3b106700dc"],["/dc5ef838632f.html","4b52be491cbd5d0bde894b325b316337"],["/df5068bb57d2.html","bc10e2457408b2561832c2119705ed45"],["/e1ce4e19566f.html","918690313e943489523f4319746a62d0"],["/e1ce4e19566f/1.png","5ca8d314e27dc900cae5d0428c3c0fa4"],["/e1ce4e19566f/10.png","9c5cae86e23370c5472864cccaf3d57e"],["/e1ce4e19566f/11.png","f50a9c52e8652e4b52bb512c6b2f01de"],["/e1ce4e19566f/12.png","08e0fb74169dacb6f5177f32a393141c"],["/e1ce4e19566f/13.png","84d5a35c01c730ae8fcf299d771c0146"],["/e1ce4e19566f/14.png","4c0a08a5744e3dd1e456377d0d4af96c"],["/e1ce4e19566f/15.png","0a0e8d381aa90d54d2b1faa27f3c0976"],["/e1ce4e19566f/16.png","d86e5e6e6294be6531e06de4432ecc8a"],["/e1ce4e19566f/17.png","650077ef41677b3d554afef2ab1a462e"],["/e1ce4e19566f/2.png","2daafd7e4946225e01c71ee63e1b9eed"],["/e1ce4e19566f/3.png","151b2116e1607f066163062c849ea9db"],["/e1ce4e19566f/4.png","9be2d0a9213ff97c6f0695bb21ab7735"],["/e1ce4e19566f/5.png","df0031e66e15a961d221fada7f859eae"],["/e1ce4e19566f/6.png","3279d641a06b122f591eb6c858ccee45"],["/e1ce4e19566f/7.png","d182a0b3854d95f29c779db413f18ad4"],["/e1ce4e19566f/8.png","765d6d2c2b9391ab46a1ceb904db9683"],["/e1ce4e19566f/9.png","56da1aadbde4525009e68b4c3e66ea8e"],["/e72787e674a1.html","893ca91fe9847f9735c96038cc7694f2"],["/e8d6d5f114d9.html","f1bd896939a5b3a29fd7f7c41dc7b50d"],["/ee5c0e48c3d1.html","c9c9ba8ed0abdffc71c1ecbace13cc83"],["/eea72e773574.html","f115efa3ab3a2e4149df589f51b52176"],["/f563a9569919.html","9884e109afb25129c0eefc7d736c52fb"],["/f6db78db1f90.html","6cee2606ed6b6b2e2e52bb32f22375bb"],["/fe248847c921.html","29a8a76d8e622c2b4cfacc2062dbaf0f"],["/img/avatar.jpg","fa60f84cd72c22fa341f7c2ccf8cfbcf"],["/img/avatar.png","b199d5fc93eb5da97fe5934c3e0e1c62"],["/img/default.jpg","a564b03f4409d080701a816ea4f32b81"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default_about.jpg","99f1f2b62e8585fd5dbf742884ab354f"],["/img/default_archive.jpg","4dc33b40a700dd1d2cd01fc443278f5d"],["/img/default_category.jpg","b315fbf6a0937d27c36380ea4c59a42d"],["/img/default_post.jpg","256c13731ae0ab5d082f33d8a9a5552e"],["/img/default_post_index.jpg","b858cbbc619b777672927280920819fe"],["/img/default_tag.jpg","2b113de5269bf811a005293e6d3ee6cd"],["/img/favicon.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-128x128.png","f45d502c892ad54f9fddc00dd8a04a63"],["/img/icons/icon-144x144.png","c9d419ae3cad258fe568a01851f41c62"],["/img/icons/icon-152x152.png","582d561035fdc3fa8b40b1928c11e566"],["/img/icons/icon-192x192.png","47e76b4e7732c7a00ff4a45d4626c5eb"],["/img/icons/icon-384x384.png","536ad9bc8478762c40e6bd9eb2495423"],["/img/icons/icon-512x512.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-72x72.png","0f6e2d426fe26a088537c7704bdb6c49"],["/img/icons/icon-96x96.png","8a52f59125300b22369cf86d2198573a"],["/img/loading.gif","2136c8686469a7992ffad348dd7bacd7"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","88998c5189ec61bab019888a5d144c94"],["/js/boot.js","e2e7defad6d45a0409b0143389c87de0"],["/js/color-schema.js","3b82e09aa5708c9b5bd793304aa99a86"],["/js/duration.js","93216890ef56c36e62d2e5314e36a368"],["/js/events.js","33e028d78bd6a0739c153c52ae09fc4b"],["/js/img-lazyload.js","906050e291c80575119e9a45011fed62"],["/js/leancloud.js","f73d1d762afc4dc49a80f02f3b5f2261"],["/js/local-search.js","fbd0afaf0f77792287ecfc7664739c80"],["/js/plugins.js","0c27945e81144140b91cd815d11e05c4"],["/js/utils.js","f0d81bb1f391f84140fd327652b519f1"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","aeed57f1c5fb8b398d45065423bf5bfa"],["/page/2/index.html","f5058f45468aab5caa71e7e5244fda49"],["/page/3/index.html","90f5f096b038403c41318e0966fb3430"],["/page/4/index.html","65c7fcbb6247c2e6908c0a5c16a1c9f0"],["/page/5/index.html","5117e1b8e7f7bf663218537b3c4e1752"],["/page/6/index.html","4095ff3edb163ac9f2c2245342d4d1bd"],["/sw-register.js","d92136391881cd6ce1433a2318ae9d94"],["/tags/Ajax/index.html","8723afc0960b6cca125629c24b829cc0"],["/tags/Hexo/index.html","95086c1a84abb23dd401b337b07bfe64"],["/tags/Html/index.html","07abf27ecf9c944bc74bd7a24956be87"],["/tags/IntelliJ-IDEA/index.html","8db2ce5ac23586d5dc63c3c88cc8bcee"],["/tags/JMeter/index.html","7f1f752ce980cc516dc799a10ae0fac3"],["/tags/JQuery/index.html","03e3406328af5e804842b5d20978ad0f"],["/tags/Java/index.html","86c671b16018e1b36279ce45490078d5"],["/tags/Java/page/2/index.html","0054b99f6c4cfd5b38da295ff41470eb"],["/tags/Java/page/3/index.html","989f63bdb172bcf3d2fee23290f53baa"],["/tags/Java/page/4/index.html","614c4a64b5a7a9615c08762a8e1e5e14"],["/tags/Log4j/index.html","3ba2e314dbeb562ce36f7b72d26305eb"],["/tags/MySQL/index.html","fc9655c465ca8c46ad4fc4c55c2a2d1a"],["/tags/Redis/index.html","8663c9c336742c7dadb750c42a8ce38f"],["/tags/Rest/index.html","7b802f4da1df1fc076982dd98c08f81e"],["/tags/SSM/index.html","e688858577fcc7a36d0c2d825dd6f6f3"],["/tags/Socket/index.html","ed8bc99c7daa7d8b640c375301e89ef3"],["/tags/Solr/index.html","5a8a449f128650968fd74f559c4a9f09"],["/tags/SpringBoot/index.html","b942bb02a53604acd7e20c6627061f5a"],["/tags/Travis/index.html","6a4c4bd624dda7e6e976db3e55412c63"],["/tags/WebService/index.html","8634c98299ae31f680666031e9addc5e"],["/tags/index.html","77d7fdc2d31e026e9de052f230dc4e2c"],["/tags/学车/index.html","b2ae8d889dd7c996240e0e3a5f44097d"],["/tags/工具/index.html","eaab5d0a8eccd3225061964838ee93d8"],["/tags/数据库/index.html","0ad0fcfec8ae368db3173e1005eb3a7b"],["/tags/日常/index.html","3bf057373ad69f017c99d69404313694"],["/tags/流书/index.html","4aa3e06f39536bd39577260f1173f1e4"],["/tags/生活/index.html","a29e59e1633bd9b4c3e42810bade27d8"],["/tags/算法/index.html","da3684ab92ac4840527a770e14362f0f"],["/tags/算法/page/2/index.html","bd45e18278461894385940d599cebd01"],["/tags/蓝桥杯/index.html","e547b9990b9bbbe371cf09d2aad8bfc7"],["/tags/蓝桥杯/page/2/index.html","2485bef6020b0ae8b0f9211c9ea2886b"]];
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
