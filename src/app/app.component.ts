import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[
    `
    h1{
      color:#337AB7;
    },
    .appcomponentdiv{
      padding:5px;
      margin-left:10px;
    }
    `
  ]
})
export class AppComponent {
  title = 'Product Management App';
}
