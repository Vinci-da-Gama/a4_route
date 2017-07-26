import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

    userLoggedIn: boolean = false;

    constructor() { }

    checkLoggedIn(username: string, password: string) {
        if (username && password) {
            this.userLoggedIn = true;
            console.log('13 -- login.service.ts -- this.userLoggedIn: ', this.userLoggedIn);
        }
        console.log('15 -- login.service.ts -- this.userLoggedIn: ', this.userLoggedIn);
        return this.userLoggedIn;
    }
}