import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from './utils';

@Pipe({ name: 'reduceFloat', pure: true })
export class ReduceFloatPipe implements PipeTransform {
  constructor() {
  }

  transform(value: number, precision: number) {
    if (!value || !Utils.isNumeric(value)) {
      return value;
    }
    return value.toFixed(precision);
  }
}
