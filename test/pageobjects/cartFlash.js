import { $ } from '@wdio/globals'
import CartPage from '../pageobjects/cartUrl.js'


class CartFlash extends CartPage {

    get desFlash () {
        return $('.cart_desc_label')
    }
}

export default new CartFlash();