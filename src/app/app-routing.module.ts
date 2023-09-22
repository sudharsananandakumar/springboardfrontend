import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApploginComponent } from './applogin/applogin.component';
import { ApphomeComponent } from './apphome/apphome.component';
import { NavgdahboardComponent } from './navgdahboard/navgdahboard.component';
import { CaseregnComponent } from './caseregn/caseregn.component';

const routes: Routes = [
  {path: 'login', component:ApploginComponent},
  {path: '', component:ApploginComponent},
  {path: 'home', component:ApphomeComponent},
  {path: 'dashboard', component:NavgdahboardComponent},
  {path: 'register', component:CaseregnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
