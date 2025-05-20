document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    // Back to top button
    const backTop = document.createElement('button');
    backTop.className = 'back-to-top';
    backTop.textContent = '↑';
    document.body.appendChild(backTop);

    // Mobile menu toggle
    burger.addEventListener('click', () => nav.classList.toggle('open'));

    // Slider functionality
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    let index = 0;

    function show(i) {
        slidesContainer.style.transform = `translateX(-${i * 100}%)`;
        dots.forEach(d => d.classList.remove('active'));
        dots[i].classList.add('active');
    }

    prev.addEventListener('click', () => {
        index = (index - 1 + slides.length) % slides.length;
        show(index);
    });
    next.addEventListener('click', () => {
        index = (index + 1) % slides.length;
        show(index);
    });
    dots.forEach((d, i) => d.addEventListener('click', () => { index = i; show(i); }));
    show(0);
    setInterval(() => next.click(), 6000);

    // Back to top
    window.addEventListener('scroll', () => {
        backTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // Section reveal on scroll
    const sections = document.querySelectorAll('section:not(.hero):not(footer)');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Keyboard controls for slider
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prev.click();
        if (e.key === 'ArrowRight') next.click();
    });

    // Header shadow on scroll past hero
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const hero = document.querySelector('.hero');
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        header.classList.toggle('scrolled', window.scrollY > heroBottom * 0.8);
    });
});
