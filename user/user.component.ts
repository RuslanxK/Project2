import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  sub: Subscription = new Subscription()

  @Input()
  userId : any = ''
  user: User = {
    _id: '',
    name: '',
    email: '',
    street: '',
    city: '',
    zipcode: 0,
    tasks: [],
    posts: []
  }
  
  taskData : boolean = false

  buttonType: string = ''
  displayDiv: boolean = false
  markedUser : boolean = false

  constructor(private srv: UtilsService, private router: Router) { }


  markUser() {

    this.markedUser = !this.markedUser
    
    if(this.markedUser == true) {

    this.router.navigate(["/user", this.userId])

    }

    else {

      this.router.navigate([""])
    }
  }


  submit(buttonType: string) {

    if (buttonType == 'update') {

      this.srv.updateUser(this.userId, this.user)
        .subscribe(() => {})

        window.location.reload()
        
    }

    else if(buttonType == "delete") {

       this.srv.deleteUser(this.userId)
         .subscribe(() => {})

         window.location.reload()
    }
  }


  ngOnInit(): void {

   this.sub = this.srv.getUser(this.userId)
    .subscribe((data: any) => {
      
      this.user = data
      data.tasks.forEach((task:any) => {
        
        this.taskData = task.completed
         
      })
    })
  }

  ngOnDestroy() {

    this.sub.unsubscribe
  }
}
