import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { DividerComponent } from '../../shared/divider/divider.component';
import { AccordionComponent } from '../accordion/accordion.component';

export type AccordionItem = {
  title: string;
  content: string;
}

@Component({
  selector: 'app-mods-home',
  imports: [ModalComponent, DividerComponent, AccordionComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css',
})
export class ModsHomeComponent {
  modalOpen = false;
  items: AccordionItem[] = [
    { title: 'Why is the sky blue ?', content: 'Because it is ?' },
    {
      title: 'Why does an orange taste like ?',
      content: 'It tastes like an orange',
    },
    { title: 'What color is that cat ?', content: 'It is orange' },
  ];

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
