import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public availableLanguages = [
    'en', 'es'
  ]
  public language: string = "en";
  public values: { [key: string]: Dictionary } = {}

  private dictionary = {
    en: {
      availabilityExample: 'Availability example',
      hotels: 'Hotels',
      checkAvailability: 'CHECK AVAILABILITY',
      checkIn: 'Check in',
      checkOut: 'Check out',
      tipAvailability: 'Select a Hotel and two dates and you will receive magical results',
      selectLanguage: 'Language'
    },
    es: {
      availabilityExample: 'Ejemplo disponibilidad',
      hotels: 'Hoteles',
      checkAvailability: 'BUSCAR DISPONIBILIDAD',
      checkIn: 'Entrada',
      checkOut: 'Salida',
      tipAvailability: 'Selecciona un hotel y 2 fechas para recibir resultados mágicos',
      selectLanguage: 'Idioma'
    }
  }


  onChangeLanguage(lang : string){
    this.language = lang;
  }

  translate(word: string) {
    // @ts-ignore //todo remove ts-ignore
    if (this.dictionary[this.language] != null) {
      // @ts-ignore //todo remove ts-ignore
      return this.dictionary[this.language][word];
    } else {
      //download new language from api and return word
    }
  }
}

interface Dictionary {
  availabilityExample: string,
  hotel: string,
  checkAvailability: string,
  checkIn: string,
  checkOut: string,
  tipAvailability: 'string',
  selectLanguage: 'string'
}

