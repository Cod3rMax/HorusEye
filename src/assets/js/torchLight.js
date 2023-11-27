import { option } from './helperVariable.js';
export class TorchLight {
     constructor(game, input) {
          this.game = game;
          this.input = input;
          this.x = 0;
          this.y = 0;
     }
     draw(context) {
          const grd = context.createRadialGradient(
               option.mousePosition.x,
               option.mousePosition.y,
               0,
               option.mousePosition.x,
               option.mousePosition.y,
               option.torchLightRadius * 0.98,
          );
          grd.addColorStop(0, 'rgb(255, 255, 255, 0.8)');
          grd.addColorStop(1, 'rgb(255, 255, 255, 0.1)');
          context.save();
          context.beginPath();
          context.arc(
               option.mousePosition.x,
               option.mousePosition.y,
               option.torchLightRadius,
               0,
               2 * Math.PI,
          );
          context.fillStyle = grd;
          context.fill();
          context.closePath();
          context.restore();
     }
}
