import {Component, OnInit} from '@angular/core';
import {Hotel, HotelsService} from "../../services/hotels.service";
import {TranslationService} from "../../services/translation.service";
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {F} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-room-searcher',
  templateUrl: './room-searcher.component.html',
  styleUrls: ['./room-searcher.component.css']
})
export class RoomSearcherComponent implements OnInit {


  isDataLoaded: boolean = false;
  isAvailabilityLoading: boolean = false;
  hotels: Hotel[] = [];
  availabilityForm = new FormGroup({
      'hotel': new FormControl(null, Validators.required),
      'startDate': new FormControl(null, Validators.required),
      'endDate': new FormControl(null, Validators.required)
    }
  );


  constructor(public hotelsService: HotelsService, private translationService: TranslationService) {
  }

  async ngOnInit(): Promise<void> {


    try {
      //get hotels from server
      this.hotels = await this.hotelsService.getHotels();

      //todo
      //get translations text

      this.isDataLoaded = true;
    } catch (e) {
      console.log(e);
    }

  }

  async onCheckAvailability() {
    try{
      this.isAvailabilityLoading = true;
      console.log(await this.hotelsService.getRates('hotel_1'));
      this.isAvailabilityLoading = false;
    }catch (e){
      console.log(e);
    }
  }
}
