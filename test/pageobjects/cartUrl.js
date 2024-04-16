import { browser } from '@wdio/globals'


export default class CartPage {
    openThree (path) {
        return browser.url(`https://www.saucedemo.com/cart.html`)
    }
}
