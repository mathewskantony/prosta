import { Component, OnInit } from '@angular/core';
import { DatePipe} from '@angular/common';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  availability = [];
  dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  calendar = { calendarMonthYear : '', calendarMonth: 0, calendarYear: 0 , numberOfDaysInMonth : 0, today : {day: 0, month: 0, year: 0},
                days : [], class: {header: 'white', cell: 'white', selected: 'green', disabled: 'lightgray'}};
  constructor() { }

  ngOnInit() {
    this.intCalendar(new Date());
  }

  selectDate(day) {
    if (!day.isSelected) {
      console.log('Select')
      const tmp = new Date(this.monthName[this.calendar.calendarMonth] + ' ' + day.dayOfMonth + ' ' + this.calendar.calendarYear);
      const datePipe = new DatePipe('en-US');
      day.date = datePipe.transform(tmp, 'dd/MM/yyyy');
      day.isSelected = true;
      // this.availability[this.calendar.calendarMonthYear].push(day.dayOfMonth);
    } else {
      console.log('Deselect')
      day.date = '';
      day.isSelected = false;
      // this.availability[this.calendar.calendarMonthYear][this.availability[this.calendar.calendarMonthYear].indexOf(day.dayOfMonth)] = '';
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
    const today = new Date();
    this.calendar.today = { day : today.getDate(), month: today.getMonth(), year: today.getFullYear()};
    const calendarMonthYear = this.calendar.calendarMonthYear;
    // this.availability.push({calendarMonthYear: []});
    console.log(this.availability)
    this.pushDaysOfMonth(day_no);

  }
  pushDaysOfMonth(day_no) {
    let c;
    for (c = 0; c <= 6; c++) {
      if (c === day_no) {
        break;
      }
      this.calendar.days.push({date: '', dayOfMonth: '', isSelected: false, isDisabled : false});
    }

    let count = 1;
    for ( ; c <= 6; c++) {
      this.calendar.days.push({date: '', dayOfMonth: count,
        isSelected: false,
        isDisabled : this.calendar.calendarYear < this.calendar.today.year ? true :
            this.calendar.calendarMonth < this.calendar.today.month ? true :
              this.calendar.calendarMonth === this.calendar.today.month && count < this.calendar.today.day ? true : false });
      count++;
    }
    console.log(count + this.calendar.calendarMonth + this.calendar.calendarYear);
    for (let r = 3; r <= 7; r++) {
      for (let c1 = 0; c1 <= 6; c1++) {
        if (count <= this.calendar.numberOfDaysInMonth) {
          this.calendar.days.push({date: '', dayOfMonth: count,
            isSelected: false,
            isDisabled : this.calendar.calendarYear < this.calendar.today.year ? true :
              this.calendar.calendarMonth < this.calendar.today.month ? true :
                this.calendar.calendarMonth === this.calendar.today.month && count < this.calendar.today.day ? true : false});
        }
        count++;
      }
    }
  }
}
