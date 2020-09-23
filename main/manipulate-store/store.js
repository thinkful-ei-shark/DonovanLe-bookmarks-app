'use strict';
import $ from 'jquery';
const store = {
    bookmarks: [{
            id: 'x56w',
            title: 'Title 1',
            rating: 3,
            url: 'http://www.title1.com',
            description: 'lorem ipsum dolor sit',
            expanded: false
        },
        {
            id: '6ffw',
            title: 'Title 2',
            rating: 5,
            url: 'http://www.title2.com',
            description: 'dolorum tempore deserunt',
            expanded: false
        }
    ],
    adding: false,
    error: null,
    filter: 0
};


const setError = function (error) {
    store.error = error;
}

const findById = function (id) {
    return store.bookmarks.find(bookmark => bookmark.id === id);
}

const addBookmark = function (bookmark) {
    store.bookmarks.push(bookmark);
}

const findAndUpdate = function (id, newData) {
    const bookmark = store.bookmarks.findById(id);
    Object.assign(bookmark, newData);
}

const findAndDelete = function (id) {
    store.bookmarks = store.bookmarks.filter(bookmark => bookmark.id !== id);
}

export default {
    store,
    setError,
    findById,
    addBookmark,
    findAndUpdate,
    findAndDelete
}