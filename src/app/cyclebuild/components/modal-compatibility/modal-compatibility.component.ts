import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    private bicycleService: BicycleService
  ) {}

  part!: Part;
  bicycles!: Observable<Bicycle[]>;

  displayedColumns: string[] = ['bicycle', 'compatibility'];
  dataSource!: MatTableDataSource<Bicycle>;

  ngOnInit(): void {
    console.log(this.data);
    this.bicycles = this.bicycleService.bicycles;
    this.bicycleService.loadAll();
    this.bicycles.subscribe((data) => {
      this.dataSource = new MatTableDataSource<Bicycle>(data);
      console.log(data)
    });
    this.part = this.data.part;
  }

  checkCompatibility(bicycle: Bicycle, part: Part) {
    return part.compatibilities.includes(bicycle.name)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
