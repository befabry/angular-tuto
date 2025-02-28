import { Routes } from '@angular/router';
import { ElementsModule } from './elements/elements.module';
import { CollectionsModule } from './collections/collections.module';

export const routes: Routes = [
    {
        path: "elements",
        loadChildren: () => ElementsModule
    },
    {
        path: "collections",
        loadChildren: () => CollectionsModule
    }
];
