import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
   users:any ;

   constructor(private userServices: UserService){}

ngOnInit(){
      this.userServices.getuser().subscribe((data)=> {
        this.users = data;
      });
    }

}
