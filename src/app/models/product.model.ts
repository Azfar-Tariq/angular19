export class Product {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };

  constructor(data: Product) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.image = data.image;
    this.category = data.category;
    this.price = data.price;
    this.rating = data.rating;
  }
}
