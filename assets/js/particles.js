export class Particles {
     constructor(game, x, y) {
          this.game = game;
          this.x = x;
          this.y = y;
     }

     draw(context) {
          context.beginPath();
          context.fillStyle = 'white';
          context.fillRect(this.x, this.y, 2, 2);
          context.fill();
          context.closePath();
     }

     update() {}
}
