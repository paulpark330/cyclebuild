import { Component, Input, OnInit } from '@angular/core';
import { Bicycle } from '../../models/bicycle';
import { Part } from '../../models/part';

@Component({
  selector: 'cb-installed-parts',
  templateUrl: './installed-parts.component.html',
  styleUrls: ['./installed-parts.component.scss']
})
export class InstalledPartsComponent implements OnInit {
  @Input() bicycle!: Bicycle;

  installedParts!: Part[]

  constructor() { }

  ngOnInit(): void {
    this.installedParts = [
      {
        _id: '61565d3ff74726c742b27f1e',
        name: 'Bicycle Part 1',
        description:
          'A seatpost wedge compatible with the 2019 S3 Rim and Disc models.',
        compatibilities: ['Bicycle B'],
        imageUrl: ['/assets/part-1-1.png', '/assets/part-1-2.png'],

      },
      {
        _id: '61565d3ff74726c742b27f1f',
        name: 'Bicycle Part 2',
        description:
          'As their name implies, the Short Reach handlebars are designed for those that require a shorter reach in order to obtain the optimal bike fit. Along these lines, they feature a 65mm reach (which is about 10 to 15mm shorter than "average") and a shallow 125mm drop. This also comes with the added benefit of increased control at the hoods and levers. And for the construction, we selected a lightweight, yet highly durable, 6061 Premium Butted Aluminum that\'s sure to stand up to years of hard riding. 6062 premium butted aluminum, high-strength design. Short reach for optimal brake/shift control. Shallow Bend Drop: 125mm drop x 65mm reach',
        compatibilities: ['Bicycle A'],
        imageUrl: ['/assets/part-2-1.png', '/assets/part-2-2.png'],

      },
    ];
  }

}
