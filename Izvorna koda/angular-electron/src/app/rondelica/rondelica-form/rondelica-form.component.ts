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
    dolzinaTraku: new FormControl("", Validators.required),
    sirinaTraku: new FormControl("", Validators.required),
    polmerRondelic: new FormControl("", Validators.required),
    razdaljaMedRondelicama: new FormControl("", Validators.required),
    zgornjiInSpodnjiRob: new FormControl("", Validators.required),
    zacetekInKonecRob: new FormControl("", Validators.required),
  });

  constructor(
    private router: Router,
    private rondelicaService: RondelicaItemsServiceProxy,
    public dialog: MatDialog
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.rondelicaForm.invalid) {
      this.rondelicaForm.markAsTouched;
    } else {
      this.rondelicaService.postRondelicaItem(this.rondelicaForm.value).subscribe(response => {
      this.router.navigate(['/rondelica/' + response.id]);
      },
      err => this.openDialog(err));
    }
  }


  openDialog(err): void {
    const dialogRef = this.dialog.open(ErrorHandlingComponent, {
      width: '300px',
      data: err
    });
  }

}
