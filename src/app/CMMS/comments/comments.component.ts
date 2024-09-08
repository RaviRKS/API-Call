import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommentsService } from '../../MyService/comments.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {

  commentForm: FormGroup;
  response: any;
  errorMsg: any;

  constructor(private fb: FormBuilder, private commentsService: CommentsService) {
    // Initializing the form with a single parameter input
    this.commentForm = this.fb.group({
      commentId: [''] // Comment ID input
    });
  }

  onSubmit() {
    // Extracting the value from the form
    const commentId = this.commentForm.get('commentId')?.value;

    // Calling the service method to make the API call
    this.commentsService.getComment(commentId).subscribe({
      next: (data) => {
        this.response = data; // Storing the response
      },
      error: (error) => {
        this.errorMsg = "Got error in connection to server. Check again with right parameters";
        console.error('Error fetching comment:', error); // Error handling
      }
    });
  }

}
