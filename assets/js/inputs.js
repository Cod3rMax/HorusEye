import { option } from './helperVariable.js';
export class InputsHandler {
     constructor(canvas) {
          this.canvas = canvas;
          this.keys = [];
          this.canvas.addEventListener('mousemove', ({ clientX, clientY }) => {
               let canvasTopRect = this.canvas.getBoundingClientRect().top;
               let canvasLeftRect = this.canvas.getBoundingClientRect().left;

               option.mousePosition.x = clientX - canvasLeftRect;
               option.mousePosition.y = clientY - canvasTopRect;
          });

          window.addEventListener('keypress', ({ key }) => {
               if (key === 'Enter' && this.keys.indexOf(key) === -1) {
                    this.keys.push(key);
               }
          });
     }
}
