import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Gambela } from '../models/gambela.model';

@Injectable({
  providedIn: 'root'
})
export class FormsGambelaService {

  gambela: Gambela[] = [];

  gambelaSubject = new Subject<Gambela[]>();

  constructor() { }

  emitGambela() {
    this.gambelaSubject.next(this.gambela);
  }

  // cette fonctions sera modifier pour ADD to compare
  saveGambela() {
    firebase.database().ref('/gambela').set(this.gambela);
  }

  getGambela() {
    firebase.database().ref('/gambela').on('value', (data) => {
      this.gambela = data.val() ? data.val() : [];
      this.emitGambela();
    });
  }

  // addProduct(gambela) {
  //   this.gambela.push(gambela);
  // }

  // getsingleGambela(id: number) {
  //   return new Promise(
  //     (resolve, reject) => {
  //       firebase.database().ref('/gambela' + id).once('value').then(
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

  createNewGambela(newGambela: Gambela) {
    this.gambela.push(newGambela);
    this.saveGambela();
    this.emitGambela();
  }

  // removeGambela(gambela: Gambela) {
  //   const gambelaIndexRemove = this.gambela.findIndex(
  //     (gambelaEl) => {
  //       if (gambelaEl === gambela) {
  //         return true;
  //       }
  //     }
  //   );
  //   this.gambela.splice(gambelaIndexRemove, 1);
  //   this.saveGambela();
  //   this.emitGambela();
  // }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFIleName = Date.now().toString();
        const upload = firebase.storage().ref().child('gambela/' + almostUniqueFIleName + file.name).put(file);
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
