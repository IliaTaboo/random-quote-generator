import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../core/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  show = false;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.show = !this.show;
  }

  logout() {
    this.auth.signOut();
  }

}
