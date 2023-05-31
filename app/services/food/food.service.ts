import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() {

  }
  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;

  }
  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 14 },
      { name: 'Pizza', count: 14 },
      { name: 'Lunch', count: 14 },
      { name: 'SlowFood', count: 14 },
      { name: 'hamburger', count: 14 },
      { name: 'Fry', count: 14 },
      { name: 'Soup', count: 14 }];

  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        cookTime: '10-20',
        price: 160,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'pizza ',
        cookTime: '10-20',
        price: 180,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/food2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 3,
        name: 'Keema Biryani',
        cookTime: '10-20',
        price: 250,
        favorite: false,
        origins: ['Mysore'],
        star: 4.5,
        imageUrl: '/assets/food3.jpg',
        tags: ['FastFood', 'Pizza'],
      },
      {
        id: 4,
        name: 'Lemon Chicken',
        cookTime: '10-20',
        price: 100,
        favorite: false,
        origins: ['Hong Kong'],
        star: 4.5,
        imageUrl: '/assets/food4.jpg',
        tags: ['Lunch'],
      },
      {
        id: 5,
        name: 'Chettinad Fish Fry',
        cookTime: '10-20',
        price: 150,
        favorite: false,
        origins: ['Belgium'],
        star: 4.5,
        imageUrl: '/assets/food5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 6,
        name: 'Roti',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['North India'],
        star: 4.5,
        imageUrl: '/assets/food6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Pulao Rice',
        cookTime: '10-20',
        price: 200,
        favorite: false,
        origins: ['Central Asia'],
        star: 4.5,
        imageUrl: '/assets/food7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Chicken curry',
        cookTime: '10-20',
        price: 120,
        favorite: false,
        origins: ['Kerala'],
        star: 4.5,
        imageUrl: '/assets/food8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 9,
        name: 'chicken fry',
        cookTime: '10-20',
        price: 160,
        favorite: false,
        origins: ['South India'],
        star: 4.5,
        imageUrl: '/assets/food9.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      }

    ]
  }
}
