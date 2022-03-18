import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  hotels: Hotel[] = [
    {code: "hotel_1", name: "hotel_1_name"},
    {code: "hotel_2", name: "hotel_2_name"}
  ];


  constructor() {
  }


  getHotels(){
    return this.hotels;
  }
}


interface Hotel {
  code: string,
  name: string
  rooms?: Room[];
}

interface Room {
  rates: Rate[]
}

interface Rate {
  totalPrice: number,
  breakDown: Breakdown
}

interface Breakdown {
  breakDownData: BreakdownData
}

interface BreakdownData {
  price: number,
  allotment: number
}
