import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class UsersService {
    constructor(
        private readonly _httpClient : HttpClient
    ) {}

    getUsers() {
        return this._httpClient.get('https://jsonplaceholder.typicode.com/users');
    }
}