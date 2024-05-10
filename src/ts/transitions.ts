function slide(): void {
   const slides = document.getElementsByClassName('slide')[0];
   const [ slideL, slideR ]: any = [ 
      document.getElementsByClassName('slideLeft'),
      document.getElementsByClassName('slideRigth') 
   ];
   
   const observer = new window.IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
         slideL[0].style.opacity = '1';
         slideR[0].style.opacity = '1';
         slideL[0].style.animationPlayState = 'running';
         slideR[0].style.animationPlayState = 'running';
      }
   });

   observer.observe(slides);
}
slide();

