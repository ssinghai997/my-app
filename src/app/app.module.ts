import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailGuard } from './products/product-detail.guard';

//import { ProductService } from './products/product.service';



@NgModule({
  declarations: [
    AppComponent,    
    ProductListComponent,
     ConvertToSpacesPipe, 
     ProductFilterPipe, 
     StarComponent, ProductDetailComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'products', component:ProductListComponent},
      {path:'products/:id', component:ProductDetailComponent,canActivate:[ProductDetailGuard]},
      {path:'home', component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
