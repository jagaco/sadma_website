import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'start'
})
export class StartPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
