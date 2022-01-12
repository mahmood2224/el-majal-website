import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralResponce } from 'src/app/modale/contact';
import { FAQsResponce } from 'src/app/modale/FAQs';
import { HomeResponce } from 'src/app/modale/home';
import { ServicesResponce } from 'src/app/modale/services';
import { SingleServicesResponce } from 'src/app/modale/singleServices';
import { SiteInfoResponce } from 'src/app/modale/siteInfo';
import { ServicesConstants } from '../ServicesConstants';

@Injectable({
  providedIn: 'root'
})
export class AllApisService {
  lang :string;
  constructor(private http: HttpClient) { }

  public getFAQs():  Observable<FAQsResponce>{
    this.lang = localStorage.getItem("lang") ??"ar";
    let headers: HttpHeaders = new HttpHeaders()
    .set("lang" , this.lang)
    return this.http.get<FAQsResponce>(ServicesConstants.BASE_URL+ 'General/FAQ' ,{headers});
  }

  public getAllServices(page =null):  Observable<ServicesResponce>{
    this.lang = localStorage.getItem("lang") ??"ar";
    let headers: HttpHeaders = new HttpHeaders()
    .set("lang" , this.lang);
    return this.http.get<ServicesResponce>(ServicesConstants.BASE_URL+ 'General/services'+ (page == null ? "" : "?page="+page) ,{headers});
  }

  public getSingleServices(services_id):  Observable<SingleServicesResponce>{
    this.lang = localStorage.getItem("lang") ??"ar";
    let headers: HttpHeaders = new HttpHeaders()
    .set("lang" , this.lang)
    return this.http.get<SingleServicesResponce>(ServicesConstants.BASE_URL+ 'General/singleService?service_id='
    +services_id ,{headers});
  }

  public getSiteInfo():  Observable<SiteInfoResponce>{
    this.lang = localStorage.getItem("lang") ??"ar";
    let headers: HttpHeaders = new HttpHeaders()
    .set("lang" , this.lang);
    return this.http.get<SiteInfoResponce>(ServicesConstants.BASE_URL+ 'General/siteInfo' ,{headers});
  }

  public getHome():  Observable<HomeResponce>{
    this.lang = localStorage.getItem("lang") ??"ar";
    let headers: HttpHeaders = new HttpHeaders()
    .set("lang" , this.lang);
    return this.http.get<HomeResponce>(ServicesConstants.BASE_URL+ 'General/home' ,{headers});
  }

  public SendMessage(data):  Observable<GeneralResponce>{
    this.lang = localStorage.getItem("lang") ??"ar";
    let headers: HttpHeaders = new HttpHeaders()
    .set("lang" , this.lang)
    return this.http.post<GeneralResponce>(ServicesConstants.BASE_URL+ 'General/sendMessage' ,data,{headers});
  }
}
