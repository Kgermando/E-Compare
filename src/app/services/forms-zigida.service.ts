import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Zigida } from '../models/zigida.model';

@Injectable({
  providedIn: 'root'
})
export class FormsZigidaService {
  zigidas: Zigida[] = [];
  zigidaSubject = new Subject<Zigida[]>();

  constructor() { }

  emitZigida() {
    this.zigidaSubject.next(this.zigidas);
  }

  // cette fonctions sera modifier pour ADD to compare
  saveZigida() {
    firebase.database().ref('/zigida').set(this.zigidas);
  }

  getZigida() {
    firebase.database().ref('/zigida').on('value', (data) => {
      this.zigidas = data.val() ? data.val() : [];
      this.emitZigida();
    });
  }


  getsingleZigida(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/zigida' + id).once('value').then(
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

  createNewzigida(newZigida: Zigida) {
    this.zigidas.push(newZigida);
    this.saveZigida();
    this.emitZigida();
  }

  // removeZigida(zigida: Zigida) {
  //   const zigidaIndexRemove = this.zigidas.findIndex(
  //     (zigidaEl) => {
  //       if (zigidaEl === zigida) {
  //         return true;
  //       }
  //     }
  //   );
  //   this.zigidas.splice(zigidaIndexRemove, 1);
  //   this.saveZigida();
  //   this.emitZigida();
  // }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFIleName = Date.now().toString();
        const upload = firebase.storage().ref().child('zigida/' + almostUniqueFIleName + file.name).put(file);
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
