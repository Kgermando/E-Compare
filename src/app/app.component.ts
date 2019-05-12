import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.style.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'E-Compare',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'E-Commerce',
      children: [
        {
          title: 'Super-marché',
          url: '/super-marche',
          icon: 'cart'
        },
      ]
    },
    {
      title: 'Forms',
      children: [
        {
          title: 'Form Zando',
          url: '/forms-zando',
          icon: 'add-circle-outline'
        },
        {
          title: 'Form Gambela',
          url: '/forms-gambela',
          icon: 'add-circle-outline'
        },
        {
          title: 'Form Liberte',
          url: '/forms-liberte',
          icon: 'add-circle-outline'
        },
        {
          title: 'Form Zigida',
          url: '/forms-zigida',
          icon: 'add-circle-outline'
        },
      ]
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.platform.backButton.subscribe(() => {});

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
