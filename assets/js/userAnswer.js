import { GameAudio } from './audio.js';
export class UserAnswer {
     constructor(uiMessage) {
          this.uiMessage = uiMessage;
          this.falseAudio = new GameAudio('../../audio/AccessDenied.mp3');
          this.trueAudio = new GameAudio('../../audio/AccessGranted.wav');
          this.userInputContainer = document.getElementById('userInputContainer');
          this.userInput = document.getElementById('userInput');
     }

     showUserForm() {
          this.userInputContainer.style.display = 'flex';
          this.userInput.focus();

          this.userInput.addEventListener('keypress', (e) => {
               if (e.key === 'Enter') {
                    if (this.uiMessage.game.correctPassword.join('') === e.target.value) {
                         console.log('true');
                         this.trueAudio.startAudio();
                         setTimeout(() => {
                              this.trueAudio.stopAudio();
                         }, 3500);
                    } else {
                         console.log('false');
                         this.falseAudio.startAudio();
                    }
               }
          });
     }
}
