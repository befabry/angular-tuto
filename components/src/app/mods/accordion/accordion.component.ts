import { Component, input } from '@angular/core';
import { AccordionItem } from '../mods-home/mods-home.component';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-accordion',
  imports: [NgClass],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  public items = input<AccordionItem[]>([]);
  public openedItemIndex = 0;

  onClick(index: number) {
    if(index === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = index;
    }
    
  }
}
