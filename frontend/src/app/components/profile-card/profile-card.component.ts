import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  onUpdateEvent: EventEmitter<Profile> = new EventEmitter();

  constructor(private readonly profileService: ProfileService) {}

  ngOnInit(): void {}

  toggleStar(profile) {
    this.profileService.toggleStar(profile.username).subscribe((data) => {
      this.onUpdateEvent.emit();
    });
  }

  removeFavorite(profile) {
    this.profileService.deleteProfile(profile.username).subscribe((data) => {
      this.onUpdateEvent.emit();
    });
  }

  getProfileAvatar(): string {
    return this.profile.avatar;
  }

  getProfileName(): string {
    return this.profile.name;
  }

  getProfileUsername(): string {
    return this.profile.username;
  }

  getIsStarred(): boolean {
    return this.profile.isStarred;
  }
}
