import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { Zando } from 'src/app/models/zando.models';
import { ZandoService } from 'src/app/services/zando.service';
import { Liberte } from 'src/app/models/liberte.model';
import { LiberteService } from 'src/app/services/liberte.service';
import { Zigida } from 'src/app/models/zigida.model';
import { ZigidaService } from 'src/app/services/zigida.service';
import { Gambela } from 'src/app/models/gambela.model';
import { GambelaService } from 'src/app/services/gambela.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  zandos: Zando[];
  zandoSubscription: Subscription;
  zando: Zando;

  libertes: Liberte[];
  liberteSubscription: Subscription;

  zigidas: Zigida[];
  zigidaSubscription: Subscription;

  gambelas: Gambela[];
  gambelaSubscription: Subscription;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };


   constructor(private router: Router,
               private route: ActivatedRoute,
               private zandoService: ZandoService,
               private liberteService: LiberteService,
               private zigidaService: ZigidaService,
               private gambelaService: GambelaService) {}

  ngOnInit() {
    this.zandoSubscription = this.zandoService.zandoSubject.subscribe(
      (zandos: Zando[]) => {
        this.zandos = zandos;
      }
    );
    this.zandoService.emitZando();
    this.zandoService.getZando();

    this.liberteSubscription = this.liberteService.liberteSubject.subscribe(
      (libertes: Liberte[]) => {
        this.libertes = libertes;
      }
    );
    this.liberteService.emitliberte();
    this.liberteService.getLiberte();

    this.zigidaSubscription = this.zigidaService.zigidaSubject.subscribe(
      (zigidas: Zigida[]) => {
        this.zigidas = zigidas;
      }
    );
    this.zigidaService.emitZigida();
    this.zigidaService.getZigida();

    this.gambelaSubscription = this.gambelaService.gambelaSubject.subscribe(
      (gambela: Gambela[]) => {
        this.gambelas = gambela;
      }
    );
    this.gambelaService.emitGambela();
    this.gambelaService.getGambela();
  }

  onNewZando() {
    this.router.navigate(['/zando', 'new']);
  }

  onNewLiberte() {
    this.router.navigate(['/liberte', 'new']);
  }

  onNewZigida() {
    this.router.navigate(['/zigida', 'new']);
  }

  onNewGambela() {
    this.router.navigate(['/gambela', 'new']);
  }



  onDeleteZando(zandos: Zando) {
    this.zandoService.removeZando(zandos);
  }

  onDeleteLiberte(libertes: Liberte) {
    this.liberteService.removeLiberte(libertes);
  }

  onDeleteZigida(zigida: Zigida) {
    this.zigidaService.removeZigida(zigida);
  }

  onDeleteGambela(gambela: Gambela) {
    this.gambelaService.removeGambela(gambela);
  }



  onViewZando(id: number) {
    this.router.navigate(['/zando', 'view', id]);
  }

  onViewliberte(id: number) {
    this.router.navigate(['/liberte', 'view', id]);
  }

  onViewZigida(id: number) {
    this.router.navigate(['/zigida', 'view', id]);
  }

  onViewGambela(id: number) {
    this.router.navigate(['/gambela', 'view', id]);
  }


  addZandoToCart(zandos) {
    this.zandoService.addZandoToCart(zandos);
  }

  addLiberteToCart(libertes) {
    this.liberteService.addLiberteToCart(libertes);
  }

  addZigidaToCart(zigida) {
    this.zigidaService.addZigidaProduct(zigida);
  }

  addGambelaToCart(gambela) {
    this.gambelaService.addGambelaProduct(gambela);
  }


  ngOnDestroy() {
    this.zandoSubscription.unsubscribe();
    this.liberteSubscription.unsubscribe();
    this.zigidaSubscription.unsubscribe();
    this.gambelaSubscription.unsubscribe();
  }

  openCompare() {
    this.router.navigate(['/compare']);
  }
}
