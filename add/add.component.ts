import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UtilsService } from '../utils.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  displayDiv: boolean = false

  newUser: User = {
    _id: '',
    name: '',
    email: '',
    street: '',
    city: '',
    zipcode: 0,
    tasks: [],
    posts: []
  }

  constructor(private srv: UtilsService, private router: Router) { }

 
  submit() {

   this.srv.addUser(this.newUser)
     .subscribe(() => {})
     window.location.reload()
  }


  cancel() {

    this.router.navigate([""])
  }
  

  ngOnInit(): void {


  }
}
