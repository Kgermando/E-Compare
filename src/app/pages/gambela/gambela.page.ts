import { Component, OnInit, OnDestroy } from '@angular/core';
import { Gambela } from 'src/app/models/gambela.model';
import { Subscription } from 'rxjs';
import { GambelaService } from 'src/app/services/gambela.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gambela',
  templateUrl: './gambela.page.html',
  styleUrls: ['./gambela.page.scss'],
})
export class GambelaPage implements OnInit, OnDestroy {

  gambelas: Gambela[];
  gambelaSubscription: Subscription;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private router: Router, private gambelaService: GambelaService) { }

  ngOnInit() {
    this.gambelaSubscription = this.gambelaService.gambelaSubject.subscribe(
      (gambela: Gambela[]) => {
        this.gambelas = gambela;
      }
    );
    this.gambelaService.emitGambela();
    this.gambelaService.getGambela();
  }

  onNewGambela() {
    this.router.navigate(['/gambela', 'new']);
  }

  onDeleteGambela(gambela: Gambela) {
    this.gambelaService.removeGambela(gambela);
  }

  onViewGambela(id: number) {
    this.router.navigate(['/gambela', 'view', id]);
  }

  ngOnDestroy() {
    this.gambelaSubscription.unsubscribe();
  }

  addGambelaToCart(gambela) {
    this.gambelaService.addGambelaProduct(gambela);
  }

  openCompare() {
    this.router.navigate(['compare']);
  }


}
