import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bicycle } from '../../models/bicycle';
import { BicycleService } from '../../services/bicycle.service';

@Component({
  selector: 'cb-bicycle-details',
  templateUrl: './bicycle-details.component.html',
  styleUrls: ['./bicycle-details.component.scss'],
})
export class BicycleDetailsComponent implements OnInit {
  bicycle: Bicycle | undefined;


  constructor(private route: ActivatedRoute, private service: BicycleService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.service.bicycles.subscribe(bicycles => {
        if (bicycles.length === 0) return;
        this.bicycle = this.service.bicycleById(id);
      })
    });
  }
}
