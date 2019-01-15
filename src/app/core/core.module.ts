import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { NotifyService } from './notify.service';
import { QuoteService } from './quote.service';

@NgModule({
  providers: [AuthService, AuthGuard, NotifyService, QuoteService]
})
export class CoreModule { }
