import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DepartmentService } from '../../MyService/department.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  departmentForm: FormGroup;
  response: any;
  errorMsg: any;

  constructor(private fb: FormBuilder, private departmentService: DepartmentService) {
    // Initialize form group with validators
    this.departmentForm = this.fb.group({
      param1: ['', Validators.required],
      param2: ['', Validators.required]
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.departmentForm.valid) {
      const { param1, param2 } = this.departmentForm.value;
      // Make the API call using the service
      this.departmentService.getDepartmentData(param1, param2).subscribe({
        next: (data) => {
          this.response = data;
        },
        error: (error) => {
          this.errorMsg = "Got error in connection to server. Check again with right parameters";
          console.error('Error fetching data:', error);
        }
      });
    }
  }

}
