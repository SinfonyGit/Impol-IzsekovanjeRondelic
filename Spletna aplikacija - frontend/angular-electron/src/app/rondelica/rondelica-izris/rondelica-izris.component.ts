import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rondelica-izris',
  templateUrl: './rondelica-izris.component.html',
  styleUrls: ['./rondelica-izris.component.scss']
})
export class RondelicaIzrisComponent implements OnInit {

  @Input() sirinaTraku;
  @Input() dolzinaTraku;
  @Input() polmerRondelic;
  @Input() razdaljaMedRondelicama;
  @Input() zacetekInKonecRob;
  @Input() zgornjiInSpodnjiRob;
  @Input() steviloRondelic: number;

  ngForRondelic: any;

  constructor() { }

  ngOnInit() {
    // console.log(this.steviloRondelic, 'steviloRondelic');
    this.ngForRondelic = Array(this.steviloRondelic).fill(0).map((x,i)=>i);
  }

}
