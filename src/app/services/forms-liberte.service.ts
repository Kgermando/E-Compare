import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Liberte } from '../models/liberte.model';

@Injectable({
  providedIn: 'root'
})
export class FormsLiberteService {

  liberte: Liberte[] = [];

  liberteSubject = new Subject<Liberte[]>();

  constructor() { }

  emitLiberte() {
    this.liberteSubject.next(this.liberte);
  }

  // cette fonctions sera modifier pour ADD to compare
  saveLiberte() {
    firebase.database().ref('/liberte').set(this.liberte);
  }

  getLiberte() {
    firebase.database().ref('/liberte').on('value', (data) => {
      this.liberte = data.val() ? data.val() : [];
      this.emitLiberte();
    });
  }

  // getsingleLiberte(id: number) {
  //   return new Promise(
  //     (resolve, reject) => {
  //       firebase.database().ref('/liberte' + id).once('value').then(
  //         (data) => {
  //           resolve(data.val());
  //         },
  //         (error) => {
  //           reject(error);
  //         }

  //       );
  //     }
  //   );
  // }

  createNewLiberte(newLiberte: Liberte) {
    this.liberte.push(newLiberte);
    this.saveLiberte();
    this.emitLiberte();
  }


  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFIleName = Date.now().toString();
        const upload = firebase.storage().ref().child('liberte/' + almostUniqueFIleName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => {
          console.log('Chargement...');
        },
        (error) => {
          console.log('Erreur de chargement: ' + error);
          reject();
        },
        () => {
          resolve(upload.snapshot.downloadURL);
        }
        );
      }
    );
  }

}
