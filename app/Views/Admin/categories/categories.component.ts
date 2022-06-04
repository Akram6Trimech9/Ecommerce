import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CategoryserviceService } from 'src/app/Services/categoryservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  @ViewChild('CloseModal', {static: true}) CloseModal!: ElementRef;
  constructor(private categoryService:CategoryserviceService,private toastr: ToastrService) { }
  name: string = '';
  nameedit:string='';
  ngOnInit(): void {
    this.getAllcategories()
  }
  categories:any[]=[]
  getAllcategories(){
    this.categoryService.getallCategories().subscribe(res=>{
      this.categories=res
    })
  }
  postCategories(){
    const usercord:any={
       nomCategory :this.name
    }
 this.categoryService.postCategory(usercord).subscribe(res=>{
  this.CloseModal.nativeElement.click() 
  window.location.reload();
})
  }
  saveid(item:any){
    
  }
  postedit(){

  }
}
