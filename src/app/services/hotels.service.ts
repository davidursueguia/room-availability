import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  hotels: Hotel[] = [
    {code: "hotel_1", name: "Hotel W"},
    {code: "hotel_2", name: "Hotel Casa Diaz"}
  ];

  rooms: Room[] = [
    {
      hotel_code: 'hotel_1',
      roomName: 'Supreme',
      rates: [
        {
          name: 'Estandar',
          totalPrice: '90.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-01"),
            breakDownData: {price: '445.12', allotment: '3'}
          }, {breakDownDate: new Date("2022-01-02"), breakDownData: {price: '445.12', allotment: '2'}}]
        },
        {
          name: 'Business',
          totalPrice: '90.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-01"),
            breakDownData: {price: '453.12', allotment: '3'}
          }, {breakDownDate: new Date("2022-01-02"), breakDownData: {price: '445.12', allotment: '2'}}]
        },
        {
          name: 'Premium',
          totalPrice: '90.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-01"),
            breakDownData: {price: '451.12', allotment: '3'}
          }, {breakDownDate: new Date("2022-01-02"), breakDownData: {price: '445.12', allotment: '2'}}]
        },
        {
          name: 'Premium +',
          totalPrice: '90.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-01"),
            breakDownData: {price: '45.12', allotment: '3'}
          }, {breakDownDate: new Date("2022-01-02"), breakDownData: {price: '45.12', allotment: '2'}}]
        }
      ]
    },
    {
      hotel_code: 'hotel_2',
      roomName: 'Standard',
      rates: [
        {
          name: 'Economic',
          totalPrice: '190.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-01"),
            breakDownData: {price: '15.12', allotment: '3'}
          }, {breakDownDate: new Date("2022-01-02"), breakDownData: {price: '15.12', allotment: '2'}}]
        }
      ]
    }
  ]


  constructor() {
  }

  async getHotels() {
    await this.timeout(3000);
    return this.hotels;
  }
  async getRates(hotelCode: string, checkIn: Date, checkOut: Date){
    await this.timeout(3000);
    //todo search rate from hotelcode (backend)
    console.log('get rates');
    return this.rooms.filter(r => r.hotel_code == hotelCode);
  }

  getHotelName(hotelCode: string){
    return this.hotels.find(h => h.code == hotelCode)?.name;
  }

  timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}


export interface Hotel {
  code: string,
  name: string
  rooms?: Room[];
}

export interface Room {
  hotel_code: string,
  roomName: string,
  rates: Rate[]
}

export interface Rate {
  name: string,
  totalPrice: string,
  breakDown: Breakdown[]
}

interface Breakdown {
  breakDownDate: Date,
  breakDownData: BreakdownData
}

interface BreakdownData {
  price: string,
  allotment: string
}
