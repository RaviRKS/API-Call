import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './MyComponents/nav-bar/nav-bar.component';
import { MethodSelectorComponent } from './MyComponents/method-selector/method-selector.component';
import { CatSelectorComponent } from "./MyComponents/cat-selector/cat-selector.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, MethodSelectorComponent, CatSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AutomateOEE';
}
