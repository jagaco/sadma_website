import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

export const INTRO_KEY = 'intro_seen';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanLoad {
  
  //@LocalStorage() introSeenVal: Object;

  
  value: any = null;

  constructor(private router: Router){ }
  
  async canLoad(): Promise<boolean>{
    const hasSeenIntro = await Storage.get({key: INTRO_KEY});
    
    //const hasSeenIntro = await Storage.get({key: INTRO_KEY})

      if (hasSeenIntro.value === 'true') {
        console.log("has seen", hasSeenIntro.value) ;
        return true;
      } else {
        console.log("has not seen", hasSeenIntro.value);
        this.router.navigateByUrl('/intro', { replaceUrl: true });
        return true;
      }
  }
}
