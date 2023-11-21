import { Intro } from './intro.js';
window.addEventListener('load', function () {
     const canvas = document.querySelector('canvas');
     const context = canvas.getContext('2d');
     const CANVAS_WIDTH = (canvas.width = window.innerWidth - 100);
     const CANVAS_HEIGHT = (canvas.height = window.innerHeight - 100);

     class Game {
          constructor(gameWidth, gameHeight) {
               this.width = gameWidth;
               this.height = gameHeight;
               this.intro = new Intro(this);
          }

          draw(context) {
               this.intro.draw(context);
          }

          update() {}
     }

     const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);

     function animate() {
          game.update();
          game.draw(context);
          requestAnimationFrame(animate);
     }
     animate();
});
