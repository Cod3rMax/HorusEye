import { option } from './helperVariable.js';
export class Particles {
     constructor(x, y, color, game) {
          this.game = game;
          this.originX = x;
          this.originY = y;
          this.x = Math.random() * this.game.width;
          this.y = Math.random() * this.game.height;
          this.color = color;
          this.easing = option.introSpeed;
     }
     draw(context) {
          context.beginPath();
          context.fillStyle = this.color;
          context.fillRect(this.x, this.y, 2, 2);
          context.fill();
          context.closePath();
     }
     update() {
          const dx = this.originX - this.x;
          const dy = this.originY - this.y;
          this.x += dx * this.easing;
          this.y += dy * this.easing;
          if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
               setTimeout(() => {
                    this.game.introAnimationDone = true;
               }, option.displayImageTime);
          }
     }
}
