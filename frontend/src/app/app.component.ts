import { Component } from '@angular/core';

import { Profile } from './models/profile.model';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'PUMA Challenge';

  profiles: Profile[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService
      .post<Profile[]>('users/', { username: 'ArthurFerreiraRodrigues' })
      .subscribe((data) => {
        console.log(data);
      });

    this.httpService.get<Profile[]>('users/').subscribe((data) => {
      console.log(data);
      this.profiles = data;
    });
  }

  getProfile(i: number): Profile {
    return this.profiles[i];
  }
}
