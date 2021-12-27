import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { ProductCategory } from 'src/app/common/product-category';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  
  products: Product[] = [];
  currentSubCategoryId: number = 11;
  previousSubCategoryId: number = 11;
  searchMode: boolean = false;
  hasSubCategoryId: boolean = false;

  // new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;
  productCategory: ProductCategory[];
  previousKeyword: string = null;
  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    this.listProductCategory();
  }

  listProducts() {

    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    this.hasSubCategoryId = this.route.snapshot.paramMap.has('id');
    if (this.searchMode) {
      this.handleSearchProducts();
    }else if(this.hasSubCategoryId){
      this.handleListProducts();
    }
    else {
      this.productService.getListProduct().subscribe(
        data =>{
          this.products = data;
        }
      );
    } 
      
    
    
  }

  handleSearchProducts() {

 
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    // if we have a different keyword than previous
    // then set thePageNumber to 1

    if (this.previousKeyword != theKeyword) {
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    // now search for the products using keyword
    this.productService.searchProductsPaginate(this.thePageNumber - 1,
                                               this.thePageSize,
                                               theKeyword).subscribe(this.processResult());
                                         
  }


  handleListProducts() {

    // check if "id" parameter is available
    

 
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentSubCategoryId = +this.route.snapshot.paramMap.get('id');
    
   

    //
    // Check if we have a different category than previous
    // Note: Angular will reuse a component if it is currently being viewed
    //

    // if we have a different category id than previous
    // then set thePageNumber back to 1
    if (this.previousSubCategoryId != this.currentSubCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousSubCategoryId = this.currentSubCategoryId;

    console.log(`currentCategoryId=${this.currentSubCategoryId}, thePageNumber=${this.thePageNumber}`);

    // now get the products for the given category id
    this.productService.getProductListPaginate(this.thePageNumber - 1,
                                               this.thePageSize,
                                               this.currentSubCategoryId)
                                               .subscribe(this.processResult());
  }
  listProductCategory() {
    this.productService.getProductCategories().subscribe(
      data => {
        // console.log('Product category = ' + JSON.stringify(data));
        this.productCategory = data;
      }
    );
  }
 
  processResult() {
    return data => {
      this.products = data._embedded.products;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  updatePageSize(pageSize: number) {
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }
  addToCard(theProduct: Product){
    console.log(`add to cart ${theProduct.name} ${theProduct.unitPrice} `);
    const theCartItem = new CartItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }
}
