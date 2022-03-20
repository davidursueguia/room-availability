import {Component, OnInit} from '@angular/core';
import {Hotel, HotelsService, Room} from "../../services/hotels.service";
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
  public availableRooms: Room[] = [];


  constructor(public hotelsService: HotelsService, public translationService: TranslationService) {
  }

  async ngOnInit(): Promise<void> {

    //todo initilize formgroup here

    try {
      //get hotels from server
      this.hotels = await this.hotelsService.getHotels();
      this.isDataLoaded = true;
    } catch (e) {
      console.log(e);
    }

  }

  async onCheckAvailability() {
    try {
      this.isAvailabilityLoading = true;
      let hotel = this.availabilityForm.get('hotel')?.value;
      let checkIn = this.availabilityForm.get('checkIn')?.value;
      let checkOut = this.availabilityForm.get('checkOut')?.value;
      this.availableRooms = await this.hotelsService.getRates(hotel, checkIn, checkOut);
      this.isAvailabilityLoading = false;
      console.log('Available rooms: ' + this.availableRooms[0]);
    } catch (e) {
      console.log(e);
    }
  }

  onLanguageChange(language: Event) {
    this.translationService.onChangeLanguage(language + '');
  }
}
