import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';
import * as $ from 'jquery';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';
import { ProductSubCategory } from 'src/app/common/product-sub-category';
@Component({
  selector: 'app-product-category-menu',
  templateUrl: './product-category-menu.component.html',
  styleUrls: ['./product-category-menu.component.css']
})
export class ProductCategoryMenuComponent implements OnInit {
productCategory: ProductCategory[];
products:Product[];
productSubCategory:ProductSubCategory[];
currentSubCategoryId: number = 11;
currentCategoryName:string = "Books";

categoryId:number;
categoryName:String;
slides = [
  {img: "http://placehold.it/350x150/000000"},
  {img: "http://placehold.it/350x150/111111"},
  {img: "http://placehold.it/350x150/333333"},
  {img: "http://placehold.it/350x150/666666"}
];
slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};

addSlide() {
  this.slides.push({img: "http://placehold.it/350x150/777777"})
}

removeSlide() {
  this.slides.length = this.slides.length - 1;
}

slickInit(e) {
  console.log('slick initialized');
}

breakpoint(e) {
  console.log('breakpoint');
}

afterChange(e) {
  console.log('afterChange');
}

beforeChange(e) {
  console.log('beforeChange');
}
  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    /*this.listProductCategory();*/
    this.listProductSubCategory();
    
  }
  /*listProductCategory() {
    this.productService.getProductCategories().subscribe(
      data => {
        // console.log('Product category = ' + JSON.stringify(data));
        this.productCategory = data;
      }
    );
  }*/
  listProductSubCategory(){
    this.productService.getProductSubCategories().subscribe(
      data =>{
        this.productSubCategory = data;
      }
    );
  }
 handlProducts(){
  const categoryId:number = +this.route.snapshot.paramMap.has("id");
  if(categoryId){
    this.currentSubCategoryId = +this.route.snapshot.paramMap.get("id");
    this.currentCategoryName = this.route.snapshot.paramMap.get("category")
  }else{
    this.currentSubCategoryId = 11;
    this.currentCategoryName = "Books"
  }
 
  console.log(this.currentSubCategoryId,this.currentCategoryName);
 }
 
 listProducts(){
  this.handlProducts();

  this.productService.getProductList(this.currentSubCategoryId).subscribe(
    data =>{
      this.products = data
    }

  );
 }
 
}
