import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Part } from '../../models/part';
import { PartService } from '../../services/part.service';

@Component({
  selector: 'cb-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss'],
})
export class PartsComponent implements OnInit {
  parts!: Observable<Part[]>;
  constructor(private partService: PartService, public router: Router) {}

  ngOnInit(): void {
    this.parts = this.partService.parts;
    this.partService.loadAll();
    this.parts.subscribe((data) => {
      console.log(data);
    });
  }
}
