import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Meta } from '@angular/platform-browser';
import {CommonService } from '../../../shared/services/common.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
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
  teamList=[
    {
      photoPath:'assets/icons/businessman.png',
      name:'RaviTeja',
      designation:'Founder & CEO',
      description:'Raviteja has 9 years Experienced in Information and Technologies,His expertise and interests are in the areas of design and development of scalable applications ,knowledge engineering, data integrations and Artificial Intelligence',
    },
    {
      photoPath:'assets/icons/businessman.png',
      name:'Charanteja',
      designation:'Backend Developer',
      description:'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
    },
    {
      photoPath:'assets/icons/businessman.png',
      name:'Vamsi Renangi',
      designation:'Frontend Developer',
      description:'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
    },
    {
      photoPath:'assets/icons/businesswoman.png',
      name:'Geetha Alam',
      designation:'Quality Assurance engineer ',
      description:'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
    },
    {
      photoPath:'assets/icons/businesswoman.png',
      name:'Salini Misra',
      designation:'Intern at Frontend Development ',
      description:'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
    },
    {
      photoPath:'assets/icons/businessman.png',
      name:'Omsai',
      designation:'Chief Operating Officer',
      description:'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
    },
    {
      photoPath:'assets/icons/businessman.png',
      name:'Srikanth Mangalagiri',
      designation:'Cyber Security Engineer',
      description:'Lorem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.',
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

}
