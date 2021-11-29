import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {
  
  //@LocalStorage() introSeenVal: Object;

  KEY = 'intro_seen';
  value: any = null;

  constructor(private router: Router, private local: LocalStorageService){ }
  
  async canLoad(): Promise<boolean>{
    const hasSeenIntro: any = this.local.get(this.KEY);
    
    //const hasSeenIntro = await Storage.get({key: INTRO_KEY})

      if (hasSeenIntro.value === 'true') {
        console.log("has seen", hasSeenIntro.value) ;
        return true;
      } else {
        console.log("has not seen", hasSeenIntro.value);
        //this.router.navigateByUrl('/intro', { replaceUrl: true });
        return true;
      }
  }
}
