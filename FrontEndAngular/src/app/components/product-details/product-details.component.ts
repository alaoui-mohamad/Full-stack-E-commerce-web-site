import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  products: Product[];
  categoryid: ProductCategory;
  theCategoryId: string;
  constructor(private productService: ProductService,
    private route: ActivatedRoute) {}

  ngOnInit(): void { 
  this.route.paramMap.subscribe(() => {
    this.getProductDetails();
  })
  }



getProductDetails() {
  const theProductId: number = +this.route.snapshot.paramMap.get('id')
  
  console.log(theProductId);
  this.productService.getProduct(theProductId).subscribe(
    data =>{
    this.product = data;
  })
  this.productService.getProductList(1).subscribe(
    data => {
      this.products = data;
    }
  )
}

}
 