import { Component, input, signal } from '@angular/core';
import { Item } from '../views-home/views-home.component';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css',
})
export class ItemListComponent {
  public items = input<Item[]>([]);
}
