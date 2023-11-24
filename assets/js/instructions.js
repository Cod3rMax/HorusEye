export class Instructions {
     constructor(game) {
          this.game = game;
     }

     draw(context) {
          context.beginPath();
          context.fillStyle = '#0f0';
          const fontSize = Math.min(Math.floor(this.game.width / 20), 15);
          context.font = `${fontSize}px Times New Roman`;
          context.textAlign = 'center';
          context.fillText('Find the Password', this.game.width / 2, this.game.height / 6);
          context.fillText(
               "Don't fear the darkness if you carry the light within",
               this.game.width / 2,
               this.game.height / 4,
          );
          context.fillText('You have limited time', this.game.width / 2, this.game.height / 3);
          context.fillText(
               'Press enter to start your hunt!',
               this.game.width / 2,
               this.game.height / 2,
          );
          context.fill();
          context.closePath();
     }
}
