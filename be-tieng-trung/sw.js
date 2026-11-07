// Lưu sẵn trang để bé học được khi không có mạng
const CACHE = 'be-tieng-trung-v1';
const FILES = ['./', 'index.html', 'noi-dung.js', 'manifest.webmanifest', 'icon.svg'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  // Chỉ xóa bản cũ của chính trang này
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k.startsWith('be-tieng-trung-v')).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const u = new URL(e.request.url);
  // Không đụng tới lời gọi AI của Google và tệp nhạc lớn
  if (u.origin !== location.origin && !/fonts\.(googleapis|gstatic)\.com/.test(e.request.url)) return;
  if (/\.(mp3|m4a)$/i.test(u.pathname)) return;
  e.respondWith(fetch(e.request).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
  }).catch(() => caches.match(e.request)));
});
