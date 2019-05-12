import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Zando } from 'src/app/models/zando.models';
import { ZandoService } from 'src/app/services/zando.service';

@Component({
  selector: 'app-zando',
  templateUrl: './zando.page.html',
  styleUrls: ['./zando.page.scss'],
})
export class ZandoPage implements OnInit, OnDestroy {

  zandos: Zando[];
  zandoSubscription: Subscription;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private zandoService: ZandoService, private router: Router) {}

  ngOnInit() {
    this.zandoSubscription = this.zandoService.zandoSubject.subscribe(
      (zandos: Zando[]) => {
        this.zandos = zandos;
      }
    );
    this.zandoService.emitZando();
    this.zandoService.getZando();
  }

  onNewZando() {
    this.router.navigate(['/zando', 'new']);
  }

  onDeleteZando(zando: Zando) {
    this.zandoService.removeZando(zando);
  }

  onViewZando(id: number) {
    this.router.navigate(['/zando', 'view', id]);
  }

  ngOnDestroy() {
    this.zandoSubscription.unsubscribe();
  }

  addToCart(zando) {
    this.zandoService.addZandoToCart(zando);
  }

  openCompare() {
    this.router.navigate(['compare']);
  }

}
