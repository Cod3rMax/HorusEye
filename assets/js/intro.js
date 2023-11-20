import { option } from './helperVariable.js';
export class Intro {
     constructor(game) {
          this.game = game;
          this.image = new Image();
          this.image.src = '../../images/eye.png';
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
     }

     update() {}
}
