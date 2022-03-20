import { Pipe, PipeTransform } from '@angular/core';
import {TranslationService} from "../services/translation.service";

@Pipe({
  name: 'translator'
})
export class TranslatorPipe implements PipeTransform {


  constructor(private translationService: TranslationService) {
  }

  transform(value: string, language: string) {
    return this.translationService.translate(value);
  }

}
