import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'puma-challenge-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input()
  profile!: Profile;

  constructor(private readonly profileService: ProfileService) {}

  ngOnInit(): void {}

  removeFavorite(profile) {
    this.profileService.deleteProfile(profile.username).subscribe((data) => {
      console.log(data);
    });
  }

  toggleStar(profile) {
    this.profileService.toggleStar(profile.username).subscribe((data) => {
      console.log(data);
    });
  }
}
