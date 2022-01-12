import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingLangComponent } from './components/element/loading-lang/loading-lang.component';
import { AboutComponent } from './components/pages/about/about.component';
import { CountactPageComponent } from './components/pages/countact-page/countact-page.component';
import { FaqsPagesComponent } from './components/pages/faqs-pages/faqs-pages.component';
import { HomeComponent } from './components/pages/home/home.component';
import { RequestQuationComponent } from './components/pages/request-quation/request-quation.component';
import { ServicesDetailesComponent } from './components/pages/services-detailes/services-detailes.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';


const routes: Routes = [
  { path: '',pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Serives', component: ServicesPageComponent },
  { path: 'FAQs', component: FaqsPagesComponent },
  { path: 'service-detailes', component: ServicesDetailesComponent },
  { path: 'Contact-us', component: CountactPageComponent },
  { path: 'request-quotation', component: RequestQuationComponent },
  { path: 'loadinLanguage', component: LoadingLangComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { scrollPositionRestoration :'top'},
    
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
