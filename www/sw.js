/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/images/cap.svg",
    "revision": "429c5be20fc845013b3495a8823a6c88"
  },
  {
    "url": "assets/images/ironman.svg",
    "revision": "b358a41ebc35d9b44063ba38a4f42115"
  },
  {
    "url": "assets/images/man.svg",
    "revision": "a01f134c77daa3dc2142062572dd69f2"
  },
  {
    "url": "build/wu-components.css",
    "revision": "895cc9996b346dda0cd7b87bfd82381c"
  },
  {
    "url": "build/wu-components.js",
    "revision": "316f25864162cc742fa22d41be9e270e"
  },
  {
    "url": "build/wu-components/0gikz8fj.es5.js",
    "revision": "d71389eec5589d463e1007dc80d23e69"
  },
  {
    "url": "build/wu-components/0gikz8fj.js",
    "revision": "d2088a67c7e3f63d30e2380db105adbf"
  },
  {
    "url": "build/wu-components/104dndfu.es5.js",
    "revision": "828ea79ffabf447625027c0497a40d62"
  },
  {
    "url": "build/wu-components/104dndfu.js",
    "revision": "d74e033437d45a0b691b85b4b145151e"
  },
  {
    "url": "build/wu-components/1hgkeag1.es5.js",
    "revision": "32fd27561edeb122f16c6a9641dd0692"
  },
  {
    "url": "build/wu-components/1hgkeag1.js",
    "revision": "d6118a79a1bed737e5c0637a76dbd761"
  },
  {
    "url": "build/wu-components/fwaklv3f.es5.js",
    "revision": "ca0bb0628250ce8778bcd9071ecd1026"
  },
  {
    "url": "build/wu-components/fwaklv3f.js",
    "revision": "7d6024955dc5ae2edbb145aa13c70dd2"
  },
  {
    "url": "build/wu-components/gcmu4vp5.es5.js",
    "revision": "22132c1c5c0941e727b710014f485441"
  },
  {
    "url": "build/wu-components/gcmu4vp5.js",
    "revision": "1be0a6538bcfe66becb0447e141a1039"
  },
  {
    "url": "build/wu-components/iu3fjp6z.es5.js",
    "revision": "7143e61f7195363cd4d62306d813d809"
  },
  {
    "url": "build/wu-components/iu3fjp6z.js",
    "revision": "22eddf269e99e1ec2129491a105bbcc1"
  },
  {
    "url": "build/wu-components/jw4rocls.es5.js",
    "revision": "38831013031aff6d81250f0eddfe6b48"
  },
  {
    "url": "build/wu-components/jw4rocls.js",
    "revision": "270e2ba1c96c98b23f0769ac5dd444a9"
  },
  {
    "url": "build/wu-components/k1kf9dy7.es5.js",
    "revision": "3d20b6b354fac3d8aa60433338843928"
  },
  {
    "url": "build/wu-components/k1kf9dy7.js",
    "revision": "935285f4363bb800fa765756bceef993"
  },
  {
    "url": "build/wu-components/ndgvc0ns.es5.js",
    "revision": "9bcaa5f2be41530ab1615c578f306894"
  },
  {
    "url": "build/wu-components/ndgvc0ns.js",
    "revision": "3431bfbdcd0db26bd8be0ef002347f9b"
  },
  {
    "url": "build/wu-components/rxqiegbd.es5.js",
    "revision": "924249563cc2a04bd32ca5c16ea79184"
  },
  {
    "url": "build/wu-components/rxqiegbd.js",
    "revision": "471a881206c309fab1a0f6dc55a4b016"
  },
  {
    "url": "build/wu-components/s0i9dayv.es5.js",
    "revision": "8f9c24f41b4f49275da8e839fac84467"
  },
  {
    "url": "build/wu-components/s0i9dayv.js",
    "revision": "b3423d0c0c95e30b4ee42f5fd0817853"
  },
  {
    "url": "build/wu-components/t3ha6zpg.es5.js",
    "revision": "5ae67f81b071f035f82342143092e078"
  },
  {
    "url": "build/wu-components/t3ha6zpg.js",
    "revision": "4f71c0ffaccf831f52477a66d7f7bfa9"
  },
  {
    "url": "build/wu-components/tfu0ersh.es5.js",
    "revision": "429f6ba145735d07fac86fdba4fe2637"
  },
  {
    "url": "build/wu-components/tfu0ersh.js",
    "revision": "b4553ed0446c1e08e7d0bfcf028d0f7d"
  },
  {
    "url": "build/wu-components/tnooss7d.es5.js",
    "revision": "205745bd4c1fca084c04e8d0a39a9ec1"
  },
  {
    "url": "build/wu-components/tnooss7d.js",
    "revision": "b6738e4acec335f8dbb721430e567f1e"
  },
  {
    "url": "build/wu-components/vlmrw1mm.es5.js",
    "revision": "eefa8b968f8a5155d46a28ca2a50e25a"
  },
  {
    "url": "build/wu-components/vlmrw1mm.js",
    "revision": "be53115b530c391368a234207dded739"
  },
  {
    "url": "build/wu-components/wu-components.gvyuigqo.js",
    "revision": "1af614886428518e51d538ee5149a257"
  },
  {
    "url": "build/wu-components/wu-components.lblbglif.js",
    "revision": "2c12db80b88585375f5bc901d45ca1eb"
  },
  {
    "url": "index.html",
    "revision": "06ba1ab6562398038e4be7a2fe3a7ada"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
