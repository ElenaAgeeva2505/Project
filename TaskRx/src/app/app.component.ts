import { Component, OnInit } from '@angular/core';
import { filter, interval, Observable, Subscriber, Subscription, map, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  intervalSubscrip$!: Subscription;
  mapFilterOperator$!: Subscription;

  constructor() {}
  res:string='';
  enableIntervalOperator() {
    const intervalStream = interval(2000)
    this.intervalSubscrip$ = intervalStream.subscribe((value) => {
      console.log('[Interval Operator]', value);
    this.res+=' '+ value;
    })
  }

  disableIntervalOperator() {
    this.intervalSubscrip$.unsubscribe();
  }
 
 // enableMapFilterOperator() {
   // const interval$ = interval(2000);
  //  this.mapFilterOperator$ = interval$.pipe(
    //  filter(value => value % 2 === 0),
    //  map(value => `Number ${value}`)
   // )
  //  .subscribe((value) => {
   //   console.log(value);
   // })
 // }

 enableMapFilterOperator() {
  min:1;
  max:3;
  function getRandomByLimits(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }
  const interval$ = interval(2000);
  this.mapFilterOperator$ = interval$.pipe(
    filter(value => value % 2 === 0),
    map(value => `Number ${value}`)
  )
  .subscribe((value) => {
    console.log(value);
  })
}


  disableMapFilterOperator() {
    this.mapFilterOperator$.unsubscribe();
  }

  subsCompleter() {
    const interval$ = interval(1000);

    this.mapFilterOperator$ = interval$.subscribe({
      next: (value) => {},
      error: (value) => {},
      complete: () => {}
    })
  }

  observerFunc() {
    const interval$ = new Observable((observer) => {
      observer.next('value')
      observer.error('error value')
      observer.complete()
    })

    this.mapFilterOperator$ = interval$.subscribe({
      next: (value) => {},
      error: (value) => {},
      complete: () => {}
    })
  }

  subjectStream() {
    const subject = new Subject();

    subject.next(1)

    subject.subscribe({
      next: (value) => {}
    })
  }

}

