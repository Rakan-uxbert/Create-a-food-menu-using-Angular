import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  total = 0;
  qty = 0;
  foodmenu = [
    {
      id: 1,
      name: 'دجاج',
      price: 30,
      description: 'دجاج مشوي على الفحم',
      img: '/assets/images/chicken.jpeg',
    },
    {
      id: 2,
      name: 'دجاج',
      price: 30,
      description: 'دجاج شواية ',
      img: '/assets/images/chicken.jpeg',
    },
    {
      id: 3,
      name: 'ايدام',
      price: 20,
      description: 'ايدام خضار مشكل',
      img: '/assets/images/edam.jpeg',
    },
    {
      id: 4,
      name: 'ايدام',
      price: 20,
      description: 'ايدام  بالدجاج على الفرن',
      img: '/assets/images/edam2.jpeg',
    },
  ];

  searchQuery = '';
  filteredMenu = this.foodmenu;

  search(event: Event): void {
    event.preventDefault();
    this.filteredMenu = this.foodmenu.filter((item) =>
      item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  sum(event: any, price: number) {
    const isChecked: boolean = event.target.checked;
    if (isChecked) {
      this.total += price;
      this.qty += 1;
    } else {
      this.total -= price;
      this.qty -= 1;
    }
  }
}
