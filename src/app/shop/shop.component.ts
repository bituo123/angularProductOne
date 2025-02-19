import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import 'swiper/swiper-bundle.css';
@Component({
  selector: 'app-shop',
  imports: [],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements AfterViewInit {
  imgs = ["/assets/images/a1.png", "/assets/images/a2.png"]
  swiperConfig: SwiperOptions = {
    // loop: true,
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: '.swiper-pagination',
      // bulletClass: 'custom-bullet',      // 自定义类名 
      bulletActiveClass: 'custom-active'
    },
    // 添加必要模块

    breakpoints: {
      768: { slidesPerView: 1.2 }, // 响应式配置 
      1024: { slidesPerView: 1.5 }
    },
    modules: [Autoplay, Pagination, Navigation]
  };



  categories = ['生鲜果蔬', '休闲零食', '乳品烘焙', '酒水饮料'];

  products = [
    {
      id: 1,
      image: '/assets/images/a1.png',
      name: '澳洲牛排',
      weight: '200g/份',
      price: 58.8,
      category: '生鲜果蔬'
    },
    {
      id: 1,
      image: '/assets/images/a2.png',
      name: '澳洲牛排',
      weight: '200g/份',
      price: 58.8,
      category: '生鲜果蔬'
    },
    {
      id: 1,
      image: '/assets/images/a3.png',
      name: '澳洲牛排',
      weight: '200g/份',
      price: 58.8,
      category: '生鲜果蔬'
    },
    {
      id: 1,
      image: '/assets/images/a4.png',
      name: '澳洲牛排',
      weight: '200g/份',
      price: 58.8,
      category: '生鲜果蔬'
    },
    // 更多测试数据...
  ];

  filteredProducts = this.products;

  ngAfterViewInit() {
    this.initSwiper();
  }

  private initSwiper() {
    new Swiper(this.swiperEl.nativeElement, this.swiperConfig);
  }

  addToCart(product: any) {
    console.log(' 添加商品:', product);
    // 对接购物车服务 
  }

  @ViewChild('swiperContainer') swiperEl!: ElementRef;
}
