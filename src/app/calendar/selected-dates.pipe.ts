import { Pipe, PipeTransform } from '@angular/core';
import {Day} from './calendar.component';

@Pipe({
  name: 'selectedDates',
  pure: false
})
export class SelectedDatesPipe implements PipeTransform {

  transform(items: Day[]) {
    return items.filter(item => item.isSelected === true);
  }
}
