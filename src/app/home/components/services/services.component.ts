import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';
import { Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  keywordsArray:any[]= [];
  keywords:any;
  servicesList = [{
    serviceImage:'',
    serviceName:'',
    serviceDescription:''
  }]
  constructor(public commonService:CommonService,private metaTagService: Meta , private router:Router) { }

  ngOnInit() {
    this.commonService.getkeywords().subscribe(data=>{
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

  serviceViewMore(servicearea:string){
    this.router.navigate(['/service-detail'],{queryParams:{ service: servicearea}});
  }

}
