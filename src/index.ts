function showHello(): void {
   const section: HTMLElement | null = document.getElementById('secHeaderTop');
   const p: HTMLParagraphElement = document.createElement('p');
   const wellcome: string = `Wellcome to the TS website, guest! Feel free to play.` 
   p.innerText = wellcome;
   section?.appendChild(p); 
};

window.onload = () => setTimeout(() => showHello(), 2000);


