import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { delay, map, Observable, of } from "rxjs";
import { UsersService } from "./users.service";

@Injectable({
    providedIn: 'root',
})

export class UserValidatorService implements AsyncValidator {
    constructor(
        private readonly _usersService: UsersService
    ) {}
    // Injeção de dependência

    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        if(!control.dirty) {
            return of(null);
            //of retorna um observable de sucesso
        }

        return this._usersService.getUsers().pipe(
            delay(3000),
            map((usersList) => {
                const hasUser = usersList.find((user) => user.name.toLocaleLowerCase() === control.value.trim().toLocaleLowerCase());
                // find() faz um loop na lista atrás do que for digitado
                // control vai guardar o que for digitado
                // trim() remove os espaços antes e depois digitados

                if(hasUser) {
                    return null;
                }

                return { userValidator: true };
                //userValidator retorna o validationError
            }),
        );
        // pipe() Modifica o valor final que será entregue no retorno do chamado
    }
    
}