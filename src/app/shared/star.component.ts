import { Component,
   EventEmitter, 
   Input,
    OnChanges, 
    Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
@Input() rating:number
 @Output() notify:EventEmitter<string> = new EventEmitter<string>()
starWidth:number;
  constructor() { }

 ngOnChanges():void{
   this.starWidth= this.rating * 75/5;
 }
 whenOnClick():void{
  // console.log(`The rating ${this.rating} was clicked!!`)
   this.notify.emit(`The rating ${this.rating} was clicked!!`)
 }

}
