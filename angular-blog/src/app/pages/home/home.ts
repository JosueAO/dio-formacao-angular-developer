import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { MenuTitle } from "../../components/menu-title/menu-title";
import { BigCard } from "../../components/big-card/big-card";
import { SmallCard } from "../../components/small-card/small-card";
import { SearchFilterComponent, FilterCriteria } from "../../components/search-filter/search-filter";
import { BackToTop } from "../../components/back-to-top/back-to-top";
import { Footer } from "../../components/footer/footer";
import { MarvelQuotes } from "../../components/marvel-quotes/marvel-quotes";
import { SearchService } from "../../services/search.service";
import { dataFake } from '../../data/dataFake';
import { Article } from '../../data/article.interface';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MenuTitle, BigCard, SmallCard, SearchFilterComponent, BackToTop, Footer, MarvelQuotes],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {
  private searchService = inject(SearchService);
  private searchSubscription?: Subscription;
  articles: Article[] = dataFake;
  filteredArticles: Article[] = dataFake;
  isSearchModalOpen: boolean = false;
  hasActiveSearch: boolean = false;

  // Paginação
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;

  ngOnInit(): void {
    this.searchSubscription = this.searchService.searchModal$.subscribe(
      isOpen => this.isSearchModalOpen = isOpen
    );
    this.updatePagination();
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }

  clearSearch(): void {
    this.filteredArticles = this.articles;
    this.hasActiveSearch = false;
    this.currentPage = 1;
    this.updatePagination();
  }

  onCloseSearch(): void {
    this.searchService.closeSearchModal();
  }

  onFilterChange(criteria: FilterCriteria): void {
    this.filteredArticles = this.articles.filter(article => {
      const matchesSearch = criteria.searchTerm === '' ||
        article.title.toLowerCase().includes(criteria.searchTerm.toLowerCase()) ||
        article.description.toLowerCase().includes(criteria.searchTerm.toLowerCase());

      const matchesCategory = criteria.category === 'todos' ||
        article.category === criteria.category;

      return matchesSearch && matchesCategory;
    });

    this.hasActiveSearch = criteria.searchTerm !== '' || criteria.category !== 'todos';
    this.currentPage = 1;
    this.updatePagination();
  }

  // Métodos de paginação
  updatePagination(): void {
    const smallCards = this.filteredArticles.slice(1); // Excluir o primeiro artigo (Big Card)
    this.totalPages = Math.ceil(smallCards.length / this.itemsPerPage);
  }

  get paginatedSmallCards(): Article[] {
    const smallCards = this.filteredArticles.slice(1);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return smallCards.slice(startIndex, endIndex);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
