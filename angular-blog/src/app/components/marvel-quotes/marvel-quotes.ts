import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MarvelQuote {
  quote: string;
  character: string;
  movie?: string;
}

@Component({
  selector: 'app-marvel-quotes',
  imports: [CommonModule],
  templateUrl: './marvel-quotes.html',
  styleUrls: ['./marvel-quotes.css']
})
export class MarvelQuotes {
  marvelQuotes: MarvelQuote[] = [
    {
      quote: "Eu sou o Homem de Ferro.",
      character: "Tony Stark",
      movie: "Iron Man"
    },
    {
      quote: "Eu posso fazer isso o dia todo.",
      character: "Steve Rogers",
      movie: "Capitão América"
    },
    {
      quote: "Com grandes poderes vêm grandes responsabilidades.",
      character: "Tio Ben",
      movie: "Homem-Aranha"
    },
    {
      quote: "Às vezes você precisa correr antes de poder andar.",
      character: "Tony Stark",
      movie: "Iron Man"
    },
    {
      quote: "Eu não sou um herói. Eu sou apenas um cara de Brooklyn que é bom demais para desistir.",
      character: "Steve Rogers",
      movie: "Capitão América"
    },
    {
      quote: "A força da mente humana está em sua capacidade de mudar.",
      character: "Professor Xavier",
      movie: "X-Men"
    },
    {
      quote: "Heróis são feitos pelo caminho que escolhem, não pelos poderes que foram agraciados.",
      character: "Tony Stark",
      movie: "Iron Man 3"
    },
    {
      quote: "Não é sobre quantas vezes você cai, mas quantas vezes você se levanta.",
      character: "Steve Rogers",
      movie: "Capitão América"
    }
  ];

  currentQuoteIndex = 0;

  get currentQuote(): MarvelQuote {
    return this.marvelQuotes[this.currentQuoteIndex];
  }

  nextQuote(): void {
    this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.marvelQuotes.length;
  }

  previousQuote(): void {
    this.currentQuoteIndex = this.currentQuoteIndex === 0
      ? this.marvelQuotes.length - 1
      : this.currentQuoteIndex - 1;
  }
}
