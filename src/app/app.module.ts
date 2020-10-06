import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';


//import { ProductService } from './products/product.service';



@NgModule({
  declarations: [
    AppComponent,    
    // ProductListComponent,
    //  ConvertToSpacesPipe, 
    //  ProductFilterPipe, 
    //  StarComponent, 
    //  ProductDetailComponent, 
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
