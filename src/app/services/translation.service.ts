import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() {
  }
}


interface Translation {
  hotel: string,
  checkAvailability: string,
  checkIn: string,
  checkOut: string
}
