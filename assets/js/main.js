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
               this.introAnimationDone = true;
          }

          draw(context) {
               // if (!this.introAnimationDone) {
               //      this.particlesArray.forEach((particle) => {
               //           particle.draw(context);
               //      });
               //      return;
               // } else this.particlesArray = [];
               context.beginPath();
               context.fillStyle = '#0f0';
               const fontSize = Math.min(Math.floor(this.width / 29), 25);
               context.font = `${fontSize}px Consolas`;
               context.textAlign = 'center';
               context.fontWeight = 'bold';
               context.shadowColor = 'red';
               context.fillText('Find the Password', this.width / 2, this.height / 6);
               context.fillText(
                    "Don't fear the darkness if you carry the light within",
                    this.width / 2,
                    this.height / 4,
               );
               context.fillText('You have limited time', this.width / 2, this.height / 3);
               context.fillText('Starting Now!', this.width / 2, this.height / 2);
               context.fill();
          }

          update() {
               // if (!this.introAnimationDone) {
               //      this.particlesArray.forEach((particle) => {
               //           particle.update();
               //      });
               //      return;
               // } else this.particlesArray = [];
          }
     }

     const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);
     const inputs = new InputsHandler(canvas);
     function animate() {
          context.fillStyle = 'rgb(0,0,0, 0.1)';
          if (!game.introAnimationDone) option.clearScreen(context, game);
          else context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          game.update();
          game.draw(context);
          requestAnimationFrame(animate);
     }
     animate();
});
