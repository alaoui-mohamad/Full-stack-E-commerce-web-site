import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  productCategory: ProductCategory[];
  
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
    /*this.listProductCategory();*/
  }
  doSearch(value: string){
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }/*
  listProductCategory() {
    this.productService.getProductCategories().subscribe(
      data => {
        // console.log('Product category = ' + JSON.stringify(data));
        this.productCategory = data;
      }
    );
  }*/
}
