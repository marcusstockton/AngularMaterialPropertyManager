import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { UserDto } from './models/userDto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularPropertyManagerMaterial';
  isLoggedIn: Observable<boolean>;
  constructor(private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
  }

  ngOnInit(): void {
  }
  
  logout(){
    this.authService.logout();
  }


}
