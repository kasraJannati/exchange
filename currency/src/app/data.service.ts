import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ulr:string = 'https://min-api.cryptocompare.com/data/pricemulti';
  api:string = '370e46367eb38603bcd2ceebc5a5804fd4e1d0798fe1a72651fcb79cb5ab885b';
  fsyms:string = 'BTC,ETH,XRP,USDT,BCH,LTC,EOS,BNB,BSV,XLM'; // The cryptocurrency symbol of interest [ Min length - 1] [ Max length - 10]
  tsyms:string = 'USD'; // Comma separated cryptocurrency symbols list to convert into [ Min length - 1] [ Max length - 500]

  constructor(private _http: HttpClient) { }

  get() {
    return this._http.get(this.ulr + '?fsyms=' + this.fsyms + '&tsyms=' + this.tsyms + '&api_key={'+ this.api +'} ');
  }

}
// Source https://min-api.cryptocompare.com/
// Kasra Jannati
