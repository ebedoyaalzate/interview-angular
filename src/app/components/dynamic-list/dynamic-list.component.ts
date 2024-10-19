import { Component, Input, OnInit } from '@angular/core';

interface ListItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.scss'],
})
export class DynamicListComponent implements OnInit {
  @Input() items: ListItem[] = [];

  filteredItems: ListItem[] = [];
  searchTerm: string = '';
  sortField: string = 'title';
  sortDirection: 'asc' | 'desc' = 'asc';

  ngOnInit(): void {
    this.filteredItems = [...this.items];
  }

  filterItems() {
    this.filteredItems = this.items.filter(
      (item) =>
        item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.sortItems();
  }

  sortItems() {
    this.filteredItems.sort((a, b) => {
      const compareA = a[this.sortField].toLowerCase();
      const compareB = b[this.sortField].toLowerCase();

      if (this.sortDirection === 'asc') {
        return compareA.localeCompare(compareB);
      } else {
        return compareB.localeCompare(compareA);
      }
    });
  }

  changeSortField(field: string) {
    if (this.sortField === field) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortDirection = 'asc';
    }
    this.sortItems();
  }
}
