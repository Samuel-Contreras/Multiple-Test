import { browser } from '@wdio/globals'



export default class Inventory {

    openT (path) {
        return browser.url(`https://www.saucedemo.com/inventory.html`)
    }
}