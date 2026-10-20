document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach((link) => {
    if (link.dataset.nav === page) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  const today = new Date().toISOString().slice(0, 10);
  document.querySelectorAll('input[type="date"][data-today]').forEach((input) => {
    if (!input.value) input.value = today;
  });
});
