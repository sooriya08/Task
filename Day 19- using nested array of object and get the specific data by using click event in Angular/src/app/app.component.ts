import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-form';



  calenderOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: 'event 1', date: '2020-06-18' },
      { title: 'event 2', date: '2020-06-19' }
    ]
  };

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  toggleweekends() {

  }


}
