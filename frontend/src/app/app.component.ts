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

  searchUsername: string = '';

  erro: boolean = false;
  mensagemErro: String;

  profiles: Profile[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.updateList();
  }

  getProfiles(): Profile[] {
    return this.profiles;
  }

  updateList() {
    this.httpService.get<Profile[]>('users/').subscribe((data) => {
      this.profiles = data;
    });
  }

  addProfile() {
    const searchUsername = this.searchUsername;

    if (searchUsername == '') {
      this.mensagemErro = 'Username cannot be empty';
      //Show error for 5 seconds
      this.erro = true;
      setTimeout(() => {
        this.erro = false;
      }, 5000);

      return;
    }

    this.httpService
      .post<Profile>('users', { username: searchUsername })
      .subscribe({
        next: () => {
          this.updateList();
        },
        error: (error) => {
          this.mensagemErro = error.error.message;

          //Show error for 5 seconds
          this.erro = true;
          setTimeout(() => {
            this.erro = false;
          }, 5000);
        },
      });
  }

  sortByAlpha() {
    this.profiles.sort((a, b) => {
      return a.username.localeCompare(b.username);
    });
  }
}
