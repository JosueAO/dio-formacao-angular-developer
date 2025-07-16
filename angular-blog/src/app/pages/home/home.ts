import { Component } from '@angular/core';
import { MenuTitle } from "../../components/menu-title/menu-title";
import { BigCard } from "../../components/big-card/big-card";
import { SmallCard } from "../../components/small-card/small-card";
import { dataFake } from '../../data/dataFake';
import { Article } from '../../data/article.interface';

@Component({
  selector: 'app-home',
  imports: [MenuTitle, BigCard, SmallCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  articles: Article[] = dataFake;
}
