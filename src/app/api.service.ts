import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    constructor(private http: Http){}
    
    messages = []
    users = []

    path = 'http://localhost:3000'
    authPath = 'http://localhost:3000/auth';

    getMessage(userId) {
        this.http.get(this.path +'/posts/' + userId).subscribe(res =>{
            this.messages = res.json()
        })
    }


    postMessage(message) {
        this.http.post(this.path +'/post', message).subscribe(res =>{
            this.messages = res.json()
        })
    }
    getUsers() {
        this.http.get(this.path +'/users').subscribe(res =>{
            this.users = res.json()
        })
    }

    getProfile(id) {
        return this.http.get(this.path +'/profile/' + id)
    }



    sendUserRegistration(regData) {
        this.http.post(this.authPath + '/register', regData).subscribe(res =>{
            
        })
    }

    loginUser(loginData) {
        this.http.post(this.authPath + '/login', loginData).subscribe(res =>{
            console.log(res);
            localStorage.setItem('token', res.json().token)
        })
    };l
}