import { Intro } from './intro.js';
window.addEventListener('load', function () {
     const canvas = document.querySelector('canvas');
     const context = canvas.getContext('2d');
     const CANVAS_WIDTH = (canvas.width =
          document.getElementById('container').getBoundingClientRect().width * 0.5);
     const CANVAS_HEIGHT = (canvas.height =
          document.getElementById('container').getBoundingClientRect().height * 0.5);

     class Game {
          constructor(gameWidth, gameHeight) {
               this.gameWidth = gameWidth;
               this.gameWidth = gameWidth;
               this.intro = new Intro(this);
          }

          draw(context) {
               this.intro.draw(context);
          }

          update() {
               this.intro.update();
          }
     }

     const game = new Game(CANVAS_WIDTH, CANVAS_HEIGHT);

     function animate() {
          game.update();
          game.draw(context);
          requestAnimationFrame(animate);
     }
     animate();
});
