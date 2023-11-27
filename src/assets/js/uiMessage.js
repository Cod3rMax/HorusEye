import { UserAnswer } from './userAnswer.js';
export class UiMessage {
     constructor(game) {
          this.game = game;
          this.messageTimerBoard = document.getElementById('progressBar');
          this.counterMessage = document.getElementById('counterMessage');
          this.userAnswer = new UserAnswer(this);
     }
     writeMessage(timeLeft) {
          this.messageTimerBoard.style.display = 'flex';
          if (timeLeft < 20) this.counterMessage.innerHTML = 'Find the password!';
          else if (timeLeft < 40) this.counterMessage.innerHTML = 'Keep looking!!';
          else if (timeLeft < 60) this.counterMessage.innerHTML = 'Time almost up';
          else if (timeLeft >= 100) {
               this.counterMessage.innerHTML = 'Enter the password';
               this.userAnswer.showUserForm();
          }
     }
}
