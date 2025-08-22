import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventToString'
})
export class EventToStringPipe implements PipeTransform {

  transform(event: any): string {

    return JSON.stringify(event, null, 2);
  }

}
