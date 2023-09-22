import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caseregn',
  templateUrl: './caseregn.component.html',
  styleUrls: ['./caseregn.component.css']
})
export class CaseregnComponent {
  constructor(private route: Router) {}

   ssnNo: String = ''
   fullName: String = ''
   caseDescription: String = ''
   registeredAddr: String = ''
   registeredAddr2: String = ''
   success: boolean = false

  navigateToReg():void {
    this.route.navigate(['/register'])
  }
  navigateToHome():void {
    this.route.navigate(['/home'])
  }
  navigateToLogin():void {
    this.route.navigate(['/login'])
  }

  submitCase():void {
    this.success = true
  }

  lookupData():void {
    this.fullName = "Robert Anderson"
    this.registeredAddr = "813 Bacon Ave"
    this.registeredAddr2 = "Dover, Delaware(DE), 19901"
  }

}
