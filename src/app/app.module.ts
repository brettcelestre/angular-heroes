import { BrowserModule }  from '@angular/platform-browser';
import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }     from '@angular/http';

// Components
import { AppComponent }         from './app.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { DashboardComponent }   from './dashboard.component';

// Services
import { HeroService } from './hero.service';

// Routes
import { AppRoutingModule } from './app-routing.module';

// In-Memory Web Api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})


export class AppModule { }
