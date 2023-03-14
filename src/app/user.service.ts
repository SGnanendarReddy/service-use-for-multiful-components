import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

    getuser(){

      return[
          {id:1,name:"anusha",gendar:"female",phone:9666252555,dob:("15/03/1995")},
          {id:2,name:"esha",gendar:"female",phone:9123456789,dob:("16/05/1998")},
          {id:3,name:"venkat",gendar:"male",phone:98522456852,dob:("18/07/1999")},
          {id:4,name:"aruna",gendar:"female",phone:9865277555,dob:("12/09/2000")},
          {id:5,name:"prema",gendar:"female",phone:9252555555,dob:("19/10/2021")},
          ]


    }


}
