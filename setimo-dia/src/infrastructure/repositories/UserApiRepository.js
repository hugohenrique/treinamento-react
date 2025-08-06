import api from '../http/axios';

export default {
    getAll: async () => {
        const { data } = await api.get('/users');
        return data;
    }
}
