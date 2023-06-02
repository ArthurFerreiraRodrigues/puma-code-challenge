import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
  declarations: [ProfileCardComponent],
  imports: [CommonModule],
  exports: [ProfileCardComponent],
})
export class ComponentsModule {}
