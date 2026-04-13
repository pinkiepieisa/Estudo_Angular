import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserResponse } from "../interfaces/user-response.interface";
import { UsersListResponse } from "../types/users-list-response.type";

@Injectable({
    providedIn:'root',
})

export class UserService{
    constructor(
        private readonly _http: HttpClient
    ) {}

    //Endpoints
    getUsers(): Observable<UsersListResponse> {
        return this._http.get<UsersListResponse>('https://jsonplaceholder.typicode.com/users');
        //Pega todos os usuários
    }

    getUserById(userId: number): Observable<IUserResponse> {
        return this._http.get<IUserResponse>(`https://jsonplaceholder.typicode.com/users/${userId}`);
        //Pega o usuário por meio do id
    }

    // 

    getUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz"
                });
            }, 3000);
        })
    }
}