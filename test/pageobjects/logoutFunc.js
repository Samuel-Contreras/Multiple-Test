import { $ } from '@wdio/globals'
import Page from './page.js';


class LogOut extends Page{

    get burgerDrop () {
        return $('#react-burger-menu-btn')
    }

    get logoutLink () {
        return $('#logout_sidebar_link')
    }

    async logoutBtn () {
        await this.burgerDrop.click();
        await this.logoutLink.click();
    }

    open () {
        return super.open();
     }
}

export default new LogOut();