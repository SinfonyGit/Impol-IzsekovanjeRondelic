import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { IRondelicaItem, RondelicaItemsServiceProxy } from 'app/services/api.client.generated';
// import { RondelicaItemsServiceProxy, IRondelicaItem } from 'src/app/services/api.client.generated';

@Component({
  selector: 'app-rondelica-detail',
  templateUrl: './rondelica-detail.component.html',
  styleUrls: ['./rondelica-detail.component.css']
})
export class RondelicaDetailComponent implements OnInit {

  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private rondelicaService: RondelicaItemsServiceProxy
  ) { }

  rondelica: IRondelicaItem;

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.rondelicaService.getRondelicaItem(this.id).subscribe( response => this.rondelica = response);
    });
  }

  goBack() {
    this.location.back();
  }

}
