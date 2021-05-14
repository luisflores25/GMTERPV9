import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment.prod';
import { User } from '../Models/data-login';
import * as publicIp from 'public-ip';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    ipAddress: string;
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        (async () => {
            publicIp.v4().then((ip) => 
                this.ipAddress = ip
            );
        })();
        this.userSubject = new BehaviorSubject<User>(null);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(empresa: string, usuario: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/authenticate`, { empresa, usuario, password, ipAddress: this.ipAddress}, { withCredentials: true })
            .pipe(map(user => {
                console.log(user.token);
                this.userSubject.next(user);
                this.startRefreshTokenTimer();
                console.log(user);
                return user;
            }));
    }

    logout() {
        this.http.post<any>(`${environment.apiUrl}/revoke-token`, {}, { withCredentials: true }).subscribe();
        this.stopRefreshTokenTimer();
        this.userSubject.next(null);
        this.router.navigate(['/']);
    }

    refreshToken() {
        return this.http.post<any>(`${environment.apiUrl}/refresh-token`, {}, { withCredentials: true })
            .pipe(map((user) => {
                this.userSubject.next(user);
                this.startRefreshTokenTimer();
                return user;
            }));
    }

    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(this.userValue.jwtToken.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}