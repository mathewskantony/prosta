import { Component, OnInit } from '@angular/core';
import { DatePipe} from '@angular/common';
import {convertActionBinding} from "@angular/compiler/src/compiler_util/expression_converter";
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  calendar = { calendarMonthYear : '', calendarMonth: 0, calendarYear: 0 , numberOfDaysInMonth : 0,
                days : [], class: {header: 'white', cell: 'white', selected: 'green'}};
  constructor() { }

  ngOnInit() {
    this.intCalendar();
  }
  deSelect(day) {
    console.log('Deselect')
    day.date = '';
    day.isSelected = false;
  }
  selectDate(day) {
    const tmp = new Date(this.monthName[this.calendar.calendarMonth] + ' ' + day.dayOfMonth + ' ' + this.calendar.calendarYear);
    const datePipe = new DatePipe('en-US');
    day.date = datePipe.transform(tmp, 'dd/MM/yyyy');
    day.isSelected = true;
  }
  intCalendar() {
    const d = new Date();
    const month  = d.getMonth();   // 0-11
    this.calendar.calendarMonth = month;
    const year = d.getFullYear(); // 2014
    this.calendar.calendarYear = year;
    const first_date = this.monthName[month] + ' ' + 1 + ' ' + year;
    // September 1 2014
    const tmp = new Date(first_date).toDateString();
    // Mon Sep 01 2014 ...
    const first_day = tmp.substring(0, 3);    // Mon
    const day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day_no = day_name.indexOf(first_day);   // 1
    this.calendar.numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();    // 30
    // Tue Sep 30 2014 ...
    this.calendar.calendarMonthYear = this.monthName[month] + ' ' + year;
   // document.getElementById('calendar-dates').appendChild(calendar);
    this.pushDaysOfMonth(day_no, this.calendar.numberOfDaysInMonth);
  }
  pushDaysOfMonth(day_no, days) {
    let c;
    for (c = 0; c <= 6; c++) {
      if (c === day_no) {
        break;
      }
      this.calendar.days.push({date: '', dayOfMonth: '', isSelected: false});
    }

    let count = 1;
    for ( ; c <= 6; c++) {
      this.calendar.days.push({date: '', dayOfMonth: count, isSelected: false});
      count++;
    }

    for (let r = 3; r <= 7; r++) {
      for (let c1 = 0; c1 <= 6; c1++) {
        if (count > days) {
          this.calendar.days.push({date: '', dayOfMonth: count, isSelected: false});
          return ;
        }
        this.calendar.days.push({date: '', dayOfMonth: count, isSelected: false});
        count++;
      }
    }
  }
}
