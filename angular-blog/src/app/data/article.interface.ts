export interface Article {
  id: string;
  title: string;
  description: string;
  photoCover: string;
  category: 'filme' | 'serie' | 'analise' | 'noticia';
  publishDate: string;
}
