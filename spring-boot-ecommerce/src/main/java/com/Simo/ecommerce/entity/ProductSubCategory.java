package com.Simo.ecommerce.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "product_sub_category")
@Getter
@Setter
public class ProductSubCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    @Column(name = "sub_category_name")
    private String subCategoryName;
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false,referencedColumnName = "id")
    private ProductCategory productCategories;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "subCategory")
    private Set<Product> product;
}
