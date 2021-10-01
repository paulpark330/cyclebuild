import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.service.parts.subscribe((parts) => {
        if (parts.length === 0) return;
        this.part = this.service.partById(id);
      });
    });
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialog(event: any) {
    const dialogRef = this.dialog.open(ModalCompatibilityComponent, {
      width: '800px',
      height: '600px',
      data: { part: this.part },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.openSnackBar('Part added!', 'Navigate')
          .onAction()
          .subscribe(() => {
            this.router.navigate(['cyclebuild/bicycles', result]);
          });
      }
    });
  }
}
