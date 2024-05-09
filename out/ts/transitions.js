function slide() {
    const slideL = document.getElementsByClassName('slideLeft');
    const slideR = document.getElementsByClassName('slideRigth');
    const observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            console.log(1);
        }
    });
    for (let i of slideL)
        observer.observe(i);
    for (let i of slideR)
        observer.observe(i);
}
slide();
//# sourceMappingURL=transitions.js.map