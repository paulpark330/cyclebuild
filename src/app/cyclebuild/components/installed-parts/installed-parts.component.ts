import { Component, Input, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Bicycle } from '../../models/bicycle';
import { Part } from '../../models/part';

@Component({
  selector: 'cb-installed-parts',
  templateUrl: './installed-parts.component.html',
  styleUrls: ['./installed-parts.component.scss'],
})
export class InstalledPartsComponent implements OnInit {
  @Input() bicycle!: Bicycle;

  installedParts!: any;

  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  ngOnInit(): void {
    const partsJSON = localStorage.getItem(this.bicycle.name);
    if (partsJSON !== null) {
      this.installedParts = JSON.parse(partsJSON);
    }
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  deletePart(id: string): void {
    const partsJSON = localStorage.getItem(this.bicycle.name);
    let partsArray: Part[] = [];
    if (partsJSON !== null) {
      partsArray = JSON.parse(partsJSON);
    }
    const partsArrayJSON = partsArray.filter((part) => part._id !== id);
    console.log(partsArrayJSON);
    localStorage.setItem(this.bicycle.name, JSON.stringify(partsArrayJSON));
    this.installedParts = partsArrayJSON;
    this.openSnackBar('Part deleted', 'Add parts', )
      .onAction()
      .subscribe(() => {
        this.router.navigate(['cyclebuild/parts']);
      });
  }
}
