import { Component } from '@angular/core';
import { ModalComponent } from "../modal/modal.component";
import { DividerComponent } from "../../shared/divider/divider.component";

@Component({
  selector: 'app-mods-home',
  imports: [ModalComponent, DividerComponent],
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {

}
