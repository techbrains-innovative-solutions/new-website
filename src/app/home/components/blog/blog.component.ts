import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../shared/services/common.service';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  keywordsArray:any[]= [];
  keywords:any;
  constructor(public commonService:CommonService,private metaTagService: Meta) { }

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

  getBlog(){
    window.open('https://blog.techbrainsinnovative.in/',"_blank");
  }
}
