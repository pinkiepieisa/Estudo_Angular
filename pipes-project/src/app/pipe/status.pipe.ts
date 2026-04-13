import { Pipe, PipeTransform } from '@angular/core';
import { UserStatusEnum } from '../app.component';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(status: number): string {
    // if(status === UserStatusEnum.ATIVO) {
    //   return 'Ativo';
    // } else if(status === UserStatusEnum.INATIVO) {
    //   return 'Inativo';
    // } else {
    //   return 'Inválido';
    // }

    const userStatusDescription: { [key: number]: string } = {
      [UserStatusEnum.ATIVO]: 'Ativo',
      [UserStatusEnum.INATIVO]: 'Inativo',
    }

    return userStatusDescription[status] ? userStatusDescription[status] : 'Inválido';
  }

  // transform(o que ele vai receber: tipagem do que ele vai receber): tipagem do retorno

}
