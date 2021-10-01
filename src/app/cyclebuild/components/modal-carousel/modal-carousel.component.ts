import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'cb-modal-carousel',
  templateUrl: './modal-carousel.component.html',
  styleUrls: ['./modal-carousel.component.scss'],
})
export class ModalCarouselComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  imageUrl!: string[];
  mainImage!: string;

  switchView(event: any): void {
    if (event.target.nextElementSibling === null) return;
    this.mainImage = event.target.nextElementSibling.getAttribute('src');
  }

  ngOnInit(): void {
    this.imageUrl = this.data.part.imageUrl
    this.mainImage = this.data.currentImage;
  }
}
