
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';

 
@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;
  @LocalStorage() introSeenVal: Object = {text: 'false'};
 
  KEY = 'intro_seen';
  value: any = null;
  
  constructor(private router: Router, private local: LocalStorageService) { }
 
  ngOnInit() {
    
  }
 
  next() {
    this.slides.slideNext();
  }
 
  start() {
    this.set(1,'true');
    this.router.navigateByUrl('/login', { replaceUrl:true });
  }

  set(expired: number = 1, in_value: any ) {
    this.local.set(this.KEY, in_value, expired, 'y');
  }

  remove() {
    this.local.remove(this.KEY);
  }

  get() {
    this.value = this.local.get(this.KEY);
  }

}
