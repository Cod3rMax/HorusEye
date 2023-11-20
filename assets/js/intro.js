import { option } from './helperVariable.js';
export class Intro {
     constructor(game) {
          this.game = game;
          this.image = new Image();
          this.image.src = option.introImage;
          this.imageWidth = this.image.width;
          this.imageHeight = this.image.height;
          this.x = (this.game.gameWidth / 2) * 0.6;
          this.y = (this.game.gameHeight / 2) * 0.3;
     }
     draw(context) {
          context.drawImage(
               this.image,
               this.x,
               this.y,
               this.game.gameWidth * 0.4,
               this.game.gameHeight * 0.7,
          );

          let pixels = context.getImageData(0, 0, this.game.gameWidth, this.game.gameHeight).data;
          for (let y = 0; y < this.game.gameHeight; y += 5) {
               for (let x = 0; x < this.game.gameWidth; x += 5) {
                    const index = (y * this.game.gameWidth + x) * 4;
                    const red = pixels[index];
                    const green = pixels[index + 1];
                    const blue = pixels[index + 2];
                    const alpha = pixels[index + 3];
                    if (alpha > 0) {
                         console.log('ok');
                    }
               }
          }
     }

     update() {}
}
