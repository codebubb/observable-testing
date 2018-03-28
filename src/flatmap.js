import { Observable } from 'rxjs';

const firstAPIResponse = Observable.of({
  id: 123,
  title: 'My Book Title',
});

const secondAPIResponse = Observable.of({
  epic_ID: 123,
});

firstAPIResponse.flatMap(
  (first) => {
    return secondAPIResponse;
  },
  (first, second) => {
    return Object.assign(first, second);
  })
  .subscribe(result => console.log(result));

