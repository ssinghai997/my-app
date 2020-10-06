import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle:string='Product Detail'
  product:IProduct
  errorMsg:string

  constructor(private _productService:ProductService,
    private _activatedRoute:ActivatedRoute,
    private _router:Router) { }

  ngOnInit(): void {

    let id= +this._activatedRoute.snapshot.paramMap.get('id')
    this._productService.getProduct(id)
    .subscribe(
      {
        next:product=>this.product=product,
        error:err=>this.errorMsg=<any>err
      }
    )
  }
  onBack():void{
    this._router.navigate(['/products'])
  }

}
