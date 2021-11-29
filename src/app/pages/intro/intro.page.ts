
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
//import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import { Storage } from '@capacitor/storage';
 

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;

 
  value: any = null;
  
  constructor(private router: Router) { }
 
  ngOnInit() {
    
  }
 
  next() {
    this.slides.slideNext();
  }
 
  async start() {
    await Storage.set({key: INTRO_KEY, value: 'true'})
    this.router.navigateByUrl('/login', { replaceUrl:true });
  }

  set(expired: number = 1, in_value: any ) {
    //this.local.set(this.KEY, in_value, expired, 'y');
  }

  remove() {
    //this.local.remove(this.KEY);
  }

  get() {
    //this.value = this.local.get(this.KEY);
  }

}
