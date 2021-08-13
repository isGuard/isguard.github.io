/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/083b7d32f844/index.html","32a373fac4c95c6637c488231ea8d3db"],["/0cfa7e337349/index.html","ba23cfde04591f122ff6d3ac37122347"],["/102164869c4c/index.html","6f1a9846ad9264522b64779b54158836"],["/1698a47fcf6a/index.html","a3f54e1aa269ffa57a78cf2994078a87"],["/18e2d5e4b6f3/index.html","56240302f4fd835660f929100a0a6bf6"],["/1c1b04db2c01/index.html","44ce5372895f9804b7b3af7233478cae"],["/1e8a3115b061/index.html","ee8c2ed000c86cbe0fb30323b1aa890b"],["/2605a2a5060e/index.html","ca42f2cfb2cbe6dce4a472eb5490de6c"],["/2f190b34c2b3/index.html","ea5a5c564faa98bb63b21574cd9ebad6"],["/3494683249bc/index.html","ae0ce44fa63fa6aeb5de4f9395669d88"],["/378fe56bd246/1.png","e8ab3fad15c582d8346389cb1e0622db"],["/378fe56bd246/2.png","93a6489e32cd0606bbd2d7aefcac2af5"],["/378fe56bd246/3.png","756b09e3719426443eb8ccc8f3cd6826"],["/378fe56bd246/4.png","676b1d2d704c4ce1985bdd593a670a16"],["/378fe56bd246/index.html","f598f130106173a316d05c6ada344d43"],["/3dc224c52b20/1.jpg","d3740d1dca2d445a65b7a7ea2a0db495"],["/3dc224c52b20/index.html","5cb2e8e28ccc8ccf7c3a4051d1d92a2e"],["/3e4b52661133/index.html","8f4d36cf977fa9636eed7a4d2d0b4dbe"],["/404.html","d93e3d1912cd804a0b1bc2f32684b726"],["/40901eb5b99a/index.html","197f0e5bb832fb0da1196c416f594320"],["/4264568384dd/index.html","07f878edb26a711f00382cf526e5a85e"],["/49d077e64aa6/index.html","9fb2011d0992d400f1b1cfbe4064ad91"],["/51c5316ba4dc/index.html","f8ec3767ccf44052fa6ba4e23ac89b7e"],["/543613fef7da/index.html","1d4c1011650bd21b47e20cc9969d4718"],["/57bfd13fa382/index.html","86c3099215ebce52c196d01d6d6a6638"],["/5d0a7171e2be/1.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/5d0a7171e2be/2.png","66ba7100d5a6b8a35fcd8984ae45f464"],["/5d0a7171e2be/3.png","7098e295719eede6400d6f6ab773bd19"],["/5d0a7171e2be/index.html","1e0c8518f21340c1f80927664860d4e9"],["/5e4e6842d754/index.html","f31085b6c28c45d2a0c9601018be1b15"],["/641601337f0b/index.html","8884a925f60ef3575dee2e111ee4ecad"],["/65e4aa78c9e6/index.html","fde651ade767c33f1e918d36cf5e7bf3"],["/69bb6d2d9142/index.html","297aa52b99851e8358dd761cd52a7847"],["/6b7289fc875f/index.html","864a06836c82873f3d9ef8f427e8127f"],["/70ca5927dc18/index.html","8dbaa8be7c7531fcd8697363ba1d77be"],["/7434890e6022/index.html","afd2c3a08e3f902384c2c0cb7ef09ca9"],["/79edd52b58c3/index.html","3151ca3f05d8e9788730a45d9bf635ae"],["/7c039cfe73f4/index.html","da33e8e6b1a79bbbdf624c40e79b703e"],["/9865be07681a/index.html","2682aafa6ddf3168f89642adbba2739d"],["/a21c0106b4dc/index.html","fcd8485aabe8f0d575916cfe3d055cf2"],["/a2cff47e45b4/1.png","18b58f9ca1c01c119fddda4c2b829c8a"],["/a2cff47e45b4/2.png","3ea26cd2afd8bb1626fb64e57b19cb75"],["/a2cff47e45b4/index.html","542d0334b7f34c9ac7f2caf85fe73065"],["/a39447736c9e/index.html","eb08b162e783c62ea60c246aa0859d0f"],["/about/index.html","494f3559343f521f195623e2cc54bba6"],["/aee8b86da60e/index.html","d1e6b7aea8b64a2e2f36ee85d1e824d0"],["/archives/2018/04/index.html","1deae115b80f6d51ba1b9453893f636b"],["/archives/2018/04/page/2/index.html","2293621c76c371b64d64797e279a376d"],["/archives/2018/index.html","c86b0920f8da616124d8d919c7dadda3"],["/archives/2018/page/2/index.html","e6485e5a65486755aa1edaa9a1e55b26"],["/archives/2019/01/index.html","8029d540a80542442b0ceb7f324dc21f"],["/archives/2019/01/page/2/index.html","9c874bc826ca464bef310874bf48030b"],["/archives/2019/02/index.html","445f0cb4fb86e6d698cbfe16e14bb8ee"],["/archives/2019/03/index.html","f6bd4a10a11f5498beddbf549cf59a47"],["/archives/2019/04/index.html","2b0c84619bf438226bf6175344f085d8"],["/archives/2019/04/page/2/index.html","d4be29e8f1b578793954f7812fc6c350"],["/archives/2019/05/index.html","9ab845f0a1bc2d9376e335bcc8cbd1e9"],["/archives/2019/11/index.html","f00f6c323457bbedfc24bd1f9a225f2b"],["/archives/2019/index.html","b3c751e24aa8d92e50d54801d092fb52"],["/archives/2019/page/2/index.html","07d5c60ca7894bda829ea000bdf37914"],["/archives/2019/page/3/index.html","6de0d6e851da5516583c0ed7a793d3e1"],["/archives/2019/page/4/index.html","ade08b98d48aae04af1d14b7da9c2ff4"],["/archives/2019/page/5/index.html","37dc296e8959a2c82593555a674c0498"],["/archives/index.html","ebee6564d63fedd7e021789c96f7169b"],["/archives/page/2/index.html","ef8699574a374faf0ed6674e9aaa43bf"],["/archives/page/3/index.html","67146c98695108945694fae981ca076b"],["/archives/page/4/index.html","c795d5ad614b848a015f48c195bee677"],["/archives/page/5/index.html","e404feca7695d74d0f303174b2826981"],["/archives/page/6/index.html","7b8d996afc622b94e62ca1c7391dbc9f"],["/b17819308f04/1.png","42d384ef717c67317df1707860c0e869"],["/b17819308f04/index.html","7379cc6ccc90e83f2e1181cc50017803"],["/b6106669f562/1.png","6016fc838ad5be04a184c351034049a3"],["/b6106669f562/2.png","bbb6aa26ab4a90c852f0a33b57930f72"],["/b6106669f562/3.png","1d40120e6520be551e1a81eec28d4758"],["/b6106669f562/4.png","63cff42026b9c5dd37b7d07fc7a6f357"],["/b6106669f562/5.png","7cd380faf7620ebb1679054d296d3b12"],["/b6106669f562/index.html","f81105c0471bf6377a7974d45691e3db"],["/b6a4fd82fcfc/index.html","1ca57092300025541392032f57d5aa8e"],["/bef1ac8b1d67/index.html","e98d095e3961935c8bb2d9e21bf3061f"],["/c6c507ac38c4/index.html","f9295b9977ef698af8784899421983b3"],["/c748da646b0b/index.html","314a859a3f1f1c36c15c4d55872f730b"],["/categories/Hexo/index.html","5b3ac277a49297580691f0d49b677e02"],["/categories/Html/index.html","e5327cf51b41d5855d9a42f3a8a80d35"],["/categories/Java/index.html","ae284a2b8f81a157cfbb5e794b8557e8"],["/categories/Java/page/2/index.html","7f6dbd82bcfa418520f1b53f790e7609"],["/categories/index.html","eb0090f5e329f3a280d4410c2bc58e4d"],["/categories/工具/index.html","bf850e41a7ec7591683d523645e1ab15"],["/categories/数据库/index.html","c783fbb2438284e39fb37cb702ab58d4"],["/categories/日常/index.html","3a1e068caeaff682edc8ce350ef60278"],["/categories/生活/index.html","6efc54923b888924ddf41f877f3bdd24"],["/categories/算法/index.html","613df225aedb2a7ea8e6fbe197812c9f"],["/categories/算法/page/2/index.html","ff1a790e8c5696f4d5f60f520d0fc675"],["/cf7513efc8a3/index.html","cf6ea54dc8ee28db2f80b308f5cde03a"],["/css/gitalk.css","8498d3203f623e2ab883851edc90c013"],["/css/main.css","9a5509f3634ca9970868100cac91564c"],["/d149732b2cfe/index.html","bbbe70573bed5aaf09344fb90dcdd14c"],["/d2d51dce913f/index.html","d7cd4dc749b89e8ca499215cf5b25c86"],["/d8aaf5d37cb0/index.html","6b36744662228ebe30391321e4e2053a"],["/dc5ef838632f/index.html","c288cf58b80d62471a0bf929fece7fa5"],["/df5068bb57d2/index.html","2ae2ab94012b8f2adac6462525aec6cd"],["/e1ce4e19566f/1.png","5ca8d314e27dc900cae5d0428c3c0fa4"],["/e1ce4e19566f/10.png","9c5cae86e23370c5472864cccaf3d57e"],["/e1ce4e19566f/11.png","f50a9c52e8652e4b52bb512c6b2f01de"],["/e1ce4e19566f/12.png","08e0fb74169dacb6f5177f32a393141c"],["/e1ce4e19566f/13.png","84d5a35c01c730ae8fcf299d771c0146"],["/e1ce4e19566f/14.png","4c0a08a5744e3dd1e456377d0d4af96c"],["/e1ce4e19566f/15.png","0a0e8d381aa90d54d2b1faa27f3c0976"],["/e1ce4e19566f/16.png","d86e5e6e6294be6531e06de4432ecc8a"],["/e1ce4e19566f/17.png","650077ef41677b3d554afef2ab1a462e"],["/e1ce4e19566f/2.png","2daafd7e4946225e01c71ee63e1b9eed"],["/e1ce4e19566f/3.png","151b2116e1607f066163062c849ea9db"],["/e1ce4e19566f/4.png","9be2d0a9213ff97c6f0695bb21ab7735"],["/e1ce4e19566f/5.png","df0031e66e15a961d221fada7f859eae"],["/e1ce4e19566f/6.png","3279d641a06b122f591eb6c858ccee45"],["/e1ce4e19566f/7.png","d182a0b3854d95f29c779db413f18ad4"],["/e1ce4e19566f/8.png","765d6d2c2b9391ab46a1ceb904db9683"],["/e1ce4e19566f/9.png","56da1aadbde4525009e68b4c3e66ea8e"],["/e1ce4e19566f/index.html","f7b5a16c42123c11eb55231e23020413"],["/e72787e674a1/index.html","2f1abd15d9fc7b3a341f1a01b25d941b"],["/e8d6d5f114d9/index.html","8bf772804567bcf9212650d2f205604d"],["/ee5c0e48c3d1/index.html","a7f2583b4f8d4502b919c26ebd064c8a"],["/eea72e773574/index.html","2d241c21a3b6806fa377db745ab12fdf"],["/f563a9569919/index.html","7bd2ea6705931f89ea9fdde00a8379d4"],["/f6db78db1f90/index.html","e140028cdd6352ad9faee2e8951004fc"],["/fe248847c921/index.html","34f77efe9c93dcab64990a5b43a85883"],["/img/avatar.jpg","fa60f84cd72c22fa341f7c2ccf8cfbcf"],["/img/avatar.png","b199d5fc93eb5da97fe5934c3e0e1c62"],["/img/default.jpg","a564b03f4409d080701a816ea4f32b81"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default_about.jpg","99f1f2b62e8585fd5dbf742884ab354f"],["/img/default_archive.jpg","4dc33b40a700dd1d2cd01fc443278f5d"],["/img/default_category.jpg","b315fbf6a0937d27c36380ea4c59a42d"],["/img/default_post.jpg","256c13731ae0ab5d082f33d8a9a5552e"],["/img/default_post_index.jpg","b858cbbc619b777672927280920819fe"],["/img/default_tag.jpg","2b113de5269bf811a005293e6d3ee6cd"],["/img/favicon.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-128x128.png","f45d502c892ad54f9fddc00dd8a04a63"],["/img/icons/icon-144x144.png","c9d419ae3cad258fe568a01851f41c62"],["/img/icons/icon-152x152.png","582d561035fdc3fa8b40b1928c11e566"],["/img/icons/icon-192x192.png","47e76b4e7732c7a00ff4a45d4626c5eb"],["/img/icons/icon-384x384.png","536ad9bc8478762c40e6bd9eb2495423"],["/img/icons/icon-512x512.png","e8706ffde2ad3dcb64f85fd4ed54684d"],["/img/icons/icon-72x72.png","0f6e2d426fe26a088537c7704bdb6c49"],["/img/icons/icon-96x96.png","8a52f59125300b22369cf86d2198573a"],["/img/loading.gif","2136c8686469a7992ffad348dd7bacd7"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","1e853f725c9bdd341a5c9134da5e843e"],["/js/bundle.js","1d8573182d430c32bb321646efacab22"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","d06faa58c71bfe73bd326899f03e95e9"],["/page/2/index.html","de39318c311befeb632df76c08c6645a"],["/page/3/index.html","0d4b6de879abdffab8f586f3d536de06"],["/page/4/index.html","26aa94bd79b6957f8ba4e27a1ca8eb21"],["/page/5/index.html","ee0e85c3d7d762b4f32312126b9e2c10"],["/page/6/index.html","7ed9f522349d05587cf57ca022808829"],["/sw-register.js","8bb1ed46118055e95222eaedd61052d5"],["/tags/Ajax/index.html","cebd5a27970b920990920f13a7514465"],["/tags/Hexo/index.html","0f9891c0a97b1e3f9398102125cda2d5"],["/tags/Html/index.html","b5b27c987fde700d256bd822efcaf3e8"],["/tags/IntelliJ-IDEA/index.html","346b1357f83e0b124fd82ced2decf8cf"],["/tags/JMeter/index.html","44637c77c1c6324531ff5ba01a007e95"],["/tags/JQuery/index.html","5c3838f92a9245608df1ab19cd2aba54"],["/tags/Java/index.html","740b7f16ee5098ea21ecb9ace2491cad"],["/tags/Java/page/2/index.html","f389f830eb5b8584077f2f28f5d50c02"],["/tags/Java/page/3/index.html","ea19404937cafddb8ae7aa9a8d6f543e"],["/tags/Java/page/4/index.html","97f2c6455fa5b35057b23519a460c54e"],["/tags/Log4j/index.html","94ea21b5452fb0301382e70c4cf7ab4e"],["/tags/MySQL/index.html","5e7eb9645ad57daa85dba54c1d52ae6f"],["/tags/Redis/index.html","393d40e98c3d59df80dd003f797287c5"],["/tags/Rest/index.html","7f959ee8cbd76d7d1e396452c3e31e36"],["/tags/SSM/index.html","c61598bfe543530f8965492074fc9cdf"],["/tags/Socket/index.html","7ee870395889af246aff210b994fe523"],["/tags/Solr/index.html","fe8bc36fcb9e838ed356e39bc29b55e9"],["/tags/SpringBoot/index.html","d078c29ff9df3ce45d6e9b48d8a7a012"],["/tags/Travis/index.html","4c118a45e8121ee7002d71972136ae2a"],["/tags/WebService/index.html","1e70a5da1543ee4020483452da51f2c4"],["/tags/index.html","1e99870f68b9906c994b90086adc6418"],["/tags/学车/index.html","0caab283655c316959404db4a50f1d91"],["/tags/工具/index.html","2d8bbde82dd4c2dab55037b4002a517b"],["/tags/数据库/index.html","5d452f402119d3f98f7c33f1f6d3ac2b"],["/tags/日常/index.html","0dcda768af37b2fde583da41bb5e304c"],["/tags/流书/index.html","73dd82d79eb704a3587218f4eb7b8337"],["/tags/生活/index.html","baf83e4095a7e84815c07a239f6dc581"],["/tags/算法/index.html","23cafd6fa5759036f910cf5784fbdc05"],["/tags/算法/page/2/index.html","0e83f4540c4959ec444a7f29978e936a"],["/tags/蓝桥杯/index.html","3bdbced63effadc21f1753f819c04e14"],["/tags/蓝桥杯/page/2/index.html","688c52c18db99fddcea3516ae519a706"]];
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
