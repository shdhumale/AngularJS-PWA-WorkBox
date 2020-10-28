module.exports = {
  globDirectory: "../../dist/angular-workbox/",
  //This is a good start for ngx but edit to match your app
  globPatterns: [
    "*.{png,svg,jpg,txt,gif,css,js,ico,eot,ttf,woff,json,html}",
    "index.html",
    "**/*.js"
    //"assets/*.{png,svg,jpg,ico,gif}"
  ],
  globFollow: true, // follow symlinks
  globStrict: true, // fail on error
  globIgnores: [
    // Ignore Angular's ES5 bundles
    `**/*-es5.js*`,
    "sw.js"
  ],
  // Don't need to cachebust angular files
  dontCacheBustURLsMatching: new RegExp(".+.[a-f0-9]{20}..+"),
  // Set large files to catch the angular vendor.js files. It is up to the developer to ensure the cache is not overwhelmed
  maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
  swDest: "../../dist/angular-workbox/sw.js",
  swSrc: "./swtemplate.js"
};
