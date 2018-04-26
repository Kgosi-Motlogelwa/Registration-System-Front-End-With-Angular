import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    constructor(private http: Http){}
    
    messages = []
    users = []

    path = 'http://localhost:3000/auth';

    getMessage() {
        this.http.get('http://localhost:3000/posts').subscribe(res =>{
            this.messages = res.json()
        })
    }

    getUsers() {
        this.http.get('http://localhost:3000/users').subscribe(res =>{
            this.users = res.json()
        })
    }

    getProfile(id) {
        return this.http.get('http://localhost:3000/profile/' + id)
    }



    sendUserRegistration(regData) {
        this.http.post(this.path + '/register', regData).subscribe(res =>{
            
        })
    }

    loginUser(loginData) {
        this.http.post(this.path + '/login', loginData).subscribe(res =>{
            console.log(res);
            localStorage.setItem('token', res.json().token)
        })
    };l
}