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
          context.arc(option.mousePosition.x, option.mousePosition.y, 40, 0, 2 * Math.PI);
          context.fillStyle = 'rgb(255,255,255,0.1)';
          context.shadowColor = 'rgb(255,255,255, 1)';
          context.shadowBlur = 40;
          context.fill();
          context.closePath();
          context.restore();
     }
}
