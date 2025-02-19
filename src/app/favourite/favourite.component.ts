import { Component } from '@angular/core';
@Component({
  selector: 'fa',
  imports: [],
  templateUrl: './favourite.component.html',
  styleUrl: './favourite.component.scss'
})


export class FavouriteComponent {
  cartItems = [
    {
      id: 1,
      image: '/assets/images/a2.png', 
      name: 'Premium Coffee Beans',
      weight: '1kg,',
      price: 1.99,
      quantity: 2
    },
    {
      id: 2,
      image: './assets/images/a4.png', 
      name: 'Premium Coffee Beans',
      weight: '4ps,',
      price: 2.99,
      quantity: 2
    },
    {
      id: 3,
      image: './assets/images/a1.png', 
      name: 'Premium Coffee Beans',
      weight: '12kg,',
      price: 23.99,
      quantity: 2
    },
    {
      id: 4,
      image: './assets/images/a3.png', 
      name: 'Premium Coffee Beans',
      weight: '250gm,',
      price: 245.99,
      quantity: 2
    },
    // 添加更多测试数据...
  ];

  tittle = 'Favoruite';

  removeItem(itemId: number) {
    this.cartItems  = this.cartItems.filter(item  => item.id  !== itemId);
  }

  updateQuantity(item: any, change: number) {
    item.quantity  = Math.max(1,  item.quantity  + change);
  }

  get totalPrice() {
    const total = this.cartItems.reduce((sum,  item) => sum + (item.price  * item.quantity),  0)
    return total.toFixed(2);
  }
}
