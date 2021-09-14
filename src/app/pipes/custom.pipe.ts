import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let nameString = ' ';
       if(value instanceof Array){
         value.forEach(element => {
            nameString = nameString + element;
         });
          return nameString+args[0]+args[1];
        }
        return null;
      }
    
    }
