// gerencia o Canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}



const namis = [];

while (namis.length < random(1,1000)) {
   const size = random(10,100);
   const tsu = new Namis(
      // posição de sempre uma bola de distância
      // fora das bordas para evitar erros de desenho
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

   
  namis.push(tsu);
}


function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const tsu of namis) {
    tsu.draw();
    tsu.update();
    tsu.collisionDetect(namis);
   }

   requestAnimationFrame(loop);
}


loop();