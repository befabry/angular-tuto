import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public length = signal(0);
  public includeLetters = signal(false);
  public includeNumbers = signal(false);
  public includeSymbols = signal(false);
  public password = signal("");

  public formValue = computed(() => {
    return {
      length: this.length(),
      includeLetters: this.includeLetters(),
      includeNumbers: this.includeNumbers(),
      includeSymbols: this.includeSymbols(),
      password: this.password(),
    }
  })

  // Create a computed Signal which derives a reactive value from an expression.
  public isDisabled =  computed(() => {
    const { length, includeLetters, includeNumbers, includeSymbols } = this.formValue();

    if(!length || length === 0) {
      return true;
    }

    if(includeLetters || includeNumbers || includeSymbols) {
      console.log("include", false)
      return false;
    }

    return true;
  });

  onSubmit() {
    const { length, includeLetters, includeNumbers, includeSymbols } = this.formValue();

    const numbers = "123456789";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let validChars = '';
    if(includeLetters) {
      validChars += letters;
    }

    if(includeNumbers) {
      validChars += numbers;
    }

    if(includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < length ; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password.update(() => generatedPassword);
  }
}

