import { option } from './helperVariable.js';
export class Intro {
     constructor(game) {
          this.game = game;
          this.image = new Image();
          this.image.src = '../../images/eye.png';
          this.imageWidth = this.image.width / 2;
          this.imageHeight = this.image.height / 2;
          this.x = 0;
          this.y = 0;
     }
     draw(context) {
          context.drawImage(this.image, this.x, this.y, this.imageWidth, this.imageHeight);
     }

     update() {}
}
