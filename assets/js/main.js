import { Intro } from './intro.js';
import { Instructions } from './instructions.js';
import { InputsHandler } from './inputs.js';
import { GameLobby } from './gameLobby.js';
import { TorchLight } from './torchLight.js';
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
               this.inputs = new InputsHandler(canvas);
               this.particlesArray = [];
               this.passwordLetters = [];
               //* intro animation
               this.intro = new Intro(this);
               this.intro.draw(context);
               this.introAnimationDone = false;
               //* instruction animation
               this.instructions = new Instructions(this);
               this.instructionAnimationDone = false;
               this.torchLight = new TorchLight(this, this.inputs);
               for (let i = 0; i < 3; i++) {
                    this.passwordLetters.push(new GameLobby(this));
               }
               this.gameHackingDone = false;
          }

          draw(context) {
               if (!this.introAnimationDone) {
                    this.particlesArray.forEach((particle) => {
                         particle.draw(context);
                    });
                    return;
               } else this.particlesArray = [];

               if (!this.instructionAnimationDone) {
                    setTimeout(() => {
                         this.instructionAnimationDone = true;
                    }, option.displayInstructionTime);

                    this.instructions.draw(context);
                    return;
               }

               if (!this.gameHackingDone) {
                    this.passwordLetters.forEach((password) => {
                         password.startGame(context);
                    });
               }
          }

          update() {
               if (!this.introAnimationDone) {
                    this.particlesArray.forEach((particle) => {
                         particle.update();
                    });
                    return;
               } else this.particlesArray = [];

               if (!this.gameHackingDone) {
                    this.torchLight.draw(context, this.inputs);
               }
          }
     }

     const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);

     function animate() {
          context.fillStyle = 'rgb(0,0,0)';
          if (!game.introAnimationDone) option.clearScreen(context, game);
          else context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          game.update();
          game.draw(context);
          requestAnimationFrame(animate);
     }
     animate();
});
