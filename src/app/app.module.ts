import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { WorkersComponent } from './components/element/workers/workers.component';
import { ServicesComponent } from './components/element/services/services.component';
import { SliderComponent } from './components/element/slider/slider.component';
import { HeaderComponent } from './components/element/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/element/footer/footer.component';
import { HeaderHomeComponent } from './components/element/header-home/header-home.component';
import { ProvideHomeComponent } from './components/element/provide-home/provide-home.component';
import { AskedHomeComponent } from './components/element/asked-home/asked-home.component';
import { ClientsComponent } from './components/element/clients/clients.component';
import { CustomerComponent } from './components/element/customer/customer.component';
import { DownloadComponent } from './components/element/download/download.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServicesDetailesComponent } from './components/pages/services-detailes/services-detailes.component';
import { FaqsPagesComponent } from './components/pages/faqs-pages/faqs-pages.component';
import { CountactPageComponent } from './components/pages/countact-page/countact-page.component';
import { RequestQuationComponent } from './components/pages/request-quation/request-quation.component';
import { LoadingPageComponent } from './components/element/loading-page/loading-page.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoadingLangComponent } from './components/element/loading-lang/loading-lang.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    ServicesComponent,
    SliderComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    HeaderHomeComponent,
    ProvideHomeComponent,
    AskedHomeComponent,
    ClientsComponent,
    CustomerComponent,
    DownloadComponent,
    ServicesPageComponent,
    ServicesDetailesComponent,
    FaqsPagesComponent,
    CountactPageComponent,
    RequestQuationComponent,
    LoadingPageComponent,
    LoadingLangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
    HttpClientModule,
    ReactiveFormsModule ,
    SlickCarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
