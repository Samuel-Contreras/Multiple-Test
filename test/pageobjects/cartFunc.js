import { $ } from '@wdio/globals'
import CartPage from '../pageobjects/cartUrl.js'



class CartLogo extends CartPage {
    
    get cartIcon () {
        return $('.shopping_cart_link')
    }

    async buy () {
        await this.cartIcon.click()
    }

    openThree () {
        return super.openThree()
    }
}

export default new CartLogo();