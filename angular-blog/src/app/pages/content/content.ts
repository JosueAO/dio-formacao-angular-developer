import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { dataFake } from '../../data/dataFake';
import { Article } from '../../data/article.interface';

@Component({
  selector: 'app-content',
  imports: [RouterLink],
  templateUrl: './content.html',
  styleUrl: './content.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "";
  contentTitle: string = "";
  contentDescription: string = "";
  private id: string | null = "0";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      this.setValuesToComponent(this.id);
    });
  }

  setValuesToComponent(id: string | null): void {
    const result: Article | undefined = dataFake.find(article => article.id === id);

    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photoCover;
    }
  }
}
