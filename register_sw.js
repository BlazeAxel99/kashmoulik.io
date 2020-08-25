if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
      .then(registration => {
        console.log('Service Worker is Registered', registration);
      })
      .catch(err => {
        console.error('Registration Failed:', err);
      });
    });
  }