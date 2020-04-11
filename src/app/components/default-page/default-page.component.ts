import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  /**
   * This method navigates user to the login page.
   */
  navigateToLogin() {
this.router.navigateByUrl('/login');
  }

}
