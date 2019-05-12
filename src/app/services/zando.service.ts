import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { Zando } from '../models/zando.models';


@Injectable({
  providedIn: 'root'
})
export class ZandoService {

  zandos: Zando[] = [];

  zandoSubject = new Subject<Zando[]>();

  constructor() { }

  emitZando() {
    this.zandoSubject.next(this.zandos);
  }

  // cette fonctions sera modifier pour ADD to compare
  saveZando() {
    firebase.database().ref('/zando').set(this.zandos);
  }

  async getZando() {
    return new Promise (
      (resolve, reject) => {
        firebase.database().ref('/zando').once('value').then(
        (data) => {
          resolve(this.zandos = data.val() ? data.val() : []);
          this.emitZando();
        },
        (error) => {
              reject(error);
            }
        );
      });
  }

  addZandoToCart(zandos) {
    this.zandos.push(zandos);
  }

  getsingleZando(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/zando' + id).once('value').then(
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

  createNewZando(newZando: Zando) {
    this.zandos.push(newZando);
    this.saveZando();
    this.emitZando();
  }

  removeZando(zando: Zando) {
    const zandoIndexRemove = this.zandos.findIndex(
      (zandoEl) => {
        if (zandoEl === zando) {
          return true;
        }
      }
    );
    this.zandos.splice(zandoIndexRemove, 1);
    this.saveZando();
    this.emitZando();
  }

  uploadFileZando(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFIleName = Date.now().toString();
        const upload = firebase.storage().ref().child('imageszando/' + almostUniqueFIleName + file.name).put(file);
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
