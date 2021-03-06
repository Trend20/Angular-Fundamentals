import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/event-list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent, EventsListComponent],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
