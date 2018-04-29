import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient){}
    
    messages = []
    users = []

    path = 'http://localhost:3000'
    authPath = 'http://localhost:3000/auth';

    getMessage(userId) {
        this.http.get<any>(this.path +'/posts/' + userId).subscribe(res =>{
            this.messages = res;
        })
    }


    postMessage(message) {
        this.http.post<any>(this.path +'/post', message).subscribe(res =>{
            this.messages = res
        })
    }
    getUsers() {
        this.http.get<any>(this.path +'/users').subscribe(res =>{
            this.users = res
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
        this.http.post<any>(this.authPath + '/login', loginData).subscribe(res =>{
            localStorage.setItem('token', res.token)
        })
    };l
}