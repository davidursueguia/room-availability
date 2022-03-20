import { Component, OnInit } from '@angular/core';
import {TranslationService} from "../../services/translation.service";

@Component({
  selector: 'app-rates-viewer',
  templateUrl: './rates-viewer.component.html',
  styleUrls: ['./rates-viewer.component.css']
})
export class RatesViewerComponent implements OnInit {

  constructor(public translationService: TranslationService) { }

  ngOnInit(): void {
  }

}
