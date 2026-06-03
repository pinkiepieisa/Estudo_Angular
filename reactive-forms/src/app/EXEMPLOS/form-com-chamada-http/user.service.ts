import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class UserService {
    getUser(): Observable<any> {
        return of({
            nome: 'Isabela',
            idade: 23,
            ativo: true,
            endereco: {
                rua: 'Rua tal',
                numero: 123,
            },
            telefone: [
                {
                    numero: 111111111111,
                    ddd: 14,
                },
                {
                    numero: 22222222222,
                    ddd: 11,
                },
            ],
        });
    }
}