import { company, address } from 'faker';
import { Mappable } from './CustomMap';

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red'

  constructor() {
    this.companyName = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude())
    }
  }

  markerContent(): string {
    return `
      <div>
        <h2>Company Name: ${this.companyName}</h2>
        <h4>Catchphrase: ${this.catchPhrase}</h4>
      </div>
    `;
  }
}