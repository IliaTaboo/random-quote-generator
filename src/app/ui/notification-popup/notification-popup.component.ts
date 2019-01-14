import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../core/notify.service';

@Component({
  selector: 'app-notification-popup',
  templateUrl: './notification-popup.component.html',
  styleUrls: ['./notification-popup.component.scss']
})
export class NotificationPopupComponent implements OnInit {

  constructor(public notify: NotifyService) { }

  ngOnInit() {
  }

}
