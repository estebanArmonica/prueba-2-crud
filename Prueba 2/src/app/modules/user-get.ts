 export interface TypeHair  {
  color: string;
  type: string;
}

export interface TypeCoordinates  {
  lat: number;
  lng: number;
}

export interface TypeAdress {
  address: string;
  city: string;
  coordinates: TypeCoordinates;
  postalCode: string;
  state: string;
}

export interface TypeBank  {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface TypeCompany  {
  address: TypeAdress;
  postalCode: string;
  department: string;
  name: string;
  title: string;
}

export interface UserGet {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  imagen: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: TypeHair;
  domain: string;
  ip: string;
  address: TypeAdress;
  macAddress: string;
  university: string;
  bank: TypeBank;
  company: TypeCompany;
  ein: string;
  ssn: string;
  userAgent: string;
}
