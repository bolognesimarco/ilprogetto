import { Injectable } from '@angular/core';
import { ShopItem } from '../model/shop-item';
import { ITEMS } from './mock-items';

@Injectable()
export class ItemService {
    getItems(): Array<ShopItem> {
        return ITEMS;
    }

    showcaseByMovie(movieId: number): Array<ShopItem> {
        let showcase: Array<ShopItem> = new Array<ShopItem>();
        ITEMS.forEach(function(eachItem){
            if( eachItem.movie === movieId && eachItem.showcase ) {
                showcase.push(eachItem);
            }
        })

        return showcase;
    }
}