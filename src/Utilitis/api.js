import axios from "axios";

const url = 'https://fakestoreapi.com';

const getAll = async () => {
   return await axios.get(`${url}/products`).then(
        rest => rest.data
    );
}

const getById = async (id) => {
    return await axios.get(`${url}/products/${id}`).then(
        rest => rest.data
    );

}

export {getAll, getById}
