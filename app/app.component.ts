import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShopItem } from './model/shop-item';

@Component({
  selector: 'my-app',
  templateUrl: `app/views/app.html`,
  styleUrls: ['app/styles/app.css', 'app/styles/app.colors.css']
})
export class AppComponent {

  public firstRowItems: Array<ShopItem> = [
    new ShopItem(1, "Spada Laser", ["app/images/items/laser.jpg"], "Spada laser Star Wars: Il Risveglio della Forza, Rey", 35.99),
    new ShopItem(2, "Caccia U-Wing", ["app/images/items/Astronave.png"], "Caccia U-Wing dei ribelli, Rogue One: A Star Wars Story", 28.99)];

  public secondRowItems: Array<ShopItem> = [
    new ShopItem(3, "Maschera", ["app/images/items/Casco.png"], "Maschera soldato delle Truppe d'assalto del Primo Ordine", 19.99),
    new ShopItem(4, "Felpa", ["app/images/items/Felpa.png"], "Felpa bimbo con cappuccio Death Trooper, Rogue One", 30.99)];
  
}