export class Particles {
     constructor(x, y, color) {
          this.x = x;
          this.y = y;
          this.color = color;
     }
     draw(context) {
          context.beginPath();
          context.fillStyle = this.color;
          context.fillRect(this.x, this.y, 2, 2);
          context.fill();
          context.closePath();
     }
}
