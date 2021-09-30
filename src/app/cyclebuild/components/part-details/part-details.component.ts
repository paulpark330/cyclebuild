import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Part } from '../../models/part';
import { PartService } from '../../services/part.service';

@Component({
  selector: 'cb-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss'],
})
export class PartDetailsComponent implements OnInit {
  part: Part | undefined;
  constructor(private route: ActivatedRoute, private service: PartService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.service.parts.subscribe((parts) => {
        if (parts.length === 0) return;
        this.part = this.service.partById(id);
      });
    });
  }
}
