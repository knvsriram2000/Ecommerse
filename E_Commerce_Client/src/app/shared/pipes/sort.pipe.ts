import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args: string): any {
    if (args === 'high-to-low') {
      return value.sort((a: any, b: any) => {
        if (a.price > b.price) return -1;
        else if (a.price < b.price) return 1;
        else return 0;
      })
    }
    else if (args === 'low-to-high') {
      return value.sort((a: any, b: any) => {
        if (a.price > b.price) return 1;
        else if (a.price < b.price) return -1;
        else return 0;
      })
    }
    return value;
  }
}

