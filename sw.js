/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/083b7d32f844/index.html","d00ed8f1e3d017aa9c9f5abd53c5c021"],["/0cfa7e337349/index.html","ba67de84820707d94c285e508c53b531"],["/102164869c4c/index.html","68d03737b2873f1985bdf946516cbb76"],["/1698a47fcf6a/index.html","fbc1cb1f5f2238173cca716a9247fd0a"],["/18e2d5e4b6f3/index.html","0b365dc601af2adb1f58fab0eaa245a4"],["/1c1b04db2c01/index.html","b1215f7f338575c75ea10a9fb810ed28"],["/1e8a3115b061/index.html","889fd045f1bf35b5a9cd04b8351bfcf6"],["/2605a2a5060e/index.html","ce9885dbb2ca62737aeb79fb30539f85"],["/2f190b34c2b3/index.html","b7884e894c2f5f6e47608149dd041604"],["/3494683249bc/index.html","052099f30ecd279a7246e528365196b6"],["/378fe56bd246/1.png","7241bf6d92fe0da0338bd5631aca6c13"],["/378fe56bd246/2.png","3c471ab75051f639f2e2251aa7b1a477"],["/378fe56bd246/3.png","82d2c0489501faf560f15be718d4092f"],["/378fe56bd246/4.png","d69241af8d0fc37d548ee077f3da45e5"],["/378fe56bd246/index.html","e62b3227c7926f349a22f33b2d00b44e"],["/3dc224c52b20/1.jpg","53c3e68cab10d6e33338d187374b7a58"],["/3dc224c52b20/index.html","1070fa147da223faa06d0eaebd626578"],["/3e4b52661133/index.html","14c3a6a46cf4682cce971cca07918316"],["/404.html","e365f72b22a87ee921893c9578889bbd"],["/40901eb5b99a/index.html","b8280bfefcb73806302c80c86c343567"],["/4264568384dd/index.html","d85d07011bbadc900d2d06195d0fa61f"],["/49d077e64aa6/index.html","5af763a1f37756abdf6fff3acdfac682"],["/51c5316ba4dc/index.html","01e0fd19eb6400c7ddd9aa0a7b47516a"],["/543613fef7da/index.html","aee1177572ee5839ffe4b97528f886fa"],["/57bfd13fa382/index.html","426f2d26196840d44f90c2f015422f44"],["/5d0a7171e2be/1.png","818af3dfe0c752cfed2e1add04fc73b3"],["/5d0a7171e2be/2.png","79012ed062799ff0307982fd28b5d919"],["/5d0a7171e2be/3.png","34e138de8914a7fd7390fb4e30a05b3f"],["/5d0a7171e2be/index.html","918838d6d4a10a0b2c6d2160a43eb75d"],["/5e4e6842d754/index.html","5fc8c7493cf93a3f4c87f197d12a8252"],["/641601337f0b/index.html","8d2f648a07467a91f91b010f5851b250"],["/65e4aa78c9e6/index.html","04f73c8a979911c6566ea7e8d81c5903"],["/69bb6d2d9142/index.html","da900d7aa01ee8233166dec156e7683d"],["/6b7289fc875f/index.html","254fc51127e88b4b6b5e8b017d6d3ee0"],["/70ca5927dc18/index.html","7fa3717192cc6136a5f0f39f1067bd20"],["/7434890e6022/index.html","d0107012eeb4f80274e1040b74bcdc69"],["/79edd52b58c3/index.html","a6b8b6e596ac17c94724d20026a975a1"],["/7c039cfe73f4/index.html","01ef7cd61d0ae08466a4b96ef747d78a"],["/9865be07681a/index.html","3a508b1bb2df6aa88cac245ec25d246c"],["/a21c0106b4dc/index.html","0a2ec8fc8eddb98eb54500ddfb16162d"],["/a2cff47e45b4/1.png","5d3d1c01d440f79c95cb4902959b52ac"],["/a2cff47e45b4/2.png","818af3dfe0c752cfed2e1add04fc73b3"],["/a2cff47e45b4/index.html","e5506c88f654cd65b037d5f3d4d2767b"],["/a39447736c9e/index.html","240a29317b37b022c764201a59909c38"],["/about/index.html","b647175ae3e6c30828ac6eb146c2f006"],["/aee8b86da60e/index.html","aa6baa1e1ad8c4cf2616685aa60debd7"],["/archives/2018/04/index.html","8066a002e23be8b05d5a67de112b3d20"],["/archives/2018/04/page/2/index.html","d62cde45611ece4e7ef7d62701a416c0"],["/archives/2018/index.html","0979945b116e336a541d0b574dd7f23f"],["/archives/2018/page/2/index.html","00fa4f0cf63f8ba770d78191b1a235d3"],["/archives/2019/01/index.html","e9b5a34436f0eb851c650234fa20d78b"],["/archives/2019/01/page/2/index.html","0f4e4ad7dbf5449b1eaff02f390b9244"],["/archives/2019/02/index.html","2865d5a0c7ffa2a0347e086549f1caad"],["/archives/2019/03/index.html","85386427bf903a4f8c81de50e99f4660"],["/archives/2019/04/index.html","d7cf4f496a0c5ab17d80345cca222acc"],["/archives/2019/04/page/2/index.html","656caa5641f1a54decc104e951097c4c"],["/archives/2019/05/index.html","f0c0bca6b7020632b6807510f321b439"],["/archives/2019/11/index.html","5dedb2b4e343fad118986582d8ed0afb"],["/archives/2019/index.html","7b44ea880a53efd9ef664689d539b2e3"],["/archives/2019/page/2/index.html","a8a0fb9c7206fef9094637065e3bc0a7"],["/archives/2019/page/3/index.html","721ed84ce5b252ae2191f6348e6f4c15"],["/archives/2019/page/4/index.html","dae2f13ecfebed7b6eb3d96b27f33a8c"],["/archives/2019/page/5/index.html","e34093f7099ad369ec162c8b15e40c82"],["/archives/index.html","39ef5395db8758e9931b311dee09b0db"],["/archives/page/2/index.html","e6dba8aa4ae9b0aa14e4d80d36728e1b"],["/archives/page/3/index.html","20792ff48e61f3cec4e9db0adfd6ebfa"],["/archives/page/4/index.html","757971cd2e38917cae57b330a8d2e758"],["/archives/page/5/index.html","8280b226253a6c6e1622a557dfc00b7d"],["/archives/page/6/index.html","5986c8520e83cf7441c95ee6a814038e"],["/b17819308f04/1.png","210fb1d064dc93db35e3e76964f37fa7"],["/b17819308f04/index.html","383eb72c52f8da65091d06ec697e0255"],["/b6106669f562/1.png","949023d0e2d579c42339865b6aacd49f"],["/b6106669f562/2.png","660751c34fc040ee54a9a0d8e45e19e1"],["/b6106669f562/3.png","2283adc384cd1a13bf1c011e46abb704"],["/b6106669f562/4.png","af69b70a06548f031933c6b2162391e8"],["/b6106669f562/5.png","da6bc47d2eea0a8bd5e3dd948f1f5cd8"],["/b6106669f562/index.html","15b477ea6fe9944aef3594f85763f365"],["/b6a4fd82fcfc/index.html","095a3fe982a36ff8b82b87946d375c7e"],["/bef1ac8b1d67/index.html","7bf95aa9a79ed2f7c3d636db6cc04f40"],["/c6c507ac38c4/index.html","6cb4a1407e6adecb408ac404bcb0de67"],["/c748da646b0b/index.html","e5c7384d7701c8db44ae56e4c8a0c35f"],["/categories/Hexo/index.html","08d46842c0dd3e008c09b8e732bd9c74"],["/categories/Html/index.html","eb6fa07a813c429fc9aac210af17bcf3"],["/categories/Java/index.html","9a9e2053c42728d4acffeb9bd4b4b26b"],["/categories/Java/page/2/index.html","bafa0f5199be237c0a4fb0e5b57159f6"],["/categories/index.html","7b911c0ac21fc417dc725ada9738d0b0"],["/categories/工具/index.html","a5dd977167d5bd6a139c279e931f1fa2"],["/categories/数据库/index.html","a96f9513f4c4559b8deb78a450e33d52"],["/categories/日常/index.html","07a5868ff33bf0659a96f68c9cabf23b"],["/categories/生活/index.html","b8f4b9eac603c3ea23da61c04a84b3b9"],["/categories/算法/index.html","e3c710d7e7676dc4b9934c499c59e1f4"],["/categories/算法/page/2/index.html","a2ce04b374ce504992e9107da48612b2"],["/cf7513efc8a3/index.html","d9f62e0740585400cd0f8aa6ebc7c4a9"],["/css/gitalk.css","5ce280d86637a41c57fdc51fd463237a"],["/css/main.css","ce561e9e98a6a4ba8ceb53e06d0526fd"],["/d149732b2cfe/index.html","8581ede9e6228ada95e26cbc5af85a12"],["/d2d51dce913f/index.html","12db74f740cadacc052ff787b0b18f4d"],["/d8aaf5d37cb0/index.html","0b192eb4e355ccc4ce9121fa58502e0e"],["/dc5ef838632f/index.html","0a1483f90200f37fcb8c53d848a68eae"],["/df5068bb57d2/index.html","4cba922567637bbdf2cf70a15ad301a5"],["/e1ce4e19566f/1.png","14566fd2884ad4e49c788f61610ba157"],["/e1ce4e19566f/10.png","c44d667dcf002ee0ddeaa9d234ebec7e"],["/e1ce4e19566f/11.png","ff978457bfc1c7a3c62d76b52e938900"],["/e1ce4e19566f/12.png","5e42cfb6aa944adbb6f18b8f2690c1b1"],["/e1ce4e19566f/13.png","d06305fbfd2d01b606c3b522cb7ce975"],["/e1ce4e19566f/14.png","be0a78ddaa7f099ee87278dd981bae40"],["/e1ce4e19566f/15.png","2a8afd5adf15472eb3170df5ea6003b8"],["/e1ce4e19566f/16.png","044a34ab53207c1068b5a4a1a7b5d387"],["/e1ce4e19566f/17.png","93f15cfad7eec9dd014c15168a401e30"],["/e1ce4e19566f/2.png","dfb95266878f7d9cce2409fe4afc4399"],["/e1ce4e19566f/3.png","af8621f09dcee4d2d885ad0e713175f6"],["/e1ce4e19566f/4.png","0f537a6a2053961ccff90fd9e392d6b0"],["/e1ce4e19566f/5.png","3a5f704b11c2bf99886d32e7da88586f"],["/e1ce4e19566f/6.png","f02dfca47f9f86ee56fa7683a68f51e3"],["/e1ce4e19566f/7.png","14d2a46c5d059614c8a5bc0a5e09d597"],["/e1ce4e19566f/8.png","5247cd8ef52d31a1bb32636acaab2f12"],["/e1ce4e19566f/9.png","9dd3b78513e214e61d311d374082dda4"],["/e1ce4e19566f/index.html","b06c762fffe649b22bd43ab35c079224"],["/e72787e674a1/index.html","f8fdae09a98ce7884ecaff6c893d505a"],["/e8d6d5f114d9/index.html","a074a774fc8346778ed129639d9f0fbc"],["/ee5c0e48c3d1/index.html","8b51b1e3aab4eb23a1e37cdc38174f88"],["/eea72e773574/index.html","d72e9111c83ef7ae6d108eff2772ac1d"],["/f563a9569919/index.html","6eefc42998549157463065bbe33d3851"],["/f6db78db1f90/index.html","e44664d1cdae007ed3a1b92d18337655"],["/fe248847c921/index.html","e56e2e387326b22a6eac5782ccde4827"],["/img/avatar.jpg","fa60f84cd72c22fa341f7c2ccf8cfbcf"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/default.jpg","74193e310d94390068356ea7d082b282"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/default_about.jpg","ac5b38e46443c78d0b74ae09f38b8540"],["/img/default_archive.jpg","4ceba240061e012a84dfb6108e588627"],["/img/default_category.jpg","b62ec9e64befde092a04de0c10a2ad33"],["/img/default_post.jpg","fcce71914901e5af8d048752138c91c0"],["/img/default_post_index.jpg","d389c1d69f3f39aeba9bae33ef23b1cd"],["/img/default_tag.jpg","0f5bb5561bbd1d73229d509aa616e967"],["/img/favicon.png","00468deb65db5e95bd59026d2e2a0026"],["/img/icons/icon-128x128.png","c7c3c59f49e4de116bd033f23f24e04f"],["/img/icons/icon-144x144.png","5b0386b786789c013a0d6b2a0f73fe2e"],["/img/icons/icon-152x152.png","c2027009a57c0189992583ecfea5a4f2"],["/img/icons/icon-192x192.png","c5a490dea61d284ee3ecb74799ab1e38"],["/img/icons/icon-384x384.png","edffcc99b822a364f18282d3ec311fa3"],["/img/icons/icon-512x512.png","00468deb65db5e95bd59026d2e2a0026"],["/img/icons/icon-72x72.png","86df8695650b1d7f9259bf8b68e9871b"],["/img/icons/icon-96x96.png","d82242260857521b21145fb75d54c180"],["/img/loading.gif","2136c8686469a7992ffad348dd7bacd7"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/index.html","311873fa7ccf4c014e5213f7212ad9bc"],["/js/boot.js","169ffc208dd5e8717a784877dc45828f"],["/js/color-schema.js","c6cf5c216322ed487d845c91d004b2a0"],["/js/events.js","d1ad0ef23e2b8f5330d37b9432e564af"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","d5b5f8c32b663e0ee42a21be17585f83"],["/js/local-search.js","94369155d7ed57ddb6e464adaa0fbc0e"],["/js/plugins.js","a21bf058047d0f3a2ee95b8c911e6916"],["/js/utils.js","a19e10303f1fc4143cab109ba27dbf75"],["/lib/hint/hint.min.css","b5f3452bff6af473afc6ec1169990093"],["/links/index.html","82f1a32577956ee9f5d884c8344fab79"],["/page/2/index.html","1eab468f3bb2ecca82a940b5c42224be"],["/page/3/index.html","820cc0964d75511443743f7ef160139c"],["/page/4/index.html","d2cee73f0916787158a483bbaee7d3d2"],["/page/5/index.html","93cab67b50997ca587f683bc15008068"],["/page/6/index.html","e37420dbabf39651b3857abc63b86687"],["/sw-register.js","31685d393e8e5ba15972c329369b9eab"],["/tags/Ajax/index.html","775685aa95f220df15cd8cee26c13a7c"],["/tags/Hexo/index.html","f8d6e8b5e888d01b532d686ce253a53a"],["/tags/Html/index.html","83ee4c28347a2dbe2bf9c76517401fe1"],["/tags/IntelliJ-IDEA/index.html","5a32c35138f7e54a1af0946819793f65"],["/tags/JMeter/index.html","2df11f72738ce1c7436c8c8f22e3946f"],["/tags/JQuery/index.html","c2bc53f5bcbdd66084096ca5e934eeb4"],["/tags/Java/index.html","7188215f0265a1d1b4678cfb82a55239"],["/tags/Java/page/2/index.html","f183d5d4ff79b5d4119c04b47486ff54"],["/tags/Java/page/3/index.html","9c4c2c911049ee6c1e1c30f87c32beac"],["/tags/Java/page/4/index.html","a75cbf15a93c52f2b453c3f558c9e823"],["/tags/Log4j/index.html","10c48ba3cd1a56c3dbe7bbba33788549"],["/tags/MySQL/index.html","ad44a99bb87763df1fcf8af77a86ef4b"],["/tags/Redis/index.html","867aee0ae9512f097f62dc128b02a2ab"],["/tags/Rest/index.html","f8e295e4cafebfc36d1bc736854ec2e0"],["/tags/SSM/index.html","b6cab9598f34c2f3c7790ecf9439dac3"],["/tags/Socket/index.html","b180454b7e19b44ff254e8131afd5a51"],["/tags/Solr/index.html","81c5da555950138f72f6425fbe14cee8"],["/tags/SpringBoot/index.html","2c40790a6cc3e70b714da44c04fbcb41"],["/tags/Travis/index.html","0576109f78633207b2fcd1e9efce6688"],["/tags/WebService/index.html","237ce3daced000e304131f4e354e303c"],["/tags/index.html","069f8ec20e079669b3e719fd9953fb63"],["/tags/学车/index.html","574ab7164c8218e25f9d9bc03ac388e1"],["/tags/工具/index.html","5becc0a3a2cf5f76d01e7656ada180a1"],["/tags/数据库/index.html","79694be979802daefc69c2f55268b37c"],["/tags/日常/index.html","79e677223a85bbeb631d7a32bd389f94"],["/tags/流书/index.html","2d6254b7d708d70ec1eec60995d0fb4a"],["/tags/生活/index.html","b5be66a0b98ce1ef2182658f898553a5"],["/tags/算法/index.html","da3970827f2dc24a42b668a75b3101c7"],["/tags/算法/page/2/index.html","9caea5e05090455dd33762364405a2ce"],["/tags/蓝桥杯/index.html","1ecf195bb22aeed3a8fa0d0364e0653d"],["/tags/蓝桥杯/page/2/index.html","927c950eeefbf849a65902da16a0a19e"]];
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
