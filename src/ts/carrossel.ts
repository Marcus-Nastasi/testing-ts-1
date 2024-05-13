const [ mv1, mv2, mv3, mv4, mv5, mv6, mv7, mv8, mv9, mv10 ]: any = document.getElementsByClassName('carr');

const moveOne = () => {
   mv1.classList.add('mvUp');
   setTimeout(() => {
      mv1.classList.remove('mvUp');
      mv1.classList.add('mvOut');
      movetwo();
   }, 1000);
};

const movetwo = () => {
   mv2.classList.add('mvUp');
   setTimeout(() => {
      mv2.classList.remove('mvUp');
      mv2.classList.add('mvOut');
      moveOne();
   }, 1000);
};

moveOne();

