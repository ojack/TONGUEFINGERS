if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/TONGUEFINGERS/sw.js', { scope: '/TONGUEFINGERS/' })})}