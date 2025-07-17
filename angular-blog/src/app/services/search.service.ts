import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchModalSubject = new BehaviorSubject<boolean>(false);
  public searchModal$ = this.searchModalSubject.asObservable();

  openSearchModal(): void {
    this.searchModalSubject.next(true);
  }

  closeSearchModal(): void {
    this.searchModalSubject.next(false);
  }
}
