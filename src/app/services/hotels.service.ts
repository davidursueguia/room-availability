import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  hotels: Hotel[] = [
    {code: "hotel_1", name: "hotel_1_name"},
    {code: "hotel_2", name: "hotel_2_name"}
  ];

  rooms: Room[] = [
    {
      hotel_code: 'hotel_1',
      rates: [
        {
          name: 'rate_1',
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
      rates: [
        {
          name: 'rate_1',
          totalPrice: '190.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-01"),
            breakDownData: {price: '145.12', allotment: '3'}
          }, {breakDownDate: new Date("2022-01-02"), breakDownData: {price: '145.12', allotment: '2'}}]
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
    return this.rooms.filter(r => r.hotel_code == hotelCode);
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
  hotel_code: string
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
