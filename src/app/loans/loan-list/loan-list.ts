import { Component, computed, signal } from '@angular/core';
import { Loan } from '../../models/loan.model';
import { LoanService } from '../../services/loan.service';

@Component({
  imports: [],
  selector: 'app-loan-list',
  styleUrl: './loan-list.css',
  templateUrl: './loan-list.html',
})
export class LoanList {
  loans = signal<Loan[]>([]); //reactive state
  loading = signal(false); //reactive state
  error = signal<string | null>(null); //reactive state

  constructor(private loanService: LoanService) {}

  ngOnInit() {
    this.loadLoans();
  }

  loadLoans() {
    this.loading.set(true);
    this.error.set(null);

    this.loanService.getLoans().subscribe({
      next: (data) => {
        //console.log('==', data);
        this.loans.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Unable to load loans');
        this.loading.set(false);
      },
    });
  }

  searchText = signal('');

  filteredLoans = computed(() => {
    const search = this.searchText().toLowerCase().trim();

    return this.loans().filter((loan) => loan.email.toLowerCase().includes(search));
  });
}
