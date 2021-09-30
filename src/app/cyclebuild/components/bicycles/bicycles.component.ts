import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bicycle } from '../../models/bicycle';
import { BicycleService } from '../../services/bicycle.service';

@Component({
  selector: 'cb-bicycles',
  templateUrl: './bicycles.component.html',
  styleUrls: ['./bicycles.component.scss'],
})
export class BicyclesComponent implements OnInit {
  bicycles!: Observable<Bicycle[]>;

  constructor(private bicycleService: BicycleService, public router: Router) {}

  ngOnInit(): void {
    this.bicycles = this.bicycleService.bicycles;
    this.bicycleService.loadAll();
    this.bicycles.subscribe((data) => {

    });
  }
}
