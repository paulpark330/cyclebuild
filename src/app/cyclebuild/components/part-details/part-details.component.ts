import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Part } from '../../models/part';
import { PartService } from '../../services/part.service';
import { ModalCompatibilityComponent } from '../modal-compatibility/modal-compatibility.component';

@Component({
  selector: 'cb-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.scss'],
})
export class PartDetailsComponent implements OnInit {
  part: Part | undefined;
  constructor(
    private route: ActivatedRoute,
    private service: PartService,
    public dialog: MatDialog
  ) {}

  openDialog(event: any) {
    this.dialog.open(ModalCompatibilityComponent, {
      width: '800px',
      height: '600px',
      data: { part: this.part },
      panelClass: 'custom-dialog-container',
    });
  }

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
