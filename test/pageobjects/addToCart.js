import { $ } from '@wdio/globals'
import Inventory from './inventory.js';


class AddToCart extends Inventory {

    get addBackPack () {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    async addBtn () {
        await this.addBackPack.click();
    }

    openT () {
        return super.openT();
    }
}

export default new AddToCart();