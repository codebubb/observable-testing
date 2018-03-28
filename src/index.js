import { Observable } from 'rxjs';

Observable.of(1, 2, 3, 4)
    .take(1)
    .subscribe(number => console.log(number),
);
