import { Injectable } from '@angular/core';
import { Gambela } from '../models/gambela.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class GambelaService {

  gambelas: Gambela[] = [];

  gambelaSubject = new Subject<Gambela[]>();

  constructor() { }

  emitGambela() {
    this.gambelaSubject.next(this.gambelas);
  }

  saveGambela() {
    firebase.database().ref('/gambela').set(this.gambelas);
  }

  getGambela() {
    firebase.database().ref('/gambela').on('value', (data) => {
      this.gambelas = data.val() ? data.val() : [];
      this.emitGambela();
    });
  }

  addGambelaProduct(gambela) {
    this.gambelas.push(gambela);
  }

  getsingleGambela(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/gambela' + id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }

        );
      }
    );
  }

  createNewGambela(newGambela: Gambela) {
    this.gambelas.push(newGambela);
    this.saveGambela();
    this.emitGambela();
  }

  removeGambela(gambela: Gambela) {
    const gambelaIndexRemove = this.gambelas.findIndex(
      (gambelaEl) => {
        if (gambelaEl === gambela) {
          return true;
        }
      }
    );
    this.gambelas.splice(gambelaIndexRemove, 1);
    this.saveGambela();
    this.emitGambela();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFIleName = Date.now().toString();
        const upload = firebase.storage().ref().child('imagesGambela/' + almostUniqueFIleName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => {
          console.log('Chargement...');
        },
        (error) => {
          console.log('Erreur de chargement: ' + error);
          reject();
        },
        () => {
          resolve(upload.snapshot.ref.getDownloadURL());
        }
        );
      }
    );
  }
}
