import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';
import { ProductRoutingModule } from './product-routing.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';





@NgModule({
  declarations: [
    ProductListComponent,
   // ConvertToSpacesPipe, 
    ProductDetailComponent,
    
  ],
  imports: [
    // CommonModule,
    // FormsModule,
   
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
