import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      // Lazy loading https://angular.dev/reference/migrations/route-lazy-loading
      import('./elements/elements.module').then((m) => m.ElementsModule),
  },
  {
    path: 'collections',
    loadChildren: () =>
      // Lazy loading
      import('./collections/collections.module').then(
        (m) => m.CollectionsModule
      ),
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
