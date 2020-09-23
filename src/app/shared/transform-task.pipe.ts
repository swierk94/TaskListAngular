import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform-task'
})
export class TransformTaskPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
