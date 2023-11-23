import { option } from './helperVariable.js';
export class TorchLight {
     constructor(game, input) {
          this.game = game;
          this.input = input;
          this.x = 0;
          this.y = 0;
     }
     draw(context) {
          context.save();
          context.beginPath();
          context.arc(option.mousePosition.x, option.mousePosition.y, 20, 0, 2 * Math.PI);
          context.fillStyle = 'white';
          context.lineWidth = 2;
          context.strokeStyle = 'white';
          context.stroke();
          context.closePath();
          context.restore();
     }
}
