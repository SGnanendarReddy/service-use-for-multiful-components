import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  user : any[]=[]
  
  
 constructor(private userservice: UserService){}

 ngOnInit(){
   
   this.user = this.userservice.getuser()
 }
 


}
