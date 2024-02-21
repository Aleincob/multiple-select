import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from './services/data.service';
import { Card } from './models/card';
import { map } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  homeAppliances: Card[] = []; //electrodomesticos
  brandHomeAppliances: string[] = []; //Marcas
  filteredHomeAppliances: Card[] = []; //Electrodomesticos Filtrados

  selected: string[] = []; //Selected Brands

  ngOnInit() {
    this.dataService.getApi().subscribe((data) => {
      console.log(data);
      this.homeAppliances = data;
      const allBrands = data.map(function (currentValue) {
        return currentValue.brand;
      });
      this.brandHomeAppliances = [...new Set(allBrands)];
      console.log(this.brandHomeAppliances);

      console.log(this.filteredHomeAppliances);
    });
  }

  test() {
    // this.cardData.includes(selected);
    const newCard = this.homeAppliances.filter((item) =>
      this.selected.includes(item.brand)
    );
    this.filteredHomeAppliances = newCard;
    console.log('gaaa', this.selected);
  }
}
