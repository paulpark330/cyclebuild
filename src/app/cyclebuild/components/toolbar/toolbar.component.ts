import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bicycle } from '../../models/bicycle';
import { Part } from '../../models/part';
import { BicycleService } from '../../services/bicycle.service';
import { PartService } from '../../services/part.service';

@Component({
  selector: 'cb-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  bicycles!: Observable<Bicycle[]>;
  parts!: Observable<Part[]>;
  constructor(
    private bicycleService: BicycleService,
    private partService: PartService
  ) {}

  ngOnInit(): void {
    this.bicycles = this.bicycleService.bicycles;
    this.bicycleService.loadAll();
    this.bicycles.subscribe((data) => {

    });
    this.parts = this.partService.parts;
    this.partService.loadAll();
    this.parts.subscribe((data) => {

    });
  }
}
