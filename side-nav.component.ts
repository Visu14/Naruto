import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss',
})
export class SideNavComponent implements OnInit {
  public countDownDate: any;
  public newTimer: any;
  public hours1: any;
  public minutes1: any;
  public seconds1: any;
  public imag: any;

  constructor() {}

  ngOnInit(): void {
    this.setTimer();
  }
  onChanges(): void {
    this.setTimer();
  }

  setTimer() {
    this.countDownDate = new Date('Jan 29, 2024 15:59:25').getTime();
    this.newTimer = setInterval(() => {
      let now = new Date().getTime();
      let distance = this.countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.hours1 = days.toString().split('');
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.minutes1 = minutes.toString().split('');
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.seconds1 = seconds.toString().split('');
    });
  }
}
