import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-object',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './add-object.component.html',
  styleUrl: './add-object.component.css'
})
export class AddObjectComponent {

  response: any;
  errorMsg: any;

  addObjectForm: FormGroup;
  apiUrl = 'https://api.restful-api.dev/objects'; // Replace with your API URL

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.addObjectForm = this.fb.group({
      parameter: ['', [Validators.required]] // Adding validation for the parameter
    });
  }

  onSubmit() {
    if (this.addObjectForm.valid) {
      const parameter = this.addObjectForm.value.parameter;

      this.http.post(this.apiUrl, { parameter }).subscribe(
        (response) => {
          this.response = response;
          console.log('Object added successfully', response);
          // Handle successful response here
        },
        (error) => {
          this.errorMsg = error;
          console.error('Error adding object', error);
          // Handle error here
        }
      );
    }
  }

}
