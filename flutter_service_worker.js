'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
".git/config": "4e9f9eb00a3f645bd0d824c8fb14223d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c86570aa13cd8c3b93f286861476cd94",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fafdcf13c52952003eaa9142be43af63",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d6dd2f61edc6acdc847428ff692c04da",
".git/logs/refs/heads/main": "d6dd2f61edc6acdc847428ff692c04da",
".git/logs/refs/remotes/origin/HEAD": "0ee332738ceede7f301a5efc82fda306",
".git/logs/refs/remotes/origin/main": "7dcc31a7efe932c46fad4a613f2bee1b",
".git/objects/03/4c13336f6d6b71d4e6a0ca2b5ce797693f9d35": "a9d18978ffe30d13fe8a75ef86e2fe43",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/07/4119268b348198d1ec8444507d1cb0ee9eb26b": "13b3fe92979727397180322c3a3f0b1c",
".git/objects/07/741403a7713f6a189cc0d90307e1913ad4f17a": "b32752eef0fb6e101c7da3a8726f6f63",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/11/dd1f8ba3c20bff800b04f23869f70096733555": "fab6c2c727af2294a87ee4863b46077f",
".git/objects/14/11b9b451d938f58a801a6ac54b60411db4eeed": "bdbf15bb8c116df9a2d569d091feea12",
".git/objects/14/5b105fe2d32b555557eeb41898b6986cd0afb6": "1d79e10e2bd952bd5cd88af3cf90a3ad",
".git/objects/17/6a2f3546853947159c6c0143a04e5ebec20e20": "304bbd38c817520bb6991d96ac5745cb",
".git/objects/18/ccd8fb88e271b1ce4bebfa6af9ed103d151d31": "f834e31c4aafa56ee96f3dc0a1e402c5",
".git/objects/1c/9d3e4db85a2ce3b28e8a35e67293cbc2c1fb1f": "c2a39ece9ebebe6391b017f02f76ce6c",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/9b4c6d1288bd537302e7ee5db9be7ad4db53d1": "00c9e4afb75b651ed80a3345aac6d9c9",
".git/objects/1f/efb3222553923660b8bce6201f0e13f77da4d7": "12a0d4d3de22e233f947fd16c0d36df5",
".git/objects/29/3b489c5c2a0e752d7af3fb59614085cf2e63ca": "f30ab3ef7895c81df603a2dba45d035e",
".git/objects/2f/4a65a780a3c82fa98680cef6bdd3c439086713": "01cc5ef450a370d13ce6eba007d926eb",
".git/objects/2f/7c9e75c188e20137e97f6572e780e0e821ce72": "5d9e35bc90d490c46e23ce41b287ec24",
".git/objects/32/e6e665402c77086e850769bd4537c2ba346d20": "e02bbea019197c59d824b46caef75f9c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/2131ce10dc8c1dcad6a541fcbeb8701c75bd77": "2182918e99817c4278ea6351dc446a6f",
".git/objects/36/de10704dea01e4412342da2d4e42f301b8bd7e": "82e6c66c2cfc79d3d7ede03d4d426c57",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3e/965b2bce3318556c82cb12205ca78e19838462": "f157d0b53862ec71b2c2c25b926140c1",
".git/objects/3e/cd679fe93705c6aaa128974402ea2c8a6d3609": "88d42d348d6772364133f4603397d324",
".git/objects/44/f715a0c0ead5253230bd6be1a28e40a4e74b6c": "e4ecf52b7e9ff52f7fa3b41400f36757",
".git/objects/47/83284537e9158bea54e069b261a44504aea2b1": "0bea2aced2b5546efd55bafcd3c7c0d6",
".git/objects/48/2f958ec3b42ac5a523a0fe3ccd9d1df5148752": "564e8171dda681817049f7602a8a4768",
".git/objects/4c/05650c1ef8d47eba8dac84a717f3b172b030b3": "7bc91b8edb24cb9132522cdf8f4e339d",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/8b975b362e32947c82fbcad4f154b9b470def9": "9a5aa3b91ae1d251a31f8547b2836b88",
".git/objects/54/f8bf391955452681d2e4d8bd05f4f85d582b75": "8ab2beb818066eae645d056991886332",
".git/objects/58/cae3f47b4616be63b9b7cca395db0a8299d533": "73df8009780a1f423d26e31510773f35",
".git/objects/62/9f2845b66778f7825076e8a668b38674192da1": "ab2f7d203eddd5362646529f8077d362",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/b1a4d21a9b59395f0a002f0e215abf2187cbbd": "3fe5c62092757b7be15e33302dd59dc3",
".git/objects/62/c0108b2495ecb0c878e12f1318a499359a3715": "bc33d18f8c7805f2cc50684633460e5a",
".git/objects/63/3af23f7c833cdf9780b811b2bc116b1f2699a4": "1c3bbfe5f6c0ccf815502f465970deef",
".git/objects/69/f85d5740c0fd73ce9063b0b54a4204baee8ad4": "b55a04aa2a43ce9a50f6e9cc10660b5e",
".git/objects/6e/5fffbc1a1ef70bca35acd256e4a13364f3f0fa": "15adb679c053c7fe598a980679e9f414",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/cdf28475f9c4279164e1a9d5accb279ba77e19": "6a96da76573f94dd4dff825a3bd30a3a",
".git/objects/77/093ffd8673061a79fb5ef66f8d281677d0eed9": "4246c67baca0886ba24eb7af09617352",
".git/objects/77/9779acaad8e9b5b93dc44a6292b2b5a72be7c9": "fe3b9e95850ccac39268c62b2e383d4d",
".git/objects/78/dd58c6f77db4f68b7d30f5216523c4ef1e5ecf": "83f8863178f19771c01507450688b06a",
".git/objects/7d/4bcdeda3ab6af5fdc4a6da69af69f2ab856c3a": "4a09feef4c510b304b13042a9f02a6c8",
".git/objects/81/df0dbf87fd2115869092295b6ead5611cc99d7": "29442c37c3aa977ddb5f5846a6981337",
".git/objects/83/d4ae6d5d5c4b95ca8d1e55bfcb46d4a3627f8a": "98334fc7991b1fdb79ce424928b04bf5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/c40fb6467b53bedf08605124dbe6b233ff7098": "563a48e48874649e0904e7aea4ab834c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/4442920dc7ac82e30ec711d65af288f715aeb6": "1828857405dfa695988b42cfd834ed07",
".git/objects/8f/a8d447ac6e45cf975955b427cafb5e197405ee": "258cdd8d7326b7099af606e171cebde1",
".git/objects/93/83774c298737126fa4bda21d00be42974dde4e": "990a1ae11f4ffb312dbb6d59539786a2",
".git/objects/93/e8c18bc758660d20b8a74832780be6d6457a33": "7fce8138e68a5c4f788d7829996b9b1e",
".git/objects/9a/845fa4d194121ce5cd2a55839b02dd746bfc57": "218095a989b0189bd4f2c088345bc1a7",
".git/objects/9f/14eff56add7b2bb31cefacff005af0f0cd02c1": "f3f24cb5b3917bbd8895e7b805b2b6b4",
".git/objects/a0/d7d194d1c3d3ffad8e4c67814e67b78c0d675e": "7861033bb2fc9d58b5b00672dca182a3",
".git/objects/a0/ebfdf4dbb3d4839155ec848a875e7a1bc75e92": "ce236ad02df2797593be8cb8a9d2aea6",
".git/objects/a4/fc0224397d5c4d4d7299612f101c8f12465547": "0a661c636eb4a30ca8cc19b982579f73",
".git/objects/a7/af1d01889a0ad32ecfb2f4aa50a461989dc5ab": "322964529458baa02d5b7f1e8ef0a19b",
".git/objects/a9/2757875dd39d0a3b58dd3b65f1a88b996e4e5e": "cbe081f9387bac325cce1f28402fdb97",
".git/objects/ac/4b601316e2defec9176da1c89c45062b6479a8": "513df9be4788aaf7001cd7068c9ea0a4",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/56c0d04a31264a945c954aeb6d200ef1ee4e7d": "af1acf7b6e30afa020f46ebd3e274fb0",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b4/ed2095634f1a7ec3905b176b4b32613ae10f1a": "87ece6d388b7bb44ca1b9c8434857df2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8ccf225d485f642462ddda35adb6a207844367": "ad1a3dc3cbaf03e42a6f2f4f18f1723d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c1/a163286f092f424371b3012a1e292cd042df25": "3fa61ab097ee0f6129600ea2a623e74f",
".git/objects/c6/a0923ae7d2bf92331edb7e8ce79d20b579a389": "f56d9757dc0963528b801a34e561d4c7",
".git/objects/c8/a82d5397e124a860098735a90a535424434344": "23cd5f164ff4c35f91427663ad92def0",
".git/objects/cb/e7f11fc5157452298cf0febde962fb98f5bc00": "5238b2d0cc338f3123749500586fa4c9",
".git/objects/cc/89c1d81f6fa714e1080712a31596b4e7f93834": "4a7b423ae849fc42d66f5ccc7a9f16fe",
".git/objects/cc/e7a69942618ef71b9cba31e83d63a773c95447": "95bd91719fba6d015bd74f6fb690b639",
".git/objects/d1/bf90419d66528dcd356b1f830cf5bdc97c0025": "de582f08a236d11cb505c7f2babc1afc",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/65058abad2ac9bb56d3d68269d0a013bfab90c": "df5d90be71d0111de475ca5a4c2c5e1c",
".git/objects/f0/6ce53fd2fcbbd03b61cb4fc5538ef033aa2849": "68209259bd5a2fda3631402713cf1e94",
".git/objects/fa/784b10c1fddc15c9eaded4186b706d94bbcf89": "0cafac39dd51161d506b64c7814211e5",
".git/ORIG_HEAD": "958a70df5a140a525d80d811c023df3c",
".git/refs/heads/main": "e4da11628e2422271c2aefee7be0e461",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e4da11628e2422271c2aefee7be0e461",
"assets/AssetManifest.bin": "9645a6fd56fe9843849b2011ab578d54",
"assets/AssetManifest.json": "f12684fe2c7527cccc5489a539495c4e",
"assets/assets/fonts/UIcons.ttf": "2ad6bee10ea3cc0484091a4d7f01ec04",
"assets/assets/images/covers/empty.png": "40f9d9e56fa3b4b5f3675d1647cfa4e8",
"assets/assets/images/covers/forest-light.png": "7a90f66e28325eaa917ad46b8730006f",
"assets/assets/images/covers/forest-walk.png": "c6f2bf3cab534abba5b1d8bea951a84b",
"assets/assets/images/covers/island.png": "1c5d0c70622bad8238e0a89adcf706d3",
"assets/assets/images/covers/light-rays.png": "f6654a06ef1e5f595cb65779812c9f01",
"assets/assets/images/covers/lighthouse.png": "8359b8f13010e93acaf85b64f1149746",
"assets/assets/images/covers/mic.png": "64deadef7a90c55f328a38dd667fc06e",
"assets/assets/images/covers/morning-light.png": "bd5a4e604eec70298b6a7ca8dfd047c5",
"assets/assets/images/covers/ocean-wave.png": "ce02f04a1f8089c88c455d78685de9a6",
"assets/assets/images/covers/plant-jar.png": "0b3495d1f13a71fc5e813c2333da3c0f",
"assets/assets/images/covers/plant-pot.png": "5e585519229bddb563927e8fa2564f1a",
"assets/assets/images/covers/vast-mountains.png": "ad96c87168ac0468c3e51df2ec7540bd",
"assets/assets/images/emojis/fruits/banana.png": "73cc848db676478a34e79720a743eb09",
"assets/assets/images/emojis/fruits/blueberries.png": "79f146654cea37973071a36b36bae37b",
"assets/assets/images/emojis/fruits/cherries.png": "f7d2c03f810be210a21550dd3d4d18d4",
"assets/assets/images/emojis/fruits/coconut.png": "149513705dd1c6d590def1757f9e771a",
"assets/assets/images/emojis/fruits/grapes.png": "83afbb3bcc8ec779e66d07b2495f9e25",
"assets/assets/images/emojis/fruits/green-apple.png": "1e5b6b26d03bf9f25ccda8e420cf1483",
"assets/assets/images/emojis/fruits/kiwi-fruit.png": "45e1bea7406add1c078be827d0cae9a9",
"assets/assets/images/emojis/fruits/lemon.png": "483ead925c3fbc0336f3f43db413f6fb",
"assets/assets/images/emojis/fruits/mango.png": "d4e56345e5f618130b9a90267558c00b",
"assets/assets/images/emojis/fruits/melon.png": "8d029c6f14662ca20a418e02b0d14a62",
"assets/assets/images/emojis/fruits/olive.png": "8ed89d2909a994112a3c9484957d1ae5",
"assets/assets/images/emojis/fruits/peach.png": "73bf8c913ba3d17fb6428ce09557374a",
"assets/assets/images/emojis/fruits/pear.png": "7bc7476c9b6275f6550fee9ccd7d2c4e",
"assets/assets/images/emojis/fruits/pineapple.png": "3c8a9f45610139ccf4bbe3233879ca54",
"assets/assets/images/emojis/fruits/red-apple.png": "b1048ac550bac1c81491c95671107523",
"assets/assets/images/emojis/fruits/strawberry.png": "dbfba29ef9942b02e661f013a0b1636c",
"assets/assets/images/emojis/fruits/tangerine.png": "e76936b781934a8150281be0000f8725",
"assets/assets/images/emojis/fruits/tomato.png": "65e1771a51c11b0900cd726428b65144",
"assets/assets/images/emojis/fruits/watermelon.png": "aa734d07049b095aab8dff635ccf7c72",
"assets/assets/images/emojis/warning.png": "83fcbf327a3c45aa3852b679b606877f",
"assets/assets/images/icons/launcher_icon.png": "9d1ac82a23d59d7fd5f90bd2f14e3e40",
"assets/assets/images/icons/splash_screen_icon_dark.png": "2b9d68ea81c9a8a9d4c792850e5b028d",
"assets/assets/images/icons/splash_screen_icon_light.png": "d4130f3a81fd9e2148ed97c8c9a0be1b",
"assets/assets/images/social_links/google_maps.png": "6b4ffe3b993cd8c2b6a4b37311993b4c",
"assets/assets/images/social_links/youtube.png": "769c47a6777b82a82c3152ec2efe97a6",
"assets/assets/images/social_links/zoom.png": "3c40a4def73b4ed97ab46273e39aa625",
"assets/FontManifest.json": "b9fe21b8b8574af13fc99911c90319c1",
"assets/fonts/MaterialIcons-Regular.otf": "dae28b3a5cb032e41edb7a2ea0a00aba",
"assets/NOTICES": "af0c802dc26044fc207bd9576ea3bbf7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "af3796a992dd5854bddb4ba89829de26",
"/": "af3796a992dd5854bddb4ba89829de26",
"main.dart.js": "b1fa9453a98acc02f562d543c734b706",
"manifest.json": "73c5e8b095859efb7e568b162989bd1c",
"version.json": "3492b8365abd858fb8581e664d66a0e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
