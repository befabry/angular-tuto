import { Component, input } from '@angular/core';
import { TimesDirective } from '../times.directive';

@Component({
  selector: 'app-placeholder',
  imports: [TimesDirective],
  templateUrl: './placeholder.component.html',
  styleUrl: './placeholder.component.css',
})
export class PlaceholderComponent {
  readonly header = input<boolean>(true);
  readonly lines = input<number>(3);
}
