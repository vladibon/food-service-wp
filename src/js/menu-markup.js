import menuItemsTemplate from '../templates/menu-items.hbs';
import menu from '../db/menu';

menuList.innerHTML = menuItemsTemplate(menu);
