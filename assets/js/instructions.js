import { InstructionParticles } from './particles.js';
import { option } from './helperVariable.js';
export class Instructions {
     constructor(game) {
          this.game = game;
     }

     draw(context) {
          context.beginPath();
          context.fillStyle = '#0f0';
          const fontSize = Math.min(Math.floor(this.game.width / 29), 25);
          context.font = `${fontSize}px Verdana`;
          context.textAlign = 'center';
          context.fontWeight = 'bold';
          context.shadowColor = 'red';
          context.fillText('Find the Password', this.game.width / 2, this.game.height / 6);
          context.fillText(
               "Don't fear the darkness if you carry the light within",
               this.game.width / 2,
               this.game.height / 4,
          );
          context.fillText('You have limited time', this.game.width / 2, this.game.height / 3);
          context.fillText('Starting Now!', this.game.width / 2, this.game.height / 2);
          context.fill();

          let pixels = context.getImageData(0, 0, this.game.width, this.game.height);

          context.clearRect(0, 0, this.game.width, this.game.height);

          for (let y = 0; y < pixels.height; y += 1) {
               for (let x = 0; x < pixels.width; x += 1) {
                    let index = (y * pixels.width + x) * 4;
                    const red = pixels.data[index];
                    const green = pixels.data[index + 1];
                    const blue = pixels.data[index + 2];
                    const alpha = pixels.data[index + 3];
                    const color = `rgb(${red}, ${green}, ${blue})`;

                    if (alpha > 128) {
                         this.game.instructionsArray.push(
                              new InstructionParticles(x, y, '#0f0', this.game),
                         );
                    }
               }
          }
     }
     update() {}
}
