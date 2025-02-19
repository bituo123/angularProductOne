// app.module.ts
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ShopComponent } from './shop/shop.component';
import { ExploreComponent } from './explore/explore.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app.routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    ExploreComponent,
    FavouriteComponent,
    AccountComponent,
    CartComponent
    // 其他组件...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    NzButtonModule,
    NzIconModule
    // 其他模块...
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
