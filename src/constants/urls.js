const baseURL = 'https://jsonplaceholder.typicode.com';
const carBaseUrl = 'http://owu.linkpc.net/carsAPI/v1';

const users = '/users';
const comments = '/comments';
const cars = '/cars';

const urls = {
    users: {
        base: users,
        byId: (id) => `${users}/${id}`
    },
    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`
    },
    cars: {
        base: cars,
        byId: (id) => `${cars}/${id}`
    }
}

export {
    baseURL,
    carBaseUrl,
    urls
}