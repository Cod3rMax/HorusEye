export class GameAudio {
     constructor(audioPath) {
          this.audioPath = audioPath;
          this.audio = new Audio(this.audioPath);
     }

     startAudio() {
          this.audio.play();
     }

     stopAudio() {
          this.audio.pause();
     }
}
