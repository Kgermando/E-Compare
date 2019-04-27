import { Injectable } from '@angular/core';
import { Compare } from '../models/compare.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class CompareService {

  compares: Compare[] = [];

  comparesSubject = new Subject<Compare[]>();

  constructor() { }

  emitCompares() {
    this.comparesSubject.next(this.compares);
  }

  // cette fonctions sera modifier pour ADD to compare
  saveCompares() {
    firebase.database().ref('/compares').set(this.compares);
  }

  getCompares() {
    firebase.database().ref('/compares').on('value', (data) => {
      this.compares = data.val() ? data.val() : [];
      this.emitCompares();
    });
  }

  addProduct(compares) {
    this.compares.push(compares);
  }

  getsingleCompare(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/compares' + id).once('value').then(
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

  createNewCompare(newCompare: Compare) {
    this.compares.push(newCompare);
    this.saveCompares();
    this.emitCompares();
  }

  removeCompare(compare: Compare) {
    const compareIndexRemove = this.compares.findIndex(
      (compareEl) => {
        if (compareEl === compare) {
          return true;
        }
      }
    );
    this.compares.splice(compareIndexRemove, 1);
    this.saveCompares();
    this.emitCompares();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFIleName = Date.now().toString();
        const upload = firebase.storage().ref().child('images/' + almostUniqueFIleName + file.name).put(file);
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
