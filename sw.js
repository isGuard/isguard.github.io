const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "ZENE"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"f97d8a1f316945ade06c453696b0d067","url":"./01c00fab19d5.html"},{"revision":"d0178f51f576e1dea8b9d8bd777b806d","url":"./0380823323ea.html"},{"revision":"a34de1ad9fc30ebd69eade5661cc384c","url":"./083b7d32f844.html"},{"revision":"701a8324618ea4df8e594208c91f0ffa","url":"./091f0d83f102.html"},{"revision":"c3343a26eae325894dd4952da65568e9","url":"./0af545735672.html"},{"revision":"145dcb7f68a22bd9e9fdbb57f1965001","url":"./0cc7ddcf0032.html"},{"revision":"a58c1ce2be236f7eb66cd4ea094ef053","url":"./0cfa7e337349.html"},{"revision":"807757a7c341c8057c07cf849fa552f4","url":"./0d714c49bb0b.html"},{"revision":"7a7c6e19c0b4f74622aa558f04137b3a","url":"./102164869c4c.html"},{"revision":"52f356be186835e5f820897cbc335d64","url":"./144f3d359cd3.html"},{"revision":"f18d51c88afcd3bcb9bb46220500c633","url":"./14f35b3a6d64.html"},{"revision":"83bdd7b7b64881b7997b055e7b1b9209","url":"./1698a47fcf6a.html"},{"revision":"540c82e129e592ea998043b6d697d7dd","url":"./17f5eb8bcc0d.html"},{"revision":"a22c856dfc9cf225c059ed416c020ea4","url":"./18ac9d961f0b.html"},{"revision":"733395f7ba47476ef0cd57170277ac6f","url":"./18e2d5e4b6f3.html"},{"revision":"51346841ab0737664b23fbefca7f3bcf","url":"./1b9dca731c12.html"},{"revision":"9696fb3a7bb96766a1427b7ebb8ee90f","url":"./1c1b04db2c01.html"},{"revision":"f50820d44b7d3709926a763d749388e5","url":"./1e8a3115b061.html"},{"revision":"7bf5f9884db3ae64fb3d4a7be46f4b91","url":"./201854ea4b36.html"},{"revision":"e38b20c41b3e54123a29c71c7bc20a89","url":"./245047f7f750.html"},{"revision":"407d57db9e70df3478c4e1ecfb5f1669","url":"./2605a2a5060e.html"},{"revision":"27eb32bae88cf155ff5c3e140a8780c8","url":"./2871874be300.html"},{"revision":"35f329d0fdda5dabdda3a0741045ab2d","url":"./28d125e258a1.html"},{"revision":"8748e1db97fc4821ce55bede7cc53c07","url":"./2cc594bf8909.html"},{"revision":"6ed44c369adda61b5cc1a8a124dec9fc","url":"./2ce74a09c8f3.html"},{"revision":"86f9c648f81f6eb56afba6aaf5d09435","url":"./2f190b34c2b3.html"},{"revision":"aa87305dedd9924a41cc51e85ae6e805","url":"./3004cf782434.html"},{"revision":"990fbef8c11a2a719d24985e8013cba4","url":"./33f8eb0da2f0.html"},{"revision":"bbc5b28dd15d4be6e2b950a59d4e6066","url":"./3494683249bc.html"},{"revision":"bf5c72071a2976b68d68fe6e9873c778","url":"./378fe56bd246.html"},{"revision":"9443bc646828669ca44c469d68e10047","url":"./3a4ba11b7a5e.html"},{"revision":"6dbe3e50082637139b6c63e382f8d1ae","url":"./3dc224c52b20.html"},{"revision":"3b825ff29a897362938e491a9019edac","url":"./3e4b52661133.html"},{"revision":"27c6e6f1e5b5d8db9c2c93076906e2a3","url":"./3f94559a860d.html"},{"revision":"67303810ef7a467dc8dd50655c9c4ac2","url":"./404.html"},{"revision":"b8da18df906660a82b81da78a3095650","url":"./40901eb5b99a.html"},{"revision":"f0d2596efbce157fb9822e800a1431b9","url":"./4264568384dd.html"},{"revision":"f5cb40bf3ae51599196d2cca573e0545","url":"./45cec86ad3c4.html"},{"revision":"5c747c6a55612d8fc72949e6ab7ae79b","url":"./49d077e64aa6.html"},{"revision":"2c25ba60263bac1d6edb21d99abb9985","url":"./4b9608333997.html"},{"revision":"cc2b9d87ec1631d3950feae8a5181583","url":"./51c5316ba4dc.html"},{"revision":"f5a750917a2962dad549580af445fc5b","url":"./543613fef7da.html"},{"revision":"1eefaf79f7384b2cbf00104b76c20d3f","url":"./546c10072d86.html"},{"revision":"1ded6a6fee813fe56050b42072a2ebb0","url":"./57bfd13fa382.html"},{"revision":"d729a4f414bfd058843062c26ecd025c","url":"./59d451fe7cbc.html"},{"revision":"ec7246e683e228ad5392580033caf274","url":"./5a25eafad98e.html"},{"revision":"8eaaa6e99694a0ab970dd9bbb118dba5","url":"./5d0a7171e2be.html"},{"revision":"d06f5e1304eaf1a9b72653d7d23f193a","url":"./5e4e6842d754.html"},{"revision":"7c3fcda84b25d624d8e33f6a9a502d9e","url":"./6321ac3497ca.html"},{"revision":"8bcece02838113dc1679d7bc1b7ee1ab","url":"./63d02054b042.html"},{"revision":"49824f0d4f2e7ae624f546e889e0a320","url":"./641601337f0b.html"},{"revision":"262b038735e8e8eeeb68e996af9bd994","url":"./65e4aa78c9e6.html"},{"revision":"ed1da8100f079a4fda05c1d8c1a91171","url":"./672524809abe.html"},{"revision":"0d8dde08e7f3a208b7fd314b82ad3dbd","url":"./675ab52ded3d.html"},{"revision":"adcc28acd70e423ab0f090ddc8413a08","url":"./69bb6d2d9142.html"},{"revision":"fec1a38cf82e9340731d485ec554196c","url":"./69f998dd7524.html"},{"revision":"46391ac78cd0a560b51abddc5cc8f258","url":"./6b7289fc875f.html"},{"revision":"7df536b0b27c1f67d8fa803f49f763a6","url":"./6f2cd147c9da.html"},{"revision":"254d7e3e312582c554e0aa438f9fb574","url":"./6fe7860f08d4.html"},{"revision":"0fc19935eea1931906473b241a7d03b5","url":"./70ca5927dc18.html"},{"revision":"7ae99ed41553bab72e2d22b6e1c410ce","url":"./7371f7e698bd.html"},{"revision":"0c9eb81a16eb440c0a7825bf2a6cbb88","url":"./7434890e6022.html"},{"revision":"08c801fe4d6dc3bd0c03c334ed7666d4","url":"./79edd52b58c3.html"},{"revision":"5fc0ed6e27615024e71bc69f8d6e4c71","url":"./7b851fc8c287.html"},{"revision":"472572ed16b2e5f4c0afdbd8555680b9","url":"./7c039cfe73f4.html"},{"revision":"793adce7caacb86a741b0011b4b98a34","url":"./7c8516486039.html"},{"revision":"6f3e6e59e00703f57752a48abce43e0b","url":"./8193ae6cfd9c.html"},{"revision":"ebcd801105935f89a5b8550bea9d902f","url":"./837862e41b91.html"},{"revision":"1f1e8f025440319bc2f383b5cbe0dee8","url":"./83e4d5ba76f4.html"},{"revision":"c854bc092c1407febc1e3d388f7dc625","url":"./843e58d8929c.html"},{"revision":"64a61130d771afdec15c2bb2241c0d21","url":"./85bb8468cbb1.html"},{"revision":"4384a9fbad4cc8c8276b61234a6b79c1","url":"./8aea8b702ec9.html"},{"revision":"d5a5ad98baa2a458ad8fe79c0af4550f","url":"./8f0902f5fa56.html"},{"revision":"cd74662f678133d299b398f8b4dd5f71","url":"./918110f64071.html"},{"revision":"5876e2bcb2ac823652f2b420c69a4310","url":"./9865be07681a.html"},{"revision":"d0e3e85634f3bb4af6bb373f23c5d9dc","url":"./a21c0106b4dc.html"},{"revision":"626d111e0279a698ab21cd450b926316","url":"./a295f8b882ca.html"},{"revision":"bf4dc11af4d26fe21b75e84e4066afb5","url":"./a2cff47e45b4.html"},{"revision":"dffee886fee89fbf6845d89e12492711","url":"./a39447736c9e.html"},{"revision":"3d18701c114f4a6065d638d4d05f68ff","url":"./a66da301ed65.html"},{"revision":"88992afc405dd8947f965a4a4c33c7fc","url":"./a8e99b664015.html"},{"revision":"eb36f1fa4e1fdc2bc6d6edb951bda903","url":"./a911b7f249e6.html"},{"revision":"91c41cb2cbee01239cf970d086153cc7","url":"./aaafb3b4b102.html"},{"revision":"5123caa8fa0ff19e14a348815d2c5c0a","url":"./ab4774b19476.html"},{"revision":"3094e818d2168204b69ccc8ecb09f4d1","url":"./ac05f6c6cbcf.html"},{"revision":"0d4728f59746dea887c1b3d69e6ccd39","url":"./ac93dc79a32b.html"},{"revision":"346d5e64ded45ea155d72e018e2180ed","url":"./aee8b86da60e.html"},{"revision":"9d2c569c0ec4a25085ac8f93799c48de","url":"./af0c06af727c.html"},{"revision":"e33f7b64e8d237c84c48cc0b45c71d9c","url":"./af9f2ecdb071.html"},{"revision":"ebd97436e07d432cc42529df66b19533","url":"./archives/2018/04/index.html"},{"revision":"02f542dbc8d38d944771737e4e5209ee","url":"./archives/2018/04/page/2/index.html"},{"revision":"3569170399e767a2ade217512ab29c6f","url":"./archives/2018/index.html"},{"revision":"9b2620b880741669b5006bdbffc1f1d7","url":"./archives/2018/page/2/index.html"},{"revision":"952f5f6426232a7fe99807eb473fab43","url":"./archives/2019/01/index.html"},{"revision":"817f1f783b2f518afdc0635342a87e1f","url":"./archives/2019/01/page/2/index.html"},{"revision":"d42363f689b36c222fab8709153b42b4","url":"./archives/2019/02/index.html"},{"revision":"aba49958869152fb0b01c507c78803e4","url":"./archives/2019/03/index.html"},{"revision":"0bfe6132a7d3fe808d7fe324dbe5879e","url":"./archives/2019/04/index.html"},{"revision":"3d3311ff254c75a5879767a51ec387ec","url":"./archives/2019/04/page/2/index.html"},{"revision":"8373222d273ebd32783cc497f0b138a2","url":"./archives/2019/05/index.html"},{"revision":"dc6648cf180fa56f720e1170c1900f28","url":"./archives/2019/11/index.html"},{"revision":"21d07a94f945ddfc04aed0b899aa1dd4","url":"./archives/2019/index.html"},{"revision":"e9dd3a47e3e064b3106f39d46c6eee62","url":"./archives/2019/page/2/index.html"},{"revision":"039c99d39ed325977fc5d986cafb14d2","url":"./archives/2019/page/3/index.html"},{"revision":"024294d0e0114d2b87a3f5552abfc4be","url":"./archives/2019/page/4/index.html"},{"revision":"85958750fa6cecf11ee7f2127a0cd78c","url":"./archives/2019/page/5/index.html"},{"revision":"d7ae82950928978695bbe8cf4ca32732","url":"./archives/2020/01/index.html"},{"revision":"adf91ed963f59c3232a729a8736208e8","url":"./archives/2020/03/index.html"},{"revision":"702508673c4bdeba76d13a9a41769e5e","url":"./archives/2020/03/page/2/index.html"},{"revision":"37c90fcb6de4f0377e44e5e3bfabbf8f","url":"./archives/2020/03/page/3/index.html"},{"revision":"889b6ac79fcab70d3f28a5afa14afa10","url":"./archives/2020/04/index.html"},{"revision":"fd755ec5943044d2fe3a483aa052eb88","url":"./archives/2020/04/page/2/index.html"},{"revision":"0cf0314b16efe6889e21902a8c50c236","url":"./archives/2020/04/page/3/index.html"},{"revision":"cca7e97fe0758f42dbf44e9ba6fba044","url":"./archives/2020/04/page/4/index.html"},{"revision":"b319fc519a5a727692f379bbb079e086","url":"./archives/2020/index.html"},{"revision":"10dc08234a411e9dc7c05202569ed94e","url":"./archives/2020/page/2/index.html"},{"revision":"cbdaa7678df3eecce381046029c9b429","url":"./archives/2020/page/3/index.html"},{"revision":"6cd397e8054789945eaf669cc3897631","url":"./archives/2020/page/4/index.html"},{"revision":"9995249fc4a805a96c588403fedd26bf","url":"./archives/2020/page/5/index.html"},{"revision":"7e9b9f5db52eb11427963c90ee97186a","url":"./archives/2020/page/6/index.html"},{"revision":"e2a33540c4f6c744fc309e49c1411eeb","url":"./archives/2020/page/7/index.html"},{"revision":"f08806e329adf54f4e6438d9fa46a11f","url":"./archives/2020/page/8/index.html"},{"revision":"f735599f37fa211a65d9c88179124224","url":"./archives/2021/01/index.html"},{"revision":"f64ec66b95d79b53ff1c6b0cb43d0390","url":"./archives/2021/03/index.html"},{"revision":"e651f68b3b6554dc8d1a626f7619ed23","url":"./archives/2021/06/index.html"},{"revision":"dcd5f6f1583c10b1a68411410dff670f","url":"./archives/2021/07/index.html"},{"revision":"0542480fba774bbe35e75373a68ba941","url":"./archives/2021/07/page/2/index.html"},{"revision":"55ee58027542924bd95f4ca04c27bed8","url":"./archives/2021/07/page/3/index.html"},{"revision":"acc0d332b82d5d9ad9002fceb0a236ce","url":"./archives/2021/index.html"},{"revision":"67f255f197ee3f56d36568d2c5294703","url":"./archives/2021/page/2/index.html"},{"revision":"89d91eb13d371887e1ccd7e92adb1050","url":"./archives/2021/page/3/index.html"},{"revision":"be09ff20ee14ecbec284dd7ab0487fbc","url":"./archives/index.html"},{"revision":"a6aade67b244034dc3e1c2dc355548f3","url":"./archives/page/10/index.html"},{"revision":"40591b9871fcaea524d752757fab129f","url":"./archives/page/11/index.html"},{"revision":"10252d98fe8c18b8be5b59bd30372072","url":"./archives/page/12/index.html"},{"revision":"2fe4cc2e1faa57807d0f1071e89d705a","url":"./archives/page/13/index.html"},{"revision":"fb8379cd71ed788e34ba08eb81480a46","url":"./archives/page/14/index.html"},{"revision":"0e09dc316403becec0187caa01f036aa","url":"./archives/page/15/index.html"},{"revision":"d4df533f4f36f1ff247839324e812e87","url":"./archives/page/16/index.html"},{"revision":"69526f0871b4b478d0958968d7f54d57","url":"./archives/page/2/index.html"},{"revision":"2e591dc01c4c7b543d582868bf1edc00","url":"./archives/page/3/index.html"},{"revision":"ac89af612f58d563edbb7fdabad3b61f","url":"./archives/page/4/index.html"},{"revision":"ddce62aa2e9c6b4d733d60e23696a573","url":"./archives/page/5/index.html"},{"revision":"67233941f5ed8a1541abde49ec99d7a8","url":"./archives/page/6/index.html"},{"revision":"b03c78ef7eda9604ec55bc65e9028789","url":"./archives/page/7/index.html"},{"revision":"25dc7f5af8c5c10af72873168f0574d1","url":"./archives/page/8/index.html"},{"revision":"318409a13d5ee5e9f90758fcb31f0aca","url":"./archives/page/9/index.html"},{"revision":"7995b7e8c407cb46f1201c13d5549d4a","url":"./b176b2fd8637.html"},{"revision":"049b6f6c88a5312ad1c5294552b34e69","url":"./b17819308f04.html"},{"revision":"90819b53f756771c2efe64e5487b0374","url":"./b18884c315bf.html"},{"revision":"d71a142b8cb61c326d7a9695da99c453","url":"./b1fbbb5bc700.html"},{"revision":"4c990f5b6b84334e465b7c93170f5c65","url":"./b28bf5bb0dae.html"},{"revision":"bf7b3d8e36dfd61d033766d65e728bd3","url":"./b2be80fe9e8f.html"},{"revision":"06d375771991ab47725c6accd8c36def","url":"./b3421d932a26.html"},{"revision":"02734c38514392af249182582effef7b","url":"./b3946cdad917.html"},{"revision":"9e95025a01220c4d109ea6b6e622793a","url":"./b44c36a2cabb.html"},{"revision":"b066fb3b8cc7025d971f0eafb9805489","url":"./b53c187d0041.html"},{"revision":"78ceb10cf94fd9440d4307b93c5ea3b5","url":"./b6106669f562.html"},{"revision":"27340632c3c0f29792df31715163c47b","url":"./b69418481828.html"},{"revision":"5810f20148412708e5064ef14e027a95","url":"./b6a4fd82fcfc.html"},{"revision":"4cdb714b828fbe17f52cd73b429b9b4d","url":"./be1395c7d0f0.html"},{"revision":"728be5cb380195dfaa821e7b74fb3cf0","url":"./bef1ac8b1d67.html"},{"revision":"36b4c445075711433aa95c6547b1585e","url":"./c5e01090a818.html"},{"revision":"b512a274562880eb5172fd8d53ebaf82","url":"./c60ecd4f0833.html"},{"revision":"e3a3894db52a9b07c814919d48e4da62","url":"./c6c507ac38c4.html"},{"revision":"6ef964eb24fceb160b5a347e3104ce80","url":"./c6e327594862.html"},{"revision":"50f425a0edf9842f77147f5497499d74","url":"./c748da646b0b.html"},{"revision":"8ed23abdd62c2a804642114551073cb5","url":"./ca04d468491e.html"},{"revision":"c45f34d9668b7bd0a885b0972da6cf9c","url":"./categories/Hexo/index.html"},{"revision":"ae263e014b56451669d69bd03161f325","url":"./categories/Html/index.html"},{"revision":"50c81e2af9b54a5b36d0df0186c89c91","url":"./categories/Java/index.html"},{"revision":"22511dc78a37091029230372da574e9e","url":"./categories/Java/page/2/index.html"},{"revision":"fe5b2bff5d7db1568e61a423d421b03c","url":"./categories/Java/page/3/index.html"},{"revision":"8f08819cd2e95913dd31ba864525a0b6","url":"./categories/Java/page/4/index.html"},{"revision":"705390ad0a5d76f8b9385928830cb241","url":"./categories/Java/page/5/index.html"},{"revision":"2b0b888ddfa15f9ddce1da1e4e386b20","url":"./categories/Java/page/6/index.html"},{"revision":"81b6efcb014c0a09959263a7cb327a1c","url":"./categories/Java/page/7/index.html"},{"revision":"19d3395daff818082546740c5f3c61f4","url":"./categories/Java/page/8/index.html"},{"revision":"b1c2acc8684c7540ebc3bd8cd469d3eb","url":"./categories/Linux/index.html"},{"revision":"d937766d25ded267d9fe6ffe126992db","url":"./categories/Maven/index.html"},{"revision":"be9044c592c8b38c805b980f8435359a","url":"./categories/工具/index.html"},{"revision":"e41564c3aa85eea5c0ba66b57b04e6b0","url":"./categories/数据库/index.html"},{"revision":"5b75abb7be6405e8f7aa448fabf8ce17","url":"./categories/日常/index.html"},{"revision":"47d8a55b8a28102e922076547a15f563","url":"./categories/生活/index.html"},{"revision":"70f5b51299af5b41245a37b38ec80ebf","url":"./categories/算法/index.html"},{"revision":"2841e5f6ca634bf999460e0e7ad8a95b","url":"./categories/算法/page/2/index.html"},{"revision":"9caaa3c59f320a68d1c36453857438d2","url":"./categories/语雀/index.html"},{"revision":"2e3a72dce82f0788c717c5640d4e5b56","url":"./categories/语雀/page/2/index.html"},{"revision":"a469cd15c47a5b5a5c37846c57a17abc","url":"./categories/语雀/page/3/index.html"},{"revision":"bf57dfdfb1dae36d42f0428daa1e8653","url":"./cf7513efc8a3.html"},{"revision":"582891c3ccfef505f8e6cb29176befda","url":"./cfa84fd74626.html"},{"revision":"e506bd8fe78a813e9a2d4e8a37902362","url":"./cfd6d46b475d.html"},{"revision":"491f926edc29345153d55befa2f3ced7","url":"./css/index.css"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"./css/var.css"},{"revision":"cc1e889c589652eb5d0940ace6a31b3d","url":"./d149732b2cfe.html"},{"revision":"c42ae34967241498e252fbe871537d63","url":"./d2d51dce913f.html"},{"revision":"e00e183c84a417b10ad8bc2b13b76c82","url":"./d4fe7f53dfd9.html"},{"revision":"1cdd221174d5b5478111a35c3b6d9d10","url":"./d620a8aa8580.html"},{"revision":"993c01cab6b7ba28f77bc9a0d2808e73","url":"./d71834e48b4e.html"},{"revision":"30e8668c0e8be99e601a27d819d0fb02","url":"./d7751bc6745e.html"},{"revision":"511f24f2c51f0d5176ad17054764d81b","url":"./d8aaf5d37cb0.html"},{"revision":"31c0a0cd2ae3761e9e23d56b24fc27d4","url":"./d911e46da2b8.html"},{"revision":"d1e0bec07c980cc9e16c6fe105d5386d","url":"./da07fbdb9fd0.html"},{"revision":"54fb2abfb237c2ce64727477cac56f33","url":"./da89cd139d26.html"},{"revision":"cfc53706325679b3af0a1d6b1b539526","url":"./dc5ef838632f.html"},{"revision":"69b0bc99eeca0dfbddfee96a7286fd44","url":"./dc7e2b97a6a2.html"},{"revision":"ec388fb3e005254fac644d18cd1c4b8b","url":"./de53a68554c4.html"},{"revision":"1107b4c12e1d3302a945cc01b87db8e8","url":"./df5068bb57d2.html"},{"revision":"9ef6d1883efb277b79ece12253fe9824","url":"./df52bcc43c75.html"},{"revision":"2c7ec4620c114804f8d173efc63d3d4a","url":"./df684ffb9540.html"},{"revision":"f37bce5f54287bb2580cb41187e56462","url":"./e1ce4e19566f.html"},{"revision":"9e8c5a42b9ef6e463c624c78b584969d","url":"./e337a70add48.html"},{"revision":"f991fe30fe8f38285603ee710c8564d9","url":"./e43d8e1e85d5.html"},{"revision":"176b57c65594b2ff5dfdbe503d577f71","url":"./e460c106f773.html"},{"revision":"1b8518263979adca004b7eda95beda59","url":"./e47508c7c8ce.html"},{"revision":"bf64c3d5995d3d099a2bbbc8c2fc9842","url":"./e5ad37bd9e65.html"},{"revision":"c8b1b5816e752bc9b04ac02447f1811d","url":"./e6323226da63.html"},{"revision":"650220feb60b999f80ad60a93d07c625","url":"./e6ddddcf68e6.html"},{"revision":"3441efe942edfde06d0ec9a2964a3846","url":"./e72787e674a1.html"},{"revision":"c56e0b44b60a3d9fdcdc63b1cd0d29f7","url":"./e877f7d30bd2.html"},{"revision":"b4599a086b05d856db07ec968efbfb19","url":"./e8d6d5f114d9.html"},{"revision":"bb5e2553e9e8c6926608b8930c2a10cf","url":"./ed6a15da5969.html"},{"revision":"8b055db9251eb870463c74fbc0d5578d","url":"./ed9501b8d471.html"},{"revision":"739d54b04b81550e4ec1a75860706b74","url":"./ed9a6f7913bc.html"},{"revision":"463b692eafc67f884c2cf32dbf084f5c","url":"./ee5c0e48c3d1.html"},{"revision":"e2b1c9755f6fdd474a2de40bfa73acb7","url":"./eea72e773574.html"},{"revision":"23d4814a2125d22fdd87a7de6ff5d9fb","url":"./f144d956d9c0.html"},{"revision":"7fde36847547655e33349a082c667246","url":"./f563a9569919.html"},{"revision":"fd1fbe58396d31469f0c0e788ff9e1df","url":"./f5ec6e6d230c.html"},{"revision":"6a9875ed6cfae0ab5c03bc8ac94719a4","url":"./f6db78db1f90.html"},{"revision":"da21978872b569d65782ddf40f0b7466","url":"./f70d50f7bf77.html"},{"revision":"af755e25ff85a25cae6ae950e284df72","url":"./fb3dac0e46f1.html"},{"revision":"e8ffd98f9fb48784a09a060a74004d46","url":"./fcf19d075d62.html"},{"revision":"00763b66b16627987ea91fe459fa085c","url":"./fdb3287fae31.html"},{"revision":"b8dbd63764292b4b32d407287c2a78a0","url":"./fe248847c921.html"},{"revision":"3acca94204c1e01c234ab530d2f7cd97","url":"./fee0daf7ca52.html"},{"revision":"0db432462a554bbc7a0aaab9c218f30c","url":"./index.html"},{"revision":"01f62452fd05335569c6341d3ac0f52b","url":"./js/main.js"},{"revision":"533d980c0d50a0d0d7fe34c41a3e2100","url":"./js/search/algolia.js"},{"revision":"acb62dcdf7e90930da3f6bf07349fc21","url":"./js/search/local-search.js"},{"revision":"b3810513e04b13b2d18c6b779c883f85","url":"./js/tw_cn.js"},{"revision":"12cef07c2e9bc8841a5380df4fd342f5","url":"./js/utils.js"},{"revision":"4b04c884777821bd2687676e2029bdf2","url":"./menu/about/index.html"},{"revision":"263c5cb1dc065ab64e80ee7de37492da","url":"./menu/aria2/index.html"},{"revision":"993100bf10f48608c6162743fa8b36f9","url":"./menu/categories/index.html"},{"revision":"8a69c005ebbc2468fccafbe2ef21c8c0","url":"./menu/link/index.html"},{"revision":"75141c71907e2b6bbbfc34396c3f06b5","url":"./menu/tags/index.html"},{"revision":"1c787e9d211a8495c4591d2e555359c5","url":"./page/10/index.html"},{"revision":"d65e21b3a059a0a8943e0829fde0d79c","url":"./page/11/index.html"},{"revision":"ffca2c2ad49d51e6ed7a2a9b7fb9c95c","url":"./page/12/index.html"},{"revision":"84fb825c3852b1d81083472a83f736f2","url":"./page/13/index.html"},{"revision":"e333837b5b6b2d20848737eec79f3a9b","url":"./page/14/index.html"},{"revision":"df769a027214a9c182d8beccbfd62f5e","url":"./page/15/index.html"},{"revision":"b8aed6f35fca43c6f71ffb0b7314b22f","url":"./page/16/index.html"},{"revision":"a2b69ba5f6c53b17df778d23a33ea2f9","url":"./page/2/index.html"},{"revision":"22afb23592cabd82e1f9e28c79aaa9af","url":"./page/3/index.html"},{"revision":"d69db2c33b676b0d534dae5fc1f8db64","url":"./page/4/index.html"},{"revision":"f6786a0a3a1e64c19e2a447b5fcb9013","url":"./page/5/index.html"},{"revision":"3c349c350faf39b433e806fe7862cd2d","url":"./page/6/index.html"},{"revision":"7d06c7c5450a5e7a97082df367cbe1f8","url":"./page/7/index.html"},{"revision":"290c6ebc31fd8cf62ec5ed520115d5db","url":"./page/8/index.html"},{"revision":"d2aa19692d5d3e71f19c6ab59ea64215","url":"./page/9/index.html"},{"revision":"d8e6da7414e33802b666fe1cadfaae33","url":"./static/pwa/icons/README.html"},{"revision":"559d8512ff2e6d361a8f0797a2c13cff","url":"./static/pwa/manifest.json"},{"revision":"3d598844ba74b652546de4b6cfb202e6","url":"./tags/Ajax/index.html"},{"revision":"8c37a05303f962bf4d61967a6b7ffecf","url":"./tags/Contos/index.html"},{"revision":"1cfe121d61bf8187b4e997c6708cf812","url":"./tags/Hexo/index.html"},{"revision":"b07cac762c9849b4516979a88a281236","url":"./tags/Html/index.html"},{"revision":"19a7bfd0701132c19defe25cbf9bcbab","url":"./tags/IntelliJ-IDEA/index.html"},{"revision":"f0c343c9538308d15a2f440d6e386c8b","url":"./tags/Java/index.html"},{"revision":"86e77b33d1eb3a9bef743f30d957d0b3","url":"./tags/Java/page/10/index.html"},{"revision":"bfd5b5aff80cec70252fb47508f0a33b","url":"./tags/Java/page/11/index.html"},{"revision":"38063aeb7d591a1c6ace4007f8a9c11c","url":"./tags/Java/page/12/index.html"},{"revision":"6264021dfa2c64bf8fdddd5981f5c50f","url":"./tags/Java/page/2/index.html"},{"revision":"33852338c01a560537ba786fda5e86e9","url":"./tags/Java/page/3/index.html"},{"revision":"2e9d8d30b1fbb56e1ece49a4558255dd","url":"./tags/Java/page/4/index.html"},{"revision":"c143279e8149b4125d4210921c8583db","url":"./tags/Java/page/5/index.html"},{"revision":"035006f92d184743689ac2cfcf0c063a","url":"./tags/Java/page/6/index.html"},{"revision":"1461b34105eadf39f3b9b9e143cc070a","url":"./tags/Java/page/7/index.html"},{"revision":"2927ecbe5f8f99ea2214c271cf43fb7d","url":"./tags/Java/page/8/index.html"},{"revision":"a6a02e01ce76e46c4b9f3b468562fa44","url":"./tags/Java/page/9/index.html"},{"revision":"cc3e35cab4f75848d9ece1213f11f7d5","url":"./tags/JMeter/index.html"},{"revision":"393b90c5569598c71a1c115b72b92691","url":"./tags/JQuery/index.html"},{"revision":"8e5d1b4a11e62b15c4e601fceee9d4b2","url":"./tags/Linux/index.html"},{"revision":"0b37fa9ad9666104df302a530911fc1b","url":"./tags/Log4j/index.html"},{"revision":"3ccc596415ac046b9af9e874cbb43a6a","url":"./tags/Maven/index.html"},{"revision":"0a4000167b28daacb633c7b3518eca81","url":"./tags/MySQL/index.html"},{"revision":"2706e03eac024131bbccd2b74b1fc299","url":"./tags/Node/index.html"},{"revision":"d2bac96b4a956b7a2db132d3e4aa2e37","url":"./tags/Redis/index.html"},{"revision":"f298ee5d08059fc378185f72ee4cb277","url":"./tags/Rest/index.html"},{"revision":"bafc4805c044fc4ad0a13b8433cc2c56","url":"./tags/Socket/index.html"},{"revision":"f4e1d7baafc56fb8be0ef2617f8239c2","url":"./tags/Solr/index.html"},{"revision":"02985e8c3da67e9c97c711d84a06c715","url":"./tags/SpringBoot/index.html"},{"revision":"dbd217ab55f12792b7b3556a7fafd55e","url":"./tags/SpringBoot/page/2/index.html"},{"revision":"28534ae5b12652ff43c571e5d5db9d3a","url":"./tags/SQL-Server/index.html"},{"revision":"29cf48713c6bdea2b11805b4256d6166","url":"./tags/SSM/index.html"},{"revision":"84d334da6c86d903ce8f80166076f1a0","url":"./tags/Travis/index.html"},{"revision":"84508ac0883c59e9ae4df25d09aae338","url":"./tags/Ubuntu/index.html"},{"revision":"b9c36bc94dfd80a2f061ffe1ad632f19","url":"./tags/WebService/index.html"},{"revision":"d5ad7cce4e59258f1b7aa140a67fd647","url":"./tags/学车/index.html"},{"revision":"33cae672f0d933ae43e8f6a6e8f365fd","url":"./tags/工具/index.html"},{"revision":"cbbadefede9d4317270d391942d46eb3","url":"./tags/数据库/index.html"},{"revision":"841ab7afe4c6d02aeeb1e83758a80ce9","url":"./tags/日常/index.html"},{"revision":"bb16ca979f2103bf5eed3ca121719ee4","url":"./tags/流书/index.html"},{"revision":"91be18904e28f4cbb09055cd4b5bb25f","url":"./tags/生活/index.html"},{"revision":"27d841cad55a35fc6e7b0287371a4740","url":"./tags/算法/index.html"},{"revision":"f863a01c0ff7759db0758ed43aac0a27","url":"./tags/算法/page/2/index.html"},{"revision":"6499c9408f295df3a66ab32011bb9465","url":"./tags/蓝桥杯/index.html"},{"revision":"4c0bba3430b433e286607051d38f9b20","url":"./tags/蓝桥杯/page/2/index.html"},{"revision":"80c93141317513992b84e776ec1f72b0","url":"./tags/语雀/index.html"},{"revision":"f6ecd6b0d47382db8b6eae014fde2724","url":"./tags/语雀/page/2/index.html"},{"revision":"239d129b1edaf1f8695c173817ee8b41","url":"./tags/语雀/page/3/index.html"},{"revision":"fb90077b8f70c14899f204df317eb49f","url":"./tags/音乐/index.html"}],{
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
