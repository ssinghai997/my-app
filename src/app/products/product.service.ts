import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
//@Injectable()

export class ProductService {

  products:IProduct[]
  private productUrl :string='assets/data/products/products.json'
 

  constructor(private _httpClient:HttpClient) { }

  // getProducts():IProduct[]{
  //   return this.products;
  // }


//2nd the line 26 below will be executed
  getProducts():Observable<IProduct[]>{
    console.log(this._httpClient.get<IProduct[]>(this.productUrl))
    //4th step in async operation the below will be executed
     return this._httpClient.get<IProduct[]>(this.productUrl)
     .pipe(
       tap((data)=>console.log(`All Products : ${JSON.stringify(data)}`)),
       catchError(this.handleError)
     
     )
  }
  
  getProduct(id:number):Observable<IProduct>{
    return this.getProducts()
    .pipe(
      map((products:IProduct[])=>products.find(p=>p.productId===id)),
      catchError(this.handleError)
      )
  }

  handleError(err){
    let errorMsg=''
    if(err.error instanceof Error){
      errorMsg= `An error occured : ${err.error.message}`;
     
      }
      
    else{
      errorMsg = `Server returned code : ${err.status} error message is : 
                  ${err.message}`
    }
    console.log(errorMsg)
    return throwError
  }

  
}
