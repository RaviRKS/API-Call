import { Component } from '@angular/core';
import { LeftsideBarComponent } from '../leftside-bar/leftside-bar.component';
import { RightsideBarComponent } from '../rightside-bar/rightside-bar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [LeftsideBarComponent, RightsideBarComponent, RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
