import { option } from './helperVariable.js';
export class InputsHandler {
     constructor(canvas) {
          this.canvas = canvas;

          this.canvas.addEventListener('mousemove', ({ clientX, clientY }) => {
               let canvasTopRect = this.canvas.getBoundingClientRect().x;
               let canvasLeftRect = this.canvas.getBoundingClientRect().y;

               option.mousePosition.x = clientX - canvasTopRect;
               option.mousePosition.y = clientY - canvasLeftRect;
               console.log(option.mousePosition);
          });
     }
}
