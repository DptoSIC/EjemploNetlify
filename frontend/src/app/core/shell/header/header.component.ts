import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: ['.logo {width: 50px;}']
})
export class HeaderComponent implements OnInit {
  logo: string = environment.logo;

  constructor() { }

  ngOnInit(): void {
  }

}
