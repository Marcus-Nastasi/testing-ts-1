function slide(): void {
   const slides = document.getElementsByClassName('slide');
   
   const observer = new window.IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
         console.log(1);
      }
   });

   for(let i of slides) observer.observe(i);
}
slide();

