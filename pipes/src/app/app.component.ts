import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  TitleCasePipe,
} from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConvertPipe } from './convert.pipe';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    JsonPipe,
    ConvertPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public name = signal('');
  public date = signal('');
  public amount = signal('0');
  public height = signal('0');
  public miles = signal('0');

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  public displayName = computed(() => {
    return this.name();
  });

  public displayDate = computed(() => {
    return this.date();
  });

  public displayAmount = computed(() => {
    return parseFloat(this.amount());
  });

  public displayHeight = computed(() => {
    return parseFloat(this.height());
  });

  public displayMiles = computed(() => {
    return parseFloat(this.miles());
  });

  onSubmit() {
    console.log('onSubmit');
  }
}
