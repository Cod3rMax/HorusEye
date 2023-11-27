import { GameAudio } from './audio.js';
export class UserAnswer {
     constructor(uiMessage) {
          this.uiMessage = uiMessage;
          this.falseAudio = new GameAudio('./assets/audio/AccessDenied.mp3');
          this.trueAudio = new GameAudio('./assets/audio/AccessGranted.wav');
          this.userInputContainer = document.getElementById('userInputContainer');
          this.userInput = document.getElementById('userInput');
          this.correctPasswords = this.uiMessage.game.correctPassword;
          this.countingCorrectLetters = 0;
     }

     showUserForm() {
          this.userInputContainer.style.display = 'flex';
          this.userInput.focus();

          this.userInput.addEventListener('keypress', (e) => {
               if (e.key === 'Enter') {
                    [...e.target.value].forEach((letter) => {
                         if (this.correctPasswords.indexOf(letter) > -1) {
                              this.countingCorrectLetters++;
                         }
                    });

                    if (this.countingCorrectLetters === this.correctPasswords.length) {
                         console.log('true');
                         this.trueAudio.startAudio();
                         setTimeout(() => {
                              this.trueAudio.stopAudio();
                         }, 3500);
                         this.countingCorrectLetters = 0;
                    } else {
                         console.log('false');
                         this.countingCorrectLetters = 0;
                         this.falseAudio.startAudio();
                    }
               }
          });
     }
}
