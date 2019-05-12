import { Component, OnInit, OnDestroy } from '@angular/core';
import { Compare } from 'src/app/models/compare.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Liberte } from 'src/app/models/liberte.model';
import { LiberteService } from 'src/app/services/liberte.service';

@Component({
  selector: 'app-liberte',
  templateUrl: './liberte.page.html',
  styleUrls: ['./liberte.page.scss'],
})

export class LibertePage implements OnInit, OnDestroy {

  libertes: Liberte[];

  liberteSubscription: Subscription;

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

  constructor(private liberteService: LiberteService, private router: Router) {}

  ngOnInit() {
    this.liberteSubscription = this.liberteService.liberteSubject.subscribe(
      (libertes: Liberte[]) => {
        this.libertes = libertes;
      }
    );
    this.liberteService.emitliberte();
    this.liberteService.getLiberte();
  }

  onNewLiberte() {
    this.router.navigate(['/liberte', 'new']);
  }

  onDeleteLiberte(compare: Compare) {
    this.liberteService.removeLiberte(compare);
  }

  onViewliberte(id: number) {
    this.router.navigate(['/liberte', 'view', id]);
  }

  ngOnDestroy() {
    this.liberteSubscription.unsubscribe();
  }

  addToCart(liberte) {
    this.liberteService.addLiberteToCart(liberte);
  }

  openCompare() {
    this.router.navigate(['compare']);
  }
}
