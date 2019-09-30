import {Component, OnInit} from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{

  objectKeys = Object.keys;
  cryptos: any;
  cyptosName = ['Bitcoin','Ethereum','XRP','Tether','Bitcoin Cash','Litecoin','EOS','Binance Coin','Bitcoin SV','Stellar'];
  unit = 'USD';
  symbol = '$';
  student = 'Kasra Jannati';
  stNumber = '101237299';
  title = 'currency exchange | fullstack1';

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.get()
        .subscribe(res => {
          this.cryptos = res;
        });
  }

  onChange(deviceValue){
    this._data.tsyms = deviceValue;
    this.unit = deviceValue;
    if(this.unit === 'USD'){
      this.symbol = '$';
    }else if (this.unit === 'EUR') {
      this.symbol = '€';
    } else {
      this.symbol = '¥';
    }
    this._data.get()
        .subscribe(res => {
          this.cryptos = res;
        });
  }
}
