import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applogin',
  templateUrl: './applogin.component.html',
  styleUrls: ['./applogin.component.css']
})
export class ApploginComponent implements OnInit {

  constructor(private route: Router) {}
  
  ngOnInit(): void {
    
  }


  public clickLogin(): void {
    this.route.navigate(['/home'])
  }

}
