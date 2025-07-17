import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export interface FilterCriteria {
  searchTerm: string;
  category: string;
}

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-filter.html',
  styleUrls: ['./search-filter.css']
})
export class SearchFilterComponent {
  @Input() isOpen: boolean = false;
  @Output() filterChange = new EventEmitter<FilterCriteria>();
  @Output() closeModal = new EventEmitter<void>();

  searchTerm: string = '';
  selectedCategory: string = 'todos';

  categories = [
    { value: 'todos', label: 'Todos', icon: '📚' },
    { value: 'filme', label: 'Filmes', icon: '🎬' },
    { value: 'serie', label: 'Séries', icon: '📺' },
    { value: 'analise', label: 'Análises', icon: '🔍' },
    { value: 'noticia', label: 'Notícias', icon: '📰' }
  ];

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.emitFilter();
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.emitFilter();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = 'todos';
    this.emitFilter();
  }

  onCloseModal(): void {
    this.closeModal.emit();
  }

  onBackdropClick(event: Event): void {
    if (event.target === event.currentTarget) {
      this.onCloseModal();
    }
  }

  getCategoryLabel(): string {
    const category = this.categories.find(cat => cat.value === this.selectedCategory);
    return category ? category.label : 'Todos';
  }

  private emitFilter(): void {
    this.filterChange.emit({
      searchTerm: this.searchTerm,
      category: this.selectedCategory
    });
  }
}
