import { $ } from '@wdio/globals'
import Page from './page.js';

class SecurePage extends Page {
    
    get flashAlert () {
        return $('.app_logo');
    }

    get homeLogo () {
        return $('.login_logo')
    }
}


export default new SecurePage();
