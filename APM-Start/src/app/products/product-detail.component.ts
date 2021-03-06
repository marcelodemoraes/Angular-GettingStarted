import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  imageWidth: number = 200;
  imageMargin: number = 2;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.product = product;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
