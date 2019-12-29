import axios from 'axios';

export const getData = () => {
    return axios.get(
        'https://jsonstorage.net/api/items/eddddf8e-fa23-419a-9563-072359a70a83',
    );
};
