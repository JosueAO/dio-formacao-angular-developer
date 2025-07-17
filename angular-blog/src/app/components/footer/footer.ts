import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  currentYear = new Date().getFullYear();

  showNotImplemented(event: Event, feature: string): void {
    event.preventDefault();
    alert(`${feature}: Este recurso ainda não foi implementado`);
  }
}
