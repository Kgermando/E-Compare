import { Component, OnInit, OnDestroy } from '@angular/core';
import { Compare } from 'src/app/models/compare.model';
import { Subscription } from 'rxjs';
import { CompareService } from 'src/app/services/compare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

   compares: Compare[];
   compareSubscription: Subscription;

   sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };

   constructor(private compareService: CompareService, private router: Router) {}

  ngOnInit() {
    this.compareSubscription = this.compareService.comparesSubject.subscribe(
      (compares: Compare[]) => {
        this.compares = compares;
      }
    );
    this.compareService.emitCompares();
    this.compareService.getCompares();
  }

  onNewCompare() {
    this.router.navigate(['/compares', 'new']);
  }

  onDeleteCompare(compare: Compare) {
    this.compareService.removeCompare(compare);
  }

  onViewCompare(id: number) {
    this.router.navigate(['/compares', 'view', id]);
  }

  ngOnDestroy() {
    this.compareSubscription.unsubscribe();
  }

  addToCart(compares) {
    this.compareService.addProduct(compares);
  }

  openCompare() {
    this.router.navigate(['compare']);
  }

}
