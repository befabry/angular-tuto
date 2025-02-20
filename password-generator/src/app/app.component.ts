import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public form = signal({
    length: 0,
    includeLetters: false,
    includeNumbers: false,
    includeSymbols: false,
    password: "",
  })

  onSubmit() {
    const numbers = "123456789";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let validChars = '';
    if(this.form().includeLetters) {
      validChars += letters;
    }

    if(this.form().includeNumbers) {
      validChars += numbers;
    }

    if(this.form().includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.form().length ; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.form().password = generatedPassword;
  }
}
