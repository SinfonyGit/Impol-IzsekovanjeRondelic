import { Component, OnInit } from '@angular/core';
import { RondelicaItemsServiceProxy } from '../services/api.client.generated';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isOnline: boolean = false;
  totalRecords: number = 0;

  constructor(private rondelicaProxy: RondelicaItemsServiceProxy) {}

  ngOnInit() {
    this.rondelicaProxy.getRondelicaItemAll().subscribe((x) => {
      this.totalRecords = x.length;
      this.isOnline = true
    })
  }
}
