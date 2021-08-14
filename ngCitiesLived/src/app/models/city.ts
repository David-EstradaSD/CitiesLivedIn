export class City {

  id : number;
  name : string;
  address : string;
  state : string;
  postalCode : string;
  country : string;

  constructor (
    id : number = 0,
    name : string = '',
    address : string = '',
    state : string = '',
    postalCode : string = '',
    country : string = ''

  ) {

    this.id = id;
    this.name = name;
    this.address = address;
    this.state = state;
    this.postalCode = postalCode;
    this.country = country;

  }

}
