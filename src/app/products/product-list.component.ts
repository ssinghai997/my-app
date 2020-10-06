import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {
pageTitle="Product List"
showImage:boolean=false
errorMessage
_listFilter : string;

get listFilter():string{
  return this._listFilter;
}
set listFilter(value:string){
  this._listFilter=value;
  this.filteredProducts = this.listFilter ? 
  this.performFilter(this.listFilter):
  this.products;
  
}

filteredProducts :IProduct[]
//products:any[]=[]
products:IProduct[]
  constructor(private _productService : ProductService) { 
   
    //this.listFilter ='Cart'
  }
//1st the line 36 below will be executed
  ngOnInit(): void {
    console.log(`This is a life cycle hook method of the component.....`)
  //  this.products = this._productService.getProducts()

  //subscribing to the observable

 this._productService.getProducts() 
 //3rd the subscribe method will be called
 .subscribe({
   next:data=>{
     this.products=data
     this.filteredProducts=this.products
   },
  
   error:err=>this.errorMessage=<any>err
   
 })
 //5th step of execution is the below line
 //this.filteredProducts = this.products;
    
  }

  toggleImage():void{
    this.showImage = !this.showImage
   
  }

  performFilter(filterBy:string):IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product:IProduct)=>
    product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  
onRatingClicked(message:string):void{
this.pageTitle = 'ProductList :' +message;
}
  

}
