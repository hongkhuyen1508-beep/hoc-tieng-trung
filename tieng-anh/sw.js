// Lưu sẵn trang để bé chơi được khi không có mạng
const CACHE = 'be-hoc-tieng-anh-v1';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Chỉ lưu trang này và phông chữ; không đụng tới lời gọi AI của Google
  if (new URL(e.request.url).origin !== location.origin && !/fonts\.(googleapis|gstatic)\.com/.test(e.request.url)) return;
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request)));
});
