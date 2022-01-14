import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'top';
durationInSeconds = 3;

constructor(private snackBar: MatSnackBar) { }

itemAddedWish() {
  this.snackBar.open('Item added to wishlist', 'Close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000
  })
}

itemRemovedWish() {
  this.snackBar.open('Item removed from wishlist', 'Close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000
  })
}

wishClear() {
  this.snackBar.open('Wishlist cleared!!!', 'Close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000
  })
}


itemAddedCart() {
  this.snackBar.open('Item added to cart', 'Close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000
  })
}

itemIncCart() {
  this.snackBar.open('One item added to Cart', 'Close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000
  })
}

itemDecCart() {
  this.snackBar.open('One item removed from Cart', 'Close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000
  })
}


productDeleted() {
  this.snackBar.open('Product removed from Cart', 'Close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000
  })
}

cartClear() {
  this.snackBar.open('Cart Cleared!!!', 'Close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000
  })
}

orderPlace() {
  this.snackBar.open('Order Placed Succussfully', 'Close', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: this.durationInSeconds * 1000
  })
}

}
