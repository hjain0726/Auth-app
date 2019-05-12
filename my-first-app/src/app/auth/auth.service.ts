import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class AuthService {
    msg = new Subject();
    path = "http://localhost:3000/auth";
    constructor(private router: Router, private http: HttpClient) { }
    signupUser(email: string, password: string) {
        var obj = {
            email: email,
            password: password
        }
        this.http.post(this.path + "/signup", obj).subscribe((res) => {
            var token = res['token'];
            this.msg.next(res['msg']);
            if (res['msg'] == "Successfully register") {
                localStorage.setItem("token", token);
                this.router.navigate(['/home']);
            }
        });
    }

    signinUser(email: string, password: string) {
        var obj = {
            email: email,
            password: password
        }
        this.http.post(this.path + "/signin", obj).subscribe((res) => {
            var token = res['token'];
            this.msg.next(res['msg']);
            if (res['msg'] == "successfully login") {
                localStorage.setItem("token", token);
                this.router.navigate(['/home']);
            }
        });
    }

    isAuthenticated() {
        return localStorage.getItem("token") != null;
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['/']);
    }
}