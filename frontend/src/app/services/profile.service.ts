import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Profile } from '../models/profile.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends HttpService {
  private endpoint = 'users';

  getProfiles(): Observable<Profile[]> {
    return this.get(this.endpoint);
  }
}
