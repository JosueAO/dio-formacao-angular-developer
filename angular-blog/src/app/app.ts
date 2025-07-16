import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SmallCard } from "./components/small-card/small-card";
import { BigCard } from "./components/big-card/big-card";
import { MenuTitle } from "./components/menu-title/menu-title";
import { Home } from "./pages/home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angular-blog';
}
