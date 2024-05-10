function slide(): void {
   const slides: any = document.getElementsByClassName('slide')[0];
   const [ slideL, slideR ]: any = [ 
      document.getElementsByClassName('slideLeft'),
      document.getElementsByClassName('slideRigth') 
   ];
   
   const observer: IntersectionObserver = new window.IntersectionObserver(([entry]: any): void => {
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

