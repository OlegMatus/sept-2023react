const baseURL = 'https://jsonplaceholder.typicode.com';

const todos = '/todos';
const albums = '/albums';
const comments = '/comments';
const posts = '/posts';

const urls = {
    todos: todos,
    albums: albums,
    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`,
        // getPostByPostId: (id) => `${posts}/${id}/posts`
    },
    posts: {
        base: posts,
        byId: (id) => `${posts}/${id}`
    }
}

export {
    baseURL,
    urls
}