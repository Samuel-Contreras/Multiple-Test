import { $ } from '@wdio/globals'
import Inventory from './inventory.js';



class YourCart extends Inventory {

    get homeLogo () {
        return $('.login_logo')
    }

    get cartFlash () {
        return $('.shopping_cart_badge')
    }
}

export default new YourCart();