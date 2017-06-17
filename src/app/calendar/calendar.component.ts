import { Component, OnInit } from '@angular/core';
import { DatePipe} from '@angular/common';
import {isUndefined} from "util";
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  availability = {};
  dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  calendar = { calendarMonthYear : '', calendarMonth: 0, calendarYear: 0 , numberOfDaysInMonth : 0, today : new Date(),
                days : [], class: {header: 'white', cell: 'white', selected: 'green', disabled: 'lightgray'}};
  shifts = [{type : 'Day', value: 'Y'}, {type: 'Night', value: 'N'}];
  timings = [{type : 'Full', value: 'Y'}, {type: 'Half', value: 'N'}];
  sessions = [{type : 'AM', value: 'Y'}, {type: 'PM', value: 'N'}];
  constructor() { }
  ngOnInit() {
    this.intCalendar(new Date());
  }

  selectDate(day) {
    if (day.dayOfMonth !== 0) {
      if (!day.isSelected) {
        console.log('Select')
        day.isSelected = true;
        day.isDayShift = 'Y';
        day.isFullDay = 'Y';
        this.availability[this.calendar.calendarMonthYear][day.date] = day;
      }
    }
  }
  deleteDay(day) {
    console.log('Delete day')
    day.isSelected = false;
    this.availability[this.calendar.calendarMonthYear][day.date] = null;
    day.isFullDay = 'Y';
    day.isDayShift = '';
    day.isAM = '';
  }
  onShiftChange(day) {
    console.log('shift changes')
    day.isFullDay = 'Y';
    day.isAM = '';
  }
  onTimingsChange(day) {
    if (day.isFullDay === 'Y') {
      day.isAM = '';
    } else {
      day.isAM = 'Y';
    }
  }
  previousMonth() {
    const day = new Date();
    day.setDate(1);
    day.setMonth(this.calendar.calendarMonth - 1);
    if (this.calendar.calendarMonth === 0) {
      day.setFullYear(this.calendar.calendarYear - 1);
    } else {
      day.setFullYear(this.calendar.calendarYear);
    }
    this.intCalendar(day);
  }
  nextMonth() {
    const day = new Date();
    day.setDate(1);
    day.setMonth(this.calendar.calendarMonth + 1);
    if (this.calendar.calendarMonth === 11) {
      day.setFullYear(this.calendar.calendarYear + 1);
    } else {
      day.setFullYear(this.calendar.calendarYear);
    }
    this.intCalendar(day);
  }
  intCalendar(date) {
    this.calendar.days = [];
    const d = date;
    const month  = d.getMonth();
    this.calendar.calendarMonth = month;
    const year = d.getFullYear();
    this.calendar.calendarYear = year;
    const first_date = this.monthName[month] + ' ' + 1 + ' ' + year;
    const tmp = new Date(first_date).toDateString();
    const first_day = tmp.substring(0, 3);
    const day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day_no = day_name.indexOf(first_day);
    this.calendar.numberOfDaysInMonth = new Date(year, month + 1, 0).getDate();
    this.calendar.calendarMonthYear = this.monthName[month] + ' ' + year;
    if (!this.availability[this.calendar.calendarMonthYear]) {
      this.availability[this.calendar.calendarMonthYear] = {};
    }
    console.log(this.availability)
    this.pushDaysOfMonth(day_no);

  }
  pushDaysOfMonth(day_no) {
    let c;
    for (c = 0; c <= 6; c++) {
      if (c === day_no) {
        break;
      }
      this.calendar.days.push({date: '', dayOfMonth: 0,
        isSelected: false ,
        isDisabled : false,
        isFullDay : 'Y', isDayShift: '', isAM: ''});
    }
    const datePipe = new DatePipe('en-US');
    const todayInMilli = this.calendar.today.getTime();
    let count = 1;
    for ( ; c <= 6; c++) {
      this.generateDay(count, todayInMilli, datePipe);
      count++;
    }
    for (let r = 3; r <= 7; r++) {
      for (let c1 = 0; c1 <= 6; c1++) {
        if (count <= this.calendar.numberOfDaysInMonth) {
          this.generateDay(count, todayInMilli, datePipe);
        }
        count++;
      }
    }
  }
  generateDay(count: number, todayInMilli: number , datePipe: DatePipe) {
    const tmp = new Date(this.monthName[this.calendar.calendarMonth] + ' ' + count + ' ' + this.calendar.calendarYear);
    const dayString = datePipe.transform(tmp, 'dd/MM/yyyy');
    let day = new Day();
    if (this.availability [this.calendar.calendarMonthYear][dayString]) {
      day = this.availability[this.calendar.calendarMonthYear][dayString];
    } else {
      day = {
        date: dayString, dayOfMonth: count,
        isSelected: false,
        isDisabled: false,
        isFullDay: 'Y', isDayShift: '', isAM: ''
      };
    }
    day.isDisabled = todayInMilli > tmp.getTime();
    this.calendar.days.push(day);
  }
}
export class Day {
date: string;
dayOfMonth: number;
isSelected: boolean;
isDisabled: boolean;
isFullDay: string;
isDayShift: string;
isAM: string;
}
