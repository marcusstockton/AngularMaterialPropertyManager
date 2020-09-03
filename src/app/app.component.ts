import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { UserDto } from './models/userDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularPropertyManagerMaterial';
  isLoggedIn: boolean;
  constructor(private authService: AuthService) { 
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  ngOnInit(): void {
  }
  
  logout(){
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
