import { option } from './helperVariable.js';

export class Intro {
     constructor(game) {
          this.game = game;
          this.image = new Image();
          this.image.onload = () => {
               this.x = 0;
               this.y = 0;
               this.width = this.image.width;
               this.height = this.image.height;
          };
          this.image.src = option.introImage;
     }
     draw(context) {}
}
