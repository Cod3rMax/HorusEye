import { Intro } from './intro.js';
import { InputsHandler } from './inputs.js';
import { option } from './helperVariable.js';
window.addEventListener('load', function () {
     const canvas = document.querySelector('canvas');
     const context = canvas.getContext('2d');
     const CANVAS_WIDTH = (canvas.width = window.innerWidth * 0.5);
     const CANVAS_HEIGHT = (canvas.height = window.innerHeight * 0.7);
     class Game {
          constructor(gameWidth, gameHeight) {
               this.width = gameWidth;
               this.height = gameHeight;
               this.particlesArray = [];
               this.intro = new Intro(this);
               this.intro.draw(context);
          }

          draw(context) {
               this.particlesArray.forEach((particle) => {
                    particle.draw(context);
               });
          }

          update() {}
     }

     const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);
     const inputs = new InputsHandler(canvas);
     function animate() {
          game.update();
          game.draw(context);
          requestAnimationFrame(animate);
     }
     animate();
});
