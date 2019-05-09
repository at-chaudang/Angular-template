import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  data;

  constructor() { }

  receive() {
    return this.data;
  }

  send(data): void {
    this.data = data;
  }
}
