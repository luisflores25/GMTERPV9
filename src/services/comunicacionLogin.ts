import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { User } from '../app/Models/data-login';
import { JwtResponse } from '../app/Models/jwt-response';
import{ Observable, BehaviorSubject, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ComunicacionLoginService{
    AUTH_SERVER: String = 'http://localhost:3900/api';
    public user: User;
    private token: string;
    constructor( private httpClient: HttpClient){
        
    }
    enviarMessage(user: User): User{
        this.user=user;
        return user;
    }
    register(user: any=null):Observable<JwtResponse>{
        return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`,user).pipe(tap(
            (res:JwtResponse)=>{
                if(res){
                    //guardar token
                }
            }
        ));
    }
    login(user: any=null):Observable<any>{
        return this.httpClient.post<any>(`${this.AUTH_SERVER}/login`,user).pipe(tap(
            (res:any)=>{
                if(res){
                    //guardar token
                    this.saveToken(res.accessToken, res.expiresIn);
                }
            }
        ));
    }
    verifyToken(token: any):Observable<any>{
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        return this.httpClient.get<any>(`${this.AUTH_SERVER}/auth`,{headers:headers});
    }
    logout(){
        this.token= '';
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("EXPIRES_IN");
    }

    private saveToken (token: string, expiresIn: string): void{
        localStorage.setItem("ACCESS_TOKEN",token);
        localStorage.setItem("EXPIRES_IN",expiresIn);
        this.token=token;
        }

    private getToken():string{
        if(!this.token){
            this.token = localStorage.getItem("ACCESS_TOKEN");
        }
        return this.token;
    }
}