const BASE_URL = 'https://thinkful-list-api.herokuapp.com/bruh';

const listApiFetch = function (...args) {
    // setup promise chain outside of scope
    let error;
    return fetch(...args)
        .then(res => {
            if (!res.ok) {
                error = {
                    code: res.status
                };
                if (!res.headers.get('content-type').includes('json')) {
                    error.message = res.statusText;
                    return Promise.reject(error);
                }
            }
            return res.json();
        })
        .then(data => {
            if (error) {
                error.message = data.message;
                return Promise.reject(error);
            }

            // otherwise, return the json as normal resolved Promise
            return data;
        });
};

const getBookmarks = function () {
    return listApiFetch(`${BASE_URL}/bookmarks`);
}

const addBookmarks = function (obj) {
    const newBookmark = JSON.stringify(obj);
    return listApiFetch(`${BASE_URL}/bookmarks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newBookmark
    });
}

const editBookmarks = function (id, updateData) {
    const newData = JSON.stringify(updateData);
    return listApiFetch(`${BASE_URL}/bookmarks/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: newData
    });
}

const deleteBookmarks = function (id) {
    return listApiFetch(`${BASE_URL}/bookmarks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: ''
    });
}

export default {
    listApiFetch,
    getBookmarks,
    addBookmarks,
    editBookmarks,
    deleteBookmarks
}