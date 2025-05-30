document.addEventListener('DOMContentLoaded', function() {

    // Script para navegação suave e marcar link ativo na navbar
    const navLinksForScroll = document.querySelectorAll('.nav-links-samy a[href*="#"], .logo-area[href*="#"]');
    navLinksForScroll.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const targetId = href.substring(href.lastIndexOf('#'));
            // Determina a página alvo a partir do href (ex: "index.html", "comandos.html")
            let targetPage = href.substring(0, href.lastIndexOf('#'));
            if (targetPage === "") { // Se não houver #, pode ser um link direto de página ou um link só com #
                targetPage = href.includes('#') ? (window.location.pathname.split('/').pop() || 'index.html') : href.split('/').pop();
            } else {
                targetPage = targetPage.split('/').pop();
            }

            const currentPage = window.location.pathname.split('/').pop() || 'index.html';

            // Se o link é para uma seção na página atual
            if (targetPage === currentPage && document.querySelector(targetId)) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            // Para links para outras páginas com hash (ex: index.html#features vindo de comandos.html),
            // o comportamento padrão do navegador irá para a página e tentará rolar.
            // Apenas removemos 'active' dos links da página atual.
            // O 'active' no link da nova página será definido no carregamento da nova página.
            document.querySelectorAll('.nav-links-samy a').forEach(link => link.classList.remove('active'));
            // Não adicionamos 'active' aqui, pois a lógica de carregamento da página cuidará disso.
        });
    });

    // Script para marcar link ativo na navbar baseado no scroll (APENAS PARA index.html)
    if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html')) {
        const sections = document.querySelectorAll("main section[id]");
        const navLi = document.querySelectorAll(".nav-links-samy li a");

        if (sections.length > 0 && navLi.length > 0) { // Garante que os elementos existem
            window.addEventListener("scroll", () => {
                let current = "home"; // Default to home
                sections.forEach((section) => {
                    const sectionTop = section.offsetTop;
                    if (pageYOffset >= sectionTop - 150) { // 150 é um offset
                        current = section.getAttribute("id");
                    }
                });

                navLi.forEach((a) => {
                    a.classList.remove("active");
                    const linkHref = a.getAttribute("href");
                    if (linkHref === "index.html#" + current || linkHref === "#" + current) {
                        a.classList.add("active");
                    }
                });
                 // Se estiver no topo da página e nenhuma seção "current" for definida (exceto home), marca Início
                if (window.pageYOffset < (sections[0].offsetTop - 150) ) {
                    navLi.forEach(a => a.classList.remove("active")); // Remove active de todos
                    const homeLink = document.querySelector('.nav-links-samy a[href*="#home"]');
                    if (homeLink && (homeLink.getAttribute('href') === 'index.html#home' || homeLink.getAttribute('href') === '#home')) {
                        homeLink.classList.add('active');
                    }
                }
            });
            // Aciona uma vez no carregamento para o estado inicial
             window.dispatchEvent(new Event('scroll'));
        }
    }


    // Atualizar ano no footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Script para menu mobile
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinksSamy = document.querySelector('.nav-links-samy');

    if (mobileMenuButton && navLinksSamy) {
        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = navLinksSamy.classList.toggle('active');
            mobileMenuButton.setAttribute('aria-expanded', isExpanded);
            if (isExpanded) {
                mobileMenuButton.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }

    // Marcar link ativo na navbar para a página atual (genérico para todas as páginas no carregamento)
    const currentPageFull = window.location.pathname;
    const currentPageFilename = currentPageFull.substring(currentPageFull.lastIndexOf('/') + 1) || 'index.html';
    const navAnchors = document.querySelectorAll('.nav-links-samy a');

    let homePageLinkActivated = false;
    navAnchors.forEach(link => {
        const linkHref = link.getAttribute('href');
        let linkPageFilename = linkHref.split('#')[0];
        if (linkPageFilename === "" && linkHref.startsWith("#")) { // Link interno tipo #features
            linkPageFilename = 'index.html'; // Assumir que links internos são para index.html
        }


        if (linkPageFilename === currentPageFilename) {
            if (currentPageFilename === 'index.html') {
                // Para index.html, apenas ativa o link de início se não houver hash ou se for #home
                // A lógica de scroll cuidará das seções.
                if (linkHref === 'index.html#home' || linkHref === '#home' || linkHref === 'index.html' && window.location.hash === '' || window.location.hash === '#home') {
                    link.classList.add('active');
                    homePageLinkActivated = true;
                } else {
                    link.classList.remove('active');
                }
            } else {
                link.classList.add('active'); // Para outras páginas, o link exato é ativado
            }
        } else {
            link.classList.remove('active');
        }
    });
    // Caso especial: se for index.html e nenhum link de seção estiver ativo (ex: no topo da página)
    // e o link de inicio não foi ativado pela regra acima.
    if (currentPageFilename === 'index.html' && !homePageLinkActivated && (window.location.hash === '' || window.location.hash === '#home')) {
        const homeDirectLink = document.querySelector('.nav-links-samy a[href="index.html#home"]');
        if (homeDirectLink) homeDirectLink.classList.add('active');
    }


});