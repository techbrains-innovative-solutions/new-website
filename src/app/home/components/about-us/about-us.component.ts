import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  constructor(public commonService:CommonService) { }

  ngOnInit() {
  }

}
