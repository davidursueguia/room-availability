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
          totalPrice: '10.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-01"),
            breakDownData: {price: '44.12', allotment: '3'}
          }]
        },
        {
          name: 'Business',
          totalPrice: '64.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-01"),
            breakDownData: {price: '483.12', allotment: '3'}
          }]
        },
        {
          name: 'Premium',
          totalPrice: '97.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-01"),
            breakDownData: {price: '451.12', allotment: '3'}
          }]
        },
        {
          name: 'Premium +',
          totalPrice: '34.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-02"),
            breakDownData: {price: '4.12', allotment: '3'}
          }]
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
            breakDownData: {price: '161.12', allotment: '3'}
          }]
        }
      ]
    },
    {
      hotel_code: 'hotel_2',
      roomName: 'Extra',
      rates: [
        {
          name: 'Economic',
          totalPrice: '190.24',
          breakDown: [{
            breakDownDate: new Date("2022-01-01"),
            breakDownData: {price: '15.12', allotment: '3'}
          }]
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

  /**
   * Simulates availability request:
   * /api/availability/<hotel-code>/<checkin-date>/<checkout-date>
   * @param hotelCode
   * @param checkIn
   * @param checkOut
   */
  async getAvailability(hotelCode: string, checkIn: Date, checkOut: Date) {
    await this.timeout(2000); //fake http response time
    return this.filterRooms(hotelCode, checkIn, checkOut);
  }

  /**
   * Simulates backend function:
   * filter rooms from given hotel code, check in and checkout date
   *
   * @param hotelCode
   * @param checkIn
   * @param checkOut
   */
  filterRooms(hotelCode: string, checkIn: Date, checkOut: Date) {
    let filteredRooms: Room[] = [];
    this.rooms.filter(r => r.hotel_code == hotelCode).forEach(room => {
      room.rates.forEach(rate => {
        rate.breakDown.forEach(b => {
          b.breakDownDate.setHours(0, 0, 0, 0);
          if (b.breakDownDate >= checkIn && b.breakDownDate <= checkOut) {
            if (filteredRooms.find(r => r.roomName == room.roomName)) {
              filteredRooms.filter(r => r.roomName == room.roomName)[0].rates.push({
                name: rate.name,
                totalPrice: rate.totalPrice,
                breakDown: [{breakDownData: b.breakDownData, breakDownDate: b.breakDownDate}]
              } as Rate);
            } else {
              let newRoom = {
                hotel_code: hotelCode,
                roomName: room.roomName,
                rates: [{
                  name: rate.name,
                  totalPrice: rate.totalPrice,
                  breakDown: [{breakDownDate: b.breakDownDate, breakDownData: b.breakDownData}]
                }]
              } as Room;
              filteredRooms.push(newRoom);
            }
          }
        })
      })
    })
    return filteredRooms;
  }

  /**
   *
   * @param hotelCode
   */
  getHotelName(hotelCode: string) {
    return this.hotels.find(h => h.code == hotelCode)?.name;
  }

  /**
   * Fakes a response time of a request from backend
   * @param ms
   */
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
