export class UserAnswer {
     constructor(uiMessage) {
          this.uiMessage = uiMessage;
          this.userInputContainer = document.getElementById('userInputContainer');
          this.userInput = document.getElementById('userInput');
          console.log(this.uiMessage.game.correctPassword);
     }

     showUserForm() {
          this.userInputContainer.style.display = 'flex';
          this.userInput.focus();

          this.userInput.addEventListener('keypress', (e) => {
               if (e.key === 'Enter') {
                    if (this.uiMessage.game.correctPassword.join('') === e.target.value) {
                         console.log('true');
                    } else {
                         console.log('false');
                    }
               }
          });
     }
}
