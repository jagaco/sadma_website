import { Component, HostListener, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Platform } from '@ionic/angular';
import { ScreensizeService } from './services/screensize.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public folder: string;
  authenticated = false;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private authService: AuthenticationService, 
    private router: Router,
    private platform: Platform,
    private screensizeService: ScreensizeService
  ) {
      this.initializeApp();
    }

  initializeApp() {
    this.platform.ready().then(() => {
      this.screensizeService.onResize(this.platform.width());
    } )
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }

  ngOnInit() {

  }
  
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
  async login() {
    this.router.navigateByUrl('login', { replaceUrl: true });
  }
}
