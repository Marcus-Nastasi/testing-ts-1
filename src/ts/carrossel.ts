const [ mv1, mv2, mv3, mv4, mv5, mv6, mv7, mv8, mv9, mv10 ]: any = document.getElementsByClassName('carr');

const moveOne = (): void => {
   if(mv1.classList.contains('mvOut')) mv1.classList.remove('mvOut');
   mv1.classList.add('mvUp');
   setTimeout(() => {
      mv1.classList.add('mvOut');
      mv1.classList.remove('mvUp');
      movetwo();
   }, 3000);
};

const movetwo = (): void => {
   if(mv2.classList.contains('mvOut')) mv2.classList.remove('mvOut');
   mv2.classList.add('mvUp');
   setTimeout(() => {
      mv2.classList.add('mvOut');
      mv2.classList.remove('mvUp');
      moveThree();
   }, 3000);
};

const moveThree = (): void => {
   if(mv2.classList.contains('mvOut')) mv2.classList.remove('mvOut');
   mv3.classList.add('mvUp');
   setTimeout(() => {
      mv3.classList.add('mvOut');
      mv3.classList.remove('mvUp');
      moveOne();
   }, 3000);
};
moveOne();

