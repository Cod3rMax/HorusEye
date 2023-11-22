import { option } from './helperVariable.js';
import { IntroParticles } from './particles.js';
export class Intro {
     constructor(game) {
          this.game = game;
          this.image = new Image();
          this.image.src = option.introImage;
          this.imageWidth = this.image.width * option.introImageSize;
          this.imageHeight = this.image.height * option.introImageSize;
          this.centerX = this.game.width / 2;
          this.centerY = this.game.height / 2;
          this.x = this.centerX - this.imageWidth * 0.5;
          this.y = this.centerY - this.imageHeight * 0.5;
          this.markedAsFinished = false;
     }
     draw(context) {
          this.image.onload = () => {
               context.drawImage(this.image, this.x, this.y, this.imageWidth, this.imageHeight);
               const pixels = context.getImageData(0, 0, this.game.width, this.game.height);
               option.clearScreen(context, this.game);
               for (let y = 0; y < pixels.height; y += option.introParticlesGap) {
                    for (let x = 0; x < pixels.width; x += option.introParticlesGap) {
                         let index = (y * pixels.width + x) * 4;
                         const red = pixels.data[index];
                         const green = pixels.data[index + 1];
                         const blue = pixels.data[index + 2];
                         const alpha = pixels.data[index + 3];
                         const color = `rgb(${red}, ${green}, ${blue})`;

                         if (alpha > 0) {
                              this.game.particlesArray.push(
                                   new IntroParticles(x, y, color, this.game),
                              );
                         }
                    }
               }
          };
     }
}
