import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NameCardComponent } from './name-card/name-card/name-card.component';
import { ProgressBarComponent } from './ProgressBar/progress-bar/progress-bar.component';
import { RatingBarComponent } from './RatingBar/rating-bar/rating-bar.component';
import { CountdownTimerComponent } from './Countdown/countdown-timer/countdown-timer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NameCardComponent,
    ProgressBarComponent,
    RatingBarComponent,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
