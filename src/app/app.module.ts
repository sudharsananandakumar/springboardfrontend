import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApphomeComponent } from './apphome/apphome.component';
import { NavgdahboardComponent } from './navgdahboard/navgdahboard.component';
import { ApploginComponent } from './applogin/applogin.component';
import { CaseregnComponent } from './caseregn/caseregn.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    ApphomeComponent,
    NavgdahboardComponent,
    ApploginComponent,
    CaseregnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
    // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
