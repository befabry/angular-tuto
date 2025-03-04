import { Component, input } from '@angular/core';
import {
  DataType,
  HeaderType,
} from '../collections-home/collections-home.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-table',
  imports: [NgClass],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  public classNames = input<string>('');
  public data = input<DataType[]>([]);
  public headers = input<HeaderType[]>([]);
}
