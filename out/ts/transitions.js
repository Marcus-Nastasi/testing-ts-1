function slide() {
    const slides = document.getElementsByClassName('slide');
    const observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            console.log(1);
        }
    });
}
slide();
//# sourceMappingURL=transitions.js.map