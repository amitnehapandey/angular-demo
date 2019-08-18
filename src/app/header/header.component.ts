import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  dish!: Dish;
  promotion!: Promotion;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    public dialog: MatDialog ) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
    .then(dish => this.dish =dish);
    this.promotionservice.getFeaturedPromotion()
    .then(promotion =>this.promotion = promotion);
  }

  openLoginForm() {
    this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
  }

}
