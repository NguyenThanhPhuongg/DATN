
import Helpers from '@/common/helpers/helper';
//Helpers.setCookie('token', 'đâsđđsa', 1);
const TokenService = {
    getToken() {
        return Helpers.getCookie('token');
    },

    saveToken(token) {
        Helpers.setCookie('token', token, 1);
    },

    removeToken() {
        Helpers.eraseCookie('token');
    }
};

export { TokenService };


