import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-menu-bar',
  imports: [],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css'
})
export class MenuBar {
  private searchService = inject(SearchService);

  onOpenSearch(): void {
    this.searchService.openSearchModal();
  }

  scrollToMarvelQuotes(): void {
    const marvelQuotesElement = document.querySelector('.marvel-quotes-section');
    if (marvelQuotesElement) {
      marvelQuotesElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
