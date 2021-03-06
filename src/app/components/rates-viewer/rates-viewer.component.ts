import {Component, Input} from '@angular/core';
import {TranslationService} from "../../services/translation.service";
import {HotelsService, Room} from "../../services/hotels.service";

@Component({
  selector: 'app-rates-viewer',
  templateUrl: './rates-viewer.component.html',
  styleUrls: ['./rates-viewer.component.css']
})
export class RatesViewerComponent {

  @Input() rooms: Room[] = [];
  displayedColumns: string[] = ['name', 'totalPrice'];

  constructor(public hotelsService: HotelsService, public translationService: TranslationService) {
  }
}
