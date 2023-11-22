import { Intro } from './intro.js';
import { Instructions } from './instructions.js';
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
               this.instructionsArray = [];
               //this.intro = new Intro(this);
               this.instructions = new Instructions(this);
               this.instructions.draw(context);
               // this.intro.draw(context);
               this.introAnimationDone = true;
          }

          draw(context) {
               // if (!this.introAnimationDone) {
               //      this.particlesArray.forEach((particle) => {
               //           particle.draw(context);
               //      });
               //      return;
               // } else this.particlesArray = [];

               this.particlesArray.forEach((particle) => {
                    particle.draw(context);
               });
          }

          update() {
               // if (!this.introAnimationDone) {
               //      this.particlesArray.forEach((particle) => {
               //           particle.update();
               //      });
               //      return;
               // } else this.particlesArray = [];
               this.particlesArray.forEach((particle) => {
                    particle.update();
               });
          }
     }

     const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);
     const inputs = new InputsHandler(canvas);
     function animate() {
          context.fillStyle = 'rgb(0,0,0, 0.1)';
          // if (!game.introAnimationDone) option.clearScreen(context, game);
          // else context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          game.update();
          game.draw(context);
          requestAnimationFrame(animate);
     }
     animate();
});
