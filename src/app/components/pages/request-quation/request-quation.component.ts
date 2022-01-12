import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { convertToFormData } from 'src/app/Constants';
import { Setting } from 'src/app/modale/home';
import { AllApisService } from 'src/app/services/All/all-apis.service';
import * as notify from '../../../../assets/js/notification'

@Component({
  selector: 'app-request-quation',
  templateUrl: './request-quation.component.html',
  styleUrls: ['./request-quation.component.scss']
})
export class RequestQuationComponent implements OnInit {

  loadingPage = false;
  footer : Setting;
  loadingbutton = false;
  formGroup : FormGroup;
  errorMessage :string
  constructor(private api : AllApisService) { }

  ngOnInit(): void {
    this.getFooter();
    this.initFormGroup()
  }
  getFooter(){
    this.loadingPage = true;
    this.api.getHome().subscribe(res=>{
      this.footer = res.data.setting;
      this.loadingPage = false;
    })
  }
  initFormGroup(){
    this.formGroup = new FormGroup({
      name : new FormControl("" , Validators.required),
      email : new FormControl("" , Validators.required),
      phone : new FormControl("" , Validators.required),
      subject : new FormControl("" , Validators.required),
      message : new FormControl("" , Validators.required),
    });
  }
  submit(){
    this.loadingbutton = true;
    let data : FormData = convertToFormData(this.formGroup);
    this.api.SendMessage(data).subscribe(res => {
      this.loadingbutton = false;
      this.formGroup.reset();
      if(res.status === 1 )  {
        this.loadingbutton = false;
        notify.showNotification(res.message , notify.SUCCESS);
      }else{
        notify.showNotification(res.message , notify.DANGER);
        this.loadingbutton = false;
      }
    } , errorRes => {
      if(errorRes.status == 400)
      notify.showNotification(errorRes.error.message , notify.DANGER);
      else
      notify.showNotification(this.errorMessage , notify.DANGER);
      this.loadingbutton = false;
    })
  }
}
