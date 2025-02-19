import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { ExploreComponent } from './explore/explore.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AccountComponent } from './account/account.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
    title: '购物车'  // SEO优化 
  },
  { path: '', component: ShopComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'account', component: AccountComponent },

];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
