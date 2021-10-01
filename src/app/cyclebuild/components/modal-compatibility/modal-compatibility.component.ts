import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { Bicycle } from '../../models/bicycle';
import { Part } from '../../models/part';
import { BicycleService } from '../../services/bicycle.service';

@Component({
  selector: 'cb-modal-compatibility',
  templateUrl: './modal-compatibility.component.html',
  styleUrls: ['./modal-compatibility.component.scss'],
})
export class ModalCompatibilityComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bicycleService: BicycleService,
    public dialogRef: MatDialogRef<ModalCompatibilityComponent>,
    private _snackBar: MatSnackBar
  ) {}

  part!: Part;
  bicycles!: Observable<Bicycle[]>;

  displayedColumns: string[] = ['bicycle'];
  dataSource!: MatTableDataSource<Bicycle>;

  ngOnInit(): void {
    this.bicycles = this.bicycleService.bicycles;
    this.bicycleService.loadAll();
    this.bicycles.subscribe((data) => {
      this.dataSource = new MatTableDataSource<Bicycle>(data);
    });
    this.part = this.data.part;
  }
  openSnackBar(message: string, action: string): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addToBicycle(bicycle: Bicycle, part: Part) {
    //get array of parts from local storage
    //parse it
    //check for duplicates array.some()
    const partsJSON = localStorage.getItem(bicycle.name);
    let partsArray: Part[] = [];
    if (partsJSON !== null) {
      partsArray = JSON.parse(partsJSON);
    }
    if (!partsArray.some((partJSON) => partJSON._id === part._id)) {
      partsArray.push(part);
      localStorage.setItem(bicycle.name, JSON.stringify(partsArray));
      this.dialogRef.close(bicycle._id);
    } else {
      this.openSnackBar('Part already exists on bike', 'close');
    }
  }

  checkCompatibility(bicycle: Bicycle, part: Part) {
    return part.compatibilities.includes(bicycle.name);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
