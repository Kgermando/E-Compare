import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Liste des Entreprises',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Form Compare',
      url: '/forms-compare',
      icon: 'add-circle-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    const config = {
      apiKey: 'AIzaSyCCmysmYqQPgLiTPWD_Rsyh37JmmKGpggU',
      authDomain: 'e-compare-b1fdd.firebaseapp.com',
      databaseURL: 'https://e-compare-b1fdd.firebaseio.com',
      projectId: 'e-compare-b1fdd',
      storageBucket: 'e-compare-b1fdd.appspot.com',
      messagingSenderId: '978951590040'
    };
    firebase.initializeApp(config);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
