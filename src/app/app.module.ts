import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponet } from './server/server.componet';
import { from } from 'rxjs';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './successAlert/success.component';
import { WarningAlertComponent } from './warningAlert/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponet,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
