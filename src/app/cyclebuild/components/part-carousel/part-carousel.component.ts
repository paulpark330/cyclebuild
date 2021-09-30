import { Component, Input, OnInit } from '@angular/core';
import { Part } from '../../models/part';


@Component({
  selector: 'cb-part-carousel',
  templateUrl: './part-carousel.component.html',
  styleUrls: ['./part-carousel.component.scss'],
})
export class PartCarouselComponent implements OnInit {
  @Input() part!: Part;
  constructor() {}

  ngOnInit(): void {}

}
