import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FormsModule } from '@angular/forms';

import { CyclebuildAppComponent } from './cyclebuild-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BicyclesComponent } from './components/bicycles/bicycles.component';
import { PartsComponent } from './components/parts/parts.component';
import { HomeComponent } from './components/home/home.component';
import { BicycleService } from './services/bicycle.service';
import { PartService } from './services/part.service';

const routes: Routes = [
  {
    path: '',
    component: CyclebuildAppComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'bicycles',
        component: BicyclesComponent,
      },
      {
        path: 'parts',
        component: PartsComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    BicycleService,
    PartService
  ],
  declarations: [
    CyclebuildAppComponent,
    ToolbarComponent,
    PartsComponent,
    HomeComponent,
    BicyclesComponent
  ],
})
export class CyclebuildModule { }
