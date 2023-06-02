import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';

import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
  declarations: [ProfileCardComponent],
  imports: [CommonModule, CardModule],
  exports: [ProfileCardComponent],
})
export class ComponentsModule {}
