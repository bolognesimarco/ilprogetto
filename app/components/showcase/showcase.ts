import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShopItem } from '../../model/shop-item';

@Component({
  selector: 'showcase',
  templateUrl: `app/components/showcase/showcase.html`,
  styleUrls: ['app/components/showcase/showcase.css', 'app/styles/app.colors.css']
})
export class Showcase  {

    public itemX: ShopItem;
    public partsX: number;
    
    @Input()
    public get parts() {
      return this.partsX;
    }

    @Input()
    public get item() {
      return this.itemX;
    }

    @Output() itemChange = new EventEmitter();

    public set item(val) {
      this.itemX = val;
      this.itemChange.emit(this.itemX);
    }

    @Output() partsChange = new EventEmitter();

    public set parts(val) {
      this.partsX = val;
      this.partsChange.emit(this.partsX);
    }


    public getCol() {
      let colWidth = 12/this.partsX;
      return "col-sm-"+colWidth;
    }
}