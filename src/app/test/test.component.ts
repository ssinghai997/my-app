import { Component } from '@angular/core';

@Component({
    selector:'app-test',
    template:`<h2>This is Test component created 
                without CLI</h2>
              <p>Angular latest version is 10.x.x</p>
              <h3>Personal Details</h3>
              <p>Name : {{name}}</p>
              <table class="table table-striped table-bordered table-hover">
              <tr>
              <td>Name</td>
              <td>Id</td>
              </tr>
              <tr *ngFor="let p of person">
              <td>{{p.pName}}</td>
              <td>{{p.pId}}</td>
              </tr>
              </table>
              
              
              `

})

export class TestComponent{
    age:number=34
    salary:number=4355465.56
    isEmployed:boolean=true
    name:string='Test Name'
    person:any[]=[
        {pName:"Satyaprakash",pId:100 },
        {pName:"Sohbandip",pId:101 },
        {pName:"Shriya",pId:102 },
        {pName:"Shreya",pId:103 }

    ]

}