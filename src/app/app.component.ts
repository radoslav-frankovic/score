import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent {

  minutes: number = 15;
  seconds: number = 15 * 60;
  
  game: boolean = false;

  homeTeamLogo: string = 'tor.svg';
  homeTeamName: string = 'Toronto Maple Leafs';

  awayTeamLogo: string = 'mtl.svg';
  awayTeamName: string = 'Montreal Canadiens';

  scoreHome: number = 0;
  scoreAway: number = 0;

  interval?: any;

  constructor() {}

  startGame(): void {
    clearInterval( this.interval! );
    this.scoreHome = 0;
    this.scoreAway = 0;
    this.game = true;
    this.seconds = this.minutes * 60;
    this.interval = setInterval(() => {
      this.seconds--;
      if (this.seconds <= 0) {
        clearInterval(this.interval);
        this.game = false;
        const audio = new Audio('horn.mp3');
        audio.play();
      }
    }, 1000);
  }

  minutesString(): string {
    return Math.floor(this.seconds / 60).toString().padStart(2, '0');
  }

  secondsString(): string {
    return (this.seconds % 60).toString().padStart(2, '0');
  }

  homeTeamClick(): void {
    this.scoreHome++;
  }

  awayTeamClick(): void {
    this.scoreAway++;
  }

}
