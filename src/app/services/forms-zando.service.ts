import { Injectable } from '@angular/core';
import { Zando } from '../models/zando.models';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FormsZandoService {
  zandos: Zando[] = [];
  zandoSubject = new Subject<Zando[]>();

  constructor() { }

  emitZando() {
    this.zandoSubject.next(this.zandos);
  }

  // cette fonctions sera modifier pour ADD to compare
  saveZAndo() {
    firebase.database().ref('/zando').set(this.zandos);
  }

  getZAndo() {
    firebase.database().ref('/zando').on('value', (data) => {
      this.zandos = data.val() ? data.val() : [];
      this.emitZando();
    });
  }


  // getsingleZando(id: number) {
  //   return new Promise(
  //     (resolve, reject) => {
  //       firebase.database().ref('/zando' + id).once('value').then(
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

  createNewzando(newZando: Zando) {
    this.zandos.push(newZando);
    this.saveZAndo();
    this.emitZando();
  }

  // removeZando(zando: Zando) {
  //   const zandoIndexRemove = this.zandos.findIndex(
  //     (zandoEl) => {
  //       if (zandoEl === zando) {
  //         return true;
  //       }
  //     }
  //   );
  //   this.zandos.splice(zandoIndexRemove, 1);
  //   this.saveZAndo();
  //   this.emitZando();
  // }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFIleName = Date.now().toString();
        const upload = firebase.storage().ref().child('zando/' + almostUniqueFIleName + file.name).put(file);
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
