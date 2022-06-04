import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryserviceService } from 'src/app/Services/categoryservice.service';
import { SubCatService } from 'src/app/Services/sub-cat.service';

@Component({
  selector: 'app-sub-categ',
  templateUrl: './sub-categ.component.html',
  styleUrls: ['./sub-categ.component.css']
})
export class SubCategComponent implements OnInit {

  @ViewChild('CloseModal', {static: true}) CloseModal!: ElementRef;
  constructor(private categoryService:CategoryserviceService,private subcategoryService:SubCatService,private toastr: ToastrService) { }
  name: string = '';
  nameedit:string='';
   ngOnInit(): void {
    this.getallcategories()
    this.getallsubcat()
  }
  selectedCat:any;
  Function(id:any){
    this.selectedCat=id
    console.log(id)
    }
   categories:any[]=[]
   getallcategories(){
      this.categoryService.getallCategories().subscribe(res=>{
        this.categories=res
      })
   } 
  subcategories:any[]=[]
  getallsubcat(){
    this.subcategoryService.getAllsubcAtegory().subscribe(res=>{
      this.subcategories=res
      console.log(this.subcategories)
    })
  }
  postCategories(){
    const usercord:any={
      nomsubCategory :this.name,
      Category:this.selectedCat
    }
 this.subcategoryService.postSubcategory(usercord,this.selectedCat).subscribe(res=>{
   console.log(res)
  this.CloseModal.nativeElement.click() 
   window.location.reload();
})
  }
  saveid(item:any){
    
  }
  postedit(){

  }
}