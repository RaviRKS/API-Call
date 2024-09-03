import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './MyComponents/nav-bar/nav-bar.component';
import { LeftsideBarComponent } from './MyComponents/leftside-bar/leftside-bar.component';
import { RightsideBarComponent } from "./MyComponents/rightside-bar/rightside-bar.component";
import { ContentComponent } from './MyComponents/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, LeftsideBarComponent, RightsideBarComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AutomateOEE';
}
