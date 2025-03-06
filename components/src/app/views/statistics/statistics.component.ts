import { Component, input } from '@angular/core';
import { Stats } from '../views-home/views-home.component';

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css',
})
export class StatisticsComponent {
  public data = input<Stats[]>([]);
}
