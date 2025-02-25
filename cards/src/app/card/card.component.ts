import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  readonly title = input('');
  readonly imageUrl = input('');
  readonly username = input('');
  readonly content = input('');
}
