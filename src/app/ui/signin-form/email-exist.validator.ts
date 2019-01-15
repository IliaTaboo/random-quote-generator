import { AngularFirestore } from '@angular/fire/firestore';
import { AbstractControl } from '@angular/forms';
import { map, take, debounceTime } from 'rxjs/operators';

export class EmailExistValidator {
  static email(afs: AngularFirestore) {
    return (control: AbstractControl) => {

      const email = control.value.toLowerCase();

      return afs.collection('users', ref => ref.where('email', '==', email) )
        .valueChanges().pipe(
          debounceTime(500),
          take(1),
          map(arr => arr.length ? { emailAvailable: false } : null ),
        );
    };
  }
}
