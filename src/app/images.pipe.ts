import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if(!value){
      return 'nm.jpg';

    }
    else
      return value;
  }

}
