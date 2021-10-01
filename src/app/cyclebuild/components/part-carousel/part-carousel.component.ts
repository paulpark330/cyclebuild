import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Part } from '../../models/part';
import { ModalCarouselComponent } from '../modal-carousel/modal-carousel.component';

@Component({
  selector: 'cb-part-carousel',
  templateUrl: './part-carousel.component.html',
  styleUrls: ['./part-carousel.component.scss'],
})
export class PartCarouselComponent implements OnInit {
  @Input() part!: Part;
  constructor(public dialog: MatDialog) {}

  openDialog(event: any) {
    this.dialog.open(ModalCarouselComponent, {
      width: '500px',
      height: '500px',
      data: { part: this.part, currentImage: event.target.getAttribute('src') },
      panelClass: 'custom-dialog-container',
    });
  }

  ngOnInit(): void {}
}
