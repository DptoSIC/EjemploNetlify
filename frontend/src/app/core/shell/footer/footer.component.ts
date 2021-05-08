import { Component, OnInit } from '@angular/core';
import { faBomb } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
  ]
})
export class FooterComponent implements OnInit {
  url: string = environment.urlDptoSIC;
  iconoGit = faBomb;

  constructor() { }

  ngOnInit(): void {
  }

}
