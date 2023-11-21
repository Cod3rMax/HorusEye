import { option } from './helperVariable.js';
import { Particles } from './particles.js';
export class Intro {
     constructor(game) {
          this.game = game;
          this.image = new Image();
          this.image.src = option.introImage;
          this.imageWidth = this.image.width * 1.5;
          this.imageHeight = this.image.height * 1.5;
          this.centerX = this.game.width / 2;
          this.centerY = this.game.height / 2;
          this.x = this.centerX - this.imageWidth * 0.5;
          this.y = this.centerY - this.imageHeight * 0.5;
     }
     draw(context) {
          this.image.onload = () => {
               context.drawImage(this.image, this.x, this.y, this.imageWidth, this.imageHeight);
               let pixels = context.getImageData(0, 0, this.game.width, this.game.height);

               for (let y = 0; y < pixels.height; y += 5) {
                    for (let x = 0; x < pixels.width; x += 5) {
                         let index = (y * pixels.width + x) * 4;
                         let red = pixels.data[index];
                         let green = pixels.data[index + 1];
                         let blue = pixels.data[index + 2];
                         let alpha = pixels.data[index + 3];
                         if (alpha > 0) {
                              this.game.particlesArray.push(new Particles(x, y, 'white'));
                         }
                    }
               }
          };
     }
}
