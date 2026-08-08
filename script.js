
(() => {
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => [...ctx.querySelectorAll(sel)];
  const header = $('[data-header]');
  const menuButton = $('[data-menu-button]');
  const mobileMenu = $('[data-mobile-menu]');
  const backTop = $('[data-back-top]');
  const toast = $('[data-toast]');

  const setHeader = () => {
    header?.classList.toggle('scrolled', window.scrollY > 16);
    backTop?.classList.toggle('show', window.scrollY > 650);
  };
  setHeader();
  window.addEventListener('scroll', setHeader, { passive: true });

  if (menuButton && mobileMenu) {
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded','false');
      mobileMenu.classList.remove('open');
      document.body.classList.remove('menu-open');
    };
    menuButton.addEventListener('click', () => {
      const open = menuButton.getAttribute('aria-expanded') !== 'true';
      menuButton.setAttribute('aria-expanded', String(open));
      mobileMenu.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
    });
    $$('a', mobileMenu).forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  backTop?.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

  // Mark current page in desktop navigation.
  const file = location.pathname.split('/').pop() || 'index.html';
  $$('.desktop-nav a').forEach(a => {
    const target = (a.getAttribute('href') || '').split('#')[0] || 'index.html';
    if (target === file && !(file === 'index.html' && a.getAttribute('href')?.includes('#'))) a.classList.add('active');
  });

  // Reveal on scroll.
  const reveal = $$('.reveal');
  reveal.forEach(el => { const delay = Number(el.dataset.delay || 0); if (delay) el.style.transitionDelay = `${delay}ms`; });
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    }), {threshold:.08, rootMargin:'0px 0px -30px'});
    reveal.forEach(el => io.observe(el));
  } else reveal.forEach(el => el.classList.add('visible'));

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 1600);
  };

  // Commands browser.
  const search = $('[data-command-search]');
  const chips = $$('[data-filter]');
  const commandCards = $$('.command-card');
  const categorySections = $$('[data-category-section]');
  const count = $('[data-command-count]');
  const empty = $('[data-empty-state]');
  let activeFilter = 'all';

  const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const applyCommandFilter = () => {
    if (!search) return;
    const q = normalize(search.value.trim());
    let visibleCount = 0;
    commandCards.forEach(card => {
      const matchesFilter = activeFilter === 'all' || card.dataset.category === activeFilter;
      const matchesSearch = !q || normalize(card.dataset.command || '').includes(q);
      const visible = matchesFilter && matchesSearch;
      card.classList.toggle('hidden', !visible);
      if (visible) visibleCount++;
    });
    categorySections.forEach(section => {
      const cards = $$('.command-card', section);
      section.classList.toggle('hidden', !cards.some(card => !card.classList.contains('hidden')));
    });
    if (count) count.textContent = `${visibleCount} comando${visibleCount === 1 ? '' : 's'} encontrado${visibleCount === 1 ? '' : 's'}`;
    if (empty) empty.hidden = visibleCount !== 0;
  };
  search?.addEventListener('input', applyCommandFilter);
  chips.forEach(chip => chip.addEventListener('click', () => {
    activeFilter = chip.dataset.filter;
    chips.forEach(c => c.classList.toggle('active', c === chip));
    applyCommandFilter();
  }));
  $('[data-clear-search]')?.addEventListener('click', () => {
    if (search) search.value = '';
    activeFilter = 'all';
    chips.forEach(c => c.classList.toggle('active', c.dataset.filter === 'all'));
    applyCommandFilter();
    search?.focus();
  });
  document.addEventListener('keydown', e => {
    if (e.key === '/' && search && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
      e.preventDefault(); search.focus();
    }
  });
  $$('.copy-command').forEach(button => button.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(button.dataset.copy || ''); showToast(`${button.dataset.copy} copiado`); }
    catch { showToast('Não foi possível copiar automaticamente.'); }
  }));

  // Keep only one FAQ detail open at a time on compact screens; remains accessible without JS.
  const faqItems = $$('.faq-item');
  faqItems.forEach(item => item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach(other => { if (other !== item) other.open = false; });
  }));
})();
