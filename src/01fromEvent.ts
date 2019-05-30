// import the fromEvent operator
import { fromEvent } from 'rxjs';

// grab button reference
const button = document.getElementById('myButton');

// create an observable of button clicks
const myObservable = fromEvent(button, 'click');

// for now, let's just log the event on each click
// const subscription = myObservable.subscribe(event => console.log(event));

const subscription = myObservable.subscribe({
    // on successful emissions
    next: event => console.log(event),
    // on errors
    error: error => console.log(error),
    // called once on completion
    complete: () => console.log('complete!')
  });