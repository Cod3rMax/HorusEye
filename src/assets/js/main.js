import { Intro } from './intro.js';
import { Instructions } from './instructions.js';
import { InputsHandler } from './inputs.js';
import { GameLobby } from './gameLobby.js';
import { TorchLight } from './torchLight.js';
import { GameAudio } from './audio.js';
import { UiMessage } from './uiMessage.js';
import { option } from './helperVariable.js';
window.addEventListener('message', (event) => {
     if (event.data.action === 'ShowUI') {
          document.querySelector('body').style.display = 'flex';
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
                    this.correctPassword = [];
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
                    this.gameAudio = new GameAudio(option.clockAudio);

                    // Progress bar
                    this.progressBar = document.getElementById('countingBar');
                    this.progressBarValue = 0;
                    this.uiMessage = new UiMessage(this);
               }

               draw(context, deltaTime) {
                    if (!this.introAnimationDone) {
                         this.particlesArray.forEach((particle) => {
                              particle.draw(context);
                         });
                         return;
                    } else this.particlesArray = [];

                    if (!this.instructionAnimationDone) {
                         this.instructions.draw(context);
                    }

                    if (!this.gameHackingDone && this.inputs.keys.includes('Enter')) {
                         this.instructionAnimationDone = true;
                         this.passwordLetters.forEach((password) => {
                              password.startGame(context);
                         });

                         if (this.progressBarValue < option.timeToLookForPassword) {
                              this.progressBarValue += deltaTime;
                              let percentage = Math.floor(
                                   (this.progressBarValue / option.timeToLookForPassword) * 100,
                              );
                              this.uiMessage.writeMessage(percentage);

                              this.progressBar.style.width = `${percentage}%`;
                              this.gameAudio.startAudio();
                         } else {
                              this.gameAudio.stopAudio();
                              this.gameHackingDone = true;
                              this.inputs.keys = [];
                         }
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
          let lastTime = 0;

          function animate(timeStamp) {
               let deltaTime = timeStamp - lastTime;
               lastTime = timeStamp;
               context.fillStyle = 'rgb(0,0,0)';
               if (!game.introAnimationDone) option.clearScreen(context, game);
               else context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

               game.update();
               game.draw(context, deltaTime);
               requestAnimationFrame(animate);
          }
          animate(0);
     }
});
