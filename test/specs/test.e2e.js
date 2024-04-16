import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import AddToCart from '../pageobjects/addToCart.js'
import YourCart from '../pageobjects/homePageFlash.js'
import CartLogo from '../pageobjects/cartFunc.js'
import CartFlash from '../pageobjects/cartFlash.js'
import LogOut from '../pageobjects/logoutFunc.js'



describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining
       (
            'Swag Labs')

    })
})

describe('Add backpack to cart', () => {
    it('have the backpack in my cart', async () => {
        await AddToCart.openT()

        
        await AddToCart.addBtn()
        await expect(YourCart.cartFlash).toBeExisting()
        await expect(YourCart.cartFlash).toHaveTextContaining
        ('1')
    })
})

describe('Go to checkout page', () => {
    it('checkout page ', async () => {
        await CartLogo.openThree()

        
        await CartLogo.buy()
        await expect(CartFlash.desFlash).toBeExisting()
        await expect(CartFlash.desFlash).toHaveTextContaining
        ('Description')
    })
})

describe('Logout of the page', () => {
    it('logged out', async () => {
        await CartLogo.openThree()

        
        await LogOut.logoutBtn()
        await expect(SecurePage.homeLogo).toBeExisting()
        await expect(SecurePage.homeLogo).toHaveTextContaining
        ('Swag Labs')
    })
})