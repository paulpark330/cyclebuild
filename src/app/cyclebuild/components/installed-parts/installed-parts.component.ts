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

  installedParts!: any;

  constructor() { }

  ngOnInit(): void {
    const partsJSON = localStorage.getItem(this.bicycle.name)
    if (partsJSON !== null) {
      this.installedParts = JSON.parse(partsJSON)
    }
  }

  deletePart(id: string): void {
    const partsJSON = localStorage.getItem(this.bicycle.name);
    let partsArray: Part[] = [];
    if (partsJSON !== null) {
      partsArray = JSON.parse(partsJSON);
    }
    const partsArrayJSON = partsArray.filter(part => part._id !== id)
    console.log(partsArrayJSON)
    localStorage.setItem(this.bicycle.name, JSON.stringify(partsArrayJSON))
    this.installedParts = partsArrayJSON
  }

}
