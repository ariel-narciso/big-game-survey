import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { RecordsComponent } from './pages/records/records.component';
import { HomeComponent } from './pages/home/home.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { MostVotedComponent } from './components/most-voted/most-voted.component';
import { PlatformComponent } from './components/platform/platform.component';
import { ButtonNavigateComponent } from './components/button-navigate/button-navigate.component';
import { GenreComponent } from './components/genre/genre.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    HomeComponent,
    ChartsComponent,
    MostVotedComponent,
    PlatformComponent,
    ButtonNavigateComponent,
    GenreComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
