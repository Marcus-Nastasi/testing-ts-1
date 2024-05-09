function slide(): void {
   const slides: HTMLCollection = document.getElementsByClassName('slides');

   const observer: IntersectionObserver = new window.IntersectionObserver(([e]) => {
      if(e.isIntersecting) {
         e.target.style.animationPlayState = 'running';
      }
   });

   for(let i of slides) observer.observe(i);
}
slide();


