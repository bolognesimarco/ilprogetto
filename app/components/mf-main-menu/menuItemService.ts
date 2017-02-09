import { Injectable } from '@angular/core';

import { MenuItem } from './menuItem';
import { MENU_ITEMS } from './menuItemsMock';

@Injectable()
export class MenuItemService {
  getMenuItems(): MenuItem[] {
    return MENU_ITEMS;
  }
}
