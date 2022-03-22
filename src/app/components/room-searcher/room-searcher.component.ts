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
  availableRooms: Room[] = [];

  availabilityFormControls = AvailabilityFormControls;
  availabilityForm = new FormGroup({
      [AvailabilityFormControls.hotel]: new FormControl(null, Validators.required),
      [AvailabilityFormControls.checkIn]: new FormControl(null, Validators.required),
      [AvailabilityFormControls.checkOut]: new FormControl(null, Validators.required)
    }
  );

  constructor(public hotelsService: HotelsService, public translationService: TranslationService) {
  }

  async ngOnInit(): Promise<void> {
    try {
      this.hotels = await this.hotelsService.getHotels();
      this.isDataLoaded = true;
    } catch (e) {
      console.log(e);
    }
  }

  async onCheckAvailability() {
    try {
      this.isAvailabilityLoading = true;
      let hotel = this.availabilityForm.get(AvailabilityFormControls.hotel)?.value;
      let checkIn = this.availabilityForm.get(AvailabilityFormControls.checkIn)?.value;
      let checkOut = this.availabilityForm.get(AvailabilityFormControls.checkOut)?.value;
      this.availableRooms = await this.hotelsService.getAvailability(hotel, checkIn, checkOut);
      this.isAvailabilityLoading = false;
    } catch (e) {
      console.log(e);
    }
  }

  onLanguageChange(language: Event) {
    try {
      this.translationService.onChangeLanguage(language + '');
    } catch (e) {
      console.log(e);
    }
  }
}

const AvailabilityFormControls = {
  hotel: 'hotel',
  checkIn: 'checkIn',
  checkOut: 'checkOut'
}
