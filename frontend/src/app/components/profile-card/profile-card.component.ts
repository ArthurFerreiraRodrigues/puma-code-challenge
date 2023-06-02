import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';

@Component({
  selector: 'puma-challenge-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input()
  profile!: Profile;

  constructor() {}

  ngOnInit(): void {}

  removeFavorite(profile) {
    console.log(profile);
  }
}
