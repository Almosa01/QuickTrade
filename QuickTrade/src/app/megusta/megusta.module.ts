import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MegustaPageRoutingModule } from './megusta-routing.module';

import { MegustaPage } from './megusta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MegustaPageRoutingModule
  ],
  declarations: [MegustaPage]
})
export class MegustaPageModule {}
