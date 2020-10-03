import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RondelicaItemsServiceProxy } from 'app/services/api.client.generated';
import { MatDialog } from '@angular/material/dialog';
import { ErrorHandlingComponent } from 'app/error-handling/error-handling.component';

@Component({
  selector: 'app-rondelica-form',
  templateUrl: './rondelica-form.component.html',
  styleUrls: ['./rondelica-form.component.scss']
})
export class RondelicaFormComponent implements OnInit {

  rondelicaForm = new FormGroup({
    dolzinaTraku: new FormControl(500, Validators.required),
    sirinaTraku: new FormControl(250, Validators.required),
    polmerRondelic: new FormControl(22, Validators.required),
    razdaljaMedRondelicama: new FormControl(10, Validators.required),
    zgornjiInSpodnjiRob: new FormControl(15, Validators.required),
    zacetekInKonecRob: new FormControl(30, Validators.required),
  });

  constructor(
    private router: Router,
    private rondelicaService: RondelicaItemsServiceProxy,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.rondelicaService.postRondelicaItem(this.rondelicaForm.value).subscribe(response => {
      this.router.navigate(['/rondelica/' + response.id]);
    },
    err => this.openDialog(err));
  }


  openDialog(err): void {
    const dialogRef = this.dialog.open(ErrorHandlingComponent, {
      width: '300px',
      data: err
    });
  }

}
