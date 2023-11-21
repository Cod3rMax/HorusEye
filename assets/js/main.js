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
               this.introAnimationDone = false;
          }

          draw(context) {
               if (!this.introAnimationDone) {
                    this.particlesArray.forEach((particle) => {
                         particle.draw(context);
                    });
                    return;
               } else this.particlesArray = [];
          }

          update() {
               if (!this.introAnimationDone) {
                    this.particlesArray.forEach((particle) => {
                         particle.update();
                    });
                    return;
               } else this.particlesArray = [];
          }
     }

     const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);
     const inputs = new InputsHandler(canvas);
     function animate() {
          option.clearScreen(context, game);
          game.update();
          game.draw(context);
          requestAnimationFrame(animate);
     }
     animate();
});
