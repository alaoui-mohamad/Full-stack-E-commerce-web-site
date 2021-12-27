import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';
import { ProductSubCategory } from '../common/product-sub-category';

@Injectable({
  providedIn: 'root'
  
})
export class SubCategoryService {
  private baseUrl = "http://localhost:8080/api/productSubCategories"
  constructor(private httpClient: HttpClient) { }
  getSubCategoryList(theSubCategoryId:number){
    const searchUrl = `${this.baseUrl}/search/findByproductCategoriesId?id=${theSubCategoryId}`;
    return this.getSubCategory(searchUrl);
  }
  private getSubCategory(searchUrl: string): Observable<ProductSubCategory[]>{
    return this.httpClient.get<GetResponseProductSubCategory>(searchUrl).pipe(map(response =>response._embedded.productSubCategories));
  }

}
interface GetResponseProductSubCategory{
  _embedded:{
    productSubCategories: ProductSubCategory[];
  }
}
interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
  }
}