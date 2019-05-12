import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Ecommerce } from '../models/ecommerce.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommerceService {

  ecommerces: Ecommerce[] = [];

  comparesSubject = new Subject<Ecommerce[]>();

  constructor() { }

  emitEcommerce() {
    this.comparesSubject.next(this.ecommerces);
  }

  // cette fonctions sera modifier pour ADD to compare
  saveEcommerce() {
    firebase.database().ref('/ecommerces').set(this.ecommerces);
  }

  getEcommerce() {
    firebase.database().ref('/ecommerces').on('value', (data) => {
      this.ecommerces = data.val() ? data.val() : [];
      this.emitEcommerce();
    });
  }

  getsingleEcommerce(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/ecommerces' + id).once('value').then(
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

  createNewCompare(newCompare: Ecommerce) {
    this.ecommerces.push(newCompare);
    this.saveEcommerce();
    this.emitEcommerce();
  }

  removeCompare(compare: Ecommerce) {
    const compareIndexRemove = this.ecommerces.findIndex(
      (compareEl) => {
        if (compareEl === compare) {
          return true;
        }
      }
    );
    this.ecommerces.splice(compareIndexRemove, 1);
    this.saveEcommerce();
    this.emitEcommerce();
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

  getProducts() {
    return this.ecommerces;
  }

  getCart() {
    return this.ecommerces;
  }

  addProduct(ecommerces) {
    this.ecommerces.push(ecommerces);
  }


}
