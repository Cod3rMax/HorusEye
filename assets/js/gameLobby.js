import { option } from './helperVariable.js';
export class GameLobby {
     constructor(game) {
          this.game = game;
          this.fontSize = Math.random() * (25 - 10) + 10;
          this.radius = this.fontSize / 1.5;
          this.letterWidth = 0;
          this.x = Math.random() * (this.game.width - 2 * this.fontSize) + this.fontSize;
          this.y = Math.random() * (this.game.height - 2 * this.fontSize) + this.fontSize;
          this.passwordArray = [
               'A',
               'B',
               'C',
               'D',
               'E',
               'F',
               'G',
               'H',
               'I',
               'J',
               'K',
               'L',
               'M',
               'N',
               'O',
               'P',
               'Q',
               'R',
               'S',
               'T',
               'U',
               'V',
               'W',
               'X',
               'Y',
               'Z',
               '1',
               '2',
               '3',
               '4',
               '5',
               '6',
               '7',
               '8',
               '9',
               '0',
          ];
          this.letter = this.passwordArray[Math.floor(Math.random() * this.passwordArray.length)];
          this.color = 'black';
     }

     startGame(context) {
          context.beginPath();
          context.fillStyle = this.color;
          context.font = `bold ${this.fontSize}px Verdana`;
          context.textAlign = 'center';
          context.textBaseline = 'middle';
          context.fillText(this.letter, this.x, this.y);
          context.fill();
          context.closePath();
          let distance =
               option.calculateDistance(
                    this.x,
                    this.y,
                    option.mousePosition.x,
                    option.mousePosition.y,
               ) - this.radius;
          if (distance < option.torchLightRadius) {
               this.color = `rgb(0,0,0,${1 - distance / option.torchLightRadius})`;
          } else {
               this.color = 'black';
          }
     }
}
