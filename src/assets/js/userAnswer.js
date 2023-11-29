import { GameAudio } from './audio.js';
import { option } from './helperVariable.js';
export class UserAnswer {
     constructor(uiMessage) {
          this.uiMessage = uiMessage;
          this.falseAudio = new GameAudio(option.accessDenied);
          this.trueAudio = new GameAudio(option.accessGranted);
          this.userInputContainer = document.getElementById('userInputContainer');
          this.userInput = document.getElementById('userInput');
          this.correctPasswords = this.uiMessage.game.correctPassword;
          this.countingCorrectLetters = 0;
     }

     showUserForm() {
          this.userInputContainer.style.display = 'flex';
          this.userInput.style.display = 'flex';

          this.userInput.focus();

          this.userInput.addEventListener('keypress', (e) => {
               if (e.key === 'Enter') {
                    [...e.target.value].forEach((letter) => {
                         if (this.correctPasswords.indexOf(letter) > -1) {
                              this.countingCorrectLetters++;
                         }
                    });

                    if (this.countingCorrectLetters === this.correctPasswords.length) {
                         fetch(`https://${GetParentResourceName()}/result`, {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ promise: true }),
                         }).th;
                         this.trueAudio.startAudio();
                         setTimeout(() => {
                              this.trueAudio.stopAudio();
                         }, 3500);
                         this.countingCorrectLetters = 0;
                    } else {
                         fetch(`https://${GetParentResourceName()}/result`, {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ promise: false }),
                         }).th;
                         this.countingCorrectLetters = 0;
                         this.falseAudio.startAudio();
                    }

                    // close everything here
                    this.userInputContainer.style.display = 'none';
                    this.userInput.style.display = 'none';
                    document.getElementById('progressBar').style.display = 'none';
                    document.querySelector('body').style.display = 'none';
                    document.getElementById('userInput').value = '';
               }
          });
     }
}
