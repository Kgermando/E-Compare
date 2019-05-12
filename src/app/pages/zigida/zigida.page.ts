import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Zigida } from 'src/app/models/zigida.model';
import { ZigidaService } from 'src/app/services/zigida.service';

@Component({
  selector: 'app-zigida',
  templateUrl: './zigida.page.html',
  styleUrls: ['./zigida.page.scss'],
})
export class ZigidaPage implements OnInit, OnDestroy {

  zigidas: Zigida[];
  zigidaSubscription: Subscription;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private zigidaService: ZigidaService, private router: Router) { }

  ngOnInit() {
    this.zigidaSubscription = this.zigidaService.zigidaSubject.subscribe(
      (zigidas: Zigida[]) => {
        this.zigidas = zigidas;
      }
    );
    this.zigidaService.emitZigida();
    this.zigidaService.getZigida();
  }

  onNewZigida() {
    this.router.navigate(['/zigida', 'new']);
  }

  onDeleteZigida(zigida: Zigida) {
    this.zigidaService.removeZigida(zigida);
  }

  onViewZigida(id: number) {
    this.router.navigate(['/zigida', 'view', id]);
  }

  ngOnDestroy() {
    this.zigidaSubscription.unsubscribe();
  }

  addZigidaToCart(zigida) {
    this.zigidaService.addZigidaProduct(zigida);
  }

  openCompare() {
    this.router.navigate(['compare']);
  }


}
