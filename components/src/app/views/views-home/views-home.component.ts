import { Component } from '@angular/core';
import { StatisticsComponent } from '../statistics/statistics.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { DividerComponent } from '../../shared/divider/divider.component';

export type Stats = {
  value: number;
  label: string;
};

export type Item = {
  image: string;
  title: string;
  description: string;
};

@Component({
  selector: 'app-views-home',
  imports: [StatisticsComponent, ItemListComponent, DividerComponent],
  templateUrl: './views-home.component.html',
  styleUrl: './views-home.component.css',
})
export class ViewsHomeComponent {
  stats: Stats[] = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' },
  ];

  items: Item[] = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on',
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a fantastic dresser to put stuff in',
    },
  ];
}
