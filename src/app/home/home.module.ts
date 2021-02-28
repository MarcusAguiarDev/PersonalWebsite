import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialImportsModule } from '../shared/utilities/material-imports.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [LayoutComponent, IndexComponent, AboutComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MaterialImportsModule
  ]
})
export class HomeModule { }
