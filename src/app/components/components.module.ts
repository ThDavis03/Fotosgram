import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LayoutComponent } from './layout/layout.component';

import { CardPostComponent } from './card-post/card-post.component';



@NgModule({
  declarations: [LayoutComponent, CardPostComponent],
  imports: [

    IonicModule,
    CommonModule
  ],
  exports: [
    LayoutComponent,
    CardPostComponent
  ],
})
export class ComponentsModule { }
