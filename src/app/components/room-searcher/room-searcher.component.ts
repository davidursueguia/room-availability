import {Component, OnInit} from '@angular/core';
import {Hotel, HotelsService, Room} from "../../services/hotels.service";
import {TranslationService} from "../../services/translation.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-room-searcher',
  templateUrl: './room-searcher.component.html',
  styleUrls: ['./room-searcher.component.css']
})
export class RoomSearcherComponent implements OnInit {


  isDataLoaded: boolean = false;
  isAvailabilityLoading: boolean = false;
  hotels: Hotel[] = [];
  availabilityFormControls = availabilityFormControls;
  availabilityForm = new FormGroup({
      [availabilityFormControls.hotel]: new FormControl(null, Validators.required),
      [availabilityFormControls.checkIn]: new FormControl(null, Validators.required),
      [availabilityFormControls.checkOut]: new FormControl(null, Validators.required)
    }
  );
  availableRooms: Room[] = [];


  constructor(public hotelsService: HotelsService, public translationService: TranslationService) {
  }

  async ngOnInit(): Promise<void> {

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
      let hotel = this.availabilityForm.get(availabilityFormControls.hotel)?.value;
      let checkIn = this.availabilityForm.get(availabilityFormControls.checkIn)?.value;
      let checkOut = this.availabilityForm.get(availabilityFormControls.checkOut)?.value;
      this.availableRooms = await this.hotelsService.getAvailability(hotel, checkIn, checkOut);
      this.isAvailabilityLoading = false;
    } catch (e) {
      console.log(e);
    }
  }

  onLanguageChange(language: Event) {
    this.translationService.onChangeLanguage(language + '');
  }
}

const availabilityFormControls = {
  hotel: 'hotel',
  checkIn: 'checkIn',
  checkOut: 'checkOut'
}
