import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Meta } from '@angular/platform-browser';
import {CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  keywordsArray:any[]= [];
  keywords:any;
  ngOnInit() {
    this.apiservice.getkeywords().subscribe(data=>{
      data['software_company'].forEach(element => {
       this.keywordsArray.push(element.Keyword);
      });
      this.keywords = this.keywordsArray.toString();
      this.metaTagService.addTags([
       { name: 'keywords', content: this.keywords },
       { name: 'robots', content: 'index, follow' },
       { name: 'author', content: 'Techbrains Innovative Solutions pvt ltd' },
       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
     ]);
     });
  }
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;

  @ViewChild('myCarousel') myCarousel: NguCarousel<any>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 4, all: 0 },
    slide: 1,
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }
  carouselItems = [1, 2, 3,4,5];
  productlist=[
    {
      photoPath:'data:image/png;base64,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',
      name:'Manalocalmall',
      description:'',
    },
    {
      photoPath:'https://skillvidhyalaya.com/uploads/setting/1708598337-njlXtp6ZVJ.png',
      name:'SkillVidhyalaya',
      description:'',
    },
    {
      photoPath:'https://tisinventory.techbrainsinnovative.in/public/uploads/tis%20inventory%20%281%29.png',
      name:'TIS Inventory',
      description:'',
    },
    {
      photoPath:'https://webtools.techbrainsinnovative.in/components/storage/app/public/photos/1/tbisWebTools_1708086470-1708086474.png',
      name:'Tech Web Tools',
      description:'',
    }
  ]

  constructor(private cdr: ChangeDetectorRef,private metaTagService: Meta,private apiservice:CommonService ){}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }

  moveTo(slide) {
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  
  gotoProductUrl(name:any){
    console.log(name);
    if(name == 'Manalocalmall'){
      window.open('https://register.manalocalmall.com/',"_blank");
    }
    else if(name == 'SkillVidhyalaya'){
      window.open('https://skillvidhyalaya.com/',"_blank");
    }
    else if(name == 'TIS Inventory'){
      window.open('https://tisinventory.techbrainsinnovative.in/',"_blank");
    }
    else if(name == 'Tech Web Tools'){
      window.open('https://webtools.techbrainsinnovative.in',"_blank");
    }
  }
}
