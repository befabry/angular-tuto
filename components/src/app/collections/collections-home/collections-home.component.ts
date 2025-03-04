import { Component } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DividerComponent } from '../../shared/divider/divider.component';

export type DataType = {
  name: string;
  age: number;
  job: string;
  employed: boolean;
};

export type HeaderType = {
  key: keyof DataType;
  label: string;
};

@Component({
  selector: 'app-collections-home',
  imports: [TableComponent, DividerComponent],
  templateUrl: './collections-home.component.html',
  styleUrl: './collections-home.component.css',
})
export class CollectionsHomeComponent {
  data: DataType[] = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 25, job: 'Engineer', employed: true },
  ];

  headers: HeaderType[] = [
    { key: 'employed', label: 'Has a Job ?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];
}
