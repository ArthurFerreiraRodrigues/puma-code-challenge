import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Profile } from '../models/profile.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends HttpService {
  private endpoint = 'users';

  addProfile(username: string): Observable<Profile> {
    return this.post(this.endpoint, { username });
  }

  listProfiles(): Observable<Profile[]> {
    return this.get(this.endpoint);
  }

  toggleStar(username): Observable<Profile> {
    return this.patch(`${this.endpoint}/${username}/toggle-star`);
  }

  deleteProfile(username): Observable<Profile> {
    return this.delete(`${this.endpoint}/${username}`);
  }
}
