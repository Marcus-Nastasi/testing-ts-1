function showHello(): void {
   const section: HTMLElement | null = document.getElementById('secHeaderTop');
   const p: HTMLParagraphElement = document.createElement('p');
   p.innerText = `Wellcome to the TS website, guest! Feel free to play.`;
   section?.appendChild(p); 
};

window.onload = showHello;

