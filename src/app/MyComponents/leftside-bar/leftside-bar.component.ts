import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-leftside-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ScrollPanelModule],
  templateUrl: './leftside-bar.component.html',
  styleUrl: './leftside-bar.component.css'
})
export class LeftsideBarComponent {

}
