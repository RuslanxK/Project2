import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient) { }
  

  getAllUsers = () => {

    return this.http.get("http://localhost:8000/api/users")
  }

  getUser = (id: any) => {

    return this.http.get("http://localhost:8000/api/users/" + id)
  }

  addUser = (obj: User) => {

    return this.http.post("http://localhost:8000/api/users" , obj)
  }

  updateUser = (id: any, obj: User) => {

    return this.http.put("http://localhost:8000/api/users/" + id , obj)
  }

  deleteUser = (id: any) => {

    return this.http.delete("http://localhost:8000/api/users/" + id)
  }


}
