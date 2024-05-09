function slide() {
    const slides = document.getElementsByClassName('slides');
    const observer = new window.IntersectionObserver(([e]) => {
        if (e.isIntersecting) {
            e.target.style.animationPlayState = 'running';
        }
    });
    for (let i of slides)
        observer.observe(i);
}
slide();
//# sourceMappingURL=transitions.js.map