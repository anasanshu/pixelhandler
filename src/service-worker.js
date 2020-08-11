importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

self.addEventListener('fetch', function(event) {
    if ((event.request.url).includes("pixel.gif")) {                          
      url = translateParams(event.request.url);
      event.respondWith(
        fetch(url)
      );
    }
});

var translateParams = function (url) {
  url = url.replace("interaction", "event");
  url = url.replace("client", "customer");
  url = url.replace("os_name", "operating_system_name");
  url = url.replace("x1", "utm_source");
  url = url.replace("x2", "utm_medium");
  url = url.replace("x3", "utm_campaign");
  url = url.replace("landing_url", "campaign_url");
  return url;
};