import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the GroupByPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'groupBy',
})

export class GroupByPipe implements PipeTransform {

  transform(value: Array<any>, field: string): Array<any> {
    if (value != undefined) {

      const groupedObj = value.reduce((prev, cur) => {
        if (!prev[cur[field]]) {
          prev[cur[field]] = [cur];
        } else {
          prev[cur[field]].push(cur);
        }
        return prev;
      }, {});

      return Object.keys(groupedObj).map(key => { return { key, value: groupedObj[key] } });
    }
  }
  // transform(value: Array<any>, field: string): Array<any> {
  //   if (value != undefined) {
  //     var fields = field.split('.');
  //     const groupedObj = value.reduce((prev, cur) => {
  //       if (!prev[cur[fields[0]][fields[1]]]) {
  //         prev[cur[fields[0]][fields[1]]] = [cur];
  //       } else {
  //         prev[cur[fields[0]][fields[1]]].push(cur);
  //       }
  //       return prev;
  //     }, {});

  //     return Object.keys(groupedObj).map(key => { return { key, value: groupedObj[key] } });
  //   }
  // }

}