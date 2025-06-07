(function() {
  var btn = document.createElement('a');
  btn.href = '#';
  btn.className = 'back-to-top';
  btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(btn);
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
