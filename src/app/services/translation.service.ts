import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public availableLanguages: AvailableLanguage[] = [
    {languageCode: 'en', languageName: 'English'},
    {languageCode: 'es', languageName: 'Español'}
  ]
  public language: string = "en";
  private dictionary: { [key: string]: Dictionary } = {
    en: {
      availabilityExample: 'Availability example',
      hotels: 'Hotels',
      checkAvailability: 'CHECK AVAILABILITY',
      checkIn: 'Check in',
      checkOut: 'Check out',
      tipAvailability: 'Select a Hotel and two dates and you will receive magical results',
      selectLanguage: 'Language',
      fare: 'Fare',
      roomsAvailable: 'rooms available at ',
      room: 'Room',
      price: 'Price'
    },
    es: {
      availabilityExample: 'Ejemplo disponibilidad',
      hotels: 'Hoteles',
      checkAvailability: 'COMPROBAR DISPONIBILIDAD',
      checkIn: 'Entrada',
      checkOut: 'Salida',
      tipAvailability: 'Selecciona un hotel y 2 fechas y recibirás resultados mágicos',
      selectLanguage: 'Idioma',
      fare: 'Tarifa',
      roomsAvailable: 'habitaciones disponibles en ',
      room: 'Habitación',
      price: 'Precio'
    }
  }

  /**
   * Updates the UI with selected language
   * @param lang
   */
  onChangeLanguage(lang: string) {
    this.language = lang;
  }

  /**
   * Check if the selected language is downloaded, then returns translated
   * word. Else, it (should) downloads the new dictionary from /api/translations
   * @param word
   */
  translate(word: string) {
    if (this.dictionary[this.language] != null) {
      return this.dictionary[this.language][word];
    } else {
      //download new language from api and return translated word
    }
  }
}

interface Dictionary {
  availabilityExample: string,
  hotels: string,
  checkAvailability: string,
  checkIn: string,
  checkOut: string,
  tipAvailability: string,
  selectLanguage: string,
  fare: string,
  roomsAvailable: string,
  room: string,
  price: string
}

interface AvailableLanguage {
  languageCode: string,
  languageName: string
}
