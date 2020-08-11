// importScripts('ngsw-worker.js');
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener('fetch', function(event) {
    const queryObject = getParams(event.request.url);
    console.log("fetching - "+queryObject);

    if (/\\pixel.gif$/.test(event.request.url)) {                          
      // event.respondWith(
      //   console.log("fetching scaler"),
      //   fetch('https://www.scaler.com/')
      // ); 
      console.log(" Request for - "+event.request);
    }
});

var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	return params;
};