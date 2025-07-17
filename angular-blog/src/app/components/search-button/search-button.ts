import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-button.html',
  styleUrls: ['./search-button.css']
})
export class SearchButtonComponent {
  @Output() openSearch = new EventEmitter<void>();

  onSearchClick(): void {
    this.openSearch.emit();
  }
}
