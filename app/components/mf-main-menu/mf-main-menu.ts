import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menuItem'
import { MenuItemService } from './menuItemService'

@Component({
  selector: 'mf-main-menu',
  templateUrl: `app/components/mf-main-menu/mf-main-menu.html`,
  styleUrls: ['app/components/mf-main-menu/mf-main-menu.css'],
  providers: [MenuItemService]
})
export class MfMainMenu implements OnInit {

  constructor(private menuItemService: MenuItemService) {

  }

  ngOnInit(): void {
    this.getMenuItems();
  }

  menuItems: Array<MenuItem>
  getMenuItems(): void{
    this.menuItems = this.menuItemService.getMenuItems();
  }
} 