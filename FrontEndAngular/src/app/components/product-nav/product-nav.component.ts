import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductSubCategory } from 'src/app/common/product-sub-category';
import { ProductService } from 'src/app/services/product.service';
import { SubCategoryService } from 'src/app/services/sub-category.service';

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.css']
})
export class ProductNavComponent implements OnInit {

  productCategories: ProductCategory[];
  productSubCategory: ProductSubCategory[];
  constructor(private productService: ProductService,
    private subCategoryService:SubCategoryService) { }

  ngOnInit() {
    /*this.listProductCategories();*/
    this.listProductSubCategory();
  }

 /* listProductCategories() {

    this.productService.getProductCategories().subscribe(
      data => {
        console.log('Product Categories=' + JSON.stringify(data));
        this.productCategories = data;
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
}
