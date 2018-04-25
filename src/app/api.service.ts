import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    constructor(private http: Http){}
    
    messages = []
    users = []

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
        this.http.post('http://localhost:3000/register', regData).subscribe(res =>{
            
        })
    }

    loginUser(loginData) {
        this.http.post('http://localhost:3000/login', loginData).subscribe(res =>{
            console.log(res);
            localStorage.setItem('token', res.json().token)
        })
    };l
}