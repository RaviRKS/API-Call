import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';


interface Category {
  name: string;
  code: string;
}

@Component({
  selector: 'app-method-selector',
  standalone: true,
  imports: [DropdownModule, ReactiveFormsModule],
  templateUrl: './method-selector.component.html',
  styleUrl: './method-selector.component.css'
})
export class MethodSelectorComponent implements OnInit {

  categories: Category[] | undefined;

  formGroup!: FormGroup;

  ngOnInit() {
    this.categories = [
      { name: 'SFC', code: 'SFC' },
      { name: 'CMMS', code: 'CMMS' },
      { name: 'OEE', code: 'OEE' }

    ];

    this.formGroup = new FormGroup({
      selectedCity: new FormControl<Category | null>(null)
    });

  }
}
