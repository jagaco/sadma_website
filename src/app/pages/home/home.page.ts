import { Component, HostListener, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Platform } from '@ionic/angular';
import { ScreensizeService } from './../../services/screensize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  public folder: string;
  authenticated = false;
  constructor(
    private activatedRoute: ActivatedRoute, 
    private authService: AuthenticationService, 
    private router: Router,
    private platform: Platform,
    private screensizeService: ScreensizeService
    ) {  this.initializeApp(); }

  initializeApp() {
    this.platform.ready().then(() => {
      this.screensizeService.onResize(this.platform.width());
    })
  }
  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }
  ngOnInit() {
    this.authService.getUserSubject().subscribe(_ => {
      if(this.authService.isAuthenticated){
        this.authenticated = true;
      }
      else
      {
        this.authenticated = false;
      }
    });
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
 
 
  public mainlinks = [
    { title: 'Inicio', url: '/home/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/home/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/home/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/home/Archived', icon: 'archive' },
    { title: 'Trash', url: '/home/Trash', icon: 'trash' },
    { title: 'Spam', url: '/home/Spam', icon: 'warning' },
  ];
  public appPages = [
    { title: 'Inicio', url: '/home/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/home/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/home/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/home/Archived', icon: 'archive' },
    { title: 'Trash', url: '/home/Trash', icon: 'trash' },
    { title: 'Spam', url: '/home/Spam', icon: 'warning' },
  ];
  
  public headerLinksStart = [
    { title: 'Inicio', url: '/home/Inbox', icon: 'mail' },
    { title: 'Conocenos', url: '/home/Outbox', icon: 'paper-plane' },
    { title: 'Que hacer en caso de ... ?', url: '/home/Favorites', icon: 'heart' }
  ]
  public footersLinksStart = [
    { title: 'contacto', url: '/home/Inbox', icon: 'mail' },
    { title: 'Aviso de privasidad', url: '/home/Outbox', icon: 'paper-plane' },
    { title: 'términos y condiciones', url: '/home/Favorites', icon: 'heart' }
  ];
  public footersLinksEnd = [
    { title: '3313310077', url: '/home/Inbox', icon: 'logo-whatsapp' },
    { title: 'SADMA ONLINE', url: '/home/Outbox', icon: 'logo-facebook' },
    { title: 'Instagram', url: '/home/Favorites', icon: 'logo-instagram' },
    { title: 'Mapa de sitio', url: '/home/Outbox', icon: 'map' }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
  async login() {
    this.router.navigateByUrl('login', { replaceUrl: true });
  }
}
