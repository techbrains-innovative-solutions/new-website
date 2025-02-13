import { Component, OnInit, Inject } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';
import { WINDOW } from '@ng-toolkit/universal';
import { Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  keywordsArray:any[]= [];
  keywords:any;
  constructor(@Inject(WINDOW) private window: Window, 
  public commonService:CommonService,
  private router: Router,
  private metaTagService: Meta) { }
  openmenu :boolean;
  menuList=[
    {name:"About Us"},
    {name:"Services"},
    {name:"Industries"},
    {name:"Technology"},
    {name: "Products"},
    {name:"Team"},
    {name:"Blog"},
    {name:"Contact us"}
  ]
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
  openMenu() {
    this.openmenu = !this.openmenu;
  }

gotoContent(value , platform){

if(value=="About Us"){
  this.commonService.selectedMenuItem=value;
  this.router.navigate(['']);
  if(platform == 'mobile'){
  this.openMenu();
  }
  this.window.scrollTo({
    top: 250,
    behavior: 'smooth',
  });
}
if(value=="Services"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 700,
    behavior: 'smooth',
  });
}
  
  
if(value=="Industries"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 1380,
    behavior: 'smooth',
  })
}
if(value=="Technology"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 2020,
    behavior: 'smooth',
  })
}
if(value=="Products"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 2680,
    behavior: 'smooth',
  })
}
if(value=="Team"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 2850,
    behavior: 'smooth',
  })
}
if(value=="Blog"){
  this.commonService.selectedMenuItem=value;
  this.commonService.blogAnimation =true;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 2990,
    behavior: 'smooth',
  })
 
}
if(value=="Contact us"){
  this.commonService.selectedMenuItem=value;
  if(platform == 'mobile'){
    this.openMenu();
    }
  this.window.scrollTo({
    top: 3250,
    behavior: 'smooth',
  })
 
}
}
}
