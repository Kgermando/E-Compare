import { Injectable } from '@angular/core';
import { Liberte } from '../models/liberte.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LiberteService {

  libertes: Liberte[] = [];
  liberteSubject = new Subject<Liberte[]>();

  constructor() { }

  emitliberte() {
    this.liberteSubject.next(this.libertes);
  }

  // cette fonctions sera modifier pour ADD to compare
  saveLiberte() {
    firebase.database().ref('/liberte').set(this.libertes);
  }

  getLiberte() {
    firebase.database().ref('/liberte').on('value', (data) => {
      this.libertes = data.val() ? data.val() : [];
      this.emitliberte();
    });
  }

  addLiberteToCart(libertes) {
    this.libertes.push(libertes);
  }

  getsingleliberte(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/liberte' + id).once('value').then(
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

  createNewLiberte(newLiberte: Liberte) {
    this.libertes.push(newLiberte);
    this.saveLiberte();
    this.emitliberte();
  }

  removeLiberte(liberte: Liberte) {
    const liberteIndexRemove = this.libertes.findIndex(
      (zandoEl) => {
        if (zandoEl === liberte) {
          return true;
        }
      }
    );
    this.libertes.splice(liberteIndexRemove, 1);
    this.saveLiberte();
    this.emitliberte();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFIleName = Date.now().toString();
        const upload = firebase.storage().ref().child('imagesliberte/' + almostUniqueFIleName + file.name).put(file);
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
