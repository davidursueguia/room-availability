import {Component, OnInit} from '@angular/core';
import {HotelsService} from "../../services/hotels.service";
import {TranslationService} from "../../services/translation.service";

@Component({
  selector: 'app-room-searcher',
  templateUrl: './room-searcher.component.html',
  styleUrls: ['./room-searcher.component.css']
})
export class RoomSearcherComponent implements OnInit {
  selectedHotel: any;

  constructor(public hotelsService: HotelsService, private translationService: TranslationService) {
  }

  ngOnInit(): void {

  }

}
