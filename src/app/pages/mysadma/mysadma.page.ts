import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-mysadma',
  templateUrl: './mysadma.page.html',
  styleUrls: ['./mysadma.page.scss'],
})
export class MysadmaPage implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router, public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
  openMenu() {
    this.menuCtrl.open();
  }
 
  closeMenu() {
    this.menuCtrl.close();
  }
 
  toggleMenu() {
    this.menuCtrl.toggle();
  }


}
