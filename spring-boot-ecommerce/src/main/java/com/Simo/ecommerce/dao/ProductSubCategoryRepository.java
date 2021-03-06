package com.Simo.ecommerce.dao;

import com.Simo.ecommerce.entity.ProductSubCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin("http://localhost:4200")
public interface ProductSubCategoryRepository extends JpaRepository<ProductSubCategory, Long> {

     Page<ProductSubCategory> findByproductCategoriesId(@RequestParam("id") Long id, Pageable pageable);


}
