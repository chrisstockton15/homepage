import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  active = 1;

  constructor() { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById("home").scrollIntoView({behavior: "smooth"});
  }

  toPortfolio(){
    document.getElementById("portfolio").scrollIntoView({behavior: "smooth"});
  }

  toAboutMe(){
    document.getElementById("about-me").scrollIntoView({behavior: "smooth"});
  }

  toService(){
    document.getElementById("service").scrollIntoView({behavior: "smooth"});
  }

  toNews(){
    document.getElementById("news").scrollIntoView({behavior: "smooth"});
  }

}
