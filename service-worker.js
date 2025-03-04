self.addEventListener("install", event => {
    console.log("✅ Service Worker Installed");
    self.skipWaiting();
});

self.addEventListener("activate", event => {
    console.log("✅ Service Worker Activated");
    self.clients.claim();
});

// Periodically check prayer time in the background
setInterval(() => {
    self.registration.showNotification("📢 صلاة الفجر", {
        body: "حان الآن وقت صلاة الفجر!",
        icon: "azan_icon.png",
        silent: false
    });
}, 60000); // Check every 60 sec

self.addEventListener("notificationclick", event => {
    event.notification.close();
});
