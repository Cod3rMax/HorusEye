export class UiMessage {
     constructor() {
          this.messageTimerBoard = document.getElementById('progressBar');
          this.counterMessage = document.getElementById('counterMessage');
     }
     writeMessage(timeLeft) {
          this.messageTimerBoard.style.display = 'flex';
          if (timeLeft < 20) this.counterMessage.innerHTML = 'Find the password!';
          else if (timeLeft < 40) this.counterMessage.innerHTML = 'Keep looking!!';
          else if (timeLeft < 60) this.counterMessage.innerHTML = 'Time almost up';
          else if (timeLeft >= 100) this.counterMessage.innerHTML = 'Enter the password';
     }
}
