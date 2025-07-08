if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById('mobile-warning').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('main-content').classList.add('hidden');
}