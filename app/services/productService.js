import {ApiService} from "./apiService";

const ProductService = {
    list: async (payload) => {
        ApiService.setHeader();
        let $params = new URLSearchParams(payload).toString();
        let res = await ApiService.get('/api/v1/sessions?' + $params);
        return res.data;
    },
    detail: async (id) => {
        ApiService.setHeader();
        let $params = new URLSearchParams(id).toString();
        let res = await ApiService.get('/api/v1/sessions?' + $params);
        return res.data;
    },

};
export default SessionService;

